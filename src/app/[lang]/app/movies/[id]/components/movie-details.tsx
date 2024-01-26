import { format } from 'date-fns'

import { tmdbImage } from '@/utils/tmdb/image'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Badge } from '@/components/ui/badge'

import { Reviews } from '@/components/reviews'
import { Videos } from '@/components/videos'
import { Images } from '@/components/images'
import { Banner } from '@/components/banner'
import { Poster } from '@/components/poster'

import { WatchProviders } from '@/components/watch-providers'
import { ListsDropdown } from '@/components/lists'
import { Credits } from '@/components/credits'

import { MovieRelated } from './movie-related'
import { MovieCollection } from './movie-collection'

import { getDictionary } from '@/utils/dictionaries'
import { locale } from '@/utils/date/locale'
import { tmdb } from '@/services/tmdb2'

import { Language } from '@/types/languages'

type MovieDetailsProps = {
  id: number
  language: Language
}

export const MovieDetails = async ({ id, language }: MovieDetailsProps) => {
  const movie = await tmdb.movies.details(id, language)
  const dictionary = await getDictionary(language)

  return (
    <div>
      <Banner url={tmdbImage(movie.backdrop_path)} />

      <div className="mx-auto my-8 max-w-4xl space-y-12 p-4">
        <main className="flex gap-4">
          <aside className="-mt-32 w-1/3 space-y-2">
            <Poster
              url={tmdbImage(movie.poster_path ?? '')}
              alt={movie.title}
            />
          </aside>

          <article className="flex w-2/3 flex-col gap-2">
            <span className="text-xs text-muted-foreground">
              {format(new Date(movie.release_date), 'PPP', {
                locale: locale[language],
              })}
            </span>

            <h1 className="text-4xl font-bold">{movie.title}</h1>

            <div className="flex items-center gap-2">
              <div className="flex items-center space-x-1">
                {movie.genres.map((genre) => {
                  return (
                    <Badge key={genre.id} variant="outline">
                      {genre.name}
                    </Badge>
                  )
                })}
              </div>

              <Separator orientation="vertical" className="h-6" />

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge>{movie.vote_average.toFixed(1)}</Badge>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>{movie.vote_count} votes</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <p className="text-sm text-muted-foreground">{movie.overview}</p>

            <div className="space-x-1">
              <WatchProviders id={id} variant="movie" language={language} />
              <ListsDropdown item={movie} />
            </div>
          </article>
        </main>

        {movie.belongs_to_collection && (
          <MovieCollection
            collectionId={movie.belongs_to_collection.id}
            language={language}
          />
        )}

        <Tabs defaultValue="reviews" className="w-full">
          <TabsList>
            <TabsTrigger value="reviews">{dictionary.tabs.reviews}</TabsTrigger>
            <TabsTrigger value="credits">{dictionary.tabs.credits}</TabsTrigger>
            <TabsTrigger value="recommendations">
              {dictionary.tabs.recommendations}
            </TabsTrigger>
            <TabsTrigger value="similar">{dictionary.tabs.similar}</TabsTrigger>
            <TabsTrigger value="images">{dictionary.tabs.images}</TabsTrigger>
            <TabsTrigger value="videos">{dictionary.tabs.videos}</TabsTrigger>
          </TabsList>

          <TabsContent value="reviews" className="mt-4">
            <Reviews tmdbItem={movie} mediaType="MOVIE" />
          </TabsContent>

          <TabsContent value="credits" className="mt-4">
            <Credits variant="movie" id={movie.id} language={language} />
          </TabsContent>

          <TabsContent value="recommendations" className="mt-4">
            <MovieRelated
              movieId={movie.id}
              variant="recommendations"
              language={language}
            />
          </TabsContent>

          <TabsContent value="similar" className="mt-4">
            <MovieRelated
              movieId={movie.id}
              variant="similar"
              language={language}
            />
          </TabsContent>

          <TabsContent value="images" className="mt-4">
            <Images tmdbId={movie.id} variant="movie" />
          </TabsContent>

          <TabsContent value="videos" className="mt-4">
            <Videos tmdbId={movie.id} variant="movie" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
