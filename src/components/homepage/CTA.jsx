import React from "react";

export default function CTA(){
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                Perfect Solutions
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                For Your Business
              </span>
            </h3>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl leading-relaxed">
              Get expert help to design, implement, and run your IT operations with cutting-edge technology and proven methodologies.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-gray-400 mt-1">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">99%</div>
                <div className="text-sm text-gray-400 mt-1">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-400 mt-1">Support</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="lg:w-1/2 flex flex-col sm:flex-row lg:flex-col gap-6 justify-center items-center">
            <a 
              href="#contact" 
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 w-full sm:w-auto lg:w-full max-w-sm text-center flex items-center justify-center gap-3"
            >
              <span>Get a Free Quote</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              
              {/* Button Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 -z-10"></div>
            </a>

            <a 
              href="#contact" 
              className="group border-2 border-white/30 hover:border-cyan-400/80 backdrop-blur-sm bg-white/5 hover:bg-cyan-400/10 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto lg:w-full max-w-sm text-center flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Contact Our Team</span>
            </a>

            {/* Trust Indicator */}
            <div className="flex items-center gap-3 mt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full border-2 border-gray-900 flex items-center justify-center text-xs font-bold text-white">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                Join <span className="text-cyan-400 font-semibold">500+</span> satisfied clients
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-6 h-6 bg-cyan-400 rounded-full opacity-60 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-40 animate-float delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-50 animate-float delay-500"></div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}