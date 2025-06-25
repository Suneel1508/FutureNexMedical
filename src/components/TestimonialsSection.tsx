import React from 'react'
import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Martinez',
      program: 'Harvard Medical School, Class of 2025',
      achievement: 'MCAT Score: 520',
      review: 'FutureNex transformed my MCAT preparation completely. Their personalized approach helped me improve my score by 18 points. The tutors were incredibly knowledgeable and supportive throughout my journey.',
      rating: 5,
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Michael Chen',
      program: 'Johns Hopkins BS/MD Program',
      achievement: 'Direct Medical Admission',
      review: 'The admissions consulting team at FutureNex guided me through the complex BS/MD application process. Their expertise in direct medical programs was invaluable in securing my spot.',
      rating: 5,
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Emily Rodriguez',
      program: 'Stanford Medical School, Class of 2024',
      achievement: 'Full Scholarship Recipient',
      review: 'From personal statement review to interview preparation, FutureNex provided comprehensive support. I not only got accepted but also received a full scholarship to my dream school.',
      rating: 5,
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'David Thompson',
      program: 'USMLE Step 1 - Pass',
      achievement: 'First Attempt Success',
      review: 'The USMLE preparation program at FutureNex was exactly what I needed. Their structured approach and practice materials helped me pass Step 1 on my first attempt with confidence.',
      rating: 5,
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Jessica Park',
      program: 'UCLA Medical School, Class of 2026',
      achievement: 'Multiple Acceptances',
      review: 'I received acceptances from 8 medical schools thanks to FutureNex\'s guidance. Their application strategy and interview coaching made all the difference in my success.',
      rating: 5,
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Robert Kim',
      program: 'Mayo Clinic Medical School',
      achievement: 'MCAT Score: 518',
      review: 'The one-on-one MCAT tutoring was phenomenal. My tutor identified my weak areas and created a personalized study plan that led to a 16-point improvement in my score.',
      rating: 5,
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our successful students have to say 
            about their experience with FutureNex Medical Consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="testimonial-card card p-6 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-4 right-4 text-primary-200">
                <Quote className="h-8 w-8" />
              </div>
              
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-primary-600 font-semibold">{testimonial.program}</p>
                  <p className="text-xs text-gray-500">{testimonial.achievement}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a free consultation to discuss your medical career goals and learn how 
              we can help you achieve the same level of success as our students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Schedule Free Consultation
              </button>
              <button className="btn-secondary">
                Read More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection