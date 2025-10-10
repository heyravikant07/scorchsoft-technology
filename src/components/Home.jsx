import React from 'react'
// import Header from './global/Header'
import HeroSection from './homepage/HeroSection'
import Features from './homepage/Features'
import About from './homepage/About'
import ServicesSection from './homepage/ServicesSection'
import Projects from './homepage/Projects'
import CTA from './homepage/CTA'
import ContactForm from './homepage/ContactForm'
import Clients from './homepage/Clients'
import Blog from './homepage/BlogSection'
// import Footer from './global/Footer'
// import ServicepageCard from './pages/servicepage/ServicepageCard'

function Home() {
  return (
    <div>
        {/* <div className='font-sans'> */}
        {/* <Header /> */}
        <main>
          <HeroSection />
          <Features />
          <About />
          <ServicesSection />
          <Projects />
          <CTA />
          <ContactForm />
          <Clients />
          <Blog />
        </main>
        {/* <ServicepageCard /> */}
        {/* <Footer /> */}
    </div>
    // </div>
  )
}

export default Home
