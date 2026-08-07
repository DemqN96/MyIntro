import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import StoryPage from './StoryPage'
import type { Lang } from './story'

// ─── Personal data (swap these for your own) ────────────────────────────────
const BRAND = 'Dmytro'
const NAME_FIRST = 'Dmytro'
const NAME_LAST = 'Batiuk'
const YEAR = '2026'

const NAV = [
  { label: 'Story', href: '#' },
  { label: 'Jobs', href: '#' },
  { label: 'Message', href: 'mailto:dev.dmytro.batiuk@gmail.com' },
]

const SOCIAL = [
  { label: 'Instagram', href: 'https://www.instagram.com/batiuk.it' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dmytro-batiuk' },
]

const FOOTER_LEFT = ['DevOps']
const FOOTER_RIGHT: string[] = []

const BG_URL =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85'
const PORTRAIT_URL = '/portrait.png'
// ────────────────────────────────────────────────────────────────────────────

const DRAWER_EASE = 'cubic-bezier(0.76, 0, 0.24, 1)'

export default function App() {
  const [open, setOpen] = useState(false)
  const [view, setView] = useState<'home' | 'story'>('home')
  const [lang, setLang] = useState<Lang>('ua')

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const openStory = () => {
    setOpen(false)
    setView('story')
    window.scrollTo(0, 0)
  }

  const goHome = () => {
    setView('home')
    window.scrollTo(0, 0)
  }

  if (view === 'story') {
    return (
      <StoryPage
        lang={lang}
        onLangChange={setLang}
        onClose={goHome}
        brand={BRAND}
        social={SOCIAL}
      />
    )
  }

  const marqueeName = (
    <>
      {NAME_FIRST} &mdash; {NAME_LAST}
      {' '}
    </>
  )

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      {/* BG image */}
      <img
        src={BG_URL}
        alt=""
        className="anim-fade-in absolute inset-0 h-full w-full object-cover"
      />

      {/* Marquee name */}
      <div
        className="anim-fade-up absolute inset-x-0 top-[16vh] z-10 overflow-hidden sm:top-[14vh]"
        style={{ animationDelay: '500ms' }}
      >
        <div className="marquee flex w-max whitespace-nowrap font-hn text-[16vh] leading-none text-[#0a0a0a] sm:text-[26vh]">
          <span className="pr-[6vw]">{marqueeName}</span>
          <span className="pr-[6vw]">{marqueeName}</span>
        </div>
      </div>

      {/* Cream rule */}
      <div
        className="anim-line absolute inset-x-6 bottom-[5.5rem] z-10 h-0.5 bg-[#0a0a0a] sm:inset-x-10 sm:bottom-28"
        style={{ animationDelay: '1200ms' }}
      />

      {/* Desktop footer */}
      <footer className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-6 pb-5 font-hn text-xs leading-relaxed sm:z-10 sm:px-10 sm:pb-8 sm:text-sm">
        <div
          className="anim-fade-up text-[#0a0a0a]"
          style={{ animationDelay: '1400ms' }}
        >
          {FOOTER_LEFT.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
        <div
          className="anim-fade-up text-right text-[#0a0a0a]"
          style={{ animationDelay: '1550ms' }}
        >
          {FOOTER_RIGHT.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      </footer>

      {/* Front portrait (over marquee) */}
      <div className="pointer-events-none absolute inset-0 z-20 flex justify-center">
        <img
          src={PORTRAIT_URL}
          alt="Portrait"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
          className="anim-rise-in h-full w-auto max-w-none object-contain object-bottom"
          style={{ animationDelay: '300ms' }}
        />
      </div>

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        <button
          type="button"
          onClick={goHome}
          className="anim-fade-up font-hn text-lg tracking-wide text-[#0a0a0a] transition-opacity duration-300 hover:opacity-60"
          style={{ animationDelay: '800ms' }}
        >
          {BRAND}
        </button>

        {/* Desktop right cluster */}
        <div className="hidden items-start gap-16 sm:flex lg:gap-24">
          <span
            className="anim-fade-up text-sm text-[#0a0a0a]"
            style={{ animationDelay: '900ms' }}
          >
            {YEAR}
          </span>

          <nav className="flex flex-col gap-0.5 text-sm">
            {NAV.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={
                  item.label === 'Story'
                    ? (e) => {
                        e.preventDefault()
                        openStory()
                      }
                    : undefined
                }
                className="anim-fade-up text-[#0a0a0a] transition-opacity duration-300 hover:opacity-60"
                style={{ animationDelay: `${1000 + i * 80}ms` }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-0.5 text-sm">
            {SOCIAL.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="anim-fade-up text-[#0a0a0a] transition-opacity duration-300 hover:opacity-60"
                style={{ animationDelay: `${1150 + i * 80}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="anim-fade-up relative z-50 flex h-10 w-10 items-center justify-center sm:hidden"
          style={{ animationDelay: '900ms' }}
        >
          <span className="relative h-4 w-6">
            <span
              className="absolute left-0 top-0 h-0.5 w-full bg-[#0a0a0a] transition-all"
              style={{
                transition: `transform 500ms ${DRAWER_EASE}, top 500ms ${DRAWER_EASE}`,
                top: open ? '50%' : '0',
                transform: open ? 'translateY(-50%) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-[#0a0a0a]"
              style={{
                transition: 'opacity 300ms ease',
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="absolute bottom-0 left-0 h-0.5 w-full bg-[#0a0a0a]"
              style={{
                transition: `transform 500ms ${DRAWER_EASE}, bottom 500ms ${DRAWER_EASE}`,
                bottom: open ? '50%' : '0',
                transform: open ? 'translateY(50%) rotate(-45deg)' : 'none',
              }}
            />
          </span>
        </button>
      </header>

      {/* Mobile drawer */}
      <div className="sm:hidden">
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
            open ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        />

        {/* Panel */}
        <aside
          className="fixed inset-y-0 right-0 z-40 w-[80%] max-w-sm bg-[#efeee9] px-8 py-10"
          style={{
            transition: `transform 600ms ${DRAWER_EASE}`,
            transform: open ? 'translateX(0)' : 'translateX(100%)',
          }}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 z-50 text-[#0a0a0a]"
            style={{
              transition: 'transform 500ms ease, opacity 500ms ease',
              transitionDelay: open ? '300ms' : '0ms',
              transform: open ? 'rotate(0deg)' : 'rotate(90deg)',
              opacity: open ? 1 : 0,
            }}
          >
            <X size={26} strokeWidth={1.5} />
          </button>

          {/* Site Index */}
          <p
            className="text-xs uppercase tracking-[0.2em] text-[#0a0a0a]/50"
            style={{
              transition: 'transform 500ms ease, opacity 500ms ease',
              transitionDelay: open ? '250ms' : '0ms',
              transform: open ? 'translateY(0)' : 'translateY(1rem)',
              opacity: open ? 1 : 0,
            }}
          >
            Site Index
          </p>
          <nav className="mt-4 flex flex-col gap-1">
            {NAV.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={
                  item.label === 'Story'
                    ? (e) => {
                        e.preventDefault()
                        openStory()
                      }
                    : undefined
                }
                className="text-4xl text-[#0a0a0a]"
                style={{
                  transition: 'transform 500ms ease, opacity 500ms ease',
                  transitionDelay: open ? `${300 + i * 80}ms` : '0ms',
                  transform: open ? 'translateY(0)' : 'translateY(1.5rem)',
                  opacity: open ? 1 : 0,
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Find Me */}
          <p
            className="mt-12 text-xs uppercase tracking-[0.2em] text-[#0a0a0a]/50"
            style={{
              transition: 'transform 500ms ease, opacity 500ms ease',
              transitionDelay: open ? '500ms' : '0ms',
              transform: open ? 'translateY(0)' : 'translateY(1rem)',
              opacity: open ? 1 : 0,
            }}
          >
            Find Me
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {SOCIAL.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[#0a0a0a]"
                style={{
                  transition: 'transform 500ms ease, opacity 500ms ease',
                  transitionDelay: open ? `${550 + i * 60}ms` : '0ms',
                  transform: open ? 'translateY(0)' : 'translateY(1rem)',
                  opacity: open ? 1 : 0,
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
