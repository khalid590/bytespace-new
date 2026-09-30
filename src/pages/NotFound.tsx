import { Footer } from '../components/layout/Footer'
import { PageHero } from '../components/layout/PageHero'
import { Button } from '../components/ui/Button'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { routes } from '../lib/routes'

/** "404 Not Found" frame. Also used as the fallback for unknown courses and creators. */
export default function NotFound() {
  useDocumentTitle('Page not found | ByteSpace')
  return (
    <>
      <main>
        <PageHero className="flex min-h-[620px] flex-col items-center justify-center px-5 pt-28 pb-16 text-center md:min-h-[66vw] md:pt-[8vw] md:pb-[6vw]">
          <p
            aria-hidden="true"
            className="bg-[linear-gradient(180deg,#d3fb25_0%,#c9f22a_30%,#96c05c_66%,#7c98c6_100%)] bg-clip-text font-display text-[34vw] leading-[0.8] font-semibold tracking-[-0.02em] text-transparent md:text-[28vw]"
          >
            404
          </p>
          <h1 className="relative -mt-[4vw] max-w-[1000px] text-[2rem] leading-[1.2] font-semibold sm:text-5xl md:-mt-[5.5vw] md:text-[5vw]">
            The page you are looking for doesn’t exist
          </h1>
          <p className="mt-6 text-base text-white/90 md:mt-[2.6vw] md:text-[max(16px,1.2vw)]">
            Try to use a correct url or go back to homepage to start again
          </p>
          <Button to={routes.home} className="mt-8 h-[46px] px-8 text-lg md:mt-[3vw]">
            Back to Home
          </Button>
        </PageHero>
      </main>
      <Footer />
    </>
  )
}
