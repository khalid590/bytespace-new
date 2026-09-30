import type { ReactNode } from 'react'
import { ScaledStage } from '../ui/ScaledStage'
import { Sprite } from '../ui/Sprite'
import { Logo } from '../ui/Logo'
import { HappyStudentsCard } from '../cards/FloatingCards'

interface AuthLayoutProps {
  title: string
  subtitle: string
  children: ReactNode
  footer: ReactNode
}

/** Split screen used by the Login and Signup pages: brand panel on the left, form on the right. */
export function AuthLayout({ title, subtitle, children, footer }: AuthLayoutProps) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
      <aside className="bg-grid relative hidden overflow-hidden text-white lg:block" aria-hidden="true">
        <div className="absolute top-10 left-10 z-10">
          <Logo tone="light" />
        </div>
        <div className="relative z-10 flex h-full flex-col justify-center px-14">
          <p className="max-w-[420px] font-display text-[40px] leading-[1.2] font-semibold">
            Learn something new, or teach what you know.
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <ScaledStage width={640} height={420}>
            <div className="absolute rounded-full bg-lime-arc" style={{ left: 40, top: 170, width: 560, height: 560 }} />
            <Sprite file="man-hero.png" x={130} y={40} w={520} z={2} />
            <HappyStudentsCard x={3} y={296} w={260} z={4} />
            <Sprite file="hero-squiggle-white-r.png" x={480} y={10} w={140} z={1} />
          </ScaledStage>
        </div>
      </aside>

      <main className="flex flex-col px-5 py-8 sm:px-10">
        <div className="lg:hidden">
          <Logo tone="dark" />
        </div>
        <div className="mx-auto flex w-full max-w-[440px] flex-1 flex-col justify-center py-10">
          <h1 className="text-4xl leading-tight font-semibold text-ink">{title}</h1>
          <p className="mt-3 text-lg text-body">{subtitle}</p>
          <div className="mt-8">{children}</div>
          <p className="mt-8 text-center text-base text-body">{footer}</p>
        </div>
      </main>
    </div>
  )
}
