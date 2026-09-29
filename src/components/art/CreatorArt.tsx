import { ScaledStage } from '../ui/ScaledStage'
import { Sprite } from '../ui/Sprite'
import { HappyStudentsCard, RevenueCard, YearToDateCard } from '../cards/FloatingCards'

const SHADOW = 'drop-shadow(0 34px 34px rgb(12 12 29 / 0.2))'

/** Creator illustration: person with revenue cards, a squiggle and the Happy Students card. */
export function CreatorArt() {
  return (
    <ScaledStage width={549} height={650} maxScale={1}>
      <RevenueCard x={0} y={19.2} w={274} z={1} />
      <Sprite file="woman.png" x={54} y={0} w={503.2} z={2} filter={SHADOW} />
      <YearToDateCard x={0} y={170.2} w={134} z={3} />
      <Sprite file="squiggle-woman.png" x={333} y={116.2} w={161.9} z={3} />
      <HappyStudentsCard x={284.5} y={390.6} w={260} z={4} />
    </ScaledStage>
  )
}
