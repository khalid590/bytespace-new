import { courses, type Course } from './courses'

export interface Creator {
  id: string
  name: string
  role: string
  bio: string[]
  avatar: string
  followers: number
  courses: Course[]
}

export const creators: Creator[] = [
  {
    id: 'purepearl-studio',
    name: 'PurePearl Studio',
    role: 'Passionate UI/UX, Web designer',
    avatar: 'avatar-creator.png',
    followers: 12,
    bio: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      'Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.',
    ],
    courses,
  },
]

export function findCreator(id: string | undefined): Creator | undefined {
  return creators.find((c) => c.id === id)
}
