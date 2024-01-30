import { MovieDetails } from '@/services/tmdb/requests/movies/details'
import { TvSeriesDetails } from '@/services/tmdb/requests/tv-series/details'
import { Review } from '@/types/supabase/reviews'

export const sanitizeTmdbItem = (
  tmdbItem: MovieDetails | TvSeriesDetails,
): Pick<
  Review,
  'tmdb_id' | 'tmdb_overview' | 'tmdb_poster_path' | 'tmdb_title'
> => {
  const isTvShow = 'name' in tmdbItem

  const title = isTvShow
    ? (tmdbItem as TvSeriesDetails).name
    : (tmdbItem as MovieDetails).title

  return {
    tmdb_id: tmdbItem.id,
    tmdb_overview: tmdbItem.overview,
    tmdb_poster_path: tmdbItem.poster_path,
    tmdb_title: title,
  }
}
