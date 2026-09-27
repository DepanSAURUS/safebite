import { cn } from '@/lib/utils'

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={cn('size-8', className)}>
      <path
        d="M16 2.5 4.5 6.8v8.4c0 7.2 4.9 12.4 11.5 14.3 6.6-1.9 11.5-7.1 11.5-14.3V6.8L16 2.5Z"
        className="fill-primary"
      />
      <path
        d="M23 6.2a3 3 0 1 0 4.4 3.9V6.8L25 5.9a3 3 0 0 0-2 .3Z"
        className="fill-background"
      />
      <path
        d="M11 19.5c0-4.6 3.6-8 9-8.5-.4 5.4-3.9 9-8.5 9 1.8-2.3 3.6-3.8 5.8-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary-foreground"
      />
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <LogoMark />
      <span className="text-lg font-semibold tracking-tight">SafeBite</span>
    </span>
  )
}
