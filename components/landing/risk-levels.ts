export type RiskLevel = {
  min: number
  max: number
  label: string
  color: string
  recommendation: string
}

export const RISK_LEVELS: RiskLevel[] = [
  { min: 0, max: 15, label: 'Safe', color: 'var(--success)', recommendation: 'Low risk. Seal and refrigerate if not eaten now.' },
  { min: 16, max: 30, label: 'Low Caution', color: 'var(--caution)', recommendation: 'Consume within one to two hours.' },
  { min: 31, max: 50, label: 'Elevated Caution', color: 'var(--warning)', recommendation: 'Heat until steaming hot throughout.' },
  { min: 51, max: 70, label: 'Dangerous', color: 'var(--danger)', recommendation: 'Treat as unsafe. Discard recommended.' },
  { min: 71, max: 90, label: 'High Danger', color: 'var(--critical)', recommendation: 'Do not eat. Discard the food.' },
  { min: 91, max: 100, label: 'Critical', color: 'var(--critical)', recommendation: 'Do not taste. Discard and sanitize.' },
]

export function getRiskLevel(score: number): RiskLevel {
  return RISK_LEVELS.find((l) => score >= l.min && score <= l.max) ?? RISK_LEVELS[RISK_LEVELS.length - 1]
}
