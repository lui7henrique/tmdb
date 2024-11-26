'use client'

import type { GetListById200List } from '@/api/endpoints.schemas'
import { useDeleteLikeId, usePostLike } from '@/api/like'
import { Likes } from '@/components/likes'
import { ProBadge } from '@/components/pro-badge'
import { useLanguage } from '@/context/language'
import { useSession } from '@/context/session'
import { cn } from '@/lib/utils'
import { BarChart, Copy, Heart, List } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { ComponentProps } from 'react'
import NumberFlow from '@number-flow/react'

const Action = {
  Root: ({ className, ...props }: ComponentProps<'div'>) => (
    <div
      className={cn(
        'px-4 py-2 flex justify-between items-center hover:bg-muted w-full [&:not(:first-child)]:border-t',
        className
      )}
      {...props}
    />
  ),
  Button: ({ className, ...props }: ComponentProps<'button'>) => (
    <button
      className={cn(
        'flex items-center gap-2 text-sm disabled:opacity-50 disabled:pointer-events-none',
        className
      )}
      {...props}
    />
  ),
  Complement: ({ className, ...props }: ComponentProps<'span'>) => (
    <span
      className={cn('text-muted-foreground text-sm px-4', className)}
      {...props}
    />
  ),
}

type ListActionsProps = {
  list: GetListById200List
}

export function ListActions({ list }: ListActionsProps) {
  const { refresh, push } = useRouter()
  const { user } = useSession()
  const { language, dictionary } = useLanguage()

  const handleCreateLike = usePostLike()
  const handleDeleteLike = useDeleteLikeId()

  const handleLike = async () => {
    if (list.userLike) {
      return await handleDeleteLike.mutateAsync(
        { id: list.userLike.id },
        {
          onSettled: () => {
            refresh()
          },
        }
      )
    }

    await handleCreateLike.mutateAsync(
      {
        data: { entityId: list.id, entityType: 'LIST' },
      },
      {
        onSettled: () => {
          refresh()
        },
      }
    )
  }

  return (
    <div className="border rounded-sm sticky top-4">
      <Action.Root className="hover:bg-inherit cursor-default p-0">
        <Action.Button
          onClick={() => {
            if (!user) {
              return push(`/${language}/sign-in`)
            }

            handleLike()
          }}
          className={cn(
            'cursor-pointer flex-1 px-4 py-2 hover:bg-muted',
            list.likeCount > 0 && 'border-r'
          )}
          disabled={handleCreateLike.isPending || handleDeleteLike.isPending}
        >
          <Heart className={cn(list.userLike && 'fill-foreground')} size={14} />

          {list.userLike ? dictionary.liked : dictionary.like}
        </Action.Button>

        {list.likeCount > 0 && (
          <Likes entityId={list.id} likeCount={list.likeCount}>
            <Action.Complement className="hover:underline tabular-nums cursor-pointer">
              <NumberFlow value={list.likeCount} /> {dictionary.likes}
            </Action.Complement>
          </Likes>
        )}
      </Action.Root>

      <Action.Root>
        <Action.Button disabled>
          <Copy size={14} />
          {dictionary.clone}
        </Action.Button>
      </Action.Root>

      <Action.Root>
        <Action.Button disabled>
          <List size={14} />
          {dictionary.add_to_list}
        </Action.Button>
      </Action.Root>

      <Action.Root>
        <Action.Button disabled>
          <BarChart size={14} />
          {dictionary.stats}
          <ProBadge />
        </Action.Button>
      </Action.Root>
    </div>
  )
}
