// ============================================================
// HYELEARNER: HYETUTOR — REFLECTION MODAL
// Allows users to submit daily reflections to improve AI coaching
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect, useRef } from 'react'
import { X, Send, Sparkles, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

export function ReflectionModal({ 
  isOpen, 
  onClose, 
  onSubmit, 
  submitting = false, 
  success = false 
}) {
  const [reflection, setReflection] = useState('')
  const [error, setError] = useState(null)
  const textareaRef = useRef(null)

  // Focus textarea when modal opens
  useEffect(() => {
    if (isOpen && textareaRef.current) {
      setTimeout(() => textareaRef.current?.focus(), 100)
    }
  }, [isOpen])

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setReflection('')
      setError(null)
    }
  }, [isOpen])

  const handleSubmit = async () => {
    if (!reflection.trim()) {
      setError('Please write something about your study session.')
      return
    }

    setError(null)
    try {
      await onSubmit(reflection)
    } catch (err) {
      setError(err.message || 'Failed to submit reflection. Please try again.')
    }
  }

  const handleKeyDown = (e) => {
    // Submit on Cmd+Enter or Ctrl+Enter
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    }
    // Close on Escape
    if (e.key === 'Escape') {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'var(--space-4)',
          animation: 'fadeIn 0.2s ease-out'
        }}
        onClick={onClose}
      >
        {/* Modal */}
        <div
          style={{
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-xl)',
            maxWidth: '560px',
            width: '100%',
            padding: 'var(--space-6)',
            position: 'relative',
            boxShadow: 'var(--shadow-xl)',
            animation: 'slideUp 0.3s ease-out',
            maxHeight: '90vh',
            overflow: 'auto'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 'var(--space-3)',
              right: 'var(--space-3)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 'var(--space-1)',
              borderRadius: '50%',
              color: 'var(--color-text-muted)',
              transition: 'all var(--transition)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-background)'
              e.currentTarget.style.color = 'var(--color-text)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--color-text-muted)'
            }}
          >
            <X style={{ width: '20px', height: '20px' }} />
          </button>

          {/* Header */}
          <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
            <div className="flex-center" style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'var(--color-primary-light)'
            }}>
              <Sparkles style={{ width: '24px', height: '24px', color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: 'var(--font-size-lg)', color: 'var(--color-text)' }}>
                Daily Reflection
              </h2>
              <p style={{ 
                margin: 'var(--space-1) 0 0', 
                fontSize: 'var(--font-size-sm)', 
                color: 'var(--color-text-muted)' 
              }}>
                Help HyeTutor understand your study experience today
              </p>
            </div>
          </div>

          {/* Success State */}
          {success ? (
            <div style={{
              padding: 'var(--space-4)',
              background: 'var(--color-success-light)',
              borderRadius: 'var(--radius)',
              textAlign: 'center',
              border: '1px solid var(--color-success)'
            }}>
              <CheckCircle2 style={{ 
                width: '48px', 
                height: '48px', 
                color: 'var(--color-success)',
                margin: '0 auto var(--space-3)'
              }} />
              <h3 style={{ margin: 0, color: 'var(--color-success)' }}>Thank You! 🙏</h3>
              <p style={{ margin: 'var(--space-1) 0 0', color: 'var(--color-text-muted)' }}>
                Your reflection has been submitted. HyeTutor will use this to improve your coaching.
              </p>
            </div>
          ) : (
            <>
              {/* Tips */}
              <div style={{
                padding: 'var(--space-3)',
                background: 'var(--color-background)',
                borderRadius: 'var(--radius)',
                marginBottom: 'var(--space-4)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text-muted)'
              }}>
                <div style={{ fontWeight: '600', color: 'var(--color-text)', marginBottom: 'var(--space-1)' }}>
                  💡 What to reflect on:
                </div>
                <ul style={{ margin: 'var(--space-1) 0 0 var(--space-3)', lineHeight: '1.8' }}>
                  <li>What topics felt easy or difficult today?</li>
                  <li>Did you struggle with anything specific?</li>
                  <li>How focused were you during study sessions?</li>
                  <li>What would you like to do differently tomorrow?</li>
                </ul>
              </div>

              {/* Textarea */}
              <div style={{ marginBottom: 'var(--space-4)' }}>
                <label 
                  htmlFor="reflection" 
                  style={{ 
                    fontSize: 'var(--font-size-sm)', 
                    fontWeight: '600',
                    display: 'block',
                    marginBottom: 'var(--space-2)'
                  }}
                >
                  Write your reflection:
                </label>
                <textarea
                  ref={textareaRef}
                  id="reflection"
                  value={reflection}
                  onChange={(e) => {
                    setReflection(e.target.value)
                    if (error) setError(null)
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="e.g., I struggled with Algebra today, but Physics was easy. Tomorrow I'll focus on Trigonometry..."
                  style={{
                    width: '100%',
                    minHeight: '160px',
                    padding: 'var(--space-3)',
                    borderRadius: 'var(--radius)',
                    border: `1px solid ${error ? 'var(--color-danger)' : 'var(--color-border)'}`,
                    background: 'var(--color-background)',
                    color: 'var(--color-text)',
                    fontSize: 'var(--font-size-sm)',
                    resize: 'vertical',
                    outline: 'none',
                    transition: 'all var(--transition)',
                    fontFamily: 'inherit'
                  }}
                />
                {error && (
                  <div style={{
                    marginTop: 'var(--space-1)',
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--color-danger)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-1)'
                  }}>
                    <AlertCircle style={{ width: '14px', height: '14px' }} />
                    {error}
                  </div>
                )}
              </div>

              {/* Character Count */}
              <div style={{
                fontSize: 'var(--font-size-xs)',
                color: reflection.length > 500 ? 'var(--color-warning)' : 'var(--color-text-muted)',
                textAlign: 'right',
                marginBottom: 'var(--space-3)'
              }}>
                {reflection.length} characters {reflection.length > 500 && '⚠️'}
              </div>

              {/* Actions */}
              <div className="flex" style={{ gap: 'var(--space-2)', justifyContent: 'flex-end' }}>
                <button
                  onClick={onClose}
                  className="btn btn-ghost"
                  style={{ fontSize: 'var(--font-size-sm)' }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={submitting || !reflection.trim()}
                  className="btn btn-primary"
                  style={{
                    fontSize: 'var(--font-size-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}
                >
                  {submitting ? (
                    <>
                      <Loader2 style={{ width: '16px', height: '16px', animation: 'spin 1s linear infinite' }} />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send style={{ width: '16px', height: '16px' }} />
                      Submit Reflection
                    </>
                  )}
                </button>
              </div>

              <div style={{
                marginTop: 'var(--space-2)',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-text-muted)',
                textAlign: 'center'
              }}>
                ⌘ + Enter or Ctrl + Enter to submit
              </div>
            </>
          )}
        </div>
      </div>

      {/* Add keyframe animations if not already in global CSS */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}