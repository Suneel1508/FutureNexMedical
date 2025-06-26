import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Calendar, 
  Clock, 
  User, 
  CreditCard, 
  MessageSquare, 
  Settings,
  BookOpen,
  TrendingUp,
  Bell
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const DashboardPage = () => {
  const { user } = useAuth()

  const upcomingAppointments = [
    {
      id: '1',
      date: '2024-01-15',
      time: '2:00 PM',
      consultant: 'Dr. Sarah Johnson',
      service: 'MCAT Strategy Session',
      type: 'Video Call'
    },
    {
      id: '2',
      date: '2024-01-18',
      time: '10:00 AM',
      consultant: 'Dr. Michael Chen',
      service: 'Medical School Application Review',
      type: 'In-Person'
    }
  ]

  const recentActivity = [
    {
      id: '1',
      type: 'booking',
      description: 'Booked MCAT tutoring session',
      date: '2024-01-10',
      icon: BookOpen
    },
    {
      id: '2',
      type: 'payment',
      description: 'Payment processed for Premium Package',
      date: '2024-01-08',
      icon: CreditCard
    },
    {
      id: '3',
      type: 'message',
      description: 'New message from Dr. Johnson',
      date: '2024-01-05',
      icon: MessageSquare
    }
  ]

  const quickActions = [
    {
      title: 'Book New Meeting',
      description: 'Schedule a consultation',
      icon: Calendar,
      link: '/book-appointment',
      color: 'bg-primary-500'
    },
    {
      title: 'View Services',
      description: 'Explore our offerings',
      icon: BookOpen,
      link: '/services',
      color: 'bg-secondary-500'
    },
    {
      title: 'Contact Support',
      description: 'Get help when you need it',
      icon: MessageSquare,
      link: '/support',
      color: 'bg-sage-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 mt-2">
            Here's what's happening with your medical education journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {quickActions.map((action) => (
                  <Link
                    key={action.title}
                    to={action.link}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow group"
                  >
                    <div className={`inline-flex items-center justify-center w-10 h-10 ${action.color} rounded-lg mb-3 group-hover:scale-110 transition-transform`}>
                      <action.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{action.title}</h3>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Upcoming Appointments */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Upcoming Appointments</h2>
                <Link to="/appointments" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  View All
                </Link>
              </div>
              
              {upcomingAppointments.length > 0 ? (
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{appointment.service}</h3>
                          <p className="text-gray-600 text-sm">with {appointment.consultant}</p>
                          <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(appointment.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {appointment.time}
                            </div>
                          </div>
                        </div>
                        <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                          {appointment.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No upcoming appointments</p>
                  <Link to="/book-appointment" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Schedule your first consultation
                  </Link>
                </div>
              )}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <activity.icon className="h-4 w-4 text-gray-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900">{activity.description}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(activity.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Summary */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Summary</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500">Student</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{user?.programInterest}</p>
                    <p className="text-xs text-gray-500">Program Interest</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Active</p>
                    <p className="text-xs text-gray-500">Membership Status</p>
                  </div>
                </div>
              </div>
              <Link
                to="/profile"
                className="mt-4 w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors inline-block text-center"
              >
                Edit Profile
              </Link>
            </div>

            {/* Navigation Menu */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Dashboard Menu</h3>
              <nav className="space-y-2">
                <Link
                  to="/appointments"
                  className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
                >
                  <Calendar className="h-5 w-5" />
                  <span>My Appointments</span>
                </Link>
                <Link
                  to="/payment-history"
                  className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
                >
                  <CreditCard className="h-5 w-5" />
                  <span>Payment History</span>
                </Link>
                <Link
                  to="/support"
                  className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Support Tickets</span>
                </Link>
                <Link
                  to="/profile"
                  className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
                >
                  <Settings className="h-5 w-5" />
                  <span>Profile Settings</span>
                </Link>
              </nav>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                <Bell className="h-5 w-5 text-gray-400" />
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-primary-50 border border-primary-200 rounded-md">
                  <p className="text-sm text-primary-800">
                    Your MCAT session is scheduled for tomorrow at 2:00 PM
                  </p>
                </div>
                <div className="p-3 bg-secondary-50 border border-secondary-200 rounded-md">
                  <p className="text-sm text-secondary-800">
                    New study materials available in your account
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage