import React from 'react'
import HeroSection from '../components/HeroSection'
import ServiceCards from '../components/ServiceCards'
import AboutServices from '../components/AboutServices'
import StatsSection from '../components/StatsSection'
import TeamSection from '../components/TeamSection'
import TestimonialsSection from '../components/TestimonialsSection'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServiceCards />
      <AboutServices />
      <StatsSection />
      <TeamSection />
      <TestimonialsSection />
    </div>
  )
}

export default HomePage