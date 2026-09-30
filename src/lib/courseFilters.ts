import { FEATURED, type Course, type Level } from '../data/courses'

export type LevelFilter = 'all' | Level
export type PriceFilter = 'all' | 'under-20' | '20-plus'
export type SortKey = 'relevant' | 'rating' | 'price-asc' | 'price-desc'

export interface CourseFilters {
  query: string
  category: string
  level: LevelFilter
  price: PriceFilter
  sort: SortKey
}

export const defaultFilters: CourseFilters = {
  query: '',
  category: FEATURED,
  level: 'all',
  price: 'all',
  sort: 'relevant',
}

/** Pure filter + sort used by the search and creator pages. */
export function applyFilters(list: Course[], f: CourseFilters): Course[] {
  const q = f.query.trim().toLowerCase()

  const result = list.filter((c) => {
    if (q && ![c.title, c.author, ...c.categories].some((s) => s.toLowerCase().includes(q))) return false
    if (f.category !== FEATURED && !c.categories.includes(f.category)) return false
    if (f.level !== 'all' && c.level !== f.level) return false
    if (f.price === 'under-20' && c.price >= 20) return false
    if (f.price === '20-plus' && c.price < 20) return false
    return true
  })

  // Array.prototype.sort is stable, so "relevant" keeps the original order.
  if (f.sort === 'rating') result.sort((a, b) => b.rating - a.rating)
  if (f.sort === 'price-asc') result.sort((a, b) => a.price - b.price)
  if (f.sort === 'price-desc') result.sort((a, b) => b.price - a.price)
  return result
}
