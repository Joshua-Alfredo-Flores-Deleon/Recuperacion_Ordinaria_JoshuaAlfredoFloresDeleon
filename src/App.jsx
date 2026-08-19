import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Inicio from "./pages/dashboard"
import Administracion  from './pages/administracion'
import Navbar from './components/navbar'

function App() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Inicio/> } />
          <Route path="Administracion" element={<Administracion/> } />
        </Routes>
      </BrowserRouter>
    )
}

export default App
