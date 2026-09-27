import { Accessibility, Code2, Moon, Share2, TestTube2, Zap } from 'lucide-react'
import { SpotlightCard } from '@/components/reactbits/spotlight-card'
import { SectionHeading } from './section-heading'

const FEATURES = [
  { icon: Code2, title: 'Pure TypeScript engine', body: 'Calculation logic lives in pure, reusable functions ready to power APIs or mobile apps.' },
  { icon: TestTube2, title: 'Unit tested', body: 'Override rules and scoring are covered by focused tests for predictable results.' },
  { icon: Accessibility, title: 'Accessible by default', body: 'Keyboard navigation, ARIA meters, and color is never the only indicator.' },
  { icon: Moon, title: 'Dark and light mode', body: 'A calm, trustworthy palette tuned for both themes with next-themes.' },
  { icon: Share2, title: 'Copy and share', body: 'Share results via the Web Share API or copy a plain-text summary.' },
  { icon: Zap, title: 'Fast and static', body: 'No accounts, no database, no tracking. Deploy anywhere in seconds.' },
]

const CODE = `import { calculateRisk } from '@/lib/calculator'

const result = calculateRisk({
  category: 'cooked_rice',
  condition: 'cooked',
  phases: [
    { zone: 'room_temperature', hours: 6 },
    { zone: 'refrigerator', hours: 12 },
  ],
  reheated: true,
})

result.score        // 92
result.level        // 'critical'
result.overrides    // ['heat_stable_toxin']`

export function DevelopersSection() {
  return (
    <section id="developers" aria-labelledby="dev-heading" className="scroll-mt-16 border-y bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <SectionHeading
          id="dev-heading"
          eyebrow="Open source · MIT"
          title="Clean architecture you can read, test, and reuse."
          description="SafeBite is built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border bg-slate-950 text-slate-100">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="size-3 rounded-full bg-white/15" aria-hidden="true" />
              <span className="size-3 rounded-full bg-white/15" aria-hidden="true" />
              <span className="size-3 rounded-full bg-white/15" aria-hidden="true" />
              <span className="ml-2 font-mono text-xs text-slate-400">example.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed">
              <code>{CODE}</code>
            </pre>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <li key={f.title}>
                <SpotlightCard className="h-full p-5">
                  <f.icon className="size-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 font-semibold">{f.title}</h3>
                  <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </SpotlightCard>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
