import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Phone, 
  Mail, 
  ShoppingCart, 
  Menu, 
  X, 
  ChevronDown,
  GraduationCap,
  Stethoscope,
  User,
  LogOut
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const { getTotalItems } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/')
    setIsUserMenuOpen(false)
  }

  const navigationItems = [
    {
      title: 'Why FutureNex',
      items: [
        { name: 'Our Story', href: '#' },
        { name: 'Our Team', href: '#' },
        { name: 'Our Services', href: '#' },
        { name: 'Our Differences', href: '#' },
        { name: 'Success Stories', href: '#' },
        { name: 'Testimonials', href: '#' },
        { name: 'For Parents', href: '#' },
        { name: 'In the News', href: '#' },
        { name: 'FAQs', href: '#' }
      ]
    },
    {
      title: 'MCAT',
      items: [
        { name: 'One-on-One Tutoring', href: '/services/mcat/one-on-one-tutoring', highlighted: true },
        { name: 'Group Classes', href: '#' },
        { name: 'Self-Paced Course', href: '#' },
        { name: 'Free MCAT Resources', href: '#' },
        { name: 'MCAT Practice Tests', href: '#' }
      ]
    },
    {
      title: 'Admissions',
      items: [
        { name: 'College & Direct Medical (BS/MD & BA/MD)', href: '/services/admissions/bs-md-programs', highlighted: true },
        { name: 'Medical School Application Advising', href: '#', highlighted: true },
        { name: 'Interview Preparation', href: '#' },
        { name: 'Personal Statement Review', href: '#' },
        { name: 'Application Timeline Planning', href: '#' }
      ]
    },
    {
      title: 'USMLE/COMLEX',
      items: [
        { name: 'USMLE Step 1', href: '#' },
        { name: 'USMLE Step 2', href: '#', highlighted: true },
        { name: 'USMLE Step 3', href: '#' },
        { name: 'COMLEX Level 1', href: '#' },
        { name: 'COMLEX Level 2', href: '#' },
        { name: 'COMLEX Level 3', href: '#' }
      ]
    },
    {
      title: 'Partner with Us',
      items: [
        { name: 'Become a Tutor', href: '#' },
        { name: 'Institutional Partnerships', href: '#' },
        { name: 'Referral Program', href: '#' }
      ]
    },
    {
      title: 'Free Resources',
      items: [
        { name: 'Blog Articles', href: '#' },
        { name: 'Study Guides', href: '#' },
        { name: 'Practice Questions', href: '#' },
        { name: 'Webinars', href: '#' },
        { name: 'Podcast', href: '#' }
      ]
    }
  ]

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-600" />
                <span className="text-gray-700">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-600" />
                <span className="text-gray-700">info@futurenex.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
                Contact Us
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-primary-600 transition-colors">
                Blog
              </Link>
              {!user ? (
                <Link to="/login" className="bg-primary-600 text-white px-4 py-1 rounded-md hover:bg-primary-700 transition-colors">
                  Student Login
                </Link>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <User className="h-4 w-4" />
                    <span>{user.name}</span>
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Profile Settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut className="h-4 w-4 inline mr-2" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 bg-sage-700 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                {/* Original FutureNex Logo Base */}
                <div className="w-10 h-10 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center relative group-hover:scale-105 transition-transform">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-sage-700 rounded-full"></div>
                  </div>
                  {/* Graduation Cap on top */}
                  <GraduationCap className="h-5 w-5 text-secondary-300 absolute -top-1 -right-1 transform rotate-12 group-hover:text-secondary-200 transition-colors" />
                  {/* Stethoscope accent */}
                  <Stethoscope className="h-3 w-3 text-white absolute -bottom-1 -left-1 transform -rotate-12 group-hover:text-secondary-200 transition-colors" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white group-hover:text-secondary-200 transition-colors">
                  FutureNex
                </h1>
                <p className="text-xs text-sage-200 -mt-1">Medical Consulting</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.title} className="relative dropdown">
                  <button className="nav-link flex items-center space-x-1 py-2">
                    <span>{item.title}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="dropdown-menu">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                          subItem.highlighted 
                            ? 'text-primary-600 font-semibold' 
                            : 'text-gray-700 hover:text-primary-600'
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative p-2 text-white hover:text-secondary-300 transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-secondary-300 transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4">
              {navigationItems.map((item) => (
                <div key={item.title} className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <div className="pl-4 space-y-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className={`block py-1 text-sm transition-colors ${
                          subItem.highlighted 
                            ? 'text-primary-600 font-semibold' 
                            : 'text-gray-600 hover:text-primary-600'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header