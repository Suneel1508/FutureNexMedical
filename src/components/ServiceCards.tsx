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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unlock a world of possibilities with our Study Abroad Program!
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Here, education transcends borders, offering you the chance to immerse yourself in 
            diverse cultures, gain global perspectives, and achieve academic excellence. Whether 
            you're exploring new languages, engaging with innovative research, or building a 
            network of international connections, our program is designed to enrich your learning 
            journey and shape your future.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
            Our courses are meticulously designed to cover every section of the MCAT in detail. 
            You'll explore essential topics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={service.title}
              className="card p-8 text-center group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <img
                  src={`https://images.pexels.com/photos/${5327580 + index}/pexels-photo-${5327580 + index}.jpeg?auto=compress&cs=tinysrgb&w=400`}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-700">0{index + 1}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title === 'College & Direct Med Admissions' ? 'Biology' : 
                 service.title === 'MCAT Tutoring' ? 'Chemistry' : 'Organic Chemistry'}
              </h3>
              
              <div className="text-2xl font-bold text-gray-900 mb-6">
                $4999
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="card p-8 text-center group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="relative mb-6">
                <img
                  src={`https://images.pexels.com/photos/${5327580 + index + 3}/pexels-photo-${5327580 + index + 3}.jpeg?auto=compress&cs=tinysrgb&w=400`}
                  alt={`Course ${index + 3}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-700">0{index + 4}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {index === 1 ? 'Biochemistry' : index === 2 ? 'Physics' : 'Psychology'}
              </h3>
              
              <div className="text-2xl font-bold text-gray-900 mb-6">
                $4999
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceCards