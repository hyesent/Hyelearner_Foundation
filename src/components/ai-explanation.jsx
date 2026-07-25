// ============================================================
// HYELEARNER: AI EXPLANATION COMPONENT
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { Loader2, Sparkles, Info, X, AlertCircle, Lightbulb, Zap } from 'lucide-react'
import { ai } from '../services'
import { AI_LIMITS } from '../constants'

export function AIExplanation({ question, userAnswer, onClose }) {
  const [loading, setLoading] = useState(true)
  const [explanation, setExplanation] = useState(null)
  const [error, setError] = useState(null)
  const [aiLimitReached, setAiLimitReached] = useState(false)

  useEffect(() => {
    // Check AI limits
    const today = new Date().toISOString().split('T')[0]
    const saved = localStorage.getItem('hyelearner_ai_usage')
    if (saved) {
      const usage = JSON.parse(saved)
      if (usage.date === today) {
        const remaining = AI_LIMITS.daily - usage.count
        setAiLimitReached(remaining <= 0)
      }
    }
    fetchExplanation()
  }, [question, userAnswer])

  const trackAIUsage = () => {
    const today = new Date().toISOString().split('T')[0]
    const saved = localStorage.getItem('hyelearner_ai_usage')
    let usage = saved ? JSON.parse(saved) : { date: today, count: 0 }
    
    if (usage.date !== today) {
      usage = { date: today, count: 0 }
    }
    
    usage.count += 1
    localStorage.setItem('hyelearner_ai_usage', JSON.stringify(usage))
  }

  const fetchExplanation = async () => {
    setLoading(true)
    setError(null)

    if (aiLimitReached) {
      setError('AI limit reached. Showing local explanation.')
      setExplanation({
        explanation: question?.explanation || 'No explanation available.',
        keyConcept: 'Review the fundamental concepts.',
        tips: ['Read the question carefully', 'Eliminate wrong options first']
      })
      setLoading(false)
      return
    }

    try {
      const result = await ai.explain(question, userAnswer)
      trackAIUsage()
      setExplanation(result)
    } catch (err) {
      console.error('AI explanation failed:', err)
      setError('AI explanation failed. Showing local explanation.')
      setExplanation({
        explanation: question?.explanation || 'No explanation available.',
        keyConcept: 'Review the fundamental concepts.',
        tips: ['Read the question carefully', 'Eliminate wrong options first']
      })
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="card text-center" style={{ padding: 'var(--space-8)' }}>
        <div className="spinner spinner-lg" style={{ margin: '0 auto var(--space-4)' }} />
        <p className="text-muted">AI is generating explanation...</p>
      </div>
    )
  }

  return (
    <div className="card" style={{ position: 'relative' }}>
      <button 
        onClick={onClose}
        className="btn btn-ghost"
        style={{ position: 'absolute', top: 'var(--space-2)', right: 'var(--space-2)', padding: 'var(--space-1)' }}
      >
        <X style={{ width: '20px', height: '20px' }} />
      </button>

      <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
        <Sparkles style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} />
        <span style={{ fontWeight: '600', fontSize: 'var(--font-size-lg)' }}>AI Explanation</span>
        {aiLimitReached && <span className="badge badge-warning">Local Mode</span>}
      </div>

      {error && (
        <div className="warning-card" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <AlertCircle style={{ width: '16px', height: '16px' }} />
            <span style={{ fontSize: 'var(--font-size-sm)' }}>{error}</span>
          </div>
        </div>
      )}

      <div className="stack" style={{ gap: 'var(--space-4)' }}>
        {/* Explanation */}
        <div>
          <div style={{ fontWeight: '500', color: 'var(--color-text)', marginBottom: 'var(--space-1)' }}>Explanation</div>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
            {explanation?.explanation || question?.explanation || 'No explanation available.'}
          </p>
        </div>

        {/* Key Concept */}
        {explanation?.keyConcept && (
          <div>
            <div style={{ fontWeight: '500', color: 'var(--color-text)', marginBottom: 'var(--space-1)' }}>Key Concept</div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
              {explanation.keyConcept}
            </p>
          </div>
        )}

        {/* Tips */}
        {explanation?.tips && explanation.tips.length > 0 && (
          <div>
            <div style={{ fontWeight: '500', color: 'var(--color-text)', marginBottom: 'var(--space-1)' }}>Tips</div>
            <ul className="stack" style={{ gap: 'var(--space-1)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
              {explanation.tips.map((tip, i) => (
                <li key={i} className="flex" style={{ gap: 'var(--space-2)' }}>
                  <span style={{ color: 'var(--color-primary)' }}>•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Wrong Explanations */}
        {explanation?.wrongExplanations && (
          <div>
            <div style={{ fontWeight: '500', color: 'var(--color-text)', marginBottom: 'var(--space-1)' }}>Why other options are wrong</div>
            {Object.entries(explanation.wrongExplanations).map(([key, value]) => (
              <div key={key} style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                <span style={{ fontWeight: '500' }}>{key}:</span> {value}
              </div>
            ))}
          </div>
        )}

        {/* Shortcut */}
        {explanation?.shortcut && (
          <div className="warning-card">
            <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
              <Zap style={{ width: '16px', height: '16px', color: 'var(--color-warning)' }} />
              <span style={{ fontWeight: '500' }}>Quick Tip</span>
            </div>
            <p style={{ fontSize: 'var(--font-size-sm)' }}>{explanation.shortcut}</p>
          </div>
        )}
      </div>
    </div>
  )
}