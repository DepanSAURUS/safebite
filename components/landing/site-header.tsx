import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { GithubIcon as Github } from './github-icon'
import { Logo } from './logo'

const NAV = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#science', label: 'Science' },
  { href: '#risk-scale', label: 'Risk scale' },
  { href: '#safety-rules', label: 'Safety rules' },
  { href: '#developers', label: 'Developers' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/60 text-white backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" aria-label="SafeBite home" className="rounded-md">
          <Logo className="[&_.fill-background]:fill-slate-950" />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="size-10 text-white hover:bg-white/10 hover:text-white"
          >
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="SafeBite on GitHub">
              <Github className="size-5" aria-hidden="true" />
            </a>
          </Button>
          <div className="text-white [&_button:hover]:bg-white/10 [&_button:hover]:text-white">
            <ThemeToggle />
          </div>
          <Button asChild className="ml-1 hidden sm:inline-flex">
            <a href="#cta">Check your food</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
