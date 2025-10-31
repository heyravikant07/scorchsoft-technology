import React from "react";
import Workflowimg from "../../assets/Workflow.jpg"
import Cloudworkimg from "../../assets/cloudwork.jpg"
import Financeimg from "../../assets/itfinance.jpg"

const projects = [
  { title: "Workflow Management", desc: "IT Management", img: Workflowimg , info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, neque sint deserunt ipsam debitis architecto sunt! Nesciunt tenetur reprehenderit reiciendis voluptatum explicabo dignissimos earum adipisci beatae minus nisi? Libero, nesciunt." },
  { title: "IT Practices in Cloud", desc: "Cloud Consulting", img: Cloudworkimg  , info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, neque sint deserunt ipsam debitis architecto sunt! Nesciunt tenetur reprehenderit reiciendis voluptatum explicabo dignissimos earum adipisci beatae minus nisi? Libero, nesciunt." },
  { title: "Financial Software", desc: "Custom Software", img: Financeimg , info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, neque sint deserunt ipsam debitis architecto sunt! Nesciunt tenetur reprehenderit reiciendis voluptatum explicabo dignissimos earum adipisci beatae minus nisi? Libero, nesciunt." },
];

export default function Projects(){
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-lg mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse"></div>
            <span className="text-lg font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              OUR PROJECTS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            IT Solutions & Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of innovative projects that demonstrate our expertise in delivering cutting-edge technology solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Animated Background Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2"></div>
              
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm group-hover:blur-md"></div>
              
              {/* Main Content Card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-100 group-hover:border-white/50 shadow-sm group-hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {project.desc}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <button className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105">
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow">
                  <h4 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed text-sm mb-4 line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                    {project.info}
                  </p>

                  {/* View Details Link */}
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300 mt-auto"
                  >
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      View Details
                    </span>
                    <svg 
                      className="w-4 h-4 text-purple-600 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-blue-500 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-all duration-500 delay-200"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-all duration-500 delay-400"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 border border-gray-200 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-gray-700 font-medium">
                Have a project in mind?
              </p>
            </div>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <span>Start a Project</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div> */}
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
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}