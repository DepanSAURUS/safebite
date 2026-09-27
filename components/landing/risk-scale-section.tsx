'use client'

import { AlertTriangle, CheckCircle2, OctagonAlert } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { RiskGauge } from './risk-gauge'
import { getRiskLevel, RISK_LEVELS } from './risk-levels'
import { SectionHeading } from './section-heading'

const SCENARIOS = [
  {
    id: 'soup',
    tab: 'Fresh soup',
    title: 'Vegetable soup, cooked 1 hour ago',
    score: 8,
    history: ['Cooked above 60°C', 'Cooled 1h at room temperature'],
    explanation: 'Fresh cooking reset applies. Short time in the danger zone keeps risk low.',
    microbes: ['Clostridium perfringens (if cooled slowly)'],
  },
  {
    id: 'milk',
    tab: 'Opened milk',
    title: 'Opened milk, 5 days refrigerated',
    score: 38,
    history: ['Opened container', '5 days at 1–4°C', '2h on the counter'],
    explanation: 'Opened dairy rule raises baseline risk. Time out of refrigeration adds exposure.',
    microbes: ['Listeria monocytogenes', 'Spoilage bacteria'],
  },
  {
    id: 'rice',
    tab: 'Leftover rice',
    title: 'Cooked rice, 6 hours at room temperature',
    score: 92,
    history: ['6h at 20–29°C', 'Then refrigerated overnight', 'Reheated'],
    explanation:
      'Heat-stable toxin rule triggered. Reheating does not eliminate toxins that formed during prior temperature abuse.',
    microbes: ['Bacillus cereus (emetic toxin)'],
  },
]

function LevelIcon({ score }: { score: number }) {
  if (score <= 15) return <CheckCircle2 className="size-4" aria-hidden="true" />
  if (score <= 50) return <AlertTriangle className="size-4" aria-hidden="true" />
  return <OctagonAlert className="size-4" aria-hidden="true" />
}

export function RiskScaleSection() {
  return (
    <section id="risk-scale" aria-labelledby="risk-heading" className="scroll-mt-16 bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <SectionHeading
          id="risk-heading"
          eyebrow="Explainable results"
          title="A clear score, a clear action, and the reasoning behind it."
          description="Every result shows what the score means, which factors contributed most, and what to do next."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <Tabs defaultValue="rice" className="gap-4 lg:col-span-3">
            <TabsList className="w-full sm:w-fit">
              {SCENARIOS.map((s) => (
                <TabsTrigger key={s.id} value={s.id} className="px-4">
                  {s.tab}
                </TabsTrigger>
              ))}
            </TabsList>
            {SCENARIOS.map((s) => {
              const level = getRiskLevel(s.score)
              return (
                <TabsContent key={s.id} value={s.id}>
                  <Card className="gap-0 py-0">
                    <CardHeader className="border-b py-5">
                      <CardTitle className="text-base font-medium text-muted-foreground">{s.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-8 py-6 sm:grid-cols-2">
                      <div className="flex flex-col items-center gap-4">
                        <RiskGauge score={s.score} />
                        <Badge
                          className="gap-1.5 px-3 py-1 text-sm"
                          style={{
                            color: level.color,
                            backgroundColor: `color-mix(in oklab, ${level.color} 14%, transparent)`,
                          }}
                        >
                          <LevelIcon score={s.score} />
                          {level.label}
                        </Badge>
                        <p className="text-center text-sm font-medium">{level.recommendation}</p>
                      </div>
                      <div className="flex flex-col gap-5 text-sm">
                        <div className="flex flex-col gap-2">
                          <h3 className="font-semibold">Storage history</h3>
                          <ul className="flex flex-col gap-1.5 text-muted-foreground">
                            {s.history.map((h) => (
                              <li key={h} className="flex items-center gap-2">
                                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="font-semibold">Why this score</h3>
                          <p className="text-pretty leading-relaxed text-muted-foreground">{s.explanation}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="font-semibold">Likely microbes</h3>
                          <ul className="flex flex-wrap gap-2">
                            {s.microbes.map((m) => (
                              <li key={m}>
                                <Badge variant="secondary" className="font-normal italic">
                                  {m}
                                </Badge>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              )
            })}
          </Tabs>

          <div className="flex flex-col gap-3 lg:col-span-2 lg:pt-13">
            <h3 className="sr-only">Risk level scale</h3>
            <ol className="flex flex-col overflow-hidden rounded-xl border bg-card">
              {RISK_LEVELS.map((l) => (
                <li key={l.label} className="flex items-center gap-4 border-b px-4 py-3.5 last:border-b-0">
                  <span className="h-8 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: l.color }} aria-hidden="true" />
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="font-medium">{l.label}</span>
                    <span className="truncate text-xs text-muted-foreground">{l.recommendation}</span>
                  </div>
                  <span className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
                    {`${l.min}–${l.max}`}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
