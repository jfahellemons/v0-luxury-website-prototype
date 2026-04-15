import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { timLipsContent, type ChampionshipResult } from '@/lib/tim-lips-content'

const sponsorLogos = [
  {
    src: 'https://usercontent.one/wp/timlips.nl/wp-content/uploads/2024/02/horsefood-logo.png',
    alt: 'Horsefood',
  },
  {
    src: 'https://usercontent.one/wp/timlips.nl/wp-content/uploads/2024/02/ruitersweelde.jpg',
    alt: 'Ruitersweelde',
  },
  {
    src: 'https://usercontent.one/wp/timlips.nl/wp-content/uploads/2024/02/Flexon-logo.jpg',
    alt: 'Flex-on',
  },
  {
    src: 'https://usercontent.one/wp/timlips.nl/wp-content/uploads/2024/02/Samshield-logo-768x182.webp',
    alt: 'Samshield',
  },
  {
    src: 'https://usercontent.one/wp/timlips.nl/wp-content/uploads/2024/02/petrie-logo-ZW.jpg',
    alt: 'Petrie',
  },
  {
    src: 'https://usercontent.one/wp/timlips.nl/wp-content/uploads/2024/02/KENTUCKY_LOGO-768x360.webp',
    alt: 'Kentucky',
  },
]

export const metadata: Metadata = {
  title: 'Tim Lips | Lips Stables',
  description:
    'Ontdek het internationale palmares van Tim Lips, met resultaten op Olympische Spelen, Wereldkampioenschappen en Europese kampioenschappen.',
}

