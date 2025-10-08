import React from 'react'
import Header from './global/Header'
import HeroSection from './homepage/HeroSection'
import Features from './homepage/Features'
import About from './homepage/About'
import ServicesSection from './homepage/ServicesSection'
import Projects from './homepage/Projects'
import CTA from './homepage/CTA'
import ContactForm from './homepage/ContactForm'
import Clients from './homepage/Clients'
import Testimonials from './homepage/Testimonials'
import Blog from './homepage/Blog'
import Footer from './global/Footer'
import ServicepageCard from './servicepage/ServicepageCard'

function Home() {
  return (
    <div>
        <div className='font-sans'>
        <Header />
        <main>
          <HeroSection />
          <Features />
          <About />
          <ServicesSection />
          <Projects />
          <CTA />
          <ContactForm />
          <Clients />
          <Testimonials />
          <Blog />
        </main>
        <ServicepageCard />
        <Footer />
    </div>
    </div>
  )
}

export default Home
