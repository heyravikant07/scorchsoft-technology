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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<ServicepageCard />} />
          <Route path="/Contact" element={<ContactpageCard /> } />
          <Route path="/FAQ" element={<FAQPage />} />
          <Route path="/Careers" element={<CareerPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
