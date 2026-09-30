export type Level = 'Beginner' | 'Intermediate' | 'Advanced'

export interface Course {
  id: string
  title: string
  author: string
  authorId: string
  rating: number
  lessons: number
  duration: string
  comments: number
  level: Level
  price: number
  image: string
  categories: string[]
}

const shared = {
  author: 'purepearl studio',
  authorId: 'purepearl-studio',
  rating: 4.5,
  lessons: 17,
  duration: '2 hours 16 mins',
  comments: 59,
  level: 'Beginner' as const,
  price: 25,
}

export const courses: Course[] = [
  {
    ...shared,
    id: 'figma-basics',
    title: 'Learn Figma from Basic',
    image: 'course-1.jpg',
    categories: ['UI/UX Design', 'Graphic Design'],
  },
  {
    ...shared,
    id: 'digital-asset',
    title: 'Build Digital Asset',
    image: 'course-2.jpg',
    categories: ['Digital Illustration', 'Graphic Design'],
  },
  {
    ...shared,
    id: 'big-data',
    title: 'the Power of Big Data',
    image: 'course-3.jpg',
    categories: ['Data Science'],
  },
  {
    ...shared,
    id: 'productivity',
    title: 'Balancing Productivity and Well-being',
    image: 'course-4.jpg',
    categories: ['Productivity'],
  },
  {
    ...shared,
    id: 'money-management',
    title: 'Mastering Money Management',
    image: 'course-5.jpg',
    categories: ['Freelance & Entrepreneurship', 'Marketing'],
  },
  {
    ...shared,
    id: 'startup-success',
    title: 'From Idea to Startup Success',
    image: 'course-6.jpg',
    categories: ['Freelance & Entrepreneurship', 'Creative Marketing'],
  },
]

export const FEATURED = 'Featured'

/** Chips shown on the landing page ("+ More" reveals the rest in the design) */
export const courseCategories: string[] = [
  FEATURED,
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
]

/** The shorter chip row used on the search and creator pages */
export const searchCategories: string[] = [
  FEATURED,
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Cooking',
]

/**
 * 45-course demo catalogue for the search page (5 pages of 9).
 * The first page mirrors the design exactly; later entries vary level, price
 * and category so the filters have something to work with.
 */
const LEVELS: Level[] = ['Intermediate', 'Advanced', 'Beginner']
const PRICES = [25, 19, 39, 29, 25]
const RATINGS = [4.8, 4.5, 4.3, 4.7]
const rotating = searchCategories.slice(1)

export const catalog: Course[] = Array.from({ length: 45 }, (_, i) => {
  const base = courses[i % courses.length]
  if (i < 9) return base
  return {
    ...base,
    level: LEVELS[i % LEVELS.length],
    price: PRICES[i % PRICES.length],
    rating: RATINGS[i % RATINGS.length],
    categories: [...base.categories, rotating[i % rotating.length]],
  }
})

export function findCourse(id: string | undefined): Course | undefined {
  return courses.find((c) => c.id === id)
}
