// ============================================================
// HYELEARNER: FOUNDATION — PARENT LOGIN (code-based)
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  Users,
  KeyRound,
  ArrowRight,
  AlertCircle,
  Loader2,
  ArrowLeft,
} from 'lucide-react'
import { parent as parentService } from '../../services'
import { ParentSlideshow } from './ParentSlideshow'

export default function ParentLogin() {
  const navigate = useNavigate()
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showSlideshow, setShowSlideshow] = useState(false)

  // If parent already has a code stored, skip straight to dashboard
  useEffect(() => {
    const stored = localStorage.getItem('hyelearner_parent_code')
    if (stored) {
      navigate('/parent/dashboard', { replace: true })
      return
    }

    const seen = localStorage.getItem('hyelearner_parent_slideshow_seen') === 'true'
    if (!seen) setShowSlideshow(true)
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const trimmed = code.trim().toUpperCase()
    if (trimmed.length < 4) {
      setError('Enter a valid code')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const res = await parentService.view(trimmed)
      if (!res || res.success !== true) {
        throw new Error('Invalid code')
      }
      localStorage.setItem('hyelearner_parent_code', trimmed)
      navigate('/parent/dashboard', { replace: true })
    } catch (err) {
      const msg =
        err?.response?.data?.detail ||
        err?.message ||
        'Invalid or expired code'
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  if (showSlideshow) {
    return (
      <ParentSlideshow
        onComplete={() => {
          setShowSlideshow(false)
        }}
      />
    )
  }

  return (
    <div style={s.page}>
      <div style={s.card}>
        <Link to="/" style={s.back}>
          <ArrowLeft size={16} />
          <span>Back</span>
        </Link>

        <div style={s.iconCircle}>
          <Users size={32} color="var(--color-success)" />
        </div>

        <h1 style={s.title}>Parent Access</h1>
        <p style={s.subtitle}>
          Enter the code your child generated from their settings.
        </p>

        <form onSubmit={handleSubmit} style={s.form}>
          <div style={s.inputWrap}>
            <KeyRound size={16} color="var(--color-text-muted)" style={s.inputIcon} />
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="A3F9K2"
              autoComplete="off"
              autoCapitalize="characters"
              maxLength={12}
              style={s.input}
              disabled={loading}
              autoFocus
            />
          </div>

          {error && (
            <div style={s.error}>
              <AlertCircle size={14} />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || code.trim().length < 4}
            style={{
              ...s.button,
              opacity: loading || code.trim().length < 4 ? 0.5 : 1,
              cursor: loading || code.trim().length < 4 ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Verifying</span>
              </>
            ) : (
              <>
                <span>Continue</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        <div style={s.hint}>
          Don't have a code? Ask your child to generate one from
          their settings under Parent Link.
        </div>
      </div>
    </div>
  )
}

const s = {
  page: {
    background: 'var(--color-background)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'var(--space-5)',
  },
  card: {
    maxWidth: 420,
    width: '100%',
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-2xl)',
    padding: 'var(--space-8)',
    position: 'relative',
  },
  back: {
    position: 'absolute',
    top: 'var(--space-4)',
    left: 'var(--space-4)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-muted)',
    textDecoration: 'none',
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: '50%',
    background: 'var(--color-success-light)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto var(--space-4)',
  },
  title: {
    fontSize: 'var(--font-size-2xl)',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    textAlign: 'center',
    color: 'var(--color-text)',
    margin: 0,
  },
  subtitle: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-muted)',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 'var(--space-6)',
    lineHeight: 1.55,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)',
  },
  inputWrap: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  inputIcon: {
    position: 'absolute',
    left: 14,
    pointerEvents: 'none',
  },
  input: {
    width: '100%',
    padding: '14px 14px 14px 40px',
    background: 'var(--color-background)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-lg)',
    fontSize: 'var(--font-size-base)',
    fontFamily: 'var(--font-mono)',
    fontWeight: 600,
    letterSpacing: '0.08em',
    color: 'var(--color-text)',
    outline: 'none',
    textTransform: 'uppercase',
  },
  error: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    padding: '10px 12px',
    background: 'var(--color-danger-light)',
    border: '1px solid var(--color-danger)',
    borderRadius: 'var(--radius-lg)',
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-danger)',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '14px',
    background: 'var(--color-success)',
    color: 'white',
    border: 'none',
    borderRadius: 'var(--radius-lg)',
    fontSize: 'var(--font-size-base)',
    fontWeight: 700,
    fontFamily: 'inherit',
    transition: 'opacity 150ms ease',
  },
  hint: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-muted)',
    textAlign: 'center',
    marginTop: 'var(--space-5)',
    lineHeight: 1.55,
  },
}
