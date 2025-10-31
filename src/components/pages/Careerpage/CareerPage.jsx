import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  MapPin,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Search,
  Users,
  Rocket,
  Target,
  Heart,
  Star,
  Award,
  Zap
} from "lucide-react";

const CareerPage = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote / Bengaluru",
      department: "Engineering",
      description: "Build scalable, high-quality interfaces using React.js, Tailwind CSS, and modern web frameworks.",
      image: "https://images.unsplash.com/photo-1603570412212-0a8f1d14c1b1?auto=format&fit=crop&w=900&q=80",
      salary: "₹8-15 LPA",
      experience: "2-5 years",
      type: "Full-time"
    },
    {
      title: "Backend Engineer",
      location: "Hyderabad",
      department: "Engineering",
      description: "Develop robust REST APIs and microservices using Node.js, Express, and MongoDB.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
      salary: "₹10-18 LPA",
      experience: "3-6 years",
      type: "Full-time"
    },
    {
      title: "UI/UX Designer",
      location: "Pune",
      department: "Design",
      description: "Design user-centered experiences and build intuitive interfaces for web and mobile.",
      image: "https://images.unsplash.com/photo-1581093588401-22f6366b3bda?auto=format&fit=crop&w=900&q=80",
      salary: "₹6-12 LPA",
      experience: "2-4 years",
      type: "Full-time"
    },
    {
      title: "Digital Marketing Specialist",
      location: "Mumbai",
      department: "Marketing",
      description: "Create innovative marketing campaigns and manage digital growth strategies.",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=900&q=80",
      salary: "₹5-10 LPA",
      experience: "1-3 years",
      type: "Full-time"
    },
    {
      title: "DevOps Engineer",
      location: "Remote",
      department: "Engineering",
      description: "Implement and maintain CI/CD pipelines and cloud infrastructure.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
      salary: "₹12-20 LPA",
      experience: "4-7 years",
      type: "Full-time"
    },
    {
      title: "Data Scientist",
      location: "Bengaluru",
      department: "Data Science",
      description: "Build machine learning models and derive insights from complex datasets.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      salary: "₹15-25 LPA",
      experience: "3-6 years",
      type: "Full-time"
    }
  ];

  const benefits = [
    { icon: <Zap className="w-6 h-6" />, title: "Flexible Work", description: "Remote & hybrid options" },
    { icon: <Award className="w-6 h-6" />, title: "Career Growth", description: "Learning & development" },
    { icon: <Heart className="w-6 h-6" />, title: "Health Care", description: "Comprehensive medical" },
    { icon: <Star className="w-6 h-6" />, title: "Stock Options", description: "Employee stock plans" },
    { icon: <Rocket className="w-6 h-6" />, title: "Latest Tech", description: "Cutting-edge tools" },
    { icon: <Users className="w-6 h-6" />, title: "Great Team", description: "Talented colleagues" }
  ];

  const [current, setCurrent] = useState(0);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % jobs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [jobs.length]);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) &&
    (activeFilter === "All" || job.department === activeFilter)
  );

  const departments = ["All", ...new Set(jobs.map(job => job.department))];

  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 lg:py-28 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-25 animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.div 
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-4 border border-white/20 mb-8 group hover:bg-white/15 transition-all duration-500 transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
            </div>
            <span className="text-cyan-200 font-semibold text-lg">JOIN OUR INNOVATION JOURNEY</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              Build Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Future With Us
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join a collective of vibrant, creative innovators and technologists 
            shaping the future of digital transformation at Scorchsoft.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { number: "50+", label: "Team Members" },
              { number: "15+", label: "Countries" },
              { number: "500+", label: "Projects" },
              { number: "99%", label: "Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-cyan-200 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Why Scorchsoft Section */}
      <motion.section
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 shadow-lg mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                WHY CHOOSE US
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Why Scorchsoft
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Seeking new frontiers in your career path? Discover how your journey aligns with ours. 
              Join a collective of vibrant, creative innovators and technologists shaping the future 
              of digital transformation.
            </p>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.slice(0, 4).map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 group hover:bg-white/80 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="/About" >
              <span >Learn More About Us</span>
               </a>
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-white/50">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80"
                alt="Modern office space"
                className="rounded-2xl w-full h-96 object-cover"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400 rounded-full opacity-60 animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-400 rounded-full opacity-60 animate-float delay-1000"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Job Carousel Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

        <div className="relative container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-200 font-semibold">FEATURED ROLES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                Featured Opportunities
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover your next career move with our most exciting positions
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="flex justify-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 w-full max-w-4xl text-center hover:bg-white/15 transition-all duration-500">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                      <Briefcase className="text-white w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    {jobs[current].title}
                  </h3>
                  <p className="text-cyan-200 mb-3 flex items-center justify-center gap-2 text-lg">
                    <MapPin className="w-5 h-5" />
                    {jobs[current].location}
                  </p>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
                    {jobs[current].description}
                  </p>
                  <div className="flex justify-center gap-6 mb-8">
                    <span className="bg-white/10 px-4 py-2 rounded-xl text-cyan-200">{jobs[current].salary}</span>
                    <span className="bg-white/10 px-4 py-2 rounded-xl text-cyan-200">{jobs[current].experience}</span>
                    <span className="bg-white/10 px-4 py-2 rounded-xl text-cyan-200">{jobs[current].type}</span>
                  </div>
                  <motion.button 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Apply Now</span>
                    <Rocket className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced Carousel Controls */}
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + jobs.length) % jobs.length)}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 text-white p-4 rounded-2xl hover:bg-white/40 transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % jobs.length)}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 text-white p-4 rounded-2xl hover:bg-white/40 transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {jobs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index 
                      ? 'bg-cyan-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Job Search Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-lg mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                EXPLORE ROLES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Find Your Perfect Role
              </span>
            </h2>
          </motion.div>

          {/* Search and Filter Bar */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by job title, skills, or keywords..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div className="flex flex-wrap gap-3">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setActiveFilter(dept)}
                    className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      activeFilter === dept
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Job Grid */}
          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {filteredJobs.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No matching jobs found</h3>
                <p className="text-gray-500">Try adjusting your search criteria</p>
              </div>
            ) : (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 group hover:scale-105"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Briefcase className="text-white w-6 h-6" />
                    </div>
                    <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {job.department}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {job.title}
                  </h3>
                  
                  <p className="text-gray-600 flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    {job.location}
                  </p>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-sm">{job.salary}</span>
                    <span className="bg-purple-50 text-purple-600 px-3 py-1 rounded-lg text-sm">{job.experience}</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-lg text-sm">{job.type}</span>
                  </div>
                  
                  <motion.button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Apply Now</span>
                    <Rocket className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CareerPage;