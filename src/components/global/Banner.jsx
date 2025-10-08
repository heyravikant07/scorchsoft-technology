import { ChevronRight } from "lucide-react";
import React from 'react'


function Banner({title}) {
  return (
    <section>
      <div>
        <header className="bg-gradient-to-b from-[#7e0c0b] to-[#b51c1a] p-6 md:p-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-1 py-10">
          Our Company {title}
        </h1>
        <p className="text-lg md:text-2xl text-white mb-1">
          Transform your ideas into powerful digital solutions with our expert development team.
        </p>
      </div>
    </header>
    </div>
    </section>
  )
}

export default Banner