function ResultsTable({
  title,
  rows,
}: {
  title: string
  rows: ChampionshipResult[]
}) {
  return (
    <section className="rounded-sm border border-border bg-card p-6 shadow-sm lg:p-8">
      <h2 className="mb-6 font-sans text-2xl font-semibold text-foreground">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] border-collapse font-sans text-sm">
          <thead>
            <tr className="border-b border-border text-left text-taupe">
              <th className="py-3 pr-4 font-medium">Jaar</th>
              <th className="py-3 pr-4 font-medium">Evenement</th>
              <th className="py-3 pr-4 font-medium">Resultaat</th>
              <th className="py-3 pr-4 font-medium">Paard</th>
              <th className="py-3 font-medium">Opmerking</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.year}-${row.event}-${row.result}`} className="border-b border-border/70">
                <td className="py-4 pr-4 text-foreground">{row.year}</td>
                <td className="py-4 pr-4 text-foreground">{row.event}</td>
                <td className="py-4 pr-4 text-foreground">{row.result}</td>
                <td className="py-4 pr-4 text-muted-foreground">{row.horse ?? '-'}</td>
                <td className="py-4 text-muted-foreground">{row.note ?? '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default function TimLipsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-background pt-24 lg:pt-28">
        <section className="relative overflow-hidden border-b border-border py-16 lg:py-24">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/tim_lips.jpg)' }}
          />
          <div className="absolute inset-0 bg-espresso/55" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <p className="mb-3 font-sans text-sm uppercase tracking-[0.18em] text-gold">Lips Stables</p>
            <h1 className="font-sans text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              {timLipsContent.name}
            </h1>
            <p className="mt-6 max-w-3xl font-sans text-lg leading-relaxed text-white/85">
              Topruiter in eventing met internationale ervaring op het hoogste niveau.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-sm border border-white/25 bg-white/10 p-5 backdrop-blur-sm">
                <p className="font-sans text-3xl font-bold text-gold">{timLipsContent.highlights.olympics}x</p>
                <p className="mt-1 font-sans text-sm text-white/85">Olympische Spelen</p>
              </div>
              <div className="rounded-sm border border-white/25 bg-white/10 p-5 backdrop-blur-sm">
                <p className="font-sans text-3xl font-bold text-gold">{timLipsContent.highlights.worldChampionships}x</p>
                <p className="mt-1 font-sans text-sm text-white/85">Wereldkampioenschappen</p>
              </div>
              <div className="rounded-sm border border-white/25 bg-white/10 p-5 backdrop-blur-sm">
                <p className="font-sans text-3xl font-bold text-gold">{timLipsContent.highlights.europeanChampionships}x</p>
                <p className="mt-1 font-sans text-sm text-white/85">Europese kampioenschappen</p>
              </div>
              <div className="rounded-sm border border-white/25 bg-white/10 p-5 backdrop-blur-sm">
                <p className="font-sans text-3xl font-bold text-gold">{timLipsContent.highlights.nationalTitles}x</p>
                <p className="mt-1 font-sans text-sm text-white/85">Nederlands Kampioen Senioren</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3 lg:px-8">
            <div className="rounded-sm border border-border bg-card p-6 lg:col-span-2 lg:p-8">
              <h2 className="mb-5 font-sans text-2xl font-semibold text-foreground">Biografie</h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-muted-foreground">
                {timLipsContent.biography.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="rounded-sm border border-border bg-card p-6 lg:p-8">
              <h2 className="mb-4 font-sans text-2xl font-semibold text-foreground">Klasseringen</h2>
              <ul className="space-y-3 font-sans text-base text-muted-foreground">
                {timLipsContent.classifications.map((classification) => (
                  <li key={classification} className="border-b border-border pb-3 last:border-b-0 last:pb-0">
                    {classification}
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-sans text-sm text-taupe">
                Geboren in {timLipsContent.birthPlace} ({timLipsContent.birthYear})
              </p>
            </aside>
          </div>
        </section>

        <section className="pb-16 lg:pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* <div className="rounded-sm border border-border bg-card p-6 shadow-sm lg:p-8"> */}
              {/* <h2 className="mb-6 font-sans text-2xl font-semibold text-foreground">Partners</h2> */}
              <div className="logo-banner-mask relative overflow-hidden rounded-sm">
                <div className="logo-banner-track flex-nowrap">
                  {[...sponsorLogos, ...sponsorLogos].map((logo, index) => (
                    <div
                      key={`${logo.src}-${index}`}
                      className="flex h-24 w-44 shrink-0 items-center justify-center rounded-sm border border-border/70 bg-background/90 px-4"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        loading="lazy"
                        className="max-h-14 w-full object-contain opacity-70 brightness-75"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          {/* </div> */}
        </section>

        <section className="pb-16 lg:pb-20">
          <div className="mx-auto max-w-7xl space-y-8 px-6 lg:px-8">
            <ResultsTable title="Olympische Spelen" rows={timLipsContent.olympicGames} />
            <ResultsTable title="Wereldkampioenschappen" rows={timLipsContent.worldChampionships} />
            <ResultsTable title="Europese kampioenschappen" rows={timLipsContent.europeanChampionships} />

            <div className="grid gap-8 lg:grid-cols-2">
              <section className="rounded-sm border border-border bg-card p-6 shadow-sm lg:p-8">
                <h2 className="mb-4 font-sans text-2xl font-semibold text-foreground">Best 5* Results</h2>
                <ul className="space-y-3 font-sans text-muted-foreground">
                  {timLipsContent.bestFiveStarResults.map((result) => (
                    <li
                      key={`${result.year}-${result.result}`}
                      className="flex items-center justify-between gap-3 border-b border-border pb-3 last:border-b-0 last:pb-0"
                    >
                      <span className="font-medium text-foreground">{result.year}</span>
                      <span>{result.result}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-sm border border-border bg-card p-6 shadow-sm lg:p-8">
                <h2 className="mb-4 font-sans text-2xl font-semibold text-foreground">Best Results Special Events</h2>
                <ul className="space-y-3 font-sans text-muted-foreground">
                  {timLipsContent.specialEventResults.map((result) => (
                    <li key={result} className="border-b border-border pb-3 last:border-b-0 last:pb-0">
                      {result}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
