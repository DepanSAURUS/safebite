import { Check, X } from 'lucide-react'
import { SectionHeading } from './section-heading'

const MYTHS = [
  {
    myth: 'If it smells fine, it must be safe.',
    fact: 'Many pathogens and toxins produce no odor, color change, or off-flavor.',
  },
  {
    myth: 'Refrigeration undoes earlier damage.',
    fact: 'Cooling only slows growth. Prior temperature abuse carries over into the final risk.',
  },
  {
    myth: 'Reheating makes everything safe.',
    fact: 'Heat kills many vegetative bacteria, but heat-stable toxins can survive reheating.',
  },
  {
    myth: 'All foods spoil at the same speed.',
    fact: 'Cut, moist, low-acid, protein-rich foods are far more vulnerable than whole or dry foods.',
  },
]

export function MythsSection() {
  return (
    <section aria-labelledby="myths-heading" className="border-b bg-background py-20 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <SectionHeading
          id="myths-heading"
          eyebrow="The problem"
          title="Common assumptions lead to illness or unnecessary waste."
          description="SafeBite replaces guesswork with explainable food safety reasoning."
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          {MYTHS.map((item) => (
            <li key={item.myth} className="flex flex-col gap-4 rounded-xl border bg-card p-6 shadow-sm dark:shadow-none">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-danger/15 text-danger">
                  <X className="size-3.5" aria-hidden="true" />
                  <span className="sr-only">Myth:</span>
                </span>
                <p className="font-medium text-muted-foreground line-through decoration-danger/40">
                  {item.myth}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                  <Check className="size-3.5" aria-hidden="true" />
                  <span className="sr-only">Fact:</span>
                </span>
                <p className="text-pretty leading-relaxed">{item.fact}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
