import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface ScaledStageProps {
  /** Width/height of the artboard in design pixels */
  width: number
  height: number
  /** Never scale above this factor (Infinity = always fill the parent's width) */
  maxScale?: number
  className?: string
  children: ReactNode
}

/**
 * Renders children on a fixed-size artboard and scales the whole thing to fit
 * the parent's width. This keeps illustrated compositions (people, floating
 * cards, 3D shapes) pixel-aligned with the design at every screen size.
 */
export function ScaledStage({ width, height, maxScale = Infinity, className, children }: ScaledStageProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const host = hostRef.current
    if (!host) return
    const update = () => setScale(Math.min(host.clientWidth / width, maxScale))
    update()
    const observer = new ResizeObserver(update)
    observer.observe(host)
    return () => observer.disconnect()
  }, [width, maxScale])

  return (
    <div ref={hostRef} className={cn('relative w-full', className)} style={{ height: height * scale }}>
      <div
        className="absolute top-0 left-1/2 origin-top-left"
        style={{ width, height, transform: `translateX(${(-width * scale) / 2}px) scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  )
}
