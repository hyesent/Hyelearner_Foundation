// src/showcase/ViewOnly.jsx
import { useState } from 'react'
import { Lock } from 'lucide-react'
import { usePreview } from './PreviewContext'
import { SignupNudge } from './SignupNudge'

export function ViewOnly({ children, tooltip, allowInPreview = true }) {
  const { previewMode, enterPreview, registerInteraction, nudgeAfter } = usePreview()
  const [showNudge, setShowNudge] = useState(false)

  // ---- STATE 1: preview off → blurred + Try preview overlay ----
  if (!previewMode) {
    return (
      <div style={wrap}>
        <div style={blurred}>{children}</div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            enterPreview()
          }}
          style={overlayBtn}
          title={tooltip}
        >
          <Lock size={14} />
          <span>Try preview</span>
        </button>
      </div>
    )
  }

  // ---- STATE 2: preview on but this element is off-limits ----
  if (!allowInPreview) {
    return (
      <div style={wrap}>
        <div style={blurred}>{children}</div>
      </div>
    )
  }

  // ---- STATE 3: preview on and allowed → pass clicks, count them ----
  return (
    <div
      style={wrap}
      onClickCapture={(e) => {
        const count = registerInteraction()
        if (count > nudgeAfter) {
          e.preventDefault()
          e.stopPropagation()
          setShowNudge(true)
        }
      }}
    >
      {children}
      {showNudge && <SignupNudge onClose={() => setShowNudge(false)} />}
    </div>
  )
}

const wrap = { position: 'relative' }

const blurred = {
  opacity: 0.55,
  pointerEvents: 'none',
  userSelect: 'none',
  filter: 'blur(0.3px)',
  transition: 'opacity 200ms',
}

const overlayBtn = {
  position: 'absolute',
  inset: 0,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 6,
  background: 'rgba(0, 0, 0, 0.35)',
  color: 'white',
  border: 'none',
  borderRadius: 'var(--radius-lg)',
  fontFamily: 'inherit',
  fontSize: 'var(--font-size-sm)',
  fontWeight: 600,
  cursor: 'pointer',
  backdropFilter: 'blur(2px)',
  transition: 'background 200ms',
}
