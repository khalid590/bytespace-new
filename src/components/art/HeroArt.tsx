import { ScaledStage } from '../ui/ScaledStage'
import { Sprite } from '../ui/Sprite'
import { HappyStudentsCard, ProgressCard, TopicCard } from '../cards/FloatingCards'

/** Design-space artboard (px at a 1440px-wide layout) */
const STAGE = { width: 1440, height: 1029 }

/** The big lime half-circle behind the hero person */
const ARC = { cx: 728.6, cy: 1136.8, r: 553.5 }

const shapes = [
  { file: 'hero-squiggle-green.png', x: 0, y: 274.5, w: 205.8 },
  { file: 'hero-squiggle-white-s.png', x: 205.8, y: 498.6, w: 134.5 },
  { file: 'hero-torus-white.png', x: 54.9, y: 731.9, w: 260.7 },
  { file: 'hero-cylinder-green.png', x: 1271.7, y: 247, w: 168.3 },
  { file: 'hero-cone-white.png', x: 1129.9, y: 475.7, w: 141.8 },
  { file: 'hero-squiggle-white-r.png', x: 1189.3, y: 704.4, w: 215 },
]

/** Desktop hero illustration: 3D shapes, lime arc, person and floating stat cards. */
export function HeroArt() {
  return (
    <ScaledStage width={STAGE.width} height={STAGE.height}>
      <div
        className="absolute rounded-full bg-lime-arc"
        style={{ left: ARC.cx - ARC.r, top: ARC.cy - ARC.r, width: ARC.r * 2, height: ARC.r * 2 }}
      />
      {shapes.map((s) => (
        <Sprite key={s.file} {...s} z={2} />
      ))}
      <Sprite file="man-hero.png" x={475.7} y={544.3} w={603.8} z={3} />
      <TopicCard x={404.4} y={641.3} w={209.5} z={4} />
      <ProgressCard x={845.3} y={653.2} w={233.3} z={4} />
      <HappyStudentsCard x={328.4} y={840.8} w={259.8} z={4} />
    </ScaledStage>
  )
}

/** Simplified illustration for phones: arc + person only. */
export function HeroArtMobile() {
  return (
    <div className="relative mx-auto mt-10 h-[300px] w-full max-w-[420px] overflow-hidden sm:h-[360px]">
      <div className="absolute top-12 left-1/2 aspect-square w-[130%] -translate-x-1/2 rounded-full bg-lime-arc" />
      <img
        src="/images/man-hero.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 w-[92%] max-w-[390px] -translate-x-1/2"
      />
    </div>
  )
}
