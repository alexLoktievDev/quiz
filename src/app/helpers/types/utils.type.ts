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
 * Requires only one of forwarded union types, and prohibits the case when several of the union types are forwarded at the same time
 *
 * Example: RequireOnlyOne<'to' | 'href', string> - demands to define one of the union items either "to" or "href", otherwise it throws an error.
 *
 * {to: '/path'} - (One of them is defined) success
 * {href: '/path'} - (One of them is defined) success
 * {} - (Non of them is defined) error
 *
 * Also it prohibits both union items forwarding at the same time (one of them only)
 *
 * Example: {to: '/path', href: '/path'} - (Both of them are defined) error
 */
export type RequireOnlyOne<T extends Keys<any>, P extends any> = Values<{
  [Key in T]: Required<Record<Key, P>> & Partial<Record<Exclude<T, Key>, never>>;
}>;

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
export type Either<T extends object, U extends object> = Only<T, U> | Only<U, T>;

/**
 * Defines Falsy types
 */
export type Falsy = false | 0 | '' | null | undefined;
