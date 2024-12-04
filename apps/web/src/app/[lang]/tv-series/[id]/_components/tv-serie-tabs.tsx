import { getDictionary } from '@/utils/dictionaries'
import type { TvSerieDetails } from '@plotwist_app/tmdb'

import { Credits } from '@/components/credits'
import { Images } from '@/components/images'
import { Reviews } from '@/components/reviews'
import { Videos } from '@/components/videos'
import { WhereToWatch } from '@/components/where-to-watch'
import type { Language } from '@/types/languages'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@plotwist/ui/components/ui/tabs'
import { TvSerieRelated } from './tv-serie-related'
import { TvSerieSeasons } from './tv-serie-seasons'

type TvSerieTabsProps = {
  tvSerie: TvSerieDetails
  language: Language
}

export async function TvSerieTabs({ tvSerie, language }: TvSerieTabsProps) {
  const dictionary = await getDictionary(language)
  const { id, seasons } = tvSerie

  return (
    <Tabs defaultValue="reviews" className="w-full p-4 lg:p-0">
      <div className="md:m-none -mx-4 max-w-[100vw] overflow-x-scroll px-4 scrollbar-hide">
        <TabsList>
          <TabsTrigger value="reviews">{dictionary.tabs.reviews}</TabsTrigger>
          <TabsTrigger value="where_to_watch">
            {dictionary.where_to_watch}
          </TabsTrigger>
          <TabsTrigger value="seasons">{dictionary.tabs.seasons}</TabsTrigger>
          <TabsTrigger value="credits">{dictionary.tabs.credits}</TabsTrigger>
          <TabsTrigger value="recommendations">
            {dictionary.tabs.recommendations}
          </TabsTrigger>
          <TabsTrigger value="similar">{dictionary.tabs.similar}</TabsTrigger>
          <TabsTrigger value="images">{dictionary.tabs.images}</TabsTrigger>
          <TabsTrigger value="videos">{dictionary.tabs.videos}</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="reviews" className="mt-4">
        <Reviews tmdbId={id} mediaType="TV_SHOW" />
      </TabsContent>

      <TabsContent value="where_to_watch">
        <WhereToWatch id={id} variant="tv" language={language} />
      </TabsContent>

      <TabsContent value="seasons" className="mt-4">
        <TvSerieSeasons seasons={seasons} id={id} language={language} />
      </TabsContent>

      <TabsContent value="credits" className="mt-4">
        <Credits variant="tv" id={id} language={language} />
      </TabsContent>

      <TabsContent value="recommendations" className="mt-4">
        <TvSerieRelated id={id} variant="recommendations" language={language} />
      </TabsContent>

      <TabsContent value="similar" className="mt-4">
        <TvSerieRelated id={id} variant="similar" language={language} />
      </TabsContent>

      <TabsContent value="images" className="mt-4">
        <Images tmdbId={id} variant="tv" />
      </TabsContent>

      <TabsContent value="videos" className="mt-4">
        <Videos tmdbId={id} variant="tv" />
      </TabsContent>
    </Tabs>
  )
}
