import { Building2, Camera, Code, Laptop, Megaphone, PencilRuler, type LucideIcon } from 'lucide-react'

export const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Courses', href: '/#courses' },
  { label: 'Creators', href: '/#creators' },
]

export interface LearningPath {
  label: string
  icon: LucideIcon
}

export const learningPaths: LearningPath[] = [
  { label: 'Design', icon: PencilRuler },
  { label: 'Development', icon: Code },
  { label: 'IT & Software', icon: Laptop },
  { label: 'Business', icon: Building2 },
  { label: 'Marketing', icon: Megaphone },
  { label: 'Photography', icon: Camera },
]

export const stats = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
]

export const creatorBenefits = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
]

export interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: 'testimonial-1.jpg',
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: 'testimonial-2.jpg',
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: 'testimonial-3.jpg',
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
]

export const footerColumns: string[][] = [
  ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'],
  ['Development', 'Marketing', 'Photography', 'Finance', 'Sport'],
  ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About'],
]

export const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookies Settings']
