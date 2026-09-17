// src/showcase/ShowcaseLayout.jsx
import { useNavigate } from 'react-router-dom'
import { Eye, X } from 'lucide-react'
import { usePreview } from './PreviewContext'

export function ShowcaseLayout({ children, pageName = 'this page' }) {
  const navigate = useNavigate()
  const { previewMode, exitPreview, interactions, nudgeAfter } = usePreview()

  const handleExit = () => {
    exitPreview()        // turn off preview mode
    navigate('/')        // leave /showcase
  }

  return (
    <>
      {previewMode && (
        <div style={banner}>
          <Eye size={16} />
          <span style={bannerText}>
            <strong>Preview mode</strong> — exploring {pageName}. Sample data.
          </span>
          <span style={counter}>
            {Math.min(interactions, nudgeAfter)}/{nudgeAfter} free actions
          </span>
          <button onClick={handleExit} style={bannerClose} aria-label="Exit preview">
            <X size={14} />
          </button>
        </div>
      )}
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

const counter = {
  fontSize: 'var(--font-size-xs)',
  opacity: 0.85,
  whiteSpace: 'nowrap',
}

const bannerClose = {
  background: 'transparent',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  padding: 4,
}
