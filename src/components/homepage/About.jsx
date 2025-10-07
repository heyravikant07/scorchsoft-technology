import React from "react";
import Aboutwork from "../../assets/Aboutwork.jpg"
export default function About(){
  return (
    <section id="about" className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img src={Aboutwork} alt="aboutwork" className="rounded-lg shadow-md"/>
        </div>
        <div>
          <h1 className="text-1.5xl text-red-500">ABOUT US</h1>
          <h2 className="text-3xl font-bold">Let Us Be Your Preferred IT Partner</h2>
          <p className="mt-4 text-gray-600">We combine experience, technology and a customer-first approach to deliver measurable outcomes.</p>
          <ul className="mt-6 space-y-3 text-gray-600">
            <li>• Managed IT & Helpdesk</li>
            <li>• Cloud migration & optimization</li>
            <li>• Security & compliance</li>
          </ul>
          <div className="mt-6">
            <a href="#contact" className="bg-red-600 text-white px-4 py-2 rounded">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  );
}
