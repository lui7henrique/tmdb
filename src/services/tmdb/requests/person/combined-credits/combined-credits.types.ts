import {
  MediaType,
  MovieWithMediaType,
  TvSerieWithMediaType,
} from '@/services/tmdb/types'

export type RawMovieCredit = MovieWithMediaType & {
  character: string
}

export type RawTvSerieCredit = TvSerieWithMediaType & {
  character: string
}

export type RawCredit = RawMovieCredit | RawTvSerieCredit

export type CombinedCreditsResponse = {
  cast: Array<RawCredit>
  crew: Array<RawCredit>
}

export type Credit = {
  id: number
  title: string
  date: string
  media_type: MediaType
  role: string
  vote_average: number
  vote_count: number
  backdrop_path?: string
}

export type CombinedCredits = {
  cast: Array<Credit>
  crew: Array<Credit>
}
