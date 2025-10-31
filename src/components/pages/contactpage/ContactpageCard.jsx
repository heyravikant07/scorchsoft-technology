import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactpageCard({ closeModal }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_vvc4k6b', // Replace with your EmailJS service ID
        'template_h2c5b3g', // Replace with your EmailJS template ID
        formRef.current,
        're00pyFejuoKNSbqU' // Replace with your EmailJS public key
      );
      
      setIsSubmitted(true);
      setTimeout(() => {
        if (closeModal) closeModal();
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "918530259527"; // Your WhatsApp number without +
    const message = "Hello! I'm interested in your IT services. I visited your website and would like to discuss a project.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Message Sent Successfully!
          </h3>
          <p className="text-gray-600 text-lg mb-8">
            Thank you for your inquiry. We'll get back to you within 1 working day.
          </p>
          {closeModal && (
            <button
              onClick={closeModal}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Close
            </button>
          )}
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        {/* Enhanced Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 lg:py-28 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-25 animate-pulse delay-500"></div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
          
          <div className="relative container mx-auto px-4 text-center">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-4 border border-white/20 mb-8 group hover:bg-white/15 transition-all duration-500 transform hover:scale-105">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
              </div>
              <span className="text-cyan-200 font-semibold text-lg">CONTACT US</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInDown">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                Let's Build
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-8 animate-fadeInDown animation-delay-200">
              Transform your vision into reality with our expert team of developers, 
              designers, and strategists specializing in cutting-edge digital solutions.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8 animate-fadeInUp animation-delay-400">
              <div className="text-center group">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-cyan-200 text-sm mt-1">Projects Delivered</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">10+</div>
                <div className="text-cyan-200 text-sm mt-1">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">99%</div>
                <div className="text-cyan-200 text-sm mt-1">Client Satisfaction</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-cyan-200 text-sm mt-1">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Content - Keep everything else exactly the same */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/50">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Free Quote: Tell us about your needs
              </h3>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Scorchsoft has been established for over fifteen years and has a
                  vast range of experience working on large and small projects across
                  the UK and internationally.
                </p>
                <p>
                  Float your ideas past us and we'll provide a free quote (no obligations). 
                  If we like your idea then we'll also be happy to give advice on how to 
                  execute technically and bring it to market.
                </p>
                <p className="font-semibold text-blue-600">
                  We will reply to your enquiry within 1 working day.
                </p>
                <p className="text-sm text-gray-600">
                  Our ethical projects policy means we do not take on projects related
                  to gambling, tobacco, vaping, or other protected categories.
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Our Location</h4>
                  <p className="text-gray-600">IT Park, Nagpur</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">✉️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email Us</h4>
                  <p className="text-gray-600">contact@scorchsoft.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">☎️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Call Us</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div className="pt-6 border-t border-gray-200">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.176-1.24-6.165-3.495-8.411"/>
                </svg>
                <span>Chat on WhatsApp</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-lg">
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-800">500+</span> projects delivered successfully
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/50 relative"
          >
            {closeModal && (
              <button
                type="button"
                onClick={closeModal}
                className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-full flex items-center justify-center hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-110 shadow-lg z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Full Name *</label>
                <input 
                  name="user_name"
                  className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="Enter your full name" 
                  required 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address *</label>
                <input 
                  type="email"
                  name="user_email"
                  className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="Enter your email address" 
                  required 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number *</label>
                <div className="flex gap-3">
                  <select 
                    name="country_code"
                    className="w-32 p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  >
                    <option value="+44">UK (+44)</option>
                    <option value="+1">US (+1)</option>
                    <option value="+91" selected>IN (+91)</option>
                    <option value="+61">AU (+61)</option>
                  </select>
                  <input 
                    name="user_phone"
                    className="flex-1 p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your phone number" 
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Project Details *</label>
                <textarea 
                  name="message"
                  className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                  rows="4" 
                  placeholder="Tell us about your project requirements..." 
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      <style>
        {`
          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
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
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
          .animation-delay-400 {
            animation-delay: 0.4s;
          }
          .animation-delay-600 {
            animation-delay: 0.6s;
          }
        `}
      </style>
    </>
  );
}