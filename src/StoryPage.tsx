import { X } from 'lucide-react'
import { UI, TIMELINE, STORY, type Lang } from './story'

type SocialLink = { label: string; href: string }

type StoryProps = {
  lang: Lang
  onLangChange: (lang: Lang) => void
  onClose: () => void
  brand: string
  social: SocialLink[]
}

export default function Story({ lang, onLangChange, onClose, brand, social }: StoryProps) {
  const t = UI[lang]

  return (
    <div className="min-h-[100dvh] w-full bg-cream font-hn text-[#0a0a0a]">
      {/* Top bar */}
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-black/10 bg-cream/85 px-6 py-4 backdrop-blur sm:px-10">
        <button
          type="button"
          onClick={onClose}
          className="font-hn text-lg tracking-wide transition-opacity duration-300 hover:opacity-60"
        >
          {brand}
        </button>

        <div className="flex items-center gap-5 sm:gap-8">
          <div className="flex items-center gap-2 text-sm">
            <button
              type="button"
              onClick={() => onLangChange('ua')}
              className={`transition-opacity duration-300 ${
                lang === 'ua' ? 'font-medium' : 'text-black/40 hover:opacity-70'
              }`}
            >
              UA
            </button>
            <span className="text-black/25">/</span>
            <button
              type="button"
              onClick={() => onLangChange('en')}
              className={`transition-opacity duration-300 ${
                lang === 'en' ? 'font-medium' : 'text-black/40 hover:opacity-70'
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            aria-label={t.back}
            onClick={onClose}
            className="transition-opacity duration-300 hover:opacity-60"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="anim-fade-up px-6 pb-12 pt-16 sm:px-10 sm:pt-24">
        <p className="text-xs uppercase tracking-[0.2em] text-black/50">{t.kicker}</p>
        <h1 className="mt-4 font-hn text-[18vw] leading-[0.88] sm:text-[11vw] lg:text-[9vw]">
          {t.heading}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/70">{t.lead}</p>
      </section>

      {/* Timeline */}
      <section className="px-6 pb-16 sm:px-10">
        <h2 className="mb-6 text-xs uppercase tracking-[0.2em] text-black/50">{t.journey}</h2>
        <ol>
          {TIMELINE.map((m, i) => (
            <li
              key={i}
              className="grid grid-cols-1 gap-1 border-t border-black/15 py-6 sm:grid-cols-[11rem_1fr] sm:gap-8"
            >
              <div className="text-sm tracking-wide text-black/45">{m.year}</div>
              <div>
                <h3 className="text-xl sm:text-2xl">{m.title[lang]}</h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-black/65">{m.desc[lang]}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Full autobiography */}
      <section className="px-6 pb-24 sm:px-10">
        <h2 className="mb-6 text-xs uppercase tracking-[0.2em] text-black/50">{t.fullStory}</h2>
        <div className="max-w-2xl space-y-5 text-[17px] leading-relaxed text-black/80">
          {STORY[lang].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col gap-6 border-t border-black/15 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <button
          type="button"
          onClick={onClose}
          className="text-left text-sm transition-opacity duration-300 hover:opacity-60"
        >
          ← {t.back}
        </button>
        <div className="flex gap-6 text-sm">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              {s.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}
