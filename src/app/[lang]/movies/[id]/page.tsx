import { Metadata } from 'next'

import { tmdb } from '@/services/tmdb'
import { tmdbImage } from '@/utils/tmdb/image'
import { getMoviesPagesIds } from '@/utils/seo/get-movies-pages-ids'

import { MovieDetails } from './_components/movie-details'
import { Language, PageProps } from '@/types/languages'

import { APP_URL } from '../../../../../constants'
import { SUPPORTED_LANGUAGES } from '../../../../../languages'

type MoviePageProps = {
  params: { id: string }
} & PageProps

export async function generateStaticParams({
  params: { lang },
}: MoviePageProps) {
  const moviesIds = await getMoviesPagesIds(lang)

  return moviesIds.map((id) => ({ id }))
}

export async function generateMetadata({
  params: { lang, id },
}: MoviePageProps): Promise<Metadata> {
  const {
    title,
    overview,
    backdrop_path: backdrop,
  } = await tmdb.movies.details(Number(id), lang)

  const keywords = await tmdb.keywords({
    id: Number(id),
    type: 'movie',
  })

  const canonicalUrl = `${APP_URL}/${lang}/movies/${id}`
  const languageAlternates = SUPPORTED_LANGUAGES.reduce(
    (acc, lang) => {
      if (lang.enabled) {
        acc[lang.hreflang] = `${APP_URL}/${lang.value}`
      }
      return acc
    },
    {} as Record<string, string>,
  )

  return {
    title,
    description: overview,
    keywords: keywords?.map((keyword) => keyword.name).join(','),
    openGraph: {
      images: [tmdbImage(backdrop)],
      title,
      description: overview,
      siteName: 'Plotwist',
    },
    twitter: {
      title,
      description: overview,
      images: tmdbImage(backdrop),
      card: 'summary_large_image',
      creator: '@lui7henrique',
    },
    alternates: {
      canonical: canonicalUrl,
      languages: languageAlternates,
    },
  }
}

const MoviePage = ({ params }: MoviePageProps) => {
  const { id, lang } = params

  return <MovieDetails id={Number(id)} language={lang} />
}

export default MoviePage
