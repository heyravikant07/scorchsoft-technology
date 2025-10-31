import React, { useState, useRef, useEffect } from "react";
import { Flame, User, ArrowRight, Play, Award, Users, Target, Rocket } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import Aboutheropng from "../../../assets/herosection.webp";
import Workflowbg from "../../../assets/workflow.jpg";
import Processimg from "../../../assets/processimg.avif";
import Keshav from "../../../assets/keshav.avif";

const Aboutpage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <Rocket className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "Technologies", icon: <Target className="w-6 h-6" /> }
  ];

  const teamMembers = [
    { name: "Sarah", role: "Lead Developer", expertise: "React & Node.js" },
    { name: "Johnson", role: "UI/UX Designer", expertise: "Figma & Prototyping" },
    { name: "Alex", role: "DevOps Engineer", expertise: "AWS & Docker" },
    { name: "Ravikant", role: "Project Manager", expertise: "Agile & Scrum" },
    { name: "David", role: "Mobile Developer", expertise: "React Native" },
    { name: "James", role: "Backend Specialist", expertise: "Python & Django" },
    { name: "Lisa", role: "QA Engineer", expertise: "Testing & Automation" },
    { name: "Mike", role: "Data Scientist", expertise: "AI & ML" },
    { name: "Rajesh", role: "Frontend Developer", expertise: "Vue & Angular" },
    { name: "Ryan", role: "Technical Lead", expertise: "System Architecture" }
  ];

  const processSteps = [
    { 
      title: "Discovery & Strategy", 
      description: "We deeply understand your business goals and technical requirements to create a comprehensive strategy.",
      phase: "Phase 1"
    },
    { 
      title: "Design & Prototyping", 
      description: "Our design team creates intuitive user interfaces and interactive prototypes for your approval.",
      phase: "Phase 2"
    },
    { 
      title: "Development & Testing", 
      description: "Agile development with continuous testing ensures high-quality, bug-free applications.",
      phase: "Phase 3"
    },
    { 
      title: "Launch & Support", 
      description: "We deploy your solution and provide ongoing support to ensure long-term success.",
      phase: "Phase 4"
    }
  ];

  return (
    <div className="w-full font-sans bg-gradient-to-br from-slate-50 to-blue-50">
      {/* ===== Enhanced Hero Section ===== */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className={`flex-1 transition-all duration-1000 transform ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Innovating Since 2018</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight">
                Building The Future
                <span className="block text-blue-300">Of Digital</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
                Scorchsoft transforms ambitious ideas into powerful digital solutions. 
                We specialize in creating cutting-edge web and mobile applications that drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-white text-slate-900 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-3">
                  Explore Our Work
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button className="group border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm flex items-center gap-3">
                  <Play className="w-5 h-5" />
                  Watch Our Story
                </button>
              </div>
            </div>
            <div className={`flex-1 transition-all duration-1000 delay-300 transform ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30"></div>
                <img
                  src={Aboutheropng}
                  alt="About Hero"
                  className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* ===== Enhanced Stats Section ===== */}
      <section 
        ref={statsRef}
        className="py-20 bg-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Enhanced Intro Section ===== */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-500/10 to-cyan-500/10 rounded-full translate-y-32 -translate-x-32"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl text-slate-700 leading-relaxed mb-8 max-w-4xl mx-auto">
                We've been developing cutting-edge apps and web platforms that help clients 
                achieve ambitious digital goals. Our expert team transforms complex requirements 
                into powerful, intuitive digital experiences that drive real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/Blog" className="group bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-3">
                  View Our Projects
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a href="/Contact" className="group border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3">
                  Start Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Enhanced Team Section ===== */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Passionate experts dedicated to delivering exceptional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
                </div>
                <h3 className="font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-blue-200 text-sm mb-2">{member.role}</p>
                <p className="text-blue-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.expertise}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Enhanced Process Section ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A structured approach to delivering exceptional results
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-20"></div>
              <img
                src={Processimg}
                alt="Process illustration"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 hover:border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                      activeTab === index 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-blue-500/10 text-blue-600 group-hover:bg-blue-500/20'
                    }`}>
                      <Flame className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-semibold text-blue-600">{step.phase}</span>
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeTab === index ? 'bg-blue-500' : 'bg-blue-300'
                        }`}></div>
                      </div>
                      <h3 className={`font-bold text-lg mb-2 transition-colors duration-300 ${
                        activeTab === index ? 'text-slate-800' : 'text-slate-700'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Process Steps */}
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 border border-slate-200">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Initial Discovery Call",
                "Strategy Workshop",
                "Technical Planning",
                "Design Sprint",
                "Development Phase",
                "Quality Assurance",
                "Deployment",
                "Post-Launch Support",
                "Continuous Improvement"
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="font-medium text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your ideas into exceptional digital solutions.
          </p>
          <button className="group bg-white text-slate-900 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto">
            <a href="/Contact">
            Get Started Today
            </a>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Aboutpage;