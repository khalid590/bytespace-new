import type { CSSProperties, ReactNode } from 'react'
import { Star } from 'lucide-react'
import { cn } from '../../lib/cn'
import { AvatarStack } from '../ui/AvatarStack'

/**
 * Small stat cards that float over the hero / feature illustrations.
 * They are positioned absolutely inside a <ScaledStage>, so x / y / w are design pixels.
 */
interface PlacementProps {
  x: number
  y: number
  w: number
  z?: number
}

function Floating({
  x,
  y,
  w,
  z,
  className,
  children,
}: PlacementProps & { className?: string; children: ReactNode }) {
  const style: CSSProperties = { left: x, top: y, width: w, zIndex: z }
  return (
    <div className={cn('absolute shadow-[0_10px_30px_rgb(12_12_29/0.06)]', className)} style={style}>
      {children}
    </div>
  )
}

/** "UI/UX Design – 200 Courses • 1000+ Students" */
export function TopicCard({ x, y, w, z }: PlacementProps) {
  return (
    <Floating x={x} y={y} w={w} z={z} className="rounded-[14px] bg-white px-4 py-3.5">
      <p className="text-[17px] leading-tight text-ink">UI/UX Design</p>
      <p className="mt-1 text-[11px] whitespace-nowrap text-muted">200 Courses &nbsp;•&nbsp; 1000+ Students</p>
    </Floating>
  )
}

export function ProgressCard({ x, y, w, z, value = 55 }: PlacementProps & { value?: number }) {
  return (
    <Floating x={x} y={y} w={w} z={z} className="rounded-[14px] bg-white px-[17px] pt-4 pb-[18px]">
      <p className="text-sm text-ink">Learning Progress</p>
      <p className="mt-1.5 font-display text-[48px] leading-[1.1] font-medium text-ink">{value}%</p>
      <div
        className="mt-2 h-[7px] rounded-full bg-[#f1f1f2]"
        role="progressbar"
        aria-label="Learning progress"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="h-full rounded-full bg-lime-arc" style={{ width: `${value}%` }} />
      </div>
    </Floating>
  )
}

export function HappyStudentsCard({ x, y, w, z, tone = 'white' }: PlacementProps & { tone?: 'white' | 'lime' }) {
  const lime = tone === 'lime'
  return (
    <Floating x={x} y={y} w={w} z={z} className={cn('rounded-[14px] px-4 py-3.5', lime ? 'bg-lime' : 'bg-white')}>
      <p className="text-base leading-tight text-ink">Happy Students</p>
      <p className="mt-0.5 flex items-center gap-1 text-xs">
        <span className="font-semibold text-ink">4.5</span>
        <span className={lime ? 'text-ink/50' : 'text-muted'}>(240)</span>
        <Star aria-hidden className={cn('size-3.5', lime ? 'fill-brand text-brand' : 'fill-lime text-lime')} />
      </p>
      <AvatarStack variant="large" count="2K+" chip={lime ? 'dark' : 'lime'} className="mt-2" />
    </Floating>
  )
}

/** Blue "Total Revenue" card used in the creator illustration. */
export function RevenueCard({ x, y, w, z }: PlacementProps) {
  return (
    <Floating x={x} y={y} w={w} z={z} className="rounded-xl bg-brand px-4 pt-3.5 pb-4 text-white">
      <p className="text-base leading-tight">Total Revenue</p>
      <p className="text-[10px] text-white/80">July 1-28</p>
      <p className="mt-1.5 font-display text-[25px] leading-tight font-semibold">$120.29</p>
      <div className="mt-2 h-[7px] rounded-full bg-white">
        <div className="h-full w-[47%] rounded-full bg-lime-arc" />
      </div>
    </Floating>
  )
}

/** Blue "Year to Date" card used in the creator illustration. */
export function YearToDateCard({ x, y, w, z }: PlacementProps) {
  return (
    <Floating x={x} y={y} w={w} z={z} className="rounded-xl bg-brand px-3.5 pt-3.5 pb-4 text-white">
      <p className="text-base leading-tight">Year to Date</p>
      <p className="text-[10px] text-white/80">2023</p>
      <p className="mt-1.5 font-display text-[21px] leading-tight font-semibold whitespace-nowrap">$1,200.38</p>
      <span className="mt-2 inline-block rounded-full bg-lime px-2.5 py-0.5 text-[11px] font-medium text-ink">
        +12$
      </span>
    </Floating>
  )
}
