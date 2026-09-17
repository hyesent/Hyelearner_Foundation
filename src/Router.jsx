import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route
        path="/showcase"
        element={<div style={{ padding: 40 }}>Showcase works</div>}
      />
    </Routes>
  )
}
