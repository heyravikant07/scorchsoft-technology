import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import {
  MapPin,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";

const CareerPage = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote / Bengaluru",
      department: "Engineering",
      description:
        "Build scalable, high-quality interfaces using React.js, Tailwind CSS, and modern web frameworks.",
      image:
        "https://images.unsplash.com/photo-1603570412212-0a8f1d14c1b1?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Backend Engineer",
      location: "Hyderabad",
      department: "Engineering",
      description:
        "Develop robust REST APIs and microservices using Node.js, Express, and MongoDB.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "UI/UX Designer",
      location: "Pune",
      department: "Design",
      description:
        "Design user-centered experiences and build intuitive interfaces for web and mobile.",
      image:
        "https://images.unsplash.com/photo-1581093588401-22f6366b3bda?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Digital Marketing Specialist",
      location: "Mumbai",
      department: "Marketing",
      description:
        "Create innovative marketing campaigns and manage digital growth strategies.",
      image:
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [search, setSearch] = useState("");

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % jobs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [jobs.length]);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#7e0c0b] to-[#b51c1a] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInDown ">Careers</h1>
          <p className="text-xl max-w-2xl mx-auto text-[#FFFFFFA1] animate-fadeInDown ">
            Explore hyper-personalized, technology-led, human-centered experiences that create moments that matter.
          </p>
        </div>
      </section>

      {/* Why Scorchsoft */}
      <motion.section
        className="py-20 px-6 md:px-20 bg-gray-50 overflow-hidden"
        style={{ opacity }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#7e0c0b]">
              Why Scorchsoft
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Seeking new frontiers in your career path? Discover how your
              journey aligns with ours. Explore opportunities at{" "}
              <b>Scorchsoft Technology</b> and join a collective of vibrant,
              creative innovators and technologists shaping the future of
              digital transformation.
            </p>
            <button className="border-2 border-[#7e0c0b] text-[#7e0c0b] px-6 py-2 font-semibold rounded-md hover:bg-[#7e0c0b] hover:text-white transition">
              Learn More
            </button>
          </div>

          <motion.img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80"
            alt="Office"
            className="rounded-2xl shadow-lg w-full object-cover"
            style={{ scale }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.section>

      {/* The Scorchsoft Way */}
      <motion.section
        className="py-20 px-6 md:px-20 bg-white overflow-hidden"
        style={{ opacity }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80"
            alt="Team collaboration"
            className="rounded-2xl shadow-lg w-full object-cover"
            style={{ scale }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#7e0c0b]">
              The Scorchsoft Way
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We are a company driven by the purpose of creating meaningful
              human experiences for our team and clients alike. At{" "}
              <b>Scorchsoft Technology</b>, we believe in innovation,
              collaboration, and growth — helping our people rise to new heights
              while building impactful digital products.
            </p>
            <button className="border-2 border-[#7e0c0b] text-[#7e0c0b] px-6 py-2 font-semibold rounded-md hover:bg-[#7e0c0b] hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </motion.section>

      {/* Job Carousel Section */}
      <section className="relative py-14 bg-gradient-to-b from-[#7e0c0b] to-[#b51c1a] text-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Opportunities
        </h2>

        <div className="max-w-5xl mx-auto px-6 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="flex justify-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 w-[90%] md:w-[70%] text-center">
                <div className="flex justify-center mb-4">
                  <Briefcase className="text-[#b51c1a] w-10 h-10" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-[#7e0c0b]">
                  {jobs[current].title}
                </h3>
                <p className="text-gray-500 mb-3 flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-[#b51c1a]" />
                  {jobs[current].location}
                </p>
                <p className="text-gray-700 mb-6">{jobs[current].description}</p>
                <button className="bg-[#7e0c0b] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#b51c1a] transition">
                  Apply Now
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + jobs.length) % jobs.length)
            }
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % jobs.length)}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* Search Jobs */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#7e0c0b]">
          Explore More Roles
        </h2>
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center border border-gray-300 rounded-lg bg-white px-3 py-2">
            <Search className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search by job title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none bg-transparent"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.length === 0 ? (
            <p className="text-gray-600 col-span-full">
              No matching jobs found.
            </p>
          ) : (
            filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-[#7e0c0b]">
                  {job.title}
                </h3>
                <p className="text-gray-500 flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-[#b51c1a]" />
                  {job.location}
                </p>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <button className="bg-[#7e0c0b] text-white px-5 py-2 rounded-lg hover:bg-[#b51c1a] transition">
                  Apply Now
                </button>
              </motion.div>
            ))
          )}
        </div>
      </section>

      <style>
        {`
          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInDown {
            animation: fadeInDown 1s ease forwards;
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s ease forwards;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}
      </style>
    </div>
  );
};

export default CareerPage;
