'use client'

import { ComponentProps } from 'react'
import { toast } from 'sonner'
import { MovieDetails, TvSerieDetails } from '@plotwist/tmdb'

import { APP_QUERY_CLIENT } from '@/context/app/app'
import { useAuth } from '@/context/auth'

import { cn } from '@/lib/utils'

import { Reply } from '@/types/supabase/reviews'
import { useLanguage } from '@/context/language'
import { useQuery } from '@tanstack/react-query'

import { MediaType } from '@/types/supabase/media-type'

import { useLike } from '@/hooks/use-like/use-like'

import { getLikeByUserService } from '@/services/api/likes/get-like-by-user'

type TmdbItem = TvSerieDetails | MovieDetails

type ReviewItemActionsProps = {
  reply: Reply
  tmdbItem: TmdbItem
  mediaType: MediaType
}

type ReplyActionProps = {
  disabled?: boolean
  active?: boolean
} & ComponentProps<'div'>

const ReplyAction = ({ disabled, active, ...props }: ReplyActionProps) => {
  return (
    <span
      className={cn(
        'cursor-pointer text-xs text-muted-foreground underline-offset-1 hover:underline',
        disabled && 'pointer-events-none animate-pulse opacity-50',
        active && 'font-bold text-foreground',
      )}
      {...props}
    >
      {props.children}
    </span>
  )
}

export const ReviewReplyActions = ({
  reply: {
    id,
    user: { id: userId },
  },
  mediaType,
  tmdbItem,
}: ReviewItemActionsProps) => {
  const { user } = useAuth()
  const { handleLike, handleRemoveLike } = useLike()
  const { dictionary } = useLanguage()

  const { data: likes } = useQuery({
    queryKey: ['likes', id],
    queryFn: async () =>
      getLikeByUserService({ userId: user?.id, entityType: 'REPLY', id }),
  })

  if (!user) return <></>

  const userLike = likes?.data?.find((like) => like.user_id === user.id)
  const isUserLiked = Boolean(userLike)

  const invalidateQuery = () => {
    const queries = [[tmdbItem.id, mediaType], [id]]

    queries.map((queryKey) =>
      APP_QUERY_CLIENT.invalidateQueries({
        queryKey,
      }),
    )
  }

  return (
    <div>
      <div className="flex items-center gap-2">
        <ReplyAction
          active={isUserLiked}
          disabled={
            isUserLiked ? handleRemoveLike.isPending : handleLike.isPending
          }
          onClick={() => {
            if (isUserLiked) {
              handleRemoveLike.mutateAsync(
                { replyId: id, userId, entityType: 'REPLY' },
                {
                  onSuccess: () => {
                    invalidateQuery()
                  },
                },
              )

              return
            }

            handleLike.mutateAsync(
              {
                replyId: id,
                userId: user.id,
                entityType: 'REPLY',
              },
              {
                onSuccess: () => {
                  invalidateQuery()
                },
                onError: (error) => {
                  toast.error(error.message)
                },
              },
            )
          }}
        >
          {dictionary.review_reply_actions.like}
        </ReplyAction>
      </div>
    </div>
  )
}
