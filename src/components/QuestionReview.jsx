// ============================================================
// QUESTION REVIEW COMPONENT
// Reusable component for reviewing exam questions
// Used by: CBT Practice, Topic Mode, Mock Exams, Duo Battle
// Built by Hyesent.dev
// ============================================================

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  CheckCircle2, 
  XCircle, 
  ArrowLeft, 
  ArrowRight,
  RotateCw,
  Home,
  Target,
  Bookmark,
  BookmarkCheck,
  AlertCircle,
  Info,
  Zap,
  Target as TargetIcon
} from 'lucide-react'
import { storage } from '../storage'

export function QuestionReview({ 
  questions, 
  answers, 
  subject, 
  topic = 'All Topics',
  mode = 'Practice',
  xpEarned = 0,
  onRetry, 
  onClose,
  showBookmark = true,
  showRetry = true,
  showHome = true,
}) {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const total = questions.length
  const answeredCount = Object.keys(answers).length

  // Calculate stats
  let correct = 0, wrong = 0, skipped = 0
  questions.forEach((q) => {
    const userAnswer = answers[q.id]
    if (!userAnswer) {
      skipped++
    } else if (userAnswer === q.answer) {
      correct++
    } else {
      wrong++
    }
  })
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0

  // Bookmark toggle
  const toggleBookmark = (question) => {
    const bookmarks = storage.getBookmarks()
    const exists = bookmarks.some(b => b.targetId === question.id && b.targetType === 'question')
    
    if (exists) {
      const updated = bookmarks.filter(b => !(b.targetId === question.id && b.targetType === 'question'))
      storage.saveBookmarks(updated)
    } else {
      storage.addBookmark({
        targetId: question.id,
        targetType: 'question',
        title: question.question?.slice(0, 100) || 'Question',
        topic: question.topic || 'General',
        subject: question.subject || subject || 'General',
      })
    }
    // Force re-render by updating state (we'll use a key or force update)
    // We'll handle this differently since we're not in a component with state for this
  }

  // Check if question is bookmarked
  const isBookmarked = (question) => {
    const bookmarks = storage.getBookmarks()
    return bookmarks.some(b => b.targetId === question.id && b.targetType === 'question')
  }

  const currentQuestion = questions[currentIndex]
  const letters = ['A', 'B', 'C', 'D']

  // Helper: extract dash number for cloze placeholders
  const extractDashNumber = (q) => {
    if (!q) return null
    const m = (q.question || '').match(/dash\s*#?(\d+)/i)
    if (m) return m[1]
    const m2 = (q.id || '').match(/(\d+)$/)
    if (m2) return m2[1]
    return null
  }

  const renderPassage = (q, fillValueForThisPlaceholder = null, showCorrectFill = false) => {
    if (!q || !q.passage) return null
    const dashNum = extractDashNumber(q)
    const parts = q.passage.split(/(-\d+-)/g)

    return (
      <div className="card" style={{ marginBottom: 'var(--space-3)', padding: 'var(--space-3)' }}>
        {parts.map((part, i) => {
          const ph = part.match(/-(\d+)-/)
          if (ph) {
            const num = ph[1]
            const isThis = dashNum && String(num) === String(dashNum)
            let display = '_____'
            if (isThis) {
              display = fillValueForThisPlaceholder || '_____'
              if (showCorrectFill && q.answer) {
                // Optionally you can append correct answer or style differently
              }
            }
            const style = {
              display: 'inline-block',
              minWidth: '3ch',
              padding: '0 4px',
              fontWeight: isThis ? 600 : 400,
              color: isThis ? 'var(--color-text)' : 'var(--color-text-muted)'
            }
            return <span key={i} style={style}>{display}</span>
          }
          return <span key={i}>{part}</span>
        })}
      </div>
    )
  }

  if (total === 0) {
    return (
      <div className="empty-card text-center">
        <div className="icon"><AlertCircle style={{ width: '48px', height: '48px', color: 'var(--color-warning)' }} /></div>
        <div className="title">No Questions</div>
        <div className="desc">No questions to review.</div>
        <div className="action">
          <button onClick={onClose} className="btn btn-primary">Close</button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: 'var(--color-background)', padding: 'var(--space-6)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        
          {/* ===== HEADER ===== */}
        <div className="card flex-between" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
            <div className="flex-center" style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: 'var(--radius-xl)', 
              background: accuracy >= 70 ? 'var(--color-success-light)' : accuracy >= 50 ? 'var(--color-warning-light)' : 'var(--color-danger-light)' 
            }}>
              {accuracy >= 70 ? <CheckCircle2 style={{ width: '24px', height: '24px', color: 'var(--color-success)' }} /> :
               accuracy >= 50 ? <TargetIcon style={{ width: '24px', height: '24px', color: 'var(--color-warning)' }} /> :
               <XCircle style={{ width: '24px', height: '24px', color: 'var(--color-danger)' }} />}
            </div>
            <div>
              <h1 className="h2">{mode} Review</h1>
              <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                {subject} {topic !== 'All Topics' ? `• ${topic}` : ''}
              </p>
            </div>
          </div>
          <div className="flex" style={{ gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            {showRetry && (
              <button onClick={onRetry} className="btn btn-primary">
                <RotateCw style={{ width: '16px', height: '16px' }} /> Retry
              </button>
            )}
            {showHome && (
              <button onClick={onClose} className="btn btn-outline">
                <Home style={{ width: '16px', height: '16px' }} /> Dashboard
              </button>
            )}
          </div>
        </div>

        {/* ===== SUMMARY STATS ===== */}
        <div className="grid-4" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="stat-card text-center">
            <div className="h2" style={{ 
              color: accuracy >= 70 ? 'var(--color-success)' : accuracy >= 50 ? 'var(--color-warning)' : 'var(--color-danger)',
              margin: 0 
            }}>
              {accuracy}%
            </div>
            <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Accuracy</div>
          </div>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: 'var(--color-primary)', margin: 0 }}>{correct}/{total}</div>
            <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Correct</div>
          </div>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: 'var(--color-primary)', margin: 0 }}>+{xpEarned}</div>
            <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>XP Earned</div>
          </div>
          <div className="stat-card text-center">
            <div className="h2" style={{ color: 'var(--color-text-muted)', margin: 0 }}>{answeredCount}/{total}</div>
            <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Answered</div>
          </div>
        </div>

        {/* ===== CONTROLS ===== */}
        <div className="flex-between" style={{ marginBottom: 'var(--space-4)', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '500', color: 'var(--color-text)' }}>
              Question {currentIndex + 1} of {total}
            </span>
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-ghost"
              style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-1) var(--space-3)' }}
            >
              {showAll ? 'Show One' : 'Show All'}
            </button>
          </div>
          <div className="flex" style={{ gap: 'var(--space-2)' }}>
            <button
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="btn btn-outline"
              style={{ padding: 'var(--space-1) var(--space-3)', opacity: currentIndex === 0 ? '0.4' : '1' }}
            >
              <ArrowLeft style={{ width: '16px', height: '16px' }} />
            </button>
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', alignSelf: 'center' }}>
              {currentIndex + 1} / {total}
            </span>
            <button
              onClick={() => setCurrentIndex(prev => Math.min(total - 1, prev + 1))}
              disabled={currentIndex === total - 1}
              className="btn btn-outline"
              style={{ padding: 'var(--space-1) var(--space-3)', opacity: currentIndex === total - 1 ? '0.4' : '1' }}
            >
              <ArrowRight style={{ width: '16px', height: '16px' }} />
            </button>
          </div>
        </div>

        {/* ===== QUESTION PALETTE ===== */}
        <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
          <div className="flex" style={{ flexWrap: 'wrap', gap: 'var(--space-2)' }}>
            {questions.map((q, i) => {
              const userAnswer = answers[q.id]
              const isAnswered = !!userAnswer
              const isCorrect = userAnswer === q.answer
              const isCurrent = i === currentIndex
              return (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="flex-center"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius)',
                    background: isCurrent ? 'var(--color-primary)' :
                               isAnswered && isCorrect ? 'var(--color-success)' :
                               isAnswered && !isCorrect ? 'var(--color-danger)' :
                               'var(--color-border)',
                    color: isCurrent ? 'white' :
                           isAnswered ? 'white' :
                           'var(--color-text-secondary)',
                    fontWeight: '600',
                    fontSize: 'var(--font-size-sm)',
                    transition: 'all var(--transition)',
                    cursor: 'pointer',
                    border: 'none'
                  }}
                >
                  {i + 1}
                </button>
              )
            })}
          </div>
          <div className="flex" style={{ gap: 'var(--space-4)', marginTop: 'var(--space-4)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', flexWrap: 'wrap' }}>
            <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: 'var(--radius-sm)', background: 'var(--color-primary)' }} /> Current
            </span>
            <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: 'var(--radius-sm)', background: 'var(--color-success)' }} /> Correct
            </span>
            <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: 'var(--radius-sm)', background: 'var(--color-danger)' }} /> Wrong
            </span>
            <span className="flex" style={{ gap: 'var(--space-1)', alignItems: 'center' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: 'var(--radius-sm)', background: 'var(--color-border)' }} /> Unanswered
            </span>
          </div>
        </div>

        {/* ===== SINGLE QUESTION VIEW ===== */}
        {!showAll && currentQuestion && (
          <div className="card">
            <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
              <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
                <span className={`badge ${
                  answers[currentQuestion.id] === currentQuestion.answer ? 'badge-success' :
                  answers[currentQuestion.id] ? 'badge-danger' : 'badge-muted'
                }`}>
                  {!answers[currentQuestion.id] ? 'Skipped' :
                   answers[currentQuestion.id] === currentQuestion.answer ? '✅ Correct' : '❌ Wrong'}
                </span>
                <span className="badge badge-muted">{currentQuestion.topic || 'General'}</span>
                <span className={`badge ${
                  currentQuestion.difficulty === 'easy' ? 'badge-success' :
                  currentQuestion.difficulty === 'hard' ? 'badge-danger' : 'badge-warning'
                }`}>
                  {currentQuestion.difficulty || 'Medium'}
                </span>
              </div>
              {showBookmark && (
                <button
                  onClick={() => toggleBookmark(currentQuestion)}
                  className="btn btn-ghost"
                  style={{ padding: 'var(--space-1)' }}
                  title={isBookmarked(currentQuestion) ? 'Remove bookmark' : 'Add bookmark'}
                >
                  {isBookmarked(currentQuestion) ? 
                    <BookmarkCheck style={{ width: '20px', height: '20px', color: 'var(--color-primary)' }} /> :
                    <Bookmark style={{ width: '20px', height: '20px', color: 'var(--color-text-muted)' }} />
                  }
                </button>
              )}
            </div>

            {/* Passage for cloze / comprehension — filled with user's answer for this dash */}
            {currentQuestion.passage && renderPassage(currentQuestion, answers[currentQuestion.id], true)}

            <div className="h3" style={{ marginBottom: 'var(--space-6)' }}>
              Q{currentIndex + 1}: {currentQuestion.question}
            </div>

            <div className="stack" style={{ gap: 'var(--space-2)' }}>
              {currentQuestion.options.map((option, idx) => {
                const letter = letters[idx]
                const isCorrect = option === currentQuestion.answer
                const isSelected = answers[currentQuestion.id] === option
                const isSkipped = !answers[currentQuestion.id]

                let borderColor = 'var(--color-border)'
                let bgColor = 'var(--color-surface)'
                let textColor = 'var(--color-text)'

                if (isCorrect) {
                  borderColor = 'var(--color-success)'
                  bgColor = 'var(--color-success-light)'
                  textColor = 'var(--color-success)'
                } else if (isSelected && !isCorrect && !isSkipped) {
                  borderColor = 'var(--color-danger)'
                  bgColor = 'var(--color-danger-light)'
                  textColor = 'var(--color-danger)'
                }

                return (
                  <div
                    key={idx}
                    className="flex"
                    style={{
                      padding: 'var(--space-3) var(--space-4)',
                      borderRadius: 'var(--radius-xl)',
                      border: `2px solid ${borderColor}`,
                      background: bgColor,
                      color: textColor,
                      gap: 'var(--space-4)',
                      alignItems: 'center'
                    }}
                  >
                    <span className="flex-center" style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isCorrect ? 'var(--color-success)' :
                                 isSelected && !isCorrect ? 'var(--color-danger)' :
                                 'var(--color-border)',
                      color: isCorrect || (isSelected && !isCorrect) ? 'white' : 'var(--color-text-secondary)',
                      fontWeight: '700',
                      fontSize: 'var(--font-size-sm)'
                    }}>
                      {letter}
                    </span>
                    <span style={{ flex: 1 }}>{option}</span>
                    {isCorrect && <CheckCircle2 style={{ width: '20px', height: '20px', color: 'var(--color-success)' }} />}
                    {isSelected && !isCorrect && !isSkipped && <XCircle style={{ width: '20px', height: '20px', color: 'var(--color-danger)' }} />}
                  </div>
                )
              })}
            </div>

            {/* Explanation */}
            <div className="card" style={{ marginTop: 'var(--space-4)', background: 'var(--color-background)' }}>
              <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
                <Info style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} />
                <span style={{ fontWeight: '600', fontSize: 'var(--font-size-sm)' }}>Explanation</span>
              </div>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                {currentQuestion.explanation || 'No explanation available.'}
              </p>
            </div>

            {/* Why wrong */}
            {answers[currentQuestion.id] && answers[currentQuestion.id] !== currentQuestion.answer && (
              <div className="warning-card" style={{ marginTop: 'var(--space-3)' }}>
                <div className="flex" style={{ gap: 'var(--space-2)', alignItems: 'flex-start' }}>
                  <Zap style={{ width: '16px', height: '16px', color: 'var(--color-warning)', marginTop: '2px' }} />
                  <div>
                    <span style={{ fontWeight: '600', fontSize: 'var(--font-size-sm)' }}>Why you got this wrong:</span>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>
                      You chose "{answers[currentQuestion.id]}" but the correct answer is "{currentQuestion.answer}".
                      {currentQuestion.wrongExplanations && currentQuestion.wrongExplanations[answers[currentQuestion.id]] && (
                        <span> {currentQuestion.wrongExplanations[answers[currentQuestion.id]]}</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ===== ALL QUESTIONS VIEW ===== */}
        {showAll && (
          <div className="stack" style={{ gap: 'var(--space-4)', maxHeight: '60vh', overflowY: 'auto', paddingRight: 'var(--space-2)' }}>
            {questions.map((q, idx) => {
              const userAnswer = answers[q.id]
              const isCorrect = userAnswer === q.answer
              const isSkipped = !userAnswer

              return (
                <div key={q.id} className="card">
                  <div className="flex-between" style={{ marginBottom: 'var(--space-3)' }}>
                    <div className="flex" style={{ gap: 'var(--space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
                      <span className="h4" style={{ margin: 0 }}>Q{idx + 1}</span>
                      <span className={`badge ${
                        isSkipped ? 'badge-muted' :
                        isCorrect ? 'badge-success' : 'badge-danger'
                      }`}>
                        {isSkipped ? 'Skipped' :
                         isCorrect ? '✅ Correct' : '❌ Wrong'}
                      </span>
                    </div>
                    {showBookmark && (
                      <button
                        onClick={() => toggleBookmark(q)}
                        className="btn btn-ghost"
                        style={{ padding: 'var(--space-1)' }}
                      >
                        {isBookmarked(q) ? 
                          <BookmarkCheck style={{ width: '16px', height: '16px', color: 'var(--color-primary)' }} /> :
                          <Bookmark style={{ width: '16px', height: '16px', color: 'var(--color-text-muted)' }} />
                        }
                      </button>
                    )}
                  </div>

                  {/* Passage — fill the placeholder for this particular question when possible */}
                  {q.passage && renderPassage(q, answers[q.id], true)}

                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text)', marginBottom: 'var(--space-3)' }}>
                    {q.question}
                  </div>

                  <div className="flex" style={{ gap: 'var(--space-3)', fontSize: 'var(--font-size-sm)', flexWrap: 'wrap' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>Your answer: 
                      <span style={{ color: isSkipped ? 'var(--color-text-muted)' : isCorrect ? 'var(--color-success)' : 'var(--color-danger)', fontWeight: '600' }}>
                        {isSkipped ? ' Skipped' : ` ${userAnswer}`}
                      </span>
                    </span>
                    <span style={{ color: 'var(--color-text-muted)' }}>Correct: 
                      <span style={{ color: 'var(--color-success)', fontWeight: '600' }}> {q.answer}</span>
                    </span>
                  </div>

                  <div className="card" style={{ marginTop: 'var(--space-2)', background: 'var(--color-background)', padding: 'var(--space-3)' }}>
                    <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', margin: 0 }}>
                      <strong>Explanation:</strong> {q.explanation || 'No explanation available.'}
                    </p>
                  </div>

                  {!isSkipped && !isCorrect && q.wrongExplanations && q.wrongExplanations[userAnswer] && (
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-danger)', marginTop: 'var(--space-1)' }}>
                      💡 {q.wrongExplanations[userAnswer]}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* ===== BOTTOM ACTIONS ===== */}
        <div className="flex" style={{ gap: 'var(--space-3)', marginTop: 'var(--space-6)', flexWrap: 'wrap' }}>
          {showRetry && (
            <button onClick={onRetry} className="btn btn-primary flex-1 flex-center">
              <RotateCw style={{ width: '16px', height: '16px' }} /> Retry
            </button>
          )}
          {showHome && (
            <button onClick={onClose} className="btn btn-outline flex-1 flex-center">
              <Home style={{ width: '16px', height: '16px' }} /> Dashboard
            </button>
          )}
          <button
            onClick={() => navigate('/practice')}
            className="btn btn-outline flex-1 flex-center"
          >
            <TargetIcon style={{ width: '16px', height: '16px' }} /> Practice
          </button>
        </div>

      </div>
    </div>
  )
}

export default QuestionReview
