'use client'

import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react'
import ScrollExpand from '@/components/reactbits/scroll-expand'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative bg-slate-950 text-white">
      <ScrollExpand
        src="/images/hero-kitchen.png"
        alt="Leftover rice, soup, and a cut tomato beside a food thermometer on a kitchen counter"
        title={<span className="text-balance">Know before you eat.</span>}
        scrollHint={
          <span className="inline-flex flex-col items-center gap-1">
            Scroll to explore
            <ChevronDown className="size-4 motion-safe:animate-bounce" aria-hidden="true" />
          </span>
        }
        startWidth={46}
        startHeight={56}
        startRadius={28}
        mediaZoom={1.3}
        scrollDistance={1.1}
        holdDistance={0.4}
        overlayScrim={0.8}
        useWindowScroll
      >
        <div className="flex max-w-3xl flex-col items-center gap-6">
          <Badge className="gap-1.5 border-white/20 bg-white/10 px-3 py-1 text-white backdrop-blur">
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            Open-source food safety calculator
          </Badge>
          <h1
            id="hero-heading"
            className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Is that leftover still safe to eat?
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-slate-200 sm:text-lg">
            SafeBite estimates food poisoning risk with a transparent model built on the FATTOM
            framework, accounting for temperature, time, moisture, acidity, and storage history.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-6 text-base">
              <a href="#cta">
                Start a risk check
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-white/30 bg-white/5 px-6 text-base text-white hover:bg-white/15 hover:text-white"
            >
              <a href="#how-it-works">See how it works</a>
            </Button>
          </div>
        </div>
      </ScrollExpand>
    </section>
  )
}
