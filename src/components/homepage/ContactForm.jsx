import React from "react";

export default function ContactForm({ closeModal }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="space-y-6 bg-white p-8 rounded-xl shadow-lg text-red-900">
          <h3 className="text-2xl font-bold">Please Contact Us Now</h3>
          <p className="text-red-700">We will reply to your enquiry within 1 working day and are happy to have exploratory no-obligation discussions.</p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-xl">📍</span>
              <span>IT Park,Nagpur</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xl">✉️</span>
              <span>contact@scorchsofts.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xl">☎️</span>
              <span>+91 98765 43210</span>
            </div>
          </div>
        </div>
        <form
          className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Form submitted! We will get back to you soon.');
          }}
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-4 left-4 bg-red-700 text-white px-5 py-3 rounded-md hover:bg-red-800 transition font-semibold flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <div>
            <label className="block text-sm font-medium text-red-900 mb-2">Name *</label>
            <input className="w-full p-3 border border-red-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition" placeholder="Name *" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-red-900 mb-2">Email address *</label>
            <input type="email" className="w-full p-3 border border-red-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition" placeholder="Email address *" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-red-900 mb-2">Mobile number (or alternative) *</label>
            <div className="flex">
              <select className="p-3 border border-red-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition bg-white">
                <option>UK (+44)</option>
                <option>US (+1)</option>
                <option>IN (+91)</option>
                <option>AU (+61)</option>
              </select>
              <input className="w-full p-3 border border-red-700 border-l-0 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition" placeholder="Mobile number (or alternative) *" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-red-900 mb-2">Tell us about your project (Your message) *</label>
            <textarea className="w-full p-3 border border-red-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition resize-none" rows="4" placeholder="Your message..." required></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-700 to-red-900 text-white py-4 px-8 rounded-lg hover:from-red-800 hover:to-red-950 transition font-medium shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
