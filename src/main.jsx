import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* View */}
      <Route exact path="/" element={<Home/>} />
    </Routes>
  </BrowserRouter>
)