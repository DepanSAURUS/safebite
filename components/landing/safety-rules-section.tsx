import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SectionHeading } from './section-heading'

const RULES = [
  {
    title: 'Heat-stable toxin risk',
    tag: 'Bacillus cereus',
    body: 'Cooked rice or starch held at room temperature for more than four hours may develop heat-stable toxins. SafeBite raises the minimum score, and reheating does not lower it.',
  },
  {
    title: 'Botulism risk',
    tag: 'Clostridium botulinum',
    body: 'Low-acid foods stored in sealed, low-oxygen conditions without refrigeration trigger a critical warning regardless of the accumulated score.',
  },
  {
    title: 'Damaged can warning',
    tag: 'Bulging, leaking, dented',
    body: 'Bulging, leaking, or deeply dented cans are flagged as critical. Do not open or taste; discard safely.',
  },
  {
    title: 'Seafood histamine risk',
    tag: 'Scombroid poisoning',
    body: 'Fish such as tuna and mackerel can form histamine when temperature-abused. Cooking does not destroy histamine.',
  },
  {
    title: 'Opened dairy rule',
    tag: 'Listeria',
    body: 'Opened dairy has a higher baseline vulnerability, and Listeria can grow slowly even at refrigerator temperatures.',
  },
  {
    title: 'Fresh cooking reset',
    tag: 'Vegetative bacteria',
    body: 'Thorough cooking resets vegetative bacterial risk for freshly prepared food, but never resets toxins formed earlier.',
  },
  {
    title: 'Prior temperature abuse carryover',
    tag: 'Carryover risk',
    body: 'Risk accumulated during earlier unsafe storage carries forward. Refrigeration afterwards only slows further growth.',
  },
]

export function SafetyRulesSection() {
  return (
    <section id="safety-rules" aria-labelledby="rules-heading" className="scroll-mt-16 bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5">
        <SectionHeading
          id="rules-heading"
          eyebrow="Override rules"
          title="Special high-risk cases are never averaged away."
          description="Some hazards cannot be expressed as simple accumulation. These rules set a minimum severity when triggered."
          className="lg:col-span-2"
        />
        <Accordion type="single" collapsible defaultValue={RULES[0].title} className="lg:col-span-3">
          {RULES.map((r) => (
            <AccordionItem key={r.title} value={r.title}>
              <AccordionTrigger className="py-5 text-base hover:no-underline">
                <span className="flex flex-col items-start gap-1 text-left sm:flex-row sm:items-center sm:gap-3">
                  {r.title}
                  <span className="font-mono text-xs font-normal text-muted-foreground">{r.tag}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-pretty text-base leading-relaxed text-muted-foreground">
                {r.body}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
