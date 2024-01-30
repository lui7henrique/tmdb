import { tmdb } from '@/services/tmdb'
import { Video } from '@/services/tmdb/requests'

export type VideosProps = {
  tmdbId: number
  variant: 'tv' | 'movie'
}

type VideoProps = {
  video: Video
}

const Video = ({ video }: VideoProps) => {
  const videoUrlBySite: Record<string, string> = {
    YouTube: `https://www.youtube.com/embed/${video.key}?rel=0&modestbranding=1&autohide=1&showinfo=0`,
    Vimeo: `https://player.vimeo.com/video/${video.key}`,
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-md border bg-muted">
      <iframe
        src={videoUrlBySite[video.site]}
        className="h-full w-full"
        allowFullScreen
      />
    </div>
  )
}

export const Videos = async ({ tmdbId, variant }: VideosProps) => {
  const { results } = await tmdb.videos(variant, tmdbId)

  return (
    <div className="grid grid-cols-2 gap-4" data-testid="videos">
      {results.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </div>
  )
}
