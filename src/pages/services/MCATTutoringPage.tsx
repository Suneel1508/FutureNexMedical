import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Clock, 
  Users, 
  Target, 
  CheckCircle, 
  Star,
  Calendar,
  TrendingUp,
  BookOpen
} from 'lucide-react'
import { useCart } from '../../contexts/CartContext'

const MCATTutoringPage = () => {
  const { addToCart } = useCart()

  const packages = [
    {
      id: 'mcat-basic',
      name: 'Basic MCAT Package',
      hours: 10,
      price: 1500,
      description: 'Perfect for students who need focused help in specific areas',
      features: [
        '10 hours of one-on-one tutoring',
        'Diagnostic assessment and score analysis',
        'Customized study plan',
        'Practice problems and review',
        'Progress tracking'
      ],
      popular: false
    },
    {
      id: 'mcat-standard',
      name: 'Standard MCAT Package',
      hours: 20,
      price: 2800,
      description: 'Most popular choice for comprehensive MCAT preparation',
      features: [
        '20 hours of one-on-one tutoring',
        'Full-length practice tests',
        'Comprehensive content review',
        'Test-taking strategies',
        'Weekly progress reports',
        'Email support between sessions'
      ],
      popular: true
    },
    {
      id: 'mcat-premium',
      name: 'Premium MCAT Package',
      hours: 40,
      price: 5200,
      description: 'Complete MCAT mastery with extensive support',
      features: [
        '40 hours of one-on-one tutoring',
        'Unlimited practice tests',
        'Complete content library access',
        'Interview preparation bonus',
        'Medical school application guidance',
        '24/7 support access',
        'Score improvement guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Martinez',
      score: '520',
      improvement: '+18 points',
      review: 'FutureNex transformed my MCAT preparation completely. Their personalized approach helped me improve my score by 18 points. The tutors were incredibly knowledgeable and supportive throughout my journey.',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Michael Chen',
      score: '518',
      improvement: '+16 points',
      review: 'The one-on-one tutoring was phenomenal. My tutor identified my weak areas and created a personalized study plan that led to a 16-point improvement in my score.',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Emily Rodriguez',
      score: '515',
      improvement: '+14 points',
      review: 'The structured approach and regular assessments kept me on track. I felt confident and well-prepared on test day thanks to FutureNex.',
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ]

  const features = [
    {
      icon: Target,
      title: 'Personalized Study Plans',
      description: 'Custom study schedules based on your diagnostic scores and target goals'
    },
    {
      icon: Users,
      title: 'Expert Tutors',
      description: '95th percentile MCAT scorers with extensive teaching experience'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Online and in-person sessions that fit your busy schedule'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Regular assessments and detailed progress reports'
    }
  ]

  const handleAddToCart = (pkg: typeof packages[0]) => {
    addToCart({
      id: pkg.id,
      name: pkg.name,
      description: `${pkg.hours} hours of one-on-one MCAT tutoring`,
      price: pkg.price,
      category: 'MCAT Preparation'
    })
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MCAT One-on-One Tutoring
            </h1>
            <p className="text-xl md:text-2xl text-sage-100 mb-8 max-w-3xl mx-auto">
              Achieve your target MCAT score with personalized tutoring from 95th percentile scorers
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

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our MCAT Tutoring?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our personalized approach ensures you get the targeted help you need to achieve your best possible score.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
                Comprehensive MCAT Preparation
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our one-on-one MCAT tutoring provides personalized instruction tailored to your 
                  specific needs and learning style. Each session is designed to maximize your 
                  score improvement through targeted practice and strategic test-taking techniques.
                </p>
                <p>
                  Our expert tutors have all scored in the 95th percentile or higher on the MCAT 
                  and have extensive experience helping students achieve their target scores.
                </p>
              </div>
              
              <div className="mt-8 space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">What's Included:</h3>
                <div className="space-y-2">
                  {[
                    'Customized study plans based on diagnostic scores',
                    'Expert tutors with 95th percentile MCAT scores',
                    'Flexible scheduling (in-person and online options)',
                    'Progress tracking and regular assessments',
                    'Content review and practice problem solving',
                    'Test-taking strategies and time management'
                  ].map((item) => (
                    <div key={item} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="text-center mb-6">
                <BookOpen className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Average Score Improvement</h3>
                <div className="text-4xl font-bold text-primary-600 mt-2">+15 Points</div>
                <p className="text-gray-600 mt-2">Based on our students' performance</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Score Improvement Rate</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Students Tutored</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your MCAT Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the package that best fits your preparation needs and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                      <span className="text-gray-600 ml-2">/ {pkg.hours} hours</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      ${Math.round(pkg.price / pkg.hours)} per hour
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

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our MCAT tutoring has helped students achieve their target scores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="text-primary-600 font-semibold">MCAT: {testimonial.score}</span>
                      <span className="text-gray-500">({testimonial.improvement})</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  "{testimonial.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Boost Your MCAT Score?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join hundreds of successful students who achieved their target scores with our expert tutoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-secondary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-600 transition-colors"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book a Meeting
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

export default MCATTutoringPage