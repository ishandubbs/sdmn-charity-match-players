import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import CreatePage from './pages/CreatePage'
import SummaryPage from './pages/SummaryPage'
import EditPage from './pages/EditPage'
import DetailPage from './pages/DetailPage'
import './App.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<SummaryPage />} />
          <Route path='create' element={<CreatePage />} />
          <Route path='edit/:id' element={<EditPage />} />
          <Route path='player/:id' element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
