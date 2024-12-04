import { tmdb } from '@/services/tmdb'
import type { Language } from '@/types/languages'
import { getDictionary } from '@/utils/dictionaries'
import { tmdbImage } from '@/utils/tmdb/image'
import { BlurFade } from '@plotwist/ui/components/magicui/blur-fade'
import Link from 'next/link'
import { AnimatedListDemo } from './animated-list-demo'
import { BentoGridIphone } from './bent-grid-iphone'

type BentoGridProps = {
  language: Language
}

const BLUR_FADE_DELAY = 0.04

export const BentoGrid = async ({ language }: BentoGridProps) => {
  const { results } = await tmdb.movies.list({
    list: 'top_rated',
    page: 1,
    language: 'en-US',
  })
  const dictionary = await getDictionary(language)

  return (
    <BlurFade delay={BLUR_FADE_DELAY * 4}>
      <section className="py-16 px-4 xl:px-0" id="features">
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 max-w-6xl mx-auto gap-4 aspect-auto lg:aspect-video">
          <div className="aspect-poster lg:aspect-auto col-span-1 row-span-2 border rounded-md overflow-hidden space-y-8 p-6">
            <div className="">
              <div className="space-y-2">
                <h5 className="text-lg font-semibold">
                  {dictionary.elegant_control}
                </h5>

                <p className="text-muted-foreground">
                  {dictionary.elegant_control_description}
                </p>
              </div>
            </div>

            <BentoGridIphone />
          </div>

          <div className="row-span-1 col-span-1 border rounded-md p-6 space-y-4">
            <div className="space-y-2">
              <h5 className="text-lg font-semibold">
                {dictionary.recommendations}
              </h5>

              <p className="text-muted-foreground">
                {dictionary.recommendations_description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {results.slice(0, 3).map(result => (
                <Link
                  href={`/${language}/movies/${result.id}`}
                  className="aspect-poster bg-muted rounded-md overflow-hidden border"
                  key={result.id}
                >
                  <img src={tmdbImage(result.poster_path, 'w500')} alt="" />
                </Link>
              ))}
            </div>
          </div>

          <div className="row-span-2 col-span-1 border rounded-md overflow-hidden p-6 space-y-8 relative aspect-poster lg:aspect-auto">
            <div className="space-y-2">
              <h5 className="text-lg font-semibold">
                {dictionary.create_and_share_lists}
              </h5>

              <p className="text-muted-foreground">
                {dictionary.create_and_share_lists_description}
              </p>
            </div>

            <img
              src="/images/lp/list-light.png"
              alt="list"
              className="object-cover object-left h-full absolute rounded-md border aspect-video block dark:hidden"
            />

            <img
              src="/images/lp/list.png"
              alt="list"
              className="object-cover object-left h-full absolute rounded-md border aspect-video hidden dark:block"
            />
          </div>

          <div className="aspect-square lg:aspect-auto row-span-1 col-span-1 border rounded-md overflow-hidden flex flex-col">
            <div className="space-y-4 p-6">
              <div className="space-y-2">
                <h5 className="text-lg font-semibold">{dictionary.reviews}</h5>

                <p className="text-muted-foreground">
                  {dictionary.reviews_description}
                </p>
              </div>
            </div>

            <div className="flex-1">
              <AnimatedListDemo />
            </div>
          </div>
        </div>
      </section>
    </BlurFade>
  )
}
