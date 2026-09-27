import { ArrowRight, Info } from 'lucide-react'
import { GithubIcon as Github } from './github-icon'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Logo } from './logo'

export function CtaSection() {
  return (
    <section id="cta" aria-labelledby="cta-heading" className="scroll-mt-16 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-2xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12">
          <h2 id="cta-heading" className="max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-5xl">
            Know before you eat.
          </h2>
          <p className="max-w-xl text-pretty text-base leading-relaxed opacity-90 sm:text-lg">
            Answer four short questions and get an explainable food safety risk estimate in under a minute.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="h-12 px-6 text-base">
              <a href="#how-it-works">
                Start a risk check
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-current bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <Github className="size-4" aria-hidden="true" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>

        <aside
          aria-label="Disclaimer"
          className="mt-8 flex items-start gap-3 rounded-xl border bg-card p-5 text-sm text-muted-foreground"
        >
          <Info className="mt-0.5 size-4 shrink-0 text-brand-accent" aria-hidden="true" />
          <p className="text-pretty leading-relaxed">
            SafeBite is an educational decision-support tool, not a medical device. It does not provide a
            guaranteed safety verdict. When in doubt, throw it out, and seek medical care if you experience
            symptoms of foodborne illness.
          </p>
        </aside>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <Logo />
          <p className="text-sm text-muted-foreground">A scientific food safety risk calculator.</p>
        </div>
        <Separator />
        <p className="text-xs text-muted-foreground">
          {'© 2026 SafeBite. Released under the MIT License.'}
        </p>
      </div>
    </footer>
  )
}
