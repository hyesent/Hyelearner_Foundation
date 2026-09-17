// ============================================================
// HYELEARNER: AI USAGE ORB
// Floating badge — remaining AI calls today
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function AIUsageOrb() {
  const navigate = useNavigate()
  const [aiUsage, setAiUsage] = useState(null)

  useEffect(() => {
    const load = () => {
      try {
        const raw = localStorage.getItem('hyelearner_ai_usage')
        setAiUsage(raw ? JSON.parse(raw) : null)
      } catch { setAiUsage(null) }
    }
    load()
    window.addEventListener('hydration:done', load)
    window.addEventListener('storage', load)
    return () => {
      window.removeEventListener('hydration:done', load)
      window.removeEventListener('storage', load)
    }
  }, [])

  if (!aiUsage) return null

  const used = aiUsage.used ?? aiUsage.count ?? 0
  const limit = aiUsage.limit ?? 10
  const remaining = Math.max(0, limit - used)

  const tone = remaining === 0 ? 'empty' : remaining <= 2 ? 'warning' : 'normal'

  return (
    <button
      className={`ai-usage-orb ai-usage-orb-${tone}`}
      onClick={() => navigate('/settings')}
      aria-label={`AI calls remaining: ${remaining} of ${limit}`}
      title={`${remaining} of ${limit} AI calls remaining today`}
    >
      <span className="ai-usage-orb-number">{remaining}</span>
    </button>
  )
}
