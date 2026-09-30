/** Tiny class-name joiner: cn('a', cond && 'b') -> 'a b' */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

/** Path to a file in /public/images */
export const img = (file: string): string => `/images/${file}`
