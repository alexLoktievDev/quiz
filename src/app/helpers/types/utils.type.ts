/**
 * Gets the keys of the passed interface or type
 *
 * Example: { a: string, b: number } => a | b
 */
export type Keys<T extends object> = keyof T;

/**
 * Gets the values of the passed interface or type
 *
 * @template T
 *
 * Example: { a: string, b: number } => string | number
 */
export type Values<T extends object> = T[Keys<T>];

/**
 * Prohibits non intersected (types / interfaces) properties
 */
export type Only<T extends object, U extends object> = {
  [Key in Keys<T>]: T[Key];
} & Partial<{
  [Key in Exclude<Keys<U>, Keys<T>>]: never;
}>;

/**
 * Allows one of two types / interfaces
 */
export type Either<T extends object, U extends object> =
  | Only<T, U>
  | Only<U, T>;

/**
 * Defines Falsy types
 */
export type Falsy = false | 0 | '' | null | undefined;
