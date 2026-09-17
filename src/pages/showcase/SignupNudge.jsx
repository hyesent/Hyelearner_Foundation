// src/showcase/SignupNudge.jsx
import { Sparkles, X } from 'lucide-react'

export function SignupNudge({ onClose }) {
  return (
    <div style={backdrop} onClick={onClose}>
      <div style={modal} onClick={(e) => e.stopPropagation()}>
        <button style={closeBtn} onClick={onClose} aria-label="Close">
          <X size={16} />
        </button>

        <div style={iconWrap}>
          <Sparkles size={22} color="var(--color-primary)" />
        </div>

        <h3 style={title}>Enjoying the preview?</h3>
        <p style={body}>
          Create a free account to save your progress, chat with HyeTutor,
          and unlock all 30,000+ practice questions.
        </p>

        <button style={primaryBtn}>Create free account</button>
        <button style={ghostBtn} onClick={onClose}>
          Keep exploring
        </button>
      </div>
    </div>
  )
}

const backdrop = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 999,
  padding: 16,
}

const modal = {
  position: 'relative',
  background: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-2xl)',
  padding: 'var(--space-5)',
  maxWidth: 380,
  width: '100%',
  textAlign: 'center',
  fontFamily: 'inherit',
}

const closeBtn = {
  position: 'absolute',
  top: 12,
  right: 12,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: 'var(--color-text-muted)',
}

const iconWrap = {
  width: 48,
  height: 48,
  borderRadius: '50%',
  background: 'var(--color-primary-light)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 12px',
}

const title = {
  fontSize: 'var(--font-size-lg)',
  fontWeight: 700,
  color: 'var(--color-text)',
  margin: '0 0 8px',
}

const body = {
  fontSize: 'var(--font-size-sm)',
  color: 'var(--color-text-secondary)',
  lineHeight: 1.5,
  margin: '0 0 20px',
}

const primaryBtn = {
  width: '100%',
  padding: '12px 18px',
  background: 'var(--color-primary)',
  color: 'white',
  border: 'none',
  borderRadius: 'var(--radius-lg)',
  fontFamily: 'inherit',
  fontSize: 'var(--font-size-sm)',
  fontWeight: 600,
  cursor: 'pointer',
  marginBottom: 8,
}

const ghostBtn = {
  width: '100%',
  padding: '10px 18px',
  background: 'transparent',
  color: 'var(--color-text-secondary)',
  border: 'none',
  fontFamily: 'inherit',
  fontSize: 'var(--font-size-sm)',
  fontWeight: 500,
  cursor: 'pointer',
}
