import { getDictionary } from '@/utils/dictionaries'
import { PageProps } from '@/types/languages'
import { TvShowsList } from '@/components/tv-shows-list'

const AiringTodayTvShowsPage = async ({ params: { lang } }: PageProps) => {
  const {
    tv_show_pages: {
      airing_today: { title, description },
    },
  } = await getDictionary(lang)

  return (
    <div className="mx-auto max-w-5xl space-y-4 px-4 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>

      <TvShowsList variant="airing_today" />
    </div>
  )
}

export default AiringTodayTvShowsPage
