// ============================================================
// HYELEARNER: DAILY TUTOR — HISTORY PAGE
// Built by Hyesent.dev
// ============================================================

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen, Clock } from 'lucide-react'
import { DailyTutorHistory, DailyTutorModal } from './components'

export default function DailyTutorPage() {
  const navigate = useNavigate()
  const [selectedDate, setSelectedDate] = useState(null)

  const handleSelect = (date) => {
    setSelectedDate(date)
  }

  const handleClose = () => {
    setSelectedDate(null)
  }

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-4) var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        {/* Header */}
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
            <div className="flex-center" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: 'var(--color-primary-light)' }}>
              <BookOpen size={24} style={{ color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h1 className="h2" style={{ margin: 0 }}>Daily Tutor History</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                Revisit any past lesson you've completed
              </p>
            </div>
          </div>
          <button onClick={() => navigate('/dashboard')} className="btn btn-ghost">
            <ArrowLeft size={16} /> Back
          </button>
        </div>

        {/* Info */}
        <div className="info-card" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center' }}>
            <Clock size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
              These lessons are saved as read-only. You can review the content and your original quiz answers anytime.
            </span>
          </div>
        </div>

        {/* History list */}
        <DailyTutorHistory onSelect={handleSelect} />

        {/* Modal for read-only view */}
        <DailyTutorModal
          isOpen={!!selectedDate}
          onClose={handleClose}
          pastSessionDate={selectedDate}
        />
      </div>
    </div>
  )
}
