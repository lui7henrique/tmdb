import { supabase } from '@/services/supabase'
import { useQuery } from '@tanstack/react-query'

export function ReviewReplyLikes({ replyId }: { replyId: string }) {
  const likesQuery = useQuery({
    queryKey: [replyId],
    queryFn: async () =>
      supabase
        .from('likes')
        .select('*', { count: 'exact' })
        .eq('entity_type', 'REPLY')
        .eq('review_reply_id', replyId),
  })

  if (!likesQuery.data) {
    return (
      <div className="absolute -bottom-2 right-2 h-6 w-11 animate-pulse rounded-full border bg-muted" />
    )
  }

  if (likesQuery.data.count === 0) return null

  return (
    <div
      className={
        'absolute -bottom-2 right-2 rounded-full border bg-muted px-3 py-1 text-xs'
      }
    >
      ❤ {likesQuery.data.count}
    </div>
  )
}
