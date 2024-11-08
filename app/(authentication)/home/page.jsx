import Hero from '@/components/hero/Hero'
import Projects from '@/components/projects/Projects'
import Testimonials from '@/components/testimonials/Testimonials'
import React from 'react'

export default function page() {
  return (
    <div>
        <Hero />
        <Projects />
        <Testimonials />
    </div>
  )
}
