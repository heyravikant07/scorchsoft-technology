import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/global/Header'
import Footer from './components/global/Footer'
import ServicepageCard from './components/pages/servicepage/ServicepageCard'
import ContactpageCard from './components/pages/contactpage/ContactpageCard'
import FAQPage from './components/pages/FAQpage/FAQPage'
import CareerPage from './components/pages/Careerpage/CareerPage'
import BlogPage from './components/pages/blogpage/Blogpage'
import Aboutpage from './components/pages/Aboutpage/Aboutpage'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<ServicepageCard />} />
          <Route path="/Contact" element={<ContactpageCard /> } />
          <Route path="/FAQ" element={<FAQPage />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/Careers" element={<CareerPage />} />
          <Route path="/About" element={<Aboutpage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
