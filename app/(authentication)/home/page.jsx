"use client";
import AboutUsSection from '@/components/aboutus/AboutUs'
import BannerSection from '@/components/banner/BannerSection'
import Footer from '@/components/footer/Footer'
import GallerySection from '@/components/gallerysection/GallerySection'
import Hero from '@/components/hero/Hero'
import NewsletterSection from '@/components/newsSection/NewsSection'
import Projects from '@/components/projects/Projects'
import Section2 from '@/components/section2/Section2'
import SpecialitySection from '@/components/specialitySection/SpecialitySection'
import Testimonials from '@/components/testimonials/Testimonials'
import React from 'react'

export default function page() {
  return (
    <div>
        <Hero />
        <Section2/>
        <SpecialitySection/>
        <GallerySection/>
        <AboutUsSection/>
        <Projects />
        <Testimonials />
        <BannerSection/>
        <NewsletterSection/>
        <Footer/>
      
        
    </div>
  )
}

