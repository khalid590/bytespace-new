import { Button } from '../components/ui/Button'
import { ScaledStage } from '../components/ui/ScaledStage'
import { Sprite } from '../components/ui/Sprite'
import { routes } from '../lib/routes'

const STAGE = { width: 1440, height: 490 }

const shapes = [
  { file: 'cta-squiggle-green-tl.png', x: 0, y: -11.9, w: 173.8 },
  { file: 'cta-squiggle-white.png', x: 203.1, y: 24.7, w: 130.8 },
  { file: 'cta-cone-green.png', x: 1102.5, y: 13.7, w: 141.8 },
  { file: 'cta-cylinder-white.png', x: 1267.1, y: 29.3, w: 172.9 },
  { file: 'cta-cone-white.png', x: 0, y: 235.1, w: 123.5 },
  { file: 'cta-torus-green.png', x: 59.5, y: 351.3, w: 256.2 },
  { file: 'cta-squiggle-green-br.png', x: 1175.6, y: 319.3, w: 210.4 },
]

/** Blue banner inviting people to publish their own courses. */
export function CreatorCta() {
  return (
    <section aria-labelledby="creator-cta-title" className="bg-grid relative overflow-hidden text-center text-white md:aspect-[1440/490]">
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
        <ScaledStage {...STAGE}>
          {shapes.map((s) => (
            <Sprite key={s.file} {...s} />
          ))}
        </ScaledStage>
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1000px] flex-col items-center justify-center px-5 py-16 md:py-0">
        <h2 id="creator-cta-title" className="max-w-[720px] text-4xl leading-[1.2] font-semibold md:text-[48px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mt-8 max-w-[960px] text-base leading-[29px] text-white/95">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Button to={routes.register} className="mt-9 px-8">
          Join as Creator
        </Button>
      </div>
    </section>
  )
}
