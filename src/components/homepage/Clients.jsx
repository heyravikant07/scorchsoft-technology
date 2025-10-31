import React, { useState, useEffect } from "react";
import Clientlogo1 from "../../assets/clientlogo1.png"
import Clientlogo2 from "../../assets/clientlogo2.png"
import Clientlogo3 from "../../assets/clientlogo3.png"
import Clientlogo4 from "../../assets/clientlogo4.png"

const clients = [
  { client: Clientlogo1, name: "Client 1" },
  { client: Clientlogo2, name: "Client 2" },
  { client: Clientlogo3, name: "Client 3" },
  { client: Clientlogo4, name: "Client 4" },
  { client: Clientlogo1, name: "Client 1" },
  { client: Clientlogo2, name: "Client 2" },
  { client: Clientlogo3, name: "Client 3" },
  { client: Clientlogo4, name: "Client 4" }
];

export default function Clients() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 4); // 4 unique clients
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-200 shadow-2xl mb-8">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-300"></div>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              TRUSTED BY INDUSTRY LEADERS
            </span>
          </div>
          {/* <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
              Trusted By The
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              World's Best
            </span>
          </h2> */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Partnering with innovative organizations worldwide to deliver exceptional digital solutions and drive technological transformation
          </p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative mb-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Track */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 ease-out"
              style={{
                transform: `translateX(-${currentSlide * 25}%)` // 4 items = 25% each
              }}
            >
              {clients.map((c, i) => (
                <div 
                  key={i}
                  className="flex-shrink-0 w-1/4 px-4" // 4 items per view
                >
                  {/* Client Logo Card */}
                  <div className="group relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-white/60 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 h-40 flex items-center justify-center">
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10"></div>
                    
                    {/* Main Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20"></div>
                    
                    {/* Logo Container */}
                    <div className="relative transform group-hover:scale-110 transition-transform duration-500">
                      <img 
                        src={c.client} 
                        alt={c.name}
                        className="h-50 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-75 group-hover:opacity-100"
                      />
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Animated Dots */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-200"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-400"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide(prev => (prev - 1 + 4) % 4)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-300 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          >
            <svg className="w-7 h-7 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => setCurrentSlide(prev => (prev + 1) % 4)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-300 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          >
            <svg className="w-7 h-7 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-4 mt-12">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  currentSlide === index 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 scale-125 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400 scale-100'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-300/30">
          {[
            { number: "500+", label: "Successful Projects", icon: "🚀" },
            { number: "50+", label: "Global Partners", icon: "🌍" },
            { number: "99.8%", label: "Client Satisfaction", icon: "⭐" },
            { number: "24/7", label: "Expert Support", icon: "🛡️" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative inline-flex items-center justify-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-3xl flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-indigo-600/20 transition-all duration-500">
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-12 border-t border-gray-300/30">
          <p className="text-gray-600 text-lg mb-6">Ready to join our growing list of satisfied partners?</p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center gap-3 mx-auto">
            <span>Become Our Partner</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}