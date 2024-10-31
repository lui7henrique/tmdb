/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * Event booster
 * OpenAPI spec version: 0.1.0
 */
export type PostLoginBody = {
  email: string;
  /** @minLength 8 */
  password?: string;
};

export type PostRegisterListBody = {
  description: string;
  /** @minLength 1 */
  title: string;
};

/**
 * Email is already registered.
 */
export type GetCheckEmail409 = {
  message: string;
};

export type GetCheckEmail200 = {
  available: boolean;
};

export type GetCheckEmailParams = {
email: string;
};

/**
 * Username is already registered.
 */
export type GetCheckUsername409 = {
  message: string;
};

export type GetCheckUsername200 = {
  available: boolean;
};

export type GetCheckUsernameParams = {
username: string;
};

/**
 * Fail to hash password.
 */
export type PostRegisterUser500 = {
  message: string;
};

/**
 * Email or username is already registered.
 */
export type PostRegisterUser409 = {
  message: string;
};

export type PostRegisterUser200User = {
  /** @nullable */
  createdAt?: string | null;
  /** @maxLength 255 */
  email: string;
  id?: string;
  username: string;
};

/**
 * Fail to hash password.
 */
export type PostRegisterUser200 = {
  user: PostRegisterUser200User;
};

export type PostRegisterUserBody = {
  email: string;
  /** @minLength 8 */
  password?: string;
  /** @minLength 1 */
  username: string;
};

