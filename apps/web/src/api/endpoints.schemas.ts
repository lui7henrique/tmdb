/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Plotwist
 * OpenAPI spec version: 0.1.0
 */
export type GetUserIdWatchedCast200WatchedCastItem = {
  count: number;
  id: number;
  name: string;
  percentage: number;
  /** @nullable */
  profilePath: string | null;
};

export type GetUserIdWatchedCast200 = {
  watchedCast: GetUserIdWatchedCast200WatchedCastItem[];
};

export type GetUserIdWatchedCastLanguage = typeof GetUserIdWatchedCastLanguage[keyof typeof GetUserIdWatchedCastLanguage];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetUserIdWatchedCastLanguage = {
  'en-US': 'en-US',
  'es-ES': 'es-ES',
  'fr-FR': 'fr-FR',
  'de-DE': 'de-DE',
  'it-IT': 'it-IT',
  'pt-BR': 'pt-BR',
  'ja-JP': 'ja-JP',
} as const;

export type GetUserIdWatchedCastParams = {
language?: GetUserIdWatchedCastLanguage;
};

export type GetUserIdWatchedGenres200GenresItem = {
  count: number;
  name: string;
  percentage: number;
};

export type GetUserIdWatchedGenres200 = {
  genres: GetUserIdWatchedGenres200GenresItem[];
};

export type GetUserIdWatchedGenresLanguage = typeof GetUserIdWatchedGenresLanguage[keyof typeof GetUserIdWatchedGenresLanguage];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetUserIdWatchedGenresLanguage = {
  'en-US': 'en-US',
  'es-ES': 'es-ES',
  'fr-FR': 'fr-FR',
  'de-DE': 'de-DE',
  'it-IT': 'it-IT',
  'pt-BR': 'pt-BR',
  'ja-JP': 'ja-JP',
} as const;

export type GetUserIdWatchedGenresParams = {
language?: GetUserIdWatchedGenresLanguage;
};

export type GetUserIdMostWatchedSeries200MostWatchedSeriesItem = {
  /** @nullable */
  backdropPath: string | null;
  episodes: number;
  id: number;
  /** @nullable */
  posterPath: string | null;
  title: string;
};

export type GetUserIdMostWatchedSeries200 = {
  mostWatchedSeries: GetUserIdMostWatchedSeries200MostWatchedSeriesItem[];
};

export type GetUserIdMostWatchedSeriesLanguage = typeof GetUserIdMostWatchedSeriesLanguage[keyof typeof GetUserIdMostWatchedSeriesLanguage];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetUserIdMostWatchedSeriesLanguage = {
  'en-US': 'en-US',
  'es-ES': 'es-ES',
  'fr-FR': 'fr-FR',
  'de-DE': 'de-DE',
  'it-IT': 'it-IT',
  'pt-BR': 'pt-BR',
  'ja-JP': 'ja-JP',
} as const;

export type GetUserIdMostWatchedSeriesParams = {
language?: GetUserIdMostWatchedSeriesLanguage;
};

export type GetUserIdReviewsCount200 = {
  reviewsCount: number;
};

export type GetUserIdTotalHours200 = {
  totalHours: number;
};

export type GetUserIdStats200 = {
  followersCount: number;
  followingCount: number;
  watchedMoviesCount: number;
  watchedSeriesCount: number;
};

