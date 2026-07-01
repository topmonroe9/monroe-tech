import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './app-context.jsx'
import Layout from './Layout.jsx'
import Landing from './Landing.jsx'
import Work from './Work.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="work" element={<Work />} />
            <Route path="*" element={<Landing />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>,
)
