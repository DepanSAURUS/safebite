import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  id: string
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ id, eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('flex max-w-2xl flex-col gap-3', className)}>
      <p className="font-mono text-xs font-medium uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 id={id} className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
