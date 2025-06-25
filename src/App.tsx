import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Placeholder routes for future chunks */}
          <Route path="/about" element={<div className="pt-32 text-center">About Page - Coming in Chunk 2</div>} />
          <Route path="/services" element={<div className="pt-32 text-center">Services Page - Coming in Chunk 2</div>} />
          <Route path="/contact" element={<div className="pt-32 text-center">Contact Page - Coming in Chunk 2</div>} />
          <Route path="/login" element={<div className="pt-32 text-center">Login Page - Coming in Chunk 2</div>} />
          <Route path="/blog" element={<div className="pt-32 text-center">Blog Page - Coming in Chunk 3</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App