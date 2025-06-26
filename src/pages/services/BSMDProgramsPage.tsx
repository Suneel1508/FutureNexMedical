import React from 'react'
import { Link } from 'react-router-dom'
import { 
  GraduationCap, 
  CheckCircle, 
  Clock, 
  Users, 
  Target,
  Calendar,
  TrendingUp,
  FileText,
  MessageSquare
} from 'lucide-react'
import { useCart } from '../../contexts/CartContext'

const BSMDProgramsPage = () => {
  const { addToCart } = useCart()

  const packages = [
    {
      id: 'bsmd-comprehensive',
      name: 'Comprehensive BS/MD Package',
      price: 3500,
      description: 'Complete application cycle support for BS/MD and BA/MD programs',
      features: [
        'Program research and school selection strategy',
        'Application timeline and requirement tracking',
        'Personal statement development and editing',
        'Interview preparation and mock interviews',
        'Academic planning and extracurricular guidance',
        'Letters of recommendation strategy',
        'Application review and optimization',
        'Ongoing support throughout the cycle'
      ],
      popular: true
    },
    {
      id: 'bsmd-consultation',
      name: 'Individual Consultation Sessions',
      price: 200,
      description: 'Hourly consultation sessions for targeted guidance',
      features: [
        'One-hour consultation sessions',
        'Flexible scheduling',
        'Expert guidance on specific topics',
        'Personalized advice and strategies',
        'Follow-up email support'
      ],
      popular: false
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'Comprehensive evaluation of your academic profile, extracurriculars, and goals',
      duration: 'Week 1'
    },
    {
      step: 2,
      title: 'Program Research',
      description: 'Identify the best-fit BS/MD and BA/MD programs based on your profile',
      duration: 'Weeks 2-3'
    },
    {
      step: 3,
      title: 'Application Strategy',
      description: 'Develop a comprehensive application timeline and strategy',
      duration: 'Week 4'
    },
    {
      step: 4,
      title: 'Personal Statement',
      description: 'Craft compelling personal statements and essays',
      duration: 'Weeks 5-8'
    },
    {
      step: 5,
      title: 'Application Submission',
      description: 'Review and submit applications with ongoing support',
      duration: 'Weeks 9-12'
    },
    {
      step: 6,
      title: 'Interview Preparation',
      description: 'Intensive interview coaching and mock interview sessions',
      duration: 'Weeks 13-16'
    }
  ]

  const successStats = [
    { label: 'Acceptance Rate', value: '85%', description: 'of our students accepted to BS/MD programs' },
    { label: 'Average Programs', value: '12', description: 'BS/MD programs applied to per student' },
    { label: 'Success Stories', value: '200+', description: 'students placed in direct medical programs' },
    { label: 'Expert Consultants', value: '15+', description: 'years of combined experience' }
  ]

  const handleAddToCart = (pkg: typeof packages[0]) => {
    addToCart({
      id: pkg.id,
      name: pkg.name,
      description: pkg.description,
      price: pkg.price,
      category: 'BS/MD Programs'
    })
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              BS/MD & BA/MD Program Consulting
            </h1>
            <p className="text-xl md:text-2xl text-sage-100 mb-8 max-w-3xl mx-auto">
              Navigate the competitive world of direct medical programs with expert guidance and proven strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-secondary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-600 transition-colors"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book a Meeting
              </Link>
              <a
                href="#packages"
                className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sage-700 transition-colors"
              >
                View Packages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've helped hundreds of students gain admission to prestigious BS/MD and BA/MD programs across the country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successStats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Complete BS/MD & BA/MD Application Support
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Direct medical programs are among the most competitive pathways to medical school, 
                  with acceptance rates often below 5%. Our comprehensive consulting service provides 
                  the strategic guidance and personalized support you need to stand out.
                </p>
                <p>
                  Our experienced consultants have helped hundreds of students navigate the complex 
                  application process, from program selection to interview preparation, resulting in 
                  an 85% acceptance rate to BS/MD programs.
                </p>
              </div>
              
              <div className="mt-8 space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">What Sets Us Apart:</h3>
                <div className="space-y-2">
                  {[
                    'Former admissions committee members on our team',
                    'Personalized strategy for each student\'s unique profile',
                    'Comprehensive program database and selection tools',
                    'Proven interview preparation methodology',
                    'Ongoing support throughout the entire process'
                  ].map((item) => (
                    <div key={item} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
              <div className="text-center mb-6">
                <GraduationCap className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Why Choose BS/MD Programs?</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Guaranteed Medical School Admission</h4>
                  <p className="text-sm text-gray-600">Secure your spot in medical school without the stress of MCAT and traditional applications</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Accelerated Timeline</h4>
                  <p className="text-sm text-gray-600">Complete your medical education in 6-8 years instead of the traditional 8+ years</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Integrated Curriculum</h4>
                  <p className="text-sm text-gray-600">Seamless transition from undergraduate to medical school with specialized support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to BS/MD applications that maximizes your chances of success.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={step.step} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="text-sm text-primary-600 font-semibold mb-2">{step.duration}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full font-bold">
                    {step.step}
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the level of support that best fits your needs and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-primary-500 transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="bg-primary-500 text-white text-center py-2 px-4">
                    <span className="font-semibold">Most Popular</span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                    <p className="text-gray-600 mt-2">{pkg.description}</p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900">${pkg.price.toLocaleString()}</span>
                      {pkg.id === 'bsmd-consultation' && (
                        <span className="text-gray-600 ml-2">/ hour</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleAddToCart(pkg)}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                      pkg.popular
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your BS/MD Journey Today
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join the 85% of our students who successfully gained admission to BS/MD programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-secondary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-600 transition-colors"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Free Consultation
            </Link>
            <Link
              to="/cart"
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              View Cart
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BSMDProgramsPage