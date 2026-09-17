// ============================================================
// HYELEARNER: AI USAGE ORB (SHOWCASE / PREVIEW)
// Floating badge — remaining AI calls today.
// Built by Hyesent.dev
// ============================================================

import { ViewOnly } from './ViewOnly'

const AI_USAGE = { used: 3, limit: 10 }

export function ShowcaseAIUsageOrb({ onNavigate, usage = AI_USAGE }) {
  const used = usage.used ?? 0
  const limit = usage.limit ?? 10
  const remaining = Math.max(0, limit - used)

  const tone =
    remaining === 0 ? 'danger' :
    remaining <= 2  ? 'warning' :
                      'normal'

  return (
    <ViewOnly tooltip="Sign up to manage AI usage">
      <button
        className={`ai-usage-orb ai-usage-orb-${tone}`}
        onClick={() => onNavigate?.('settings')}
        aria-label={`AI calls remaining: ${remaining} of ${limit}`}
        title={`${remaining} of ${limit} AI calls remaining today`}
      >
        <span className="ai-usage-orb-number">{remaining}</span>
      </button>
    </ViewOnly>
  )
}
