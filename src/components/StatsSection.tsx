import React, { useState, useEffect, useRef } from 'react'
import { TrendingUp, Users, Award, Clock } from 'lucide-react'

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    successRate: 0,
    studentsPlaced: 0,
    mcatImprovement: 0,
    experience: 0
  })
  
  const sectionRef = useRef<HTMLDivElement>(null)

  const stats = [
    {
      icon: TrendingUp,
      value: 95,
      suffix: '%',
      label: 'Success Rate in Medical School Admissions',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Students Placed in Top Medical Schools',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Award,
      value: 15,
      suffix: ' Points',
      label: 'Average MCAT Score Improvement',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Clock,
      value: 10,
      suffix: '+',
      label: 'Years of Experience',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounts({
          successRate: Math.floor(95 * progress),
          studentsPlaced: Math.floor(500 * progress),
          mcatImprovement: Math.floor(15 * progress),
          experience: Math.floor(10 * progress)
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCounts({
            successRate: 95,
            studentsPlaced: 500,
            mcatImprovement: 15,
            experience: 10
          })
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Track Record Speaks for Itself
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over the years, we've helped hundreds of students achieve their medical career goals 
            with our proven strategies and personalized approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const currentValue = Object.values(counts)[index]
            
            return (
              <div
                key={stat.label}
                className="card p-8 text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2 stats-counter`}>
                  {currentValue}{stat.suffix}
                </div>
                
                <p className="text-gray-600 font-medium leading-tight">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional Context */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why These Numbers Matter
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Proven Success</h4>
                <p className="text-gray-600">
                  Our 95% success rate isn't just a number—it represents hundreds of students 
                  who achieved their dreams of becoming doctors through our guidance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Measurable Improvement</h4>
                <p className="text-gray-600">
                  Our students see an average 15-point improvement in MCAT scores, 
                  significantly increasing their chances of admission to top medical schools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection