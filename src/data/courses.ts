export interface Course {
  id: string
  title: string
  author: string
  rating: number
  lessons: number
  duration: string
  comments: number
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  price: number
  image: string
  categories: string[]
}

const shared = {
  author: 'purepearl studio',
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
