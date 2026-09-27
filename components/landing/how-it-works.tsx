import { Gauge, History, Thermometer, UtensilsCrossed } from 'lucide-react'
import { SectionHeading } from './section-heading'

const STEPS = [
  {
    icon: UtensilsCrossed,
    title: 'Food profile',
    body: 'Choose a food category such as cooked rice, poultry, seafood, dairy, or canned goods.',
    detail: 'Category vulnerability',
  },
  {
    icon: Thermometer,
    title: 'Current condition',
    body: 'Describe physical state, moisture, acidity, and whether the container is sealed or opened.',
    detail: 'Condition multiplier',
  },
  {
    icon: History,
    title: 'Storage history',
    body: 'Log each storage phase with its temperature zone and duration, including reheating.',
    detail: 'Growth rate × duration',
  },
  {
    icon: Gauge,
    title: 'Result',
    body: 'Get a 0–100 risk score, a clear recommendation, likely microbes, and a full breakdown.',
    detail: 'Explained, not just scored',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="scroll-mt-16 bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <SectionHeading
          id="how-heading"
          eyebrow="How it works"
          title="Four guided steps from uncertainty to a clear answer."
          description="A calm, focused wizard that asks only what matters for food safety."
        />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="relative flex flex-col gap-4 rounded-xl border bg-card p-6 shadow-sm dark:shadow-none"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-sm tabular-nums text-muted-foreground">
                  {`0${i + 1}`}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
              <p className="mt-auto border-t pt-4 font-mono text-xs text-primary">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
