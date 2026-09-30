import { ScaledStage } from '../ui/ScaledStage'
import { Sprite } from '../ui/Sprite'
import { CourseCard } from '../cards/CourseCard'
import { ProgressCard } from '../cards/FloatingCards'
import { courses } from '../../data/courses'

const SHADOW = 'drop-shadow(0 34px 34px rgb(12 12 29 / 0.22))'

/** Learner illustration: a real course card, the person in front of it, and a progress card. */
export function GrowthArt() {
  return (
    <ScaledStage width={604} height={640} maxScale={1}>
      <CourseCard course={courses[0]} className="absolute top-0 left-[2.7px] w-[375px]" />
      <Sprite file="squiggle-path.png" x={446.5} y={82.3} w={143.6} z={1} />
      <Sprite file="man-path.png" x={54.9} y={36.6} w={539.8} z={2} filter={SHADOW} />
      <ProgressCard x={348.6} y={215} w={233.3} z={3} />
    </ScaledStage>
  )
}
