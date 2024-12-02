/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Plotwist
 * OpenAPI spec version: 0.1.0
 */
import {
  useQuery,
  useSuspenseQuery
} from '@tanstack/react-query'
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult
} from '@tanstack/react-query'
import type {
  GetUserIdMostWatchedSeries200,
  GetUserIdMostWatchedSeriesParams,
  GetUserIdReviewsCount200,
  GetUserIdStats200,
  GetUserIdTotalHours200
} from './endpoints.schemas'
import { axiosInstance } from '../services/axios-instance';




/**
 * Get user stats
 */
export const getUserIdStats = (
    id: string,
 signal?: AbortSignal
) => {
      
      
      return axiosInstance<GetUserIdStats200>(
      {url: `/user/${id}/stats`, method: 'GET', signal
    },
      );
    }
  

export const getGetUserIdStatsQueryKey = (id: string,) => {
    return [`/user/${id}/stats`] as const;
    }

    
export const getGetUserIdStatsQueryOptions = <TData = Awaited<ReturnType<typeof getUserIdStats>>, TError = unknown>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserIdStats>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUserIdStatsQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUserIdStats>>> = ({ signal }) => getUserIdStats(id, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getUserIdStats>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetUserIdStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getUserIdStats>>>
export type GetUserIdStatsQueryError = unknown


export function useGetUserIdStats<TData = Awaited<ReturnType<typeof getUserIdStats>>, TError = unknown>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserIdStats>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUserIdStats>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserIdStats<TData = Awaited<ReturnType<typeof getUserIdStats>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserIdStats>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUserIdStats>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserIdStats<TData = Awaited<ReturnType<typeof getUserIdStats>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserIdStats>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetUserIdStats<TData = Awaited<ReturnType<typeof getUserIdStats>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserIdStats>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetUserIdStatsQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getGetUserIdStatsSuspenseQueryOptions = <TData = Awaited<ReturnType<typeof getUserIdStats>>, TError = unknown>(id: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdStats>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUserIdStatsQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUserIdStats>>> = ({ signal }) => getUserIdStats(id, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdStats>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetUserIdStatsSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getUserIdStats>>>
export type GetUserIdStatsSuspenseQueryError = unknown


export function useGetUserIdStatsSuspense<TData = Awaited<ReturnType<typeof getUserIdStats>>, TError = unknown>(
 id: string, options: { query:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdStats>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserIdStatsSuspense<TData = Awaited<ReturnType<typeof getUserIdStats>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdStats>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserIdStatsSuspense<TData = Awaited<ReturnType<typeof getUserIdStats>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdStats>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetUserIdStatsSuspense<TData = Awaited<ReturnType<typeof getUserIdStats>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdStats>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetUserIdStatsSuspenseQueryOptions(id,options)

  const query = useSuspenseQuery(queryOptions) as  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Get user total hours
 */
export const getUserIdTotalHours = (
    id: string,
 signal?: AbortSignal
) => {
      
      
      return axiosInstance<GetUserIdTotalHours200>(
      {url: `/user/${id}/total-hours`, method: 'GET', signal
    },
      );
    }
  

export const getGetUserIdTotalHoursQueryKey = (id: string,) => {
    return [`/user/${id}/total-hours`] as const;
    }

    
export const getGetUserIdTotalHoursQueryOptions = <TData = Awaited<ReturnType<typeof getUserIdTotalHours>>, TError = unknown>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserIdTotalHours>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUserIdTotalHoursQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUserIdTotalHours>>> = ({ signal }) => getUserIdTotalHours(id, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getUserIdTotalHours>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetUserIdTotalHoursQueryResult = NonNullable<Awaited<ReturnType<typeof getUserIdTotalHours>>>
export type GetUserIdTotalHoursQueryError = unknown


export function useGetUserIdTotalHours<TData = Awaited<ReturnType<typeof getUserIdTotalHours>>, TError = unknown>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserIdTotalHours>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUserIdTotalHours>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserIdTotalHours<TData = Awaited<ReturnType<typeof getUserIdTotalHours>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserIdTotalHours>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUserIdTotalHours>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserIdTotalHours<TData = Awaited<ReturnType<typeof getUserIdTotalHours>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserIdTotalHours>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetUserIdTotalHours<TData = Awaited<ReturnType<typeof getUserIdTotalHours>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserIdTotalHours>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetUserIdTotalHoursQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getGetUserIdTotalHoursSuspenseQueryOptions = <TData = Awaited<ReturnType<typeof getUserIdTotalHours>>, TError = unknown>(id: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdTotalHours>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUserIdTotalHoursQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUserIdTotalHours>>> = ({ signal }) => getUserIdTotalHours(id, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdTotalHours>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetUserIdTotalHoursSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getUserIdTotalHours>>>
export type GetUserIdTotalHoursSuspenseQueryError = unknown


export function useGetUserIdTotalHoursSuspense<TData = Awaited<ReturnType<typeof getUserIdTotalHours>>, TError = unknown>(
 id: string, options: { query:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdTotalHours>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserIdTotalHoursSuspense<TData = Awaited<ReturnType<typeof getUserIdTotalHours>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdTotalHours>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserIdTotalHoursSuspense<TData = Awaited<ReturnType<typeof getUserIdTotalHours>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdTotalHours>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetUserIdTotalHoursSuspense<TData = Awaited<ReturnType<typeof getUserIdTotalHours>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdTotalHours>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetUserIdTotalHoursSuspenseQueryOptions(id,options)

  const query = useSuspenseQuery(queryOptions) as  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Get user reviews count
 */
export const getUserIdReviewsCount = (
    id: string,
 signal?: AbortSignal
) => {
      
      
      return axiosInstance<GetUserIdReviewsCount200>(
      {url: `/user/${id}/reviews-count`, method: 'GET', signal
    },
      );
    }
  

export const getGetUserIdReviewsCountQueryKey = (id: string,) => {
    return [`/user/${id}/reviews-count`] as const;
    }

    
export const getGetUserIdReviewsCountQueryOptions = <TData = Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError = unknown>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUserIdReviewsCountQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUserIdReviewsCount>>> = ({ signal }) => getUserIdReviewsCount(id, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetUserIdReviewsCountQueryResult = NonNullable<Awaited<ReturnType<typeof getUserIdReviewsCount>>>
export type GetUserIdReviewsCountQueryError = unknown


export function useGetUserIdReviewsCount<TData = Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError = unknown>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUserIdReviewsCount>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserIdReviewsCount<TData = Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUserIdReviewsCount>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserIdReviewsCount<TData = Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetUserIdReviewsCount<TData = Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetUserIdReviewsCountQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getGetUserIdReviewsCountSuspenseQueryOptions = <TData = Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError = unknown>(id: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUserIdReviewsCountQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUserIdReviewsCount>>> = ({ signal }) => getUserIdReviewsCount(id, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetUserIdReviewsCountSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getUserIdReviewsCount>>>
export type GetUserIdReviewsCountSuspenseQueryError = unknown


export function useGetUserIdReviewsCountSuspense<TData = Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError = unknown>(
 id: string, options: { query:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserIdReviewsCountSuspense<TData = Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserIdReviewsCountSuspense<TData = Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetUserIdReviewsCountSuspense<TData = Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdReviewsCount>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetUserIdReviewsCountSuspenseQueryOptions(id,options)

  const query = useSuspenseQuery(queryOptions) as  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Get user most watched series
 */
export const getUserIdMostWatchedSeries = (
    id: string,
    params?: GetUserIdMostWatchedSeriesParams,
 signal?: AbortSignal
) => {
      
      
      return axiosInstance<GetUserIdMostWatchedSeries200>(
      {url: `/user/${id}/most-watched-series`, method: 'GET',
        params, signal
    },
      );
    }
  

export const getGetUserIdMostWatchedSeriesQueryKey = (id: string,
    params?: GetUserIdMostWatchedSeriesParams,) => {
    return [`/user/${id}/most-watched-series`, ...(params ? [params]: [])] as const;
    }

    
export const getGetUserIdMostWatchedSeriesQueryOptions = <TData = Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError = unknown>(id: string,
    params?: GetUserIdMostWatchedSeriesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUserIdMostWatchedSeriesQueryKey(id,params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>> = ({ signal }) => getUserIdMostWatchedSeries(id,params, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetUserIdMostWatchedSeriesQueryResult = NonNullable<Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>>
export type GetUserIdMostWatchedSeriesQueryError = unknown


export function useGetUserIdMostWatchedSeries<TData = Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError = unknown>(
 id: string,
    params: undefined |  GetUserIdMostWatchedSeriesParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserIdMostWatchedSeries<TData = Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError = unknown>(
 id: string,
    params?: GetUserIdMostWatchedSeriesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserIdMostWatchedSeries<TData = Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError = unknown>(
 id: string,
    params?: GetUserIdMostWatchedSeriesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetUserIdMostWatchedSeries<TData = Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError = unknown>(
 id: string,
    params?: GetUserIdMostWatchedSeriesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetUserIdMostWatchedSeriesQueryOptions(id,params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getGetUserIdMostWatchedSeriesSuspenseQueryOptions = <TData = Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError = unknown>(id: string,
    params?: GetUserIdMostWatchedSeriesParams, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUserIdMostWatchedSeriesQueryKey(id,params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>> = ({ signal }) => getUserIdMostWatchedSeries(id,params, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetUserIdMostWatchedSeriesSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>>
export type GetUserIdMostWatchedSeriesSuspenseQueryError = unknown


export function useGetUserIdMostWatchedSeriesSuspense<TData = Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError = unknown>(
 id: string,
    params: undefined |  GetUserIdMostWatchedSeriesParams, options: { query:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserIdMostWatchedSeriesSuspense<TData = Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError = unknown>(
 id: string,
    params?: GetUserIdMostWatchedSeriesParams, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserIdMostWatchedSeriesSuspense<TData = Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError = unknown>(
 id: string,
    params?: GetUserIdMostWatchedSeriesParams, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetUserIdMostWatchedSeriesSuspense<TData = Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError = unknown>(
 id: string,
    params?: GetUserIdMostWatchedSeriesParams, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserIdMostWatchedSeries>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetUserIdMostWatchedSeriesSuspenseQueryOptions(id,params,options)

  const query = useSuspenseQuery(queryOptions) as  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



