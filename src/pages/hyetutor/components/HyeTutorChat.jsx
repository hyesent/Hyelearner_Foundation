// ============================================================
// HYELEARNER: HYETUTOR — CHAT (DUAL MODE)
// mode="embedded" → compact card (used inside HyeTutor page)
// mode="full"     → full chat surface (used inside modal)
// Tap header in embedded mode → triggers onExpand()
// Built by Hyesent.dev
// ============================================================

import { useState, useRef, useEffect } from 'react'
import {
  Send,
  MessageSquare,
  Loader2,
  Sparkles,
  Lightbulb,
  Maximize2,
} from 'lucide-react'

export function HyeTutorChat({
  insights = [],
  onAsk,
  loading,
  mode = 'embedded',
  onExpand,
  initialMessage,
  onClose,
}) {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [error, setError] = useState(null)
  const chatEndRef = useRef(null)
  const didInitRef = useRef(false)

  const suggestedQuestions = [
    'Why is my Physics score dropping?',
    'Can I still get 320 in JAMB?',
    'Should I revise or take a mock exam today?',
    'What should I focus on this week?',
  ]

  // Seed insights as first message (embedded mode only)
  useEffect(() => {
    if (
      mode === 'embedded' &&
      insights &&
      insights.length > 0 &&
      messages.length === 0
    ) {
      setMessages([
        {
          id: 'insights',
          sender: 'hye',
          content: {
            text: "I've been analyzing your study patterns and noticed a few things:",
            insights: insights.slice(0, 3),
          },
        },
      ])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [insights, mode])

  // Scroll on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  // Send helper — works in both modes
  const sendMessage = async (text) => {
    const trimmed = text.trim()
    if (!trimmed || isTyping) return

    setMessages((prev) => [
      ...prev,
      { id: `u_${Date.now()}`, sender: 'user', content: { text: trimmed } },
    ])
    setInput('')
    setIsTyping(true)
    setError(null)

    try {
      const response = await onAsk(trimmed)
      const aiText =
        typeof response === 'string'
          ? response
          : response?.answer || response?.text || response?.message || ''

      setMessages((prev) => [
        ...prev,
        {
          id: `h_${Date.now()}`,
          sender: 'hye',
          content: {
            text:
              aiText ||
              "I couldn't generate a response. Try asking differently.",
          },
        },
      ])
    } catch (err) {
      setError('Failed to get response. Please try again.')
      setMessages((prev) => [
        ...prev,
        {
          id: `h_${Date.now()}`,
          sender: 'hye',
          content: {
            text: "I'm having trouble connecting right now. Please try again in a moment.",
          },
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  // Auto-send initialMessage (used when modal opens with pre-filled message)
  useEffect(() => {
    if (didInitRef.current) return
    didInitRef.current = true
    if (initialMessage && typeof initialMessage === 'string' && initialMessage.trim()) {
      sendMessage(initialMessage)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSend = () => sendMessage(input)

  const isFull = mode === 'full'

  return (
    <div
      className={isFull ? '' : 'card'}
      style={
        isFull
          ? {
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              background: 'var(--color-surface)',
            }
          : { padding: 'var(--space-4)', cursor: 'default' }
      }
    >
      {/* ===== HEADER ===== */}
      <div
        className="flex-between"
        style={{
          gap: 'var(--space-2)',
          alignItems: 'center',
          marginBottom: 'var(--space-3)',
          padding: isFull ? 'var(--space-4) var(--space-4) 0' : 0,
          flexShrink: 0,
        }}
      >
        <div
          className="flex"
          style={{ gap: 'var(--space-2)', alignItems: 'center' }}
        >
          <MessageSquare
            size={18}
            style={{ color: 'var(--color-primary)' }}
          />
          <span
            style={{
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'var(--font-size-base)',
              color: 'var(--color-text)',
            }}
          >
            HyeTutor
          </span>
          <span
            style={{
              fontWeight: 600,
              fontSize: 'var(--font-size-base)',
              color: 'var(--color-text)',
            }}
          >
            Chat
          </span>
          <span
            className="badge badge-primary"
            style={{ fontSize: 'var(--font-size-xs)' }}
          >
            <Sparkles size={12} /> AI Coach
          </span>
        </div>

        {/* Embedded: tap header/title area to expand */}
        {!isFull && onExpand && (
          <button
            onClick={onExpand}
            className="btn btn-ghost"
            style={{ padding: 'var(--space-1) var(--space-2)' }}
            aria-label="Expand chat"
            title="Open full chat"
          >
            <Maximize2 size={16} />
          </button>
        )}
      </div>

      {/* ===== MESSAGES ===== */}
      <div
        style={{
          maxHeight: isFull ? 'none' : 220,
          flex: isFull ? 1 : 'none',
          overflowY: 'auto',
          marginBottom: 'var(--space-3)',
          paddingRight: 'var(--space-2)',
          padding: isFull ? '0 var(--space-4)' : 0,
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              marginBottom: 'var(--space-2)',
              display: 'flex',
              justifyContent:
                msg.sender === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <div
              style={{
                maxWidth: '85%',
                padding: 'var(--space-2) var(--space-3)',
                borderRadius:
                  msg.sender === 'user'
                    ? 'var(--radius-xl) var(--radius-xl) var(--radius-sm) var(--radius-xl)'
                    : 'var(--radius-xl) var(--radius-xl) var(--radius-xl) var(--radius-sm)',
                background:
                  msg.sender === 'user'
                    ? 'var(--color-primary)'
                    : 'var(--color-background)',
                color:
                  msg.sender === 'user' ? 'white' : 'var(--color-text)',
                border:
                  msg.sender === 'user'
                    ? 'none'
                    : '1px solid var(--color-border)',
                fontSize: 'var(--font-size-sm)',
                lineHeight: 1.5,
                whiteSpace: 'pre-wrap',
              }}
            >
              {msg.content.insights ? (
                <>
                  <div>{msg.content.text}</div>
                  <ul
                    style={{
                      marginTop: 'var(--space-2)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--space-1)',
                    }}
                  >
                    {msg.content.insights.map((insight, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          gap: 'var(--space-2)',
                          alignItems: 'flex-start',
                          fontSize: 'var(--font-size-xs)',
                        }}
                      >
                        <Lightbulb
                          size={14}
                          style={{
                            color: 'var(--color-warning)',
                            flexShrink: 0,
                            marginTop: 2,
                          }}
                        />
                        <span>
                          {typeof insight === 'string'
                            ? insight
                            : insight.message || JSON.stringify(insight)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div>{msg.content.text}</div>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              marginBottom: 'var(--space-2)',
            }}
          >
            <div
              style={{
                padding: 'var(--space-2) var(--space-3)',
                borderRadius: 'var(--radius-xl)',
                background: 'var(--color-background)',
                border: '1px solid var(--color-border)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
              }}
            >
              <Loader2
                size={16}
                style={{ animation: 'spin 1s linear infinite' }}
              />
              Thinking...
            </div>
          </div>
        )}

        {error && (
          <div
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-danger)',
              marginTop: 'var(--space-1)',
            }}
          >
            ⚠️ {error}
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* ===== SUGGESTIONS ===== */}
      {messages.length === 0 && !isTyping && (
        <div
          className="flex"
          style={{
            gap: 'var(--space-2)',
            flexWrap: 'wrap',
            marginBottom: 'var(--space-3)',
            padding: isFull ? '0 var(--space-4)' : 0,
            flexShrink: 0,
          }}
        >
          {suggestedQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => sendMessage(q)}
              style={{
                padding: 'var(--space-1) var(--space-3)',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-text-secondary)',
                cursor: 'pointer',
                transition: 'all var(--transition)',
              }}
            >
              💡 {q}
            </button>
          ))}
        </div>
      )}

      {/* ===== INPUT ===== */}
      <div
        className="flex"
        style={{
          gap: 'var(--space-2)',
          padding: isFull ? 'var(--space-3) var(--space-4)' : 0,
          borderTop: isFull ? '1px solid var(--color-border)' : 'none',
          flexShrink: 0,
        }}
      >
        <input
          type="text"
          className="input"
          placeholder="Ask HyeTutor anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleSend()
            }
          }}
          style={{ flex: 1 }}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || loading || isTyping}
          className="btn btn-primary"
          style={{ padding: 'var(--space-2) var(--space-3)' }}
          aria-label="Send"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  )
}
