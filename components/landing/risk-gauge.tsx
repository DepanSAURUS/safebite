import { getRiskLevel } from './risk-levels'

const RADIUS = 80
const CIRCUMFERENCE = Math.PI * RADIUS

export function RiskGauge({ score }: { score: number }) {
  const level = getRiskLevel(score)
  const offset = CIRCUMFERENCE * (1 - score / 100)

  return (
    <div
      role="meter"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={score}
      aria-valuetext={`Risk score ${score} out of 100, ${level.label}`}
      className="relative mx-auto w-full max-w-72"
    >
      <svg viewBox="0 0 200 116" className="w-full" aria-hidden="true">
        <path
          d="M20 100 A80 80 0 0 1 180 100"
          fill="none"
          strokeWidth="14"
          strokeLinecap="round"
          className="stroke-muted"
        />
        <path
          d="M20 100 A80 80 0 0 1 180 100"
          fill="none"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-700 ease-out motion-reduce:transition-none"
          style={{ stroke: level.color }}
        />
      </svg>
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center">
        <span className="text-5xl font-bold tabular-nums tracking-tight">{score}</span>
        <span className="text-xs text-muted-foreground">
          {'/ 100 · '}
          {Math.round(score / 10)}
          {'/10'}
        </span>
      </div>
    </div>
  )
}
