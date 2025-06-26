import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'
import Header from './components/Header'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import CartPage from './pages/CartPage'
import MCATTutoringPage from './pages/services/MCATTutoringPage'
import BSMDProgramsPage from './pages/services/BSMDProgramsPage'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/cart" element={<CartPage />} />
              
              {/* Service Pages */}
              <Route path="/services/mcat/one-on-one-tutoring" element={<MCATTutoringPage />} />
              <Route path="/services/admissions/bs-md-programs" element={<BSMDProgramsPage />} />
              
              {/* Protected Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              } />
              
              {/* Placeholder routes for future chunks */}
              <Route path="/about" element={<div className="pt-32 text-center">About Page - Coming in Chunk 3</div>} />
              <Route path="/services" element={<div className="pt-32 text-center">Services Page - Coming in Chunk 3</div>} />
              <Route path="/contact" element={<div className="pt-32 text-center">Contact Page - Coming in Chunk 3</div>} />
              <Route path="/blog" element={<div className="pt-32 text-center">Blog Page - Coming in Chunk 3</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  )
}

export default App