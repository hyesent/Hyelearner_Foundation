// ============================================================
// HYELEARNER: FOUNDATION — SHOWCASE LAYOUT
// Sticky banner reminds users this is a preview.
// Has an exit button to return to the landing page.
// Built by Hyesent.dev
// ============================================================

import { useNavigate } from 'react-router-dom'
import { Eye, X } from 'lucide-react'

export function ShowcaseLayout({ children, pageName = 'this page' }) {
  const navigate = useNavigate()

  const handleExit = () => navigate('/')

  return (
    <>
      <div style={banner}>
        <Eye size={16} />
        <span style={bannerText}>
          <strong>Preview mode</strong> — exploring {pageName}. Sample data.
        </span>
        <button onClick={handleExit} style={exitBtn} aria-label="Exit preview">
          Exit preview <X size={14} />
        </button>
      </div>
      {children}
    </>
  )
}

const banner = {
  position: 'sticky',
  top: 0,
  zIndex: 100,
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  padding: '10px 16px',
  background: 'var(--color-primary)',
  color: 'white',
  fontSize: 'var(--font-size-sm)',
  fontFamily: 'inherit',
}

const bannerText = { flex: 1, minWidth: 0 }

const exitBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  padding: '6px 12px',
  background: 'rgba(255, 255, 255, 0.15)',
  color: 'white',
  border: '1px solid rgba(255, 255, 255, 0.35)',
  borderRadius: 'var(--radius-full)',
  fontFamily: 'inherit',
  fontSize: 'var(--font-size-xs)',
  fontWeight: 600,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'background 200ms',
}
