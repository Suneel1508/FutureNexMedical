import React from 'react'
import { Link } from 'react-router-dom'
import { 
  GraduationCap, 
  BookOpen, 
  FileText, 
  Stethoscope,
  ArrowRight
} from 'lucide-react'

const ServiceCards = () => {
  const services = [
    {
      icon: GraduationCap,
      title: 'College & Direct Med Admissions',
      description: 'Navigate BS/MD and BA/MD programs with expert guidance from our experienced consultants.',
      link: '#',
      color: 'bg-primary-500'
    },
    {
      icon: BookOpen,
      title: 'MCAT Tutoring',
      description: 'Personalized MCAT preparation with proven strategies and comprehensive study plans.',
      link: '#',
      color: 'bg-secondary-500'
    },
    {
      icon: FileText,
      title: 'Medical School Applications',
      description: 'Comprehensive medical school application support from start to finish.',
      link: '#',
      color: 'bg-sage-600'
    },
    {
      icon: Stethoscope,
      title: 'USMLE/COMLEX Tutoring',
      description: 'Expert tutoring for USMLE and COMLEX examinations with personalized study plans.',
      link: '#',
      color: 'bg-accent-600'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support for every step of your medical education journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card p-8 text-center group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${service.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <Link
                to={service.link}
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
              >
                Learn More
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceCards