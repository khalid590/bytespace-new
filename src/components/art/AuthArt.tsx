import { courses } from '../../data/courses'
import { CourseCard } from '../cards/CourseCard'
import { HappyStudentsCard } from '../cards/FloatingCards'
import { ScaledStage } from '../ui/ScaledStage'
import { Sprite } from '../ui/Sprite'

/** Illustration on the Login / Register screens: overlapping course cards, 3D shapes, lime stats card. */
export function AuthArt() {
  return (
    <ScaledStage width={500} height={560} maxScale={1}>
      <CourseCard course={courses[1]} tone="accent" className="absolute top-[88px] left-0 w-[375px]" />
      <CourseCard course={courses[2]} tone="accent" className="absolute top-0 left-[111px] z-[2] w-[375px] shadow-[0_18px_40px_rgb(0_0_0/0.12)]" />
      <Sprite file="auth-torus.png" x={39} y={40} w={100} z={3} />
      <Sprite file="hero-squiggle-white-s.png" x={393} y={330} w={99} z={3} />
      <Sprite file="auth-cone.png" x={0} y={416} w={122} z={3} />
      <HappyStudentsCard x={224} y={431} w={256} z={4} tone="lime" />
    </ScaledStage>
  )
}
