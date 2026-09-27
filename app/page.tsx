import { CtaSection, SiteFooter } from '@/components/landing/cta-footer'
import { DevelopersSection } from '@/components/landing/developers-section'
import { Hero } from '@/components/landing/hero'
import { HowItWorks } from '@/components/landing/how-it-works'
import { MythsSection } from '@/components/landing/myths-section'
import { RiskScaleSection } from '@/components/landing/risk-scale-section'
import { SafetyRulesSection } from '@/components/landing/safety-rules-section'
import { ScienceSection } from '@/components/landing/science-section'
import { SiteHeader } from '@/components/landing/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <MythsSection />
        <HowItWorks />
        <ScienceSection />
        <RiskScaleSection />
        <SafetyRulesSection />
        <DevelopersSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
