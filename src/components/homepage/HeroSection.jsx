import React from 'react'
import HeroSectionbg from "../../assets/Herosection.webp"
import Aboutworkimg from "../../assets/aboutwork.jpg"
import Banlogo from "../../assets/Ban01.webp"

function HeroSection() {
  return (
    <section className="  relative bg-gradient-to-b from-[#7e0c0b] to-[#b51c1a] text-white ">
       {/* <img src={Aboutworkimg} alt="hero" className="absolute inset-0 w-full h-full object-cover opacity-60"/>  */}
      <div className="relative max-w-6xl mx-auto px-6 py-15 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Modern IT & Tech Service Solutions</h1>
          <p className="mt-4 text-gray-200 max-w-xl">We deliver tailored IT solutions — cloud, security, software and managed services to help your business scale.</p>
          <div className="mt-6 flex gap-4">
            <a href="/Contact" className="bg-red-600 hover:bg-white hover:text-red-600 px-5 py-3 rounded-md font-semibold">Contact Us</a>
            <button className="border border-white px-5 py-3 font-bold rounded-md">Watch Video</button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {/* <div className="w-full max-w-md bg-white/90 rounded-xl p-6 shadow-lg">
            <h3 className="text-gray-800 font-semibold">Get a Free Consultation</h3>
            <p className="text-sm text-gray-600 mt-2">Tell us about your project and we'll help you plan next steps.</p>
            <form className="mt-4 space-y-3">
              <input className="w-full p-2 border rounded text-gray-500" placeholder="Your name" />
              <input className="w-full p-2 border rounded text-gray-500" placeholder="Email" />
              <button className="w-full bg-red-600 text-white p-2 rounded">Request Quote</button>
            </form>
          </div> */}
          <img src={Banlogo} alt='herologo' className='w-100 h-100' />
        </div>
      </div>
    </section>
  );
}


export default HeroSection