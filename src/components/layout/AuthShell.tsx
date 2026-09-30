import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { img } from '../../lib/cn'
import { routes } from '../../lib/routes'
import { AuthArt } from '../art/AuthArt'

interface AuthShellProps {
  /** Copy on the blue side */
  heading: string
  description: string
  /** Copy inside the white card */
  eyebrow: string
  title: ReactNode
  children: ReactNode
  footer: ReactNode
}

/** Shared frame for Login and Register: blue grid with artwork on the left, white form card on the right. */
export function AuthShell({ heading, description, eyebrow, title, children, footer }: AuthShellProps) {
  return (
    <div className="bg-grid min-h-screen overflow-hidden text-white">
      <div className="mx-auto w-full max-w-[1230px] px-5 pt-8 pb-12 lg:pb-[96px]">
        <Link to={routes.home} aria-label="ByteSpace home" className="inline-block">
          <img src={img('logo-mark.png')} alt="ByteSpace" width={32} height={35} className="h-[35px] w-auto" />
        </Link>

        <div className="mt-8 grid gap-10 lg:mt-[26px] lg:grid-cols-[minmax(0,1fr)_575px] lg:gap-x-[60px]">
          <div className="hidden lg:block">
            <h2 className="font-display text-xl font-medium">{heading}</h2>
            <p className="mt-3 max-w-[440px] text-lg leading-[1.55] font-light">{description}</p>
            <div className="mt-[54px]">
              <AuthArt />
            </div>
          </div>

          <div className="lg:col-start-2 lg:row-start-1">
            <div className="lg:hidden">
              <h2 className="font-display text-xl font-medium">{heading}</h2>
              <p className="mt-2 mb-8 text-base leading-relaxed font-light">{description}</p>
            </div>
            <section className="flex flex-col rounded-[32px] bg-white p-7 text-ink sm:px-[50px] sm:pt-[56px] sm:pb-10 lg:min-h-[778px] lg:px-[63px] lg:pt-[62px] lg:pb-[52px]">
              <p className="text-base text-brand">{eyebrow}</p>
              <h1 className="mt-1 font-display text-[2rem] leading-[1.15] font-semibold text-[#2a2a2a] sm:text-[44px]">
                {title}
              </h1>
              {children}
              <p className="mt-auto pt-10 text-center text-base text-body">{footer}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
