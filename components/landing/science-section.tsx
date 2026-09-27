import { Apple, Clock, Droplets, FlaskConical, Thermometer, Wind } from 'lucide-react'
import { SpotlightCard } from '@/components/reactbits/spotlight-card'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

const FATTOM = [
  { letter: 'F', name: 'Food', icon: Apple, meaning: 'Nutrients support microbial growth', impl: 'Food category vulnerability' },
  { letter: 'A', name: 'Acidity', icon: FlaskConical, meaning: 'Low pH inhibits pathogens', impl: 'Acidic food modifier' },
  { letter: 'T', name: 'Time', icon: Clock, meaning: 'Duration of exposure', impl: 'Hours in each storage phase' },
  { letter: 'T', name: 'Temperature', icon: Thermometer, meaning: 'Controls growth rate', impl: 'Temperature zone growth rate' },
  { letter: 'O', name: 'Oxygen', icon: Wind, meaning: 'Exposure to air', impl: 'Container condition modifier' },
  { letter: 'M', name: 'Moisture', icon: Droplets, meaning: 'Water availability', impl: 'Physical condition multiplier' },
]

const ZONES = [
  { name: 'Freezer', range: 'Below -18°C', note: 'Growth effectively stopped', className: 'bg-brand-accent' },
  { name: 'Refrigerator', range: '1–4°C', note: 'Growth greatly slowed', className: 'bg-success' },
  { name: 'Room temp', range: '20–29°C', note: 'Temperature danger zone', className: 'bg-caution' },
  { name: 'Hot environment', range: '30–55°C', note: 'Extreme danger zone', className: 'bg-danger' },
  { name: 'Cooking', range: 'Above 60°C', note: 'Bacteria may die, toxins may remain', className: 'bg-warning' },
]

export function ScienceSection() {
  return (
    <section id="science" aria-labelledby="science-heading" className="scroll-mt-16 border-y bg-background py-20 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6">
        <div className="flex flex-col gap-10">
          <SectionHeading
            id="science-heading"
            eyebrow="Scientific foundation"
            title="Built on the FATTOM model used in food safety education."
            description="Temperature is not a bonus or penalty. It determines how fast risk accumulates."
          />
          <div className="rounded-xl border bg-muted/50 p-5 font-mono text-sm sm:p-6">
            <p className="text-muted-foreground">{'// Core model'}</p>
            <p className="mt-2 text-pretty">
              <span className="text-primary">risk</span>
              {' = vulnerability × growthRate × duration'}
            </p>
            <p className="mt-1 text-pretty">
              <span className="text-primary">vulnerability</span>
              {' = categoryBase × conditionMultiplier'}
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FATTOM.map((f) => (
              <li key={f.name}>
                <SpotlightCard className="h-full">
                  <div className="flex items-start justify-between">
                    <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <f.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span aria-hidden="true" className="text-4xl font-bold text-primary/20">
                      {f.letter}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{f.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.meaning}</p>
                  <p className="mt-4 font-mono text-xs text-primary">{f.impl}</p>
                </SpotlightCard>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-semibold">Temperature zones</h3>
          <ol className="grid overflow-hidden rounded-xl border sm:grid-cols-5">
            {ZONES.map((z) => (
              <li key={z.name} className="flex flex-col gap-2 border-b bg-card p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                <span className={cn('h-1.5 w-10 rounded-full', z.className)} aria-hidden="true" />
                <p className="font-semibold">{z.name}</p>
                <p className="font-mono text-sm tabular-nums">{z.range}</p>
                <p className="text-pretty text-sm text-muted-foreground">{z.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
