// ============================================================
// HYELEARNER: FOUNDATION — PREVIEW CONTEXT
// Free demo. Preview always on. No counter, no nudge.
// Built by Hyesent.dev
// ============================================================

import { createContext, useContext } from 'react'

const PreviewContext = createContext(null)

export function PreviewProvider({ children }) {
  return (
    <PreviewContext.Provider value={{ previewMode: true }}>
      {children}
    </PreviewContext.Provider>
  )
}

export const usePreview = () => {
  const ctx = useContext(PreviewContext)
  if (!ctx) throw new Error('usePreview must be used inside PreviewProvider')
  return ctx
}
