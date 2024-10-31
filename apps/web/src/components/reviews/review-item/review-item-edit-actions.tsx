import { useState } from 'react'
import { toast } from 'sonner'
import { DialogProps } from '@radix-ui/react-dialog'
import { MoreVertical, Pencil, Trash } from 'lucide-react'

import { Button } from '@plotwist/ui/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@plotwist/ui/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@plotwist/ui/components/ui/dropdown-menu'

import { useReviews } from '@/hooks/use-reviews'
import { useLanguage } from '@/context/language'
import { Review } from '@/types/supabase/reviews'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@plotwist/ui/components/ui/form'
import { useForm } from 'react-hook-form'
import { useAuth } from '@/context/auth'
import { ReviewStars } from '../review-stars'
import { Textarea } from '@plotwist/ui/components/ui/textarea'
import { ReviewFormValues, reviewFormSchema } from '../review-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Checkbox } from '@plotwist/ui/components/ui/checkbox'
import { Label } from '@plotwist/ui/components/ui/label'
import { useMediaQuery } from '@/hooks/use-media-query'

type ReviewItemEditActionsProps = { review: Review }

export const ReviewItemEditActions = ({
  review,
}: ReviewItemEditActionsProps) => {
  const [openEditDialog, setOpenEditDialog] = useState(false)
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const { dictionary } = useLanguage()

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="h-6 w-6">
            <MoreVertical size={14} />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-4">
          <DropdownMenuItem onClick={() => setOpenEditDialog(true)}>
            <Pencil size={14} className="mr-2" />
            {dictionary.edit}
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setOpenDeleteDialog(true)}>
            <Trash size={14} className="mr-2" />
            {dictionary.delete}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <EditDialog
        review={review}
        open={openEditDialog}
        onOpenChange={setOpenEditDialog}
      />

      <DeleteDialog
        review={review}
        open={openDeleteDialog}
        onOpenChange={setOpenDeleteDialog}
      />
    </>
  )
}

type EditActionDialogProps = Pick<ReviewItemEditActionsProps, 'review'> &
  DialogProps

const DeleteDialog = ({ review, ...dialogProps }: EditActionDialogProps) => {
  const { handleDeleteReview, invalidateQueries } = useReviews()
  const { dictionary } = useLanguage()

  function handleDeleteReviewClick() {
    handleDeleteReview.mutate(review.id, {
      onSettled: async () => {
        await invalidateQueries(review.id)
        toast.success(dictionary.review_deleted_successfully)

        if (dialogProps.onOpenChange) {
          dialogProps.onOpenChange(false)
        }
      },

      onError: (error) => {
        toast.error(error.message)
      },
    })
  }

  return (
    <Dialog {...dialogProps}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="gap-1">
          <DialogTitle>
            {dictionary.review_item_actions.dialog_title}
          </DialogTitle>

          <DialogDescription>
            {dictionary.review_item_actions.dialog_description}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:flex-end gap-1">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              {dictionary.close}
            </Button>
          </DialogClose>

          <Button
            variant="destructive"
            onClick={() => handleDeleteReviewClick()}
            loading={handleDeleteReview.isPending}
          >
            {dictionary.delete}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const EditDialog = ({ review, ...dialogProps }: EditActionDialogProps) => {
  const { dictionary } = useLanguage()
  const { user } = useAuth()
  const { handleEditReview, invalidateQueries } = useReviews()

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewFormSchema(dictionary)),
    defaultValues: {
      review: review.review,
      rating: review.rating,
      hasSpoilers: review.has_spoilers,
    },
  })

  const onSubmit = (values: ReviewFormValues) => {
    handleEditReview.mutate(
      {
        id: review.id,
        has_spoilers: values.hasSpoilers,
        ...values,
      },
      {
        onSettled: async () => {
          await invalidateQueries(review.id)

          if (dialogProps.onOpenChange) {
            dialogProps.onOpenChange(false)
          }
        },
      },
    )
  }

  const username = user?.username

  return (
    <Dialog {...dialogProps}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="gap-1">
          <DialogTitle>{dictionary.edit_review}</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-start space-x-4"
          >
            <div className="w-full space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">
                    {username}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-muted" />

                  <div className="flex items-center justify-between gap-2 xs:gap-[168.5px] sm:gap-[108.5px]">
                    <FormField
                      control={form.control}
                      name="rating"
                      render={({ field }) => (
                        <ReviewStars
                          onChange={field.onChange}
                          rating={field.value}
                        />
                      )}
                    />

                    {useMediaQuery('(min-width: 520px)') ? null : (
                      <span className="h-1 w-1 rounded-full bg-muted" />
                    )}

                    <FormField
                      control={form.control}
                      name="hasSpoilers"
                      render={({ field }) => (
                        <div className="flex items-center justify-center gap-2">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            id="has_spoilers"
                            className="border-muted-foreground text-primary-foreground/80"
                          />
                          <Label
                            onClick={field.onChange}
                            htmlFor="has_spoilers"
                            className="text-muted-foreground hover:cursor-pointer"
                          >
                            Contain spoilers
                          </Label>
                        </div>
                      )}
                    />
                  </div>
                </div>
              </div>

              <FormField
                control={form.control}
                name="review"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea {...field} rows={4} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>

        <DialogFooter className="sm:flex-end gap-0">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              {dictionary.close}
            </Button>
          </DialogClose>

          <Button
            onClick={form.handleSubmit(onSubmit)}
            loading={handleEditReview.isPending}
          >
            {dictionary.edit}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
