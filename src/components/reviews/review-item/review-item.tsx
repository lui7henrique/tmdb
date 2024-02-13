'use client'

import { Review } from '@/types/supabase/reviews'
import { ReviewItemActions } from '.'
import { ReviewStars } from '../review-stars'
import { Replies } from '@/components/reviews/review-reply/review-reply'
import { useState } from 'react'
import { ReviewReplyForm } from '@/components/reviews/review-reply-form/review-reply-form'

type ReviewItemProps = { review: Review }

export const ReviewItem = ({ review }: ReviewItemProps) => {
  const {
    user_info: {
      raw_user_meta_data: { username },
    },
    review: content,
    rating,
    review_replies: replies,
  } = review

  const [openReplyForm, setOpenReplyForm] = useState<boolean>(false)

  const usernameInitial = username[0].toUpperCase()

  return (
    <div className="flex items-start space-x-4">
      <div className="flex aspect-square h-10 w-10 items-center justify-center rounded-full border bg-muted">
        {usernameInitial}
      </div>

      <div className="flex w-full flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">{username}</span>
          <span className="h-1 w-1 rounded-full bg-muted" />
          <ReviewStars rating={rating} />
        </div>

        <div className="relative space-y-1 rounded-md border p-4 shadow">
          <p className="text-sm">{content}</p>

          {review.review_likes?.length && (
            <div className="absolute -bottom-2 right-2 rounded-full border bg-muted px-3 py-1 text-xs">
              ❤ {review.review_likes.length}
            </div>
          )}
        </div>

        <ReviewItemActions
          review={review}
          openReplyForm={openReplyForm}
          setOpenReplyForm={setOpenReplyForm}
        />

        <Replies
          replies={replies}
          usernameInitial={usernameInitial}
          username={username}
        />

        {openReplyForm && (
          <ReviewReplyForm
            reviewId={review.id}
            onOpenReplyForm={setOpenReplyForm}
          />
        )}
      </div>
    </div>
  )
}
