import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'

import { PreviewProvider } from './pages/showcase/PreviewProvider'
import ShowcaseLayout from './pages/showcase/ShowcaseLayout'
import ShowcaseShell from './pages/showcase/ShowcaseShell'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route
        path="/showcase"
        element={
          <PreviewProvider>
            <ShowcaseLayout>
              <ShowcaseShell />
            </ShowcaseLayout>
          </PreviewProvider>
        }
      />
    </Routes>
  )
    }