export type GetLikesEntityId200LikesItemUserSubscriptionType = typeof GetLikesEntityId200LikesItemUserSubscriptionType[keyof typeof GetLikesEntityId200LikesItemUserSubscriptionType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetLikesEntityId200LikesItemUserSubscriptionType = {
  MEMBER: 'MEMBER',
  PRO: 'PRO',
} as const;

export type GetLikesEntityId200LikesItemUser = {
  id: string;
  /** @nullable */
  imagePath: string | null;
  subscriptionType: GetLikesEntityId200LikesItemUserSubscriptionType;
  username: string;
};

export type GetLikesEntityId200LikesItemEntityType = typeof GetLikesEntityId200LikesItemEntityType[keyof typeof GetLikesEntityId200LikesItemEntityType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetLikesEntityId200LikesItemEntityType = {
  REVIEW: 'REVIEW',
  REPLY: 'REPLY',
  LIST: 'LIST',
} as const;

export type GetLikesEntityId200LikesItem = {
  createdAt: string;
  entityId: string;
  entityType: GetLikesEntityId200LikesItemEntityType;
  id: string;
  user: GetLikesEntityId200LikesItemUser;
  userId: string;
};

export type GetLikesEntityId200 = {
  likes: GetLikesEntityId200LikesItem[];
};

export type PostLike201LikeEntityType = typeof PostLike201LikeEntityType[keyof typeof PostLike201LikeEntityType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostLike201LikeEntityType = {
  REVIEW: 'REVIEW',
  REPLY: 'REPLY',
  LIST: 'LIST',
} as const;

export type PostLike201Like = {
  createdAt: string;
  entityId: string;
  entityType: PostLike201LikeEntityType;
  id: string;
  userId: string;
};

export type PostLike201 = {
  like: PostLike201Like;
};

export type PostLikeBodyEntityType = typeof PostLikeBodyEntityType[keyof typeof PostLikeBodyEntityType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostLikeBodyEntityType = {
  REVIEW: 'REVIEW',
  REPLY: 'REPLY',
  LIST: 'LIST',
} as const;

export type PostLikeBody = {
  entityId: string;
  entityType: PostLikeBodyEntityType;
};

/**
 * @nullable
 */
export type DeleteUserEpisodes204 = typeof DeleteUserEpisodes204[keyof typeof DeleteUserEpisodes204] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DeleteUserEpisodes204 = {
  null: 'null',
} as const;

export type DeleteUserEpisodesBody = {
  ids: string[];
};

export type GetUserEpisodes200Item = {
  episodeNumber: number;
  id: string;
  runtime: number;
  seasonNumber: number;
  tmdbId: number;
  userId: string;
  watchedAt: string;
};

export type GetUserEpisodesParams = {
tmdbId: string;
};

/**
 * User episodes already registered.
 */
export type PostUserEpisodes409 = {
  message?: string;
};

export type PostUserEpisodes201Item = {
  episodeNumber: number;
  id: string;
  runtime: number;
  seasonNumber: number;
  tmdbId: number;
  userId: string;
  watchedAt: string;
};

export type PostUserEpisodesBodyItem = {
  episodeNumber: number;
  runtime?: number;
  seasonNumber: number;
  tmdbId: number;
};

export type GetSocialLinks200SocialLinksItemPlatform = typeof GetSocialLinks200SocialLinksItemPlatform[keyof typeof GetSocialLinks200SocialLinksItemPlatform];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetSocialLinks200SocialLinksItemPlatform = {
  INSTAGRAM: 'INSTAGRAM',
  TIKTOK: 'TIKTOK',
  YOUTUBE: 'YOUTUBE',
  X: 'X',
} as const;

export type GetSocialLinks200SocialLinksItem = {
  createdAt: string;
  id: string;
  platform: GetSocialLinks200SocialLinksItemPlatform;
  url: string;
  userId: string;
};

export type GetSocialLinks200 = {
  socialLinks: GetSocialLinks200SocialLinksItem[];
};

export type GetSocialLinksParams = {
userId: string;
};

export type PutSocialLinksBodyYOUTUBEAnyOf = string | '';

export type PutSocialLinksBodyYOUTUBE = unknown | PutSocialLinksBodyYOUTUBEAnyOf;

export type PutSocialLinksBodyXAnyOf = string | '';

export type PutSocialLinksBodyX = unknown | PutSocialLinksBodyXAnyOf;

export type PutSocialLinksBodyTIKTOKAnyOf = string | '';

export type PutSocialLinksBodyTIKTOK = unknown | PutSocialLinksBodyTIKTOKAnyOf;

export type PutSocialLinksBodyINSTAGRAM = unknown | PutSocialLinksBodyINSTAGRAMAnyOf;

export type PutSocialLinksBody = {
  INSTAGRAM: PutSocialLinksBodyINSTAGRAM;
  TIKTOK: PutSocialLinksBodyTIKTOK;
  X: PutSocialLinksBodyX;
  YOUTUBE: PutSocialLinksBodyYOUTUBE;
};

export type PutSocialLinksBodyINSTAGRAMAnyOf = string | '';

export type PutReviewReplyById200ReviewReply = {
  createdAt: string;
  id: string;
  reply: string;
  reviewId: string;
  userId: string;
};

export type PutReviewReplyById200 = {
  reviewReply: PutReviewReplyById200ReviewReply;
};

export type PutReviewReplyByIdBody = {
  reply: string;
};

/**
 * @nullable
 */
export type GetReviewReplies200ItemUserLike = {
  createdAt: string;
  entityId: string;
  id: string;
  userId: string;
} | null;

export type GetReviewReplies200ItemUser = {
  id: string;
  /** @nullable */
  imagePath: string | null;
  username: string;
};

export type GetReviewReplies200Item = {
  createdAt: string;
  id: string;
  likeCount: number;
  reply: string;
  reviewId: string;
  user: GetReviewReplies200ItemUser;
  userId: string;
  /** @nullable */
  userLike: GetReviewReplies200ItemUserLike;
};

export type GetReviewRepliesParams = {
reviewId: string;
};

/**
 * Review or user not found
 */
export type PostReviewReply404 = {
  message: string;
};

export type PostReviewReply201ReviewReply = {
  createdAt: string;
  id: string;
  reply: string;
  reviewId: string;
  userId: string;
};

/**
 * Review reply created.
 */
export type PostReviewReply201 = {
  reviewReply: PostReviewReply201ReviewReply;
};

export type PostReviewReplyBody = {
  reply: string;
  reviewId: string;
};

export type GetUserItems200ItemStatus = typeof GetUserItems200ItemStatus[keyof typeof GetUserItems200ItemStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetUserItems200ItemStatus = {
  WATCHLIST: 'WATCHLIST',
  WATCHED: 'WATCHED',
  WATCHING: 'WATCHING',
} as const;

export type GetUserItems200ItemMediaType = typeof GetUserItems200ItemMediaType[keyof typeof GetUserItems200ItemMediaType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetUserItems200ItemMediaType = {
  TV_SHOW: 'TV_SHOW',
  MOVIE: 'MOVIE',
} as const;

export type GetUserItems200Item = {
  addedAt: string;
  /** @nullable */
  backdropPath: string | null;
  id: string;
  mediaType: GetUserItems200ItemMediaType;
  /** @nullable */
  position: number | null;
  /** @nullable */
  posterPath: string | null;
  status: GetUserItems200ItemStatus;
  title: string;
  tmdbId: number;
  userId: string;
};

export type GetUserItemsLanguage = typeof GetUserItemsLanguage[keyof typeof GetUserItemsLanguage];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetUserItemsLanguage = {
  'en-US': 'en-US',
  'es-ES': 'es-ES',
  'fr-FR': 'fr-FR',
  'de-DE': 'de-DE',
  'it-IT': 'it-IT',
  'pt-BR': 'pt-BR',
  'ja-JP': 'ja-JP',
} as const;

export type GetUserItemsStatus = typeof GetUserItemsStatus[keyof typeof GetUserItemsStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetUserItemsStatus = {
  WATCHLIST: 'WATCHLIST',
  WATCHED: 'WATCHED',
  WATCHING: 'WATCHING',
} as const;

export type GetUserItemsParams = {
status: GetUserItemsStatus;
userId: string;
language?: GetUserItemsLanguage;
};

export type GetUserItem200 = {
  userItem?: GetUserItem200UserItem;
};

export type GetUserItem200UserItemStatus = typeof GetUserItem200UserItemStatus[keyof typeof GetUserItem200UserItemStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetUserItem200UserItemStatus = {
  WATCHLIST: 'WATCHLIST',
  WATCHED: 'WATCHED',
  WATCHING: 'WATCHING',
} as const;

export type GetUserItem200UserItemMediaType = typeof GetUserItem200UserItemMediaType[keyof typeof GetUserItem200UserItemMediaType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetUserItem200UserItemMediaType = {
  TV_SHOW: 'TV_SHOW',
  MOVIE: 'MOVIE',
} as const;

export type GetUserItem200UserItem = {
  addedAt: string;
  id: string;
  mediaType: GetUserItem200UserItemMediaType;
  /** @nullable */
  position: number | null;
  status: GetUserItem200UserItemStatus;
  tmdbId: number;
  userId: string;
};

export type GetUserItemMediaType = typeof GetUserItemMediaType[keyof typeof GetUserItemMediaType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetUserItemMediaType = {
  TV_SHOW: 'TV_SHOW',
  MOVIE: 'MOVIE',
} as const;

export type GetUserItemParams = {
mediaType: GetUserItemMediaType;
tmdbId: string;
};

export type PutUserItem201UserItemStatus = typeof PutUserItem201UserItemStatus[keyof typeof PutUserItem201UserItemStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutUserItem201UserItemStatus = {
  WATCHLIST: 'WATCHLIST',
  WATCHED: 'WATCHED',
  WATCHING: 'WATCHING',
} as const;

export type PutUserItem201UserItemMediaType = typeof PutUserItem201UserItemMediaType[keyof typeof PutUserItem201UserItemMediaType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutUserItem201UserItemMediaType = {
  TV_SHOW: 'TV_SHOW',
  MOVIE: 'MOVIE',
} as const;

export type PutUserItem201UserItem = {
  addedAt: string;
  id: string;
  mediaType: PutUserItem201UserItemMediaType;
  /** @nullable */
  position: number | null;
  status: PutUserItem201UserItemStatus;
  tmdbId: number;
  userId: string;
};

export type PutUserItem201 = {
  userItem: PutUserItem201UserItem;
};

export type PutUserItemBodyStatus = typeof PutUserItemBodyStatus[keyof typeof PutUserItemBodyStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutUserItemBodyStatus = {
  WATCHLIST: 'WATCHLIST',
  WATCHED: 'WATCHED',
  WATCHING: 'WATCHING',
} as const;

export type PutUserItemBodyMediaType = typeof PutUserItemBodyMediaType[keyof typeof PutUserItemBodyMediaType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutUserItemBodyMediaType = {
  TV_SHOW: 'TV_SHOW',
  MOVIE: 'MOVIE',
} as const;

export type PutUserItemBody = {
  mediaType: PutUserItemBodyMediaType;
  status: PutUserItemBodyStatus;
  tmdbId: number;
};

export type GetListItemsByListId200ItemMediaType = typeof GetListItemsByListId200ItemMediaType[keyof typeof GetListItemsByListId200ItemMediaType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetListItemsByListId200ItemMediaType = {
  TV_SHOW: 'TV_SHOW',
  MOVIE: 'MOVIE',
} as const;

export type GetListItemsByListId200Item = {
  /** @nullable */
  backdropPath: string | null;
  createdAt: string;
  id: string;
  listId: string;
  mediaType: GetListItemsByListId200ItemMediaType;
  /** @nullable */
  position: number | null;
  /** @nullable */
  posterPath: string | null;
  title: string;
  tmdbId: number;
};

export type GetListItemsByListIdLanguage = typeof GetListItemsByListIdLanguage[keyof typeof GetListItemsByListIdLanguage];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetListItemsByListIdLanguage = {
  'en-US': 'en-US',
  'es-ES': 'es-ES',
  'fr-FR': 'fr-FR',
  'de-DE': 'de-DE',
  'it-IT': 'it-IT',
  'pt-BR': 'pt-BR',
  'ja-JP': 'ja-JP',
} as const;

export type GetListItemsByListIdParams = {
language?: GetListItemsByListIdLanguage;
};

export type PostListItem201ListItemMediaType = typeof PostListItem201ListItemMediaType[keyof typeof PostListItem201ListItemMediaType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostListItem201ListItemMediaType = {
  TV_SHOW: 'TV_SHOW',
  MOVIE: 'MOVIE',
} as const;

export type PostListItem201ListItem = {
  createdAt: string;
  id: string;
  listId: string;
  mediaType: PostListItem201ListItemMediaType;
  /** @nullable */
  position: number | null;
  tmdbId: number;
};

export type PostListItem201 = {
  listItem: PostListItem201ListItem;
};

export type PostListItemBodyMediaType = typeof PostListItemBodyMediaType[keyof typeof PostListItemBodyMediaType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostListItemBodyMediaType = {
  TV_SHOW: 'TV_SHOW',
  MOVIE: 'MOVIE',
} as const;

export type PostListItemBody = {
  listId: string;
  mediaType: PostListItemBodyMediaType;
  tmdbId: number;
};

export type GetDetailedReviews200 = {
  reviews: GetDetailedReviews200ReviewsItem[];
};

/**
 * @nullable
 */
export type GetDetailedReviews200ReviewsItemUserLike = {
  createdAt: string;
  entityId: string;
  id: string;
  userId: string;
} | null;

export type GetDetailedReviews200ReviewsItemUser = {
  id: string;
  /** @nullable */
  imagePath: string | null;
  username: string;
};

export type GetDetailedReviews200ReviewsItemMediaType = typeof GetDetailedReviews200ReviewsItemMediaType[keyof typeof GetDetailedReviews200ReviewsItemMediaType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetDetailedReviews200ReviewsItemMediaType = {
  TV_SHOW: 'TV_SHOW',
  MOVIE: 'MOVIE',
} as const;

/**
 * @nullable
 */
export type GetDetailedReviews200ReviewsItemLanguage = typeof GetDetailedReviews200ReviewsItemLanguage[keyof typeof GetDetailedReviews200ReviewsItemLanguage] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetDetailedReviews200ReviewsItemLanguage = {
  'en-US': 'en-US',
  'es-ES': 'es-ES',
  'fr-FR': 'fr-FR',
  'it-IT': 'it-IT',
  'de-DE': 'de-DE',
  'pt-BR': 'pt-BR',
  'ja-JP': 'ja-JP',
} as const;

export type GetDetailedReviews200ReviewsItem = {
  /** @nullable */
  backdropPath: string | null;
  createdAt: string;
  hasSpoilers: boolean;
  id: string;
  /** @nullable */
  language: GetDetailedReviews200ReviewsItemLanguage;
  likeCount: number;
  mediaType: GetDetailedReviews200ReviewsItemMediaType;
  /** @nullable */
  posterPath: string | null;
  rating: number;
  replyCount: number;
  review: string;
  title: string;
  tmdbId: number;
  user: GetDetailedReviews200ReviewsItemUser;
  userId: string;
  /** @nullable */
  userLike: GetDetailedReviews200ReviewsItemUserLike;
};

export type GetDetailedReviewsOrderBy = typeof GetDetailedReviewsOrderBy[keyof typeof GetDetailedReviewsOrderBy];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetDetailedReviewsOrderBy = {
  likeCount: 'likeCount',
  createdAt: 'createdAt',
} as const;

export type GetDetailedReviewsMediaType = typeof GetDetailedReviewsMediaType[keyof typeof GetDetailedReviewsMediaType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetDetailedReviewsMediaType = {
  MOVIE: 'MOVIE',
  TV_SHOW: 'TV_SHOW',
} as const;

export type GetDetailedReviewsLanguage = typeof GetDetailedReviewsLanguage[keyof typeof GetDetailedReviewsLanguage];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetDetailedReviewsLanguage = {
  'en-US': 'en-US',
  'es-ES': 'es-ES',
  'fr-FR': 'fr-FR',
  'de-DE': 'de-DE',
  'it-IT': 'it-IT',
  'pt-BR': 'pt-BR',
  'ja-JP': 'ja-JP',
} as const;

export type GetDetailedReviewsParams = {
language?: GetDetailedReviewsLanguage;
tmdbId?: string;
userId?: string;
limit?: string;
mediaType?: GetDetailedReviewsMediaType;
orderBy?: GetDetailedReviewsOrderBy;
};

export type PutReviewById200MediaType = typeof PutReviewById200MediaType[keyof typeof PutReviewById200MediaType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutReviewById200MediaType = {
  TV_SHOW: 'TV_SHOW',
  MOVIE: 'MOVIE',
} as const;

/**
 * @nullable
 */
export type PutReviewById200Language = typeof PutReviewById200Language[keyof typeof PutReviewById200Language] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutReviewById200Language = {
  'en-US': 'en-US',
  'es-ES': 'es-ES',
  'fr-FR': 'fr-FR',
  'it-IT': 'it-IT',
  'de-DE': 'de-DE',
  'pt-BR': 'pt-BR',
  'ja-JP': 'ja-JP',
} as const;

export type PutReviewById200 = {
  createdAt: string;
  hasSpoilers: boolean;
  id: string;
  /** @nullable */
  language: PutReviewById200Language;
  mediaType: PutReviewById200MediaType;
  rating: number;
  review: string;
  tmdbId: number;
  userId: string;
};

export type PutReviewByIdBody = {
  hasSpoilers?: boolean;
  rating: number;
  review: string;
};

/**
 * @nullable
 */
export type GetReviews200ItemUserLike = {
  createdAt: string;
  entityId: string;
  id: string;
  userId: string;
} | null;

export type GetReviews200ItemUser = {
  id: string;
  /** @nullable */
  imagePath: string | null;
  username: string;
};

export type GetReviews200ItemMediaType = typeof GetReviews200ItemMediaType[keyof typeof GetReviews200ItemMediaType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetReviews200ItemMediaType = {
  TV_SHOW: 'TV_SHOW',
  MOVIE: 'MOVIE',
} as const;

/**
 * @nullable
 */
export type GetReviews200ItemLanguage = typeof GetReviews200ItemLanguage[keyof typeof GetReviews200ItemLanguage] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetReviews200ItemLanguage = {
  'en-US': 'en-US',
  'es-ES': 'es-ES',
  'fr-FR': 'fr-FR',
  'it-IT': 'it-IT',
  'de-DE': 'de-DE',
  'pt-BR': 'pt-BR',
  'ja-JP': 'ja-JP',
} as const;

export type GetReviews200Item = {
  createdAt: string;
  hasSpoilers: boolean;
  id: string;
  /** @nullable */
  language: GetReviews200ItemLanguage;
  likeCount: number;
  mediaType: GetReviews200ItemMediaType;
  rating: number;
  replyCount: number;
  review: string;
  tmdbId: number;
  user: GetReviews200ItemUser;
  userId: string;
  /** @nullable */
  userLike: GetReviews200ItemUserLike;
};

export type GetReviewsOrderBy = typeof GetReviewsOrderBy[keyof typeof GetReviewsOrderBy];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetReviewsOrderBy = {
  likeCount: 'likeCount',
  createdAt: 'createdAt',
} as const;

export type GetReviewsMediaType = typeof GetReviewsMediaType[keyof typeof GetReviewsMediaType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetReviewsMediaType = {
  MOVIE: 'MOVIE',
  TV_SHOW: 'TV_SHOW',
} as const;

export type GetReviewsLanguage = typeof GetReviewsLanguage[keyof typeof GetReviewsLanguage];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetReviewsLanguage = {
  'en-US': 'en-US',
  'es-ES': 'es-ES',
  'fr-FR': 'fr-FR',
  'de-DE': 'de-DE',
  'it-IT': 'it-IT',
  'pt-BR': 'pt-BR',
  'ja-JP': 'ja-JP',
} as const;

export type GetReviewsParams = {
language?: GetReviewsLanguage;
tmdbId?: string;
userId?: string;
limit?: string;
mediaType?: GetReviewsMediaType;
orderBy?: GetReviewsOrderBy;
};

/**
 * User not found
 */
export type PostReview404 = {
  message: string;
};

/**
 * Review created.
 */
export type PostReview201 = {
  review: PostReview201Review;
};

export type PostReview201ReviewMediaType = typeof PostReview201ReviewMediaType[keyof typeof PostReview201ReviewMediaType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostReview201ReviewMediaType = {
  TV_SHOW: 'TV_SHOW',
  MOVIE: 'MOVIE',
} as const;

/**
 * @nullable
 */
export type PostReview201ReviewLanguage = typeof PostReview201ReviewLanguage[keyof typeof PostReview201ReviewLanguage] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostReview201ReviewLanguage = {
  'en-US': 'en-US',
  'es-ES': 'es-ES',
  'fr-FR': 'fr-FR',
  'it-IT': 'it-IT',
  'de-DE': 'de-DE',
  'pt-BR': 'pt-BR',
  'ja-JP': 'ja-JP',
} as const;

export type PostReview201Review = {
  createdAt?: string;
  hasSpoilers?: boolean;
  id?: string;
  /** @nullable */
  language?: PostReview201ReviewLanguage;
  mediaType: PostReview201ReviewMediaType;
  rating: number;
  review: string;
  tmdbId: number;
  userId: string;
};

export type PostReviewBodyMediaType = typeof PostReviewBodyMediaType[keyof typeof PostReviewBodyMediaType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostReviewBodyMediaType = {
  TV_SHOW: 'TV_SHOW',
  MOVIE: 'MOVIE',
} as const;

/**
 * @nullable
 */
export type PostReviewBodyLanguage = typeof PostReviewBodyLanguage[keyof typeof PostReviewBodyLanguage] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostReviewBodyLanguage = {
  'en-US': 'en-US',
  'es-ES': 'es-ES',
  'fr-FR': 'fr-FR',
  'it-IT': 'it-IT',
  'de-DE': 'de-DE',
  'pt-BR': 'pt-BR',
  'ja-JP': 'ja-JP',
} as const;

export type PostReviewBody = {
  hasSpoilers?: boolean;
  /** @nullable */
  language?: PostReviewBodyLanguage;
  mediaType: PostReviewBodyMediaType;
  rating: number;
  review: string;
  tmdbId: number;
};

/**
 * Invalid email or password.
 */
export type PostLogin400 = {
  message: string;
};

export type PostLogin200 = {
  status?: string;
  token?: string;
};

export type PostLoginBody = {
  email: string;
  /** @minLength 8 */
  password?: string;
  url?: string;
};

export type PatchListBanner200ListVisibility = typeof PatchListBanner200ListVisibility[keyof typeof PatchListBanner200ListVisibility];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PatchListBanner200ListVisibility = {
  PUBLIC: 'PUBLIC',
  NETWORK: 'NETWORK',
  PRIVATE: 'PRIVATE',
} as const;

export type PatchListBanner200List = {
  /** @nullable */
  bannerPath: string | null;
  createdAt: string;
  /** @nullable */
  description: string | null;
  id: string;
  title: string;
  userId: string;
  visibility: PatchListBanner200ListVisibility;
};

export type PatchListBanner200 = {
  list: PatchListBanner200List;
};

export type PatchListBannerBody = {
  bannerPath: string;
  listId: string;
};

/**
 * List not found.
 */
export type GetListById404 = {
  message: string;
};

export type GetListById200ListVisibility = typeof GetListById200ListVisibility[keyof typeof GetListById200ListVisibility];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetListById200ListVisibility = {
  PUBLIC: 'PUBLIC',
  NETWORK: 'NETWORK',
  PRIVATE: 'PRIVATE',
} as const;

/**
 * @nullable
 */
export type GetListById200ListUserLike = {
  createdAt: string;
  entityId: string;
  id: string;
  userId: string;
} | null;

export type GetListById200List = {
  /** @nullable */
  bannerPath: string | null;
  createdAt: string;
  /** @nullable */
  description: string | null;
  id: string;
  likeCount: number;
  title: string;
  userId: string;
  /** @nullable */
  userLike: GetListById200ListUserLike;
  visibility: GetListById200ListVisibility;
};

export type GetListById200 = {
  list: GetListById200List;
};

/**
 * List not found.
 */
export type PutListId404 = {
  message: string;
};

export type PutListId200ListVisibility = typeof PutListId200ListVisibility[keyof typeof PutListId200ListVisibility];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutListId200ListVisibility = {
  PUBLIC: 'PUBLIC',
  NETWORK: 'NETWORK',
  PRIVATE: 'PRIVATE',
} as const;

export type PutListId200List = {
  /** @nullable */
  bannerPath: string | null;
  createdAt: string;
  /** @nullable */
  description: string | null;
  id: string;
  title: string;
  userId: string;
  visibility: PutListId200ListVisibility;
};

export type PutListId200 = {
  list: PutListId200List;
};

export type PutListIdBodyVisibility = typeof PutListIdBodyVisibility[keyof typeof PutListIdBodyVisibility];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PutListIdBodyVisibility = {
  PUBLIC: 'PUBLIC',
  NETWORK: 'NETWORK',
  PRIVATE: 'PRIVATE',
} as const;

export type PutListIdBody = {
  /** @nullable */
  description?: string | null;
  title: string;
  visibility: PutListIdBodyVisibility;
};

/**
 * List not found.
 */
export type DeleteListId404 = {
  message: string;
};

/**
 * @nullable
 */
export type DeleteListId204 = typeof DeleteListId204[keyof typeof DeleteListId204] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DeleteListId204 = {
  null: 'null',
} as const;

export type GetLists404 = {
  message: string;
};

export type GetLists200ListsItemVisibility = typeof GetLists200ListsItemVisibility[keyof typeof GetLists200ListsItemVisibility];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetLists200ListsItemVisibility = {
  PUBLIC: 'PUBLIC',
  NETWORK: 'NETWORK',
  PRIVATE: 'PRIVATE',
} as const;

export type GetLists200ListsItemUser = {
  id: string;
  /** @nullable */
  imagePath: string | null;
  username: string;
};

export type GetLists200ListsItem = {
  /** @nullable */
  bannerPath: string | null;
  createdAt: string;
  /** @nullable */
  description: string | null;
  hasLiked: boolean;
  id: string;
  items: GetLists200ListsItemItemsItem[];
  likeCount: number;
  title: string;
  user: GetLists200ListsItemUser;
  userId: string;
  visibility: GetLists200ListsItemVisibility;
};

export type GetLists200 = {
  lists: GetLists200ListsItem[];
};

export type GetLists200ListsItemItemsItemMediaType = typeof GetLists200ListsItemItemsItemMediaType[keyof typeof GetLists200ListsItemItemsItemMediaType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetLists200ListsItemItemsItemMediaType = {
  TV_SHOW: 'TV_SHOW',
  MOVIE: 'MOVIE',
} as const;

export type GetLists200ListsItemItemsItem = {
  id: string;
  mediaType: GetLists200ListsItemItemsItemMediaType;
  tmdbId: number;
};

export type GetListsParams = {
userId?: string;
limit?: number;
};

/**
 * User not found
 */
export type PostList404 = {
  message: string;
};

export type PostList201ListVisibility = typeof PostList201ListVisibility[keyof typeof PostList201ListVisibility];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostList201ListVisibility = {
  PUBLIC: 'PUBLIC',
  NETWORK: 'NETWORK',
  PRIVATE: 'PRIVATE',
} as const;

export type PostList201List = {
  /** @nullable */
  bannerPath: string | null;
  createdAt: string;
  /** @nullable */
  description: string | null;
  id: string;
  title: string;
  userId: string;
  visibility: PostList201ListVisibility;
};

/**
 * List created.
 */
export type PostList201 = {
  list: PostList201List;
};

export type PostListBodyVisibility = typeof PostListBodyVisibility[keyof typeof PostListBodyVisibility];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostListBodyVisibility = {
  PUBLIC: 'PUBLIC',
  NETWORK: 'NETWORK',
  PRIVATE: 'PRIVATE',
} as const;

export type PostListBody = {
  /** @nullable */
  description?: string | null;
  title: string;
  visibility: PostListBodyVisibility;
};

export type PatchUserPassword200Status = typeof PatchUserPassword200Status[keyof typeof PatchUserPassword200Status];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PatchUserPassword200Status = {
  password_set: 'password_set',
} as const;

export type PatchUserPassword200 = {
  status: PatchUserPassword200Status;
};

export type PatchUserPasswordBody = {
  password: string;
  token: string;
};

export type PatchUser200UserSubscriptionType = typeof PatchUser200UserSubscriptionType[keyof typeof PatchUser200UserSubscriptionType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PatchUser200UserSubscriptionType = {
  MEMBER: 'MEMBER',
  PRO: 'PRO',
} as const;

export type PatchUser200User = {
  /** @nullable */
  bannerPath: string | null;
  /** @nullable */
  biography: string | null;
  createdAt: string;
  email: string;
  id: string;
  /** @nullable */
  imagePath: string | null;
  /** @nullable */
  isLegacy: boolean | null;
  subscriptionType: PatchUser200UserSubscriptionType;
  username: string;
};

export type PatchUser200 = {
  user: PatchUser200User;
};

export type PatchUserBody = {
  bannerPath?: string;
  biography?: string;
  imagePath?: string;
  username?: string;
};

export type GetMe200UserSubscriptionType = typeof GetMe200UserSubscriptionType[keyof typeof GetMe200UserSubscriptionType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetMe200UserSubscriptionType = {
  MEMBER: 'MEMBER',
  PRO: 'PRO',
} as const;

export type GetMe200User = {
  /** @nullable */
  bannerPath: string | null;
  /** @nullable */
  biography: string | null;
  createdAt: string;
  email: string;
  id: string;
  /** @nullable */
  imagePath: string | null;
  /** @nullable */
  isLegacy: boolean | null;
  subscriptionType: GetMe200UserSubscriptionType;
  username: string;
};

export type GetMe200 = {
  user: GetMe200User;
};

/**
 * Fail to hash password.
 */
export type GetUserById500 = {
  message: string;
};

/**
 * Email or username is already registered.
 */
export type GetUserById409 = {
  message: string;
};

export type GetUserById201UserSubscriptionType = typeof GetUserById201UserSubscriptionType[keyof typeof GetUserById201UserSubscriptionType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetUserById201UserSubscriptionType = {
  MEMBER: 'MEMBER',
  PRO: 'PRO',
} as const;

export type GetUserById201User = {
  /** @nullable */
  bannerPath?: string | null;
  /** @nullable */
  biography?: string | null;
  createdAt?: string;
  email: string;
  id?: string;
  /** @nullable */
  imagePath?: string | null;
  /** @nullable */
  isLegacy?: boolean | null;
  subscriptionType?: GetUserById201UserSubscriptionType;
  username: string;
};

/**
 * User created.
 */
export type GetUserById201 = {
  user: GetUserById201User;
};

export type GetUsersUsername200UserSubscriptionType = typeof GetUsersUsername200UserSubscriptionType[keyof typeof GetUsersUsername200UserSubscriptionType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetUsersUsername200UserSubscriptionType = {
  MEMBER: 'MEMBER',
  PRO: 'PRO',
} as const;

export type GetUsersUsername200User = {
  /** @nullable */
  bannerPath: string | null;
  /** @nullable */
  biography: string | null;
  createdAt: string;
  email: string;
  id: string;
  /** @nullable */
  imagePath: string | null;
  /** @nullable */
  isLegacy: boolean | null;
  subscriptionType: GetUsersUsername200UserSubscriptionType;
  username: string;
};

export type GetUsersUsername200 = {
  user: GetUsersUsername200User;
};

/**
 * Email is already registered.
 */
export type GetUsersAvailableEmail409 = {
  message: string;
};

export type GetUsersAvailableEmail200 = {
  available: boolean;
};

export type GetUsersAvailableEmailParams = {
email: string;
};

/**
 * Username is already registered.
 */
export type GetUsersAvailableUsername409 = {
  message: string;
};

export type GetUsersAvailableUsername200 = {
  available: boolean;
};

export type GetUsersAvailableUsernameParams = {
username: string;
};

/**
 * Fail to hash password.
 */
export type PostUsersCreate500 = {
  message: string;
};

/**
 * Email or username is already registered.
 */
export type PostUsersCreate409 = {
  message: string;
};

export type PostUsersCreate201UserSubscriptionType = typeof PostUsersCreate201UserSubscriptionType[keyof typeof PostUsersCreate201UserSubscriptionType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostUsersCreate201UserSubscriptionType = {
  MEMBER: 'MEMBER',
  PRO: 'PRO',
} as const;

export type PostUsersCreate201User = {
  /** @nullable */
  bannerPath?: string | null;
  /** @nullable */
  biography?: string | null;
  createdAt?: string;
  email: string;
  id?: string;
  /** @nullable */
  imagePath?: string | null;
  /** @nullable */
  isLegacy?: boolean | null;
  subscriptionType?: PostUsersCreate201UserSubscriptionType;
  username: string;
};

/**
 * User created.
 */
export type PostUsersCreate201 = {
  user: PostUsersCreate201User;
};

export type PostUsersCreateBody = {
  email: string;
  /** @minLength 8 */
  password: string;
  /** @minLength 3 */
  username: string;
};

