import React from "react";
import { ComputerIcon, Computer, Cog, Headset, UserCog, MonitorCog } from 'lucide-react';

const items = [
  { 
    title: "IT Expertise", 
    desc: "Certified experts across cloud & infrastructure", 
    icon: <UserCog className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-400"
  },
  { 
    title: "24/7 Support", 
    desc: "Always-on managed services with instant response", 
    icon: <Headset className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500"
  },
  { 
    title: "Custom Solutions", 
    desc: "Tailored software development & automation", 
    icon: <MonitorCog className="w-8 h-8" />,
    gradient: "from-orange-500 to-red-500"
  },
];

export default function Features() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-blue-50/50 to-cyan-50/50"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 shadow-sm mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Premium IT Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Delivering exceptional technology solutions with unmatched expertise and dedicated support
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {items.map((item, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Animated Background Card */}
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2"></div>
              
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm group-hover:blur-md`}></div>
              
              {/* Main Content Card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 group-hover:border-white/50 shadow-sm group-hover:shadow-xl transition-all duration-500 h-full">
                
                {/* Icon Container */}
                <div className={`relative mb-6 inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                  
                  {/* Pulse Animation */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-1000`}></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4 group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-500">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                  {item.desc}
                </p>

                {/* Hover Indicator */}
                <div className="absolute bottom-6 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-blue-500 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                </div>
              </div>

              {/* Floating Particles */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-all duration-500 delay-200"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-all duration-500 delay-400"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 border border-gray-200 shadow-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-gray-700 font-medium">
              Ready to transform your IT infrastructure?{" "}
              <a href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-4 transition-colors">
                Get started today
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-8px) rotate(120deg); }
          66% { transform: translateY(-4px) rotate(240deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}