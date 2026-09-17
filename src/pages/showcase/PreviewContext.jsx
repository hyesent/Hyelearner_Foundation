// src/showcase/PreviewContext.jsx
import { createContext, useContext, useState, useCallback } from 'react'

const PreviewContext = createContext(null)

export function PreviewProvider({ children }) {
  const [previewMode, setPreviewMode] = useState(false)
  const [interactions, setInteractions] = useState(0)
  const NUDGE_AFTER = 3

  const enterPreview = useCallback(() => setPreviewMode(true), [])

  const exitPreview = useCallback(() => {
    setPreviewMode(false)
    setInteractions(0)
  }, [])

  const registerInteraction = useCallback(() => {
    let next = 0
    setInteractions((c) => {
      next = c + 1
      return next
    })
    return next
  }, [])

  return (
    <PreviewContext.Provider
      value={{
        previewMode,
        interactions,
        nudgeAfter: NUDGE_AFTER,
        enterPreview,
        exitPreview,
        registerInteraction,
      }}
    >
      {children}
    </PreviewContext.Provider>
  )
}

export const usePreview = () => {
  const ctx = useContext(PreviewContext)
  if (!ctx) throw new Error('usePreview must be used inside PreviewProvider')
  return ctx
}
