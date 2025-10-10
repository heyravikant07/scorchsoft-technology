import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

// Sample blog data - in a real app, this would come from an API
const featuredPosts = [
  {
    id: 1,
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we build software applications.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "May 15, 2024",
    readTime: "5 min read",
    category: "Technology"
  },
  {
    id: 2,
    title: "Building Scalable Web Applications",
    excerpt: "Best practices and architectural patterns for creating robust, scalable web applications.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "May 10, 2024",
    readTime: "7 min read",
    category: "Development"
  },
  {
    id: 3,
    title: "Cybersecurity in the Digital Age",
    excerpt: "Understanding modern security threats and how to protect your digital assets.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "May 5, 2024",
    readTime: "6 min read",
    category: "Security"
  }
];

const allPosts = [
  ...featuredPosts,
  {
    id: 4,
    title: "Data Security With Multiple Layers",
    excerpt: "Implementing comprehensive security measures to protect sensitive data across multiple layers.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "Apr 28, 2024",
    readTime: "4 min read",
    category: "Security"
  },
  {
    id: 5,
    title: "10 Efficient Benefits of Software",
    excerpt: "Discover the top 10 benefits that modern software solutions bring to businesses.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "Apr 20, 2024",
    readTime: "3 min read",
    category: "Business"
  },
  {
    id: 6,
    title: "Digital Conference of IT Tech",
    excerpt: "Highlights from the latest digital conference covering emerging IT technologies.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "Apr 15, 2024",
    readTime: "8 min read",
    category: "Events"
  }
];

export default function BlogPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroRef, heroVisible] = useIntersectionObserver();
  const [postsRef, postsVisible] = useIntersectionObserver();

  // Auto-slide carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#7e0c0b] to-[#b51c1a] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInDown ">Articles and Insights</h1>
          <p className="text-xl max-w-2xl mx-auto text-[#FFFFFFA1] animate-fadeInDown ">
            Articles, updates and useful information about business, technology and app development
          </p>
        </div>
      </section>

      {/* Featured Posts Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Featured Articles
          </h2>

          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredPosts.map((post) => (
                <div key={post.id} className="w-full flex-shrink-0 relative">
                  <div className="relative h-80 sm:h-96 md:h-[500px]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                        <span className="bg-red-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-xs sm:text-sm opacity-90">{post.date}</span>
                        <span className="text-xs sm:text-sm opacity-90">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                        {post.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg opacity-90 mb-4 sm:mb-6 max-w-2xl hidden sm:block">
                        {post.excerpt}
                      </p>
                      <button className="bg-red-600 hover:bg-red-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-300 text-sm sm:text-base">
                        Read Full Article
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-white text-gray-800 hover:text-red-600 p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg z-10"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-white text-gray-800 hover:text-red-600 p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg z-10"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {featuredPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section
        ref={postsRef}
        className={`py-16 bg-gray-50 transition-all duration-1000 ${
          postsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            All Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post, index) => (
              <article
                key={post.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-red-600 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <button className="text-red-600 font-semibold hover:text-red-700 transition-colors duration-300 flex items-center gap-2 group">
                    Read more
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
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
}
