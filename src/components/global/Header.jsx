import React from "react";

export default function Header() {
  return (
    <header className="bg-[#7e0c0b] backdrop-blur sticky top-0 z-100 shadow-sm ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold">S</div>
          <span className="text-lg font-semibold text-white">SCORCHSOFT</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-white">
          <a href="#services" className="hover:text-red-600">Services</a>
          <a href="#projects" className="hover:text-red-600">Case Studies</a>
          <a href="#about" className="hover:text-red-600">About</a>
          <a href="#contact" className="hover:text-red-600">Contact</a>
        </nav>
        <div className="hidden md:block">
          <button className=" font-bold border border-[#e3b9b9] text-white hover:bg-red-50 hover:text-[#7e0c0b] px-4 py-2 rounded-md">Get Started</button>
        </div>
        <div className="md:hidden">
          <button className="text-white">☰</button>
        </div>
      </div>
    </header>
  );
}
