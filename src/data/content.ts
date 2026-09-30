import { DEFAULT_CREATOR_ID, routes } from '../lib/routes'
import { Building2, Camera, Code, Laptop, Megaphone, PencilRuler, type LucideIcon } from 'lucide-react'

export const navLinks = [
  { label: 'Home', to: routes.home, end: true },
  { label: 'Courses', to: routes.courses, end: false },
  { label: 'Creators', to: routes.creator(DEFAULT_CREATOR_ID), end: false },
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

export interface FooterLink {
  label: string
  to: string
}

const topic = (label: string): FooterLink => ({ label, to: `${routes.courses}?q=${encodeURIComponent(label)}` })

export const footerColumns: FooterLink[][] = [
  [
    { label: 'Featured Courses', to: routes.courses },
    { label: 'Featured Categories', to: routes.courses },
    topic('Business'),
    topic('IT'),
    topic('Design'),
  ],
  [topic('Development'), topic('Marketing'), topic('Photography'), topic('Finance'), topic('Sport')],
  [
    { label: 'Become a Creator', to: routes.register },
    { label: 'Affiliate Program', to: routes.register },
    { label: 'Contact', to: routes.home },
    { label: 'Help', to: routes.home },
    { label: 'About', to: routes.home },
  ],
]

export const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookies Settings']
