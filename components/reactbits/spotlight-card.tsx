'use client'

import { useRef, type MouseEvent, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SpotlightCardProps = {
  children: ReactNode
  className?: string
  spotlightColor?: string
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = 'color-mix(in oklab, var(--primary) 22%, transparent)',
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
    el.style.setProperty('--spotlight-color', spotlightColor)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        'group relative overflow-hidden rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-colors dark:shadow-none',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--spotlight-color, transparent), transparent 70%)',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
