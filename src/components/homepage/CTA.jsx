import React from "react";

export default function CTA(){
  return (
    <section className="py-16 bg-gradient-to-b from-[#7e0c0b] to-[#b51c1a] text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Perfect Solutions For Your Business</h3>
          <p className="mt-2 text-gray-200">Get expert help to design and run your IT operations.</p>
        </div>
        <div className="flex gap-4">
          <a href="#contact" className="bg-red-600 px-5 py-3 font-bold rounded-md hover:bg-white hover:text-red-600">Get a Quote</a>
          <a href="#contact" className="border border-white px-5 py-3 font-bold rounded-md">Contact</a>
        </div>
      </div>
    </section>
  );
}
