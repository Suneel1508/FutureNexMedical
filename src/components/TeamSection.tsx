import React from 'react'
import { Link } from 'react-router-dom'
import { Linkedin, Mail, ArrowRight } from 'lucide-react'

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Founder & Medical Director',
      credentials: 'MD, Harvard Medical School',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former admissions committee member with 15+ years of experience in medical education consulting.',
      specialties: ['Medical School Admissions', 'USMLE Preparation', 'Career Guidance'],
      linkedin: '#',
      email: 'sarah@futurenex.com'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'MCAT Director',
      credentials: 'MD/PhD, Johns Hopkins',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'MCAT expert with perfect score achievement and 10+ years of tutoring experience.',
      specialties: ['MCAT Preparation', 'Test Strategy', 'Science Review'],
      linkedin: '#',
      email: 'michael@futurenex.com'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Admissions Consultant',
      credentials: 'MD, Stanford University',
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Specializes in BS/MD programs and direct medical admissions with exceptional success rates.',
      specialties: ['BS/MD Programs', 'Interview Prep', 'Personal Statements'],
      linkedin: '#',
      email: 'emily@futurenex.com'
    },
    {
      name: 'Dr. James Wilson',
      role: 'USMLE/COMLEX Specialist',
      credentials: 'MD, Mayo Clinic',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Board-certified physician with expertise in USMLE and COMLEX preparation strategies.',
      specialties: ['USMLE Steps 1-3', 'COMLEX Levels 1-3', 'Clinical Skills'],
      linkedin: '#',
      email: 'james@futurenex.com'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team consists of experienced medical professionals, former admissions committee 
            members, and top-scoring MCAT tutors dedicated to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="team-card card p-6 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6 overflow-hidden rounded-full mx-auto w-32 h-32">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image w-full h-full object-cover transition-transform duration-300"
                />
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary-600 font-semibold">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.credentials}</p>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Specialties:</h4>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center space-x-3 pt-4">
                  <a
                    href={member.linkedin}
                    className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/team"
            className="inline-flex items-center btn-secondary"
          >
            Meet Our Full Team
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TeamSection