import { img } from '../../lib/cn'

interface SpriteProps {
  file: string
  x: number
  y: number
  w: number
  /** Optional CSS filter, e.g. a drop shadow for cut-out people */
  filter?: string
  z?: number
}

/**
 * Absolutely positioned decorative image. Coordinates are in "design pixels"
 * (relative to the enclosing <ScaledStage>).
 */
export function Sprite({ file, x, y, w, filter, z }: SpriteProps) {
  return (
    <img
      src={img(file)}
      alt=""
      aria-hidden="true"
      draggable={false}
      className="pointer-events-none absolute max-w-none select-none"
      style={{ left: x, top: y, width: w, filter, zIndex: z }}
    />
  )
}
