// ============================================================
// BOOKMARK BUTTON COMPONENT
// Reusable bookmark button for questions
// Used by: CBT Practice, Topic Mode, Mock Exams
// Built by Hyesent.dev
// ============================================================

import { useState, useEffect } from 'react'
import { Bookmark, BookmarkCheck } from 'lucide-react'
import { storage } from '../storage'

export function BookmarkButton({ 
  question, 
  size = 'md',
  showLabel = false,
  className = '',
  onToggle = null,
}) {
  const [isBookmarked, setIsBookmarked] = useState(false)

  // Check if question is bookmarked on mount and when question changes
  useEffect(() => {
    if (question?.id) {
      const bookmarks = storage.getBookmarks()
      const exists = bookmarks.some(b => 
        b.targetId === question.id && b.targetType === 'question'
      )
      setIsBookmarked(exists)
    }
  }, [question?.id])

  // Listen for storage changes (other tabs/windows)
  useEffect(() => {
    const handleStorageChange = () => {
      if (question?.id) {
        const bookmarks = storage.getBookmarks()
        const exists = bookmarks.some(b => 
          b.targetId === question.id && b.targetType === 'question'
        )
        setIsBookmarked(exists)
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [question?.id])

  const toggleBookmark = (e) => {
    e.stopPropagation() // Prevent triggering parent click events
    
    if (!question?.id) return

    const bookmarks = storage.getBookmarks()
    const exists = bookmarks.some(b => 
      b.targetId === question.id && b.targetType === 'question'
    )

    if (exists) {
      // Remove bookmark
      const updated = bookmarks.filter(b => 
        !(b.targetId === question.id && b.targetType === 'question')
      )
      storage.saveBookmarks(updated)
      setIsBookmarked(false)
    } else {
      // Add bookmark
      storage.addBookmark({
        targetId: question.id,
        targetType: 'question',
        title: question.question?.slice(0, 100) || 'Question',
        topic: question.topic || 'General',
        subject: question.subject || 'General',
        difficulty: question.difficulty || 'medium',
        answer: question.answer || '',
        explanation: question.explanation || '',
      })
      setIsBookmarked(true)
    }

    // Callback if provided
    if (onToggle) {
      onToggle(!exists)
    }
  }

  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }

  const buttonSizes = {
    sm: 'p-1',
    md: 'p-1.5',
    lg: 'p-2',
  }

  return (
    <button
      onClick={toggleBookmark}
      className={`btn btn-ghost flex-center ${buttonSizes[size] || buttonSizes.md} ${className}`}
      style={{ 
        borderRadius: 'var(--radius-full)',
        transition: 'all var(--transition)',
        color: isBookmarked ? 'var(--color-primary)' : 'var(--color-text-muted)',
        background: isBookmarked ? 'var(--color-primary-light)' : 'transparent',
        hover: {
          background: isBookmarked ? 'var(--color-primary-light)' : 'var(--color-surface-hover)',
        }
      }}
      title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
      aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      {isBookmarked ? (
        <BookmarkCheck className={`${sizes[size] || sizes.md}`} fill="currentColor" />
      ) : (
        <Bookmark className={`${sizes[size] || sizes.md}`} />
      )}
      {showLabel && (
        <span style={{ 
          fontSize: 'var(--font-size-xs)', 
          marginLeft: 'var(--space-1)',
          color: 'inherit'
        }}>
          {isBookmarked ? 'Saved' : 'Save'}
        </span>
      )}
    </button>
  )
}

// ============================================================
// BOOKMARK INDICATOR — Small dot to show if a question is bookmarked
// ============================================================
export function BookmarkIndicator({ question, size = 'sm' }) {
  const [isBookmarked, setIsBookmarked] = useState(false)

  useEffect(() => {
    if (question?.id) {
      const bookmarks = storage.getBookmarks()
      const exists = bookmarks.some(b => 
        b.targetId === question.id && b.targetType === 'question'
      )
      setIsBookmarked(exists)
    }
  }, [question?.id])

  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  }

  if (!isBookmarked) return null

  return (
    <span 
      className={`inline-block ${sizes[size] || sizes.sm}`}
      style={{ 
        borderRadius: '50%',
        background: 'var(--color-primary)',
        marginLeft: 'var(--space-1)',
        display: 'inline-block',
      }}
      title="Bookmarked"
    />
  )
}

export default BookmarkButton
