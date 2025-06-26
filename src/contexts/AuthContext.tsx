import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  name: string
  email: string
  role: 'student' | 'admin'
  programInterest?: string
  phone?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (userData: RegisterData) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

interface RegisterData {
  name: string
  email: string
  password: string
  phone: string
  programInterest: string
  agreeToTerms: boolean
  agreeToPrivacy: boolean
  marketingOptIn: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session on app load
    const token = localStorage.getItem('authToken')
    const userData = localStorage.getItem('userData')
    
    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData)
        setUser(parsedUser)
      } catch (error) {
        localStorage.removeItem('authToken')
        localStorage.removeItem('userData')
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call - replace with actual authentication
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock authentication logic
      if (email === 'admin@futurenex.com' && password === 'admin123') {
        const adminUser: User = {
          id: '1',
          name: 'Admin User',
          email: 'admin@futurenex.com',
          role: 'admin'
        }
        setUser(adminUser)
        localStorage.setItem('authToken', 'mock-admin-token')
        localStorage.setItem('userData', JSON.stringify(adminUser))
        return true
      } else if (email === 'student@example.com' && password === 'student123') {
        const studentUser: User = {
          id: '2',
          name: 'John Doe',
          email: 'student@example.com',
          role: 'student',
          programInterest: 'MCAT Prep',
          phone: '(555) 123-4567'
        }
        setUser(studentUser)
        localStorage.setItem('authToken', 'mock-student-token')
        localStorage.setItem('userData', JSON.stringify(studentUser))
        return true
      }
      return false
    } catch (error) {
      console.error('Login error:', error)
      return false
    }
  }

  const register = async (userData: RegisterData): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const newUser: User = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        role: 'student',
        programInterest: userData.programInterest,
        phone: userData.phone
      }
      
      setUser(newUser)
      localStorage.setItem('authToken', 'mock-token-' + newUser.id)
      localStorage.setItem('userData', JSON.stringify(newUser))
      return true
    } catch (error) {
      console.error('Registration error:', error)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('authToken')
    localStorage.removeItem('userData')
  }

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    isLoading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}