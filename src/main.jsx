import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import LoginPage from './Login.jsx'
import { HashRouter, Route, Router, Routes } from 'react-router'
import StartPage from './mainpage.jsx';

createRoot(document.getElementById('rootmain')).render(
  <HashRouter>
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<StartPage/>} />
    </Routes>
  </HashRouter>
)
