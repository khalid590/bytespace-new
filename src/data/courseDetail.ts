import type { Course } from './courses'

export interface LessonPreview {
  number: string
  title: string
  mins: number
}

export interface Module {
  title: string
  description: string
}

export interface Review {
  id: string
  name: string
  role: string
  avatar: string
  rating: number
  when: string
  text: string
}

export interface CourseDetail {
  title: string
  level: string
  subtitle: string
  students: number
  reviewCount: number
  rating: number
  lessonCount: number
  hours: number
  previewLessons: LessonPreview[]
  moreVideos: number
  description: string[]
  sneakPeek: string[]
  keyPoints: string[]
  modules: Module[]
  lessonContent: string
  progressTracking: string
  progress: number
  ratingSummary: { average: number; breakdown: { stars: number; count: number }[] }
  reviews: Review[]
  includes: string[]
}

export const courseIncludes = [
  'Learning Resources',
  'Quality Lesson Videos',
  'Certificate of Completion',
  'Private Consultation',
]

const reviews: Review[] = [
  {
    id: 'r1',
    name: 'PurePearl Studio',
    role: 'UI/UX Designer',
    avatar: 'avatar-r1.jpg',
    rating: 5,
    when: 'a year ago',
    text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
  },
  {
    id: 'r2',
    name: 'Albert Flores',
    role: 'UI/UX Designer',
    avatar: 'avatar-r2.jpg',
    rating: 5,
    when: 'a year ago',
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    id: 'r3',
    name: 'Cody Fisher',
    role: 'UI/UX Designer',
    avatar: 'avatar-r3.jpg',
    rating: 5,
    when: 'a year ago',
    text: 'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
  },
  {
    id: 'r4',
    name: 'Brooklyn Simmons',
    role: 'UI/UX Designer',
    avatar: 'avatar-r4.jpg',
    rating: 5,
    when: 'a year ago',
    text: 'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.',
  },
]

/** Builds the (mock) detail page content for any course. */
export function getCourseDetail(course: Course): CourseDetail {
  const name = `${course.title}: A Comprehensive Guide`
  return {
    title: name,
    level: 'Intermediate',
    subtitle: 'Unlock the Power of Digital Creation with Expert Guidance',
    students: 199,
    reviewCount: 172,
    rating: 4.8,
    lessonCount: 112,
    hours: 24,
    moreVideos: 99,
    previewLessons: [
      { number: '01', title: 'Introduction to Digital Assets', mins: 12 },
      { number: '02', title: 'Design Principles for Impacts', mins: 21 },
      { number: '03', title: 'Advanced Techniques in Digital Creation', mins: 16 },
    ],
    description: [
      `Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "${name}." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.`,
      "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
      "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
    ],
    sneakPeek: ['sneak-1.jpg', 'sneak-2.jpg', 'sneak-3.jpg', 'sneak-4.jpg'],
    keyPoints: [
      'Foundational Concepts',
      'Design Principles Mastery',
      'Advanced Techniques in Digital Creation',
      'Project Showcase and Critique',
      'Optimizing for Various Platforms',
      'Digital Asset Management Best Practices',
      'Monetization Strategies',
      'Capstone Project: Building Your Portfolio',
    ],
    modules: [
      {
        title: 'Module 1: Introduction to Digital Assets',
        description:
          "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
      },
      {
        title: 'Module 2: Design Principles for Impact',
        description:
          "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
      },
      {
        title: 'Module 4: User-Centric Design Strategies',
        description:
          "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
      },
      {
        title: 'Module 5: Interactive Media and Engagement',
        description:
          "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
      },
      {
        title: 'Module 6: Project Showcase and Critique',
        description:
          "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
      },
      {
        title: 'Module 7: Optimizing Digital Assets for Various Platforms',
        description:
          "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
      },
    ],
    lessonContent:
      'Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.',
    progressTracking:
      'Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.',
    progress: 55,
    includes: courseIncludes,
    ratingSummary: {
      average: 4.7,
      breakdown: [
        { stars: 5, count: 720 },
        { stars: 4, count: 120 },
        { stars: 3, count: 21 },
        { stars: 2, count: 12 },
        { stars: 1, count: 16 },
      ],
    },
    reviews,
  }
}
