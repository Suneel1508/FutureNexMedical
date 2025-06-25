import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  GraduationCap,
  Stethoscope
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-sage-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                {/* Original FutureNex Logo Base */}
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center relative">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-sage-700 rounded-full"></div>
                  </div>
                  {/* Graduation Cap on top */}
                  <GraduationCap className="h-6 w-6 text-secondary-300 absolute -top-2 -right-1 transform rotate-12" />
                  {/* Stethoscope accent */}
                  <Stethoscope className="h-4 w-4 text-white absolute -bottom-1 -left-1 transform -rotate-12" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">FutureNex</h3>
                <p className="text-xs text-sage-300 -mt-1">Medical Consulting</p>
              </div>
            </Link>
            <p className="text-sage-200 text-sm leading-relaxed">
              Empowering the next generation of medical professionals with expert guidance, 
              personalized support, and proven strategies for success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sage-400 hover:text-secondary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-sage-400 hover:text-secondary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-sage-400 hover:text-secondary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-sage-400 hover:text-secondary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary-300">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sage-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sage-200 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/team" className="text-sage-200 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/testimonials" className="text-sage-200 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/blog" className="text-sage-200 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sage-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary-300">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/mcat" className="text-sage-200 hover:text-white transition-colors">MCAT Preparation</Link></li>
              <li><Link to="/admissions" className="text-sage-200 hover:text-white transition-colors">Medical School Admissions</Link></li>
              <li><Link to="/usmle" className="text-sage-200 hover:text-white transition-colors">USMLE/COMLEX Prep</Link></li>
              <li><Link to="/direct-med" className="text-sage-200 hover:text-white transition-colors">BS/MD Programs</Link></li>
              <li><Link to="/interview-prep" className="text-sage-200 hover:text-white transition-colors">Interview Preparation</Link></li>
              <li><Link to="/personal-statement" className="text-sage-200 hover:text-white transition-colors">Personal Statement Review</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary-300">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary-400 mt-0.5 flex-shrink-0" />
                <div className="text-sage-200 text-sm">
                  <p>123 Medical Plaza</p>
                  <p>Suite 456</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary-400 flex-shrink-0" />
                <span className="text-sage-200 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary-400 flex-shrink-0" />
                <span className="text-sage-200 text-sm">info@futurenex.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-secondary-400 mt-0.5 flex-shrink-0" />
                <div className="text-sage-200 text-sm">
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 10:00 AM - 4:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-sage-600">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-2 text-secondary-300">Stay Updated</h4>
            <p className="text-sage-200 text-sm mb-4">
              Subscribe to our newsletter for the latest medical education insights and tips.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-sage-700 border border-sage-600 rounded-lg text-white placeholder-sage-400 focus:outline-none focus:border-secondary-500"
              />
              <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-2 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-sage-600 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sage-400 text-sm">
            © 2024 FutureNex Medical Consulting. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sage-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sage-400 hover:text-white text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer