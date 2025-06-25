import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Users, 
  Target, 
  Award, 
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const AboutServices = () => {
  const services = [
    'MCAT Preparation & Tutoring',
    'Medical School Admissions Consulting',
    'BS/MD & BA/MD Program Guidance',
    'USMLE/COMLEX Preparation',
    'Interview Preparation',
    'Personal Statement Review',
    'Application Timeline Planning',
    'Scholarship & Financial Aid Guidance'
  ]

  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Medical professionals and admissions experts'
    },
    {
      icon: Target,
      title: 'Personalized Approach',
      description: 'Tailored strategies for each student'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: '95% success rate in medical school admissions'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Our Story */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About FutureNex Medical Consulting
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At FutureNex, we are dedicated to helping aspiring medical professionals 
                  achieve their dreams. Our team of experienced consultants and medical 
                  professionals provides personalized guidance throughout your medical 
                  education journey.
                </p>
                <p>
                  With over a decade of experience in medical education consulting, we have 
                  helped hundreds of students gain admission to top medical schools and 
                  excel in their medical careers. Our comprehensive approach combines 
                  academic excellence with personal development.
                </p>
                <p>
                  We understand that each student's path is unique, which is why we offer 
                  personalized strategies tailored to individual strengths, goals, and 
                  circumstances. From MCAT preparation to residency matching, we're with 
                  you every step of the way.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-3">
                    <feature.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center btn-primary"
            >
              Learn More About Us
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>

          {/* Right Column - Our Services */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Services
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We offer comprehensive support for every aspect of your medical education 
                journey, from undergraduate preparation to residency matching.
              </p>
            </div>

            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={service}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary-50 p-6 rounded-xl">
              <h4 className="font-bold text-primary-900 mb-2">Ready to Get Started?</h4>
              <p className="text-primary-700 mb-4">
                Schedule a free consultation to discuss your medical career goals and 
                learn how we can help you achieve them.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center btn-primary text-sm"
              >
                Schedule Free Consultation
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutServices