import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Kunal from "../../assets/kunal.avif";
import Keshav from "../../assets/keshav.avif";
import Mayank from "../../assets/mayank.avif";

export default function Testimonials(){
  const testimonials = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661932015882-c35eee885897?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "Our comprehensive program guides you through a structured journey across three pillars. Each pillar features focused sessions and integration steps to ensure you not only learn but also apply these strategies.",
      name: "Sahil C",
      title: "CEO, ACME Corp",
      avatar: Kunal
    },
    {
      img: "https://images.unsplash.com/photo-1573014089159-8ee711dc5a8e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "Working with this team was a delight. Their attention to detail and customer service are unmatched. We’ve seen measurable growth since partnering with them.",
      name: "Kunal B",
      title: "Operations Manager, Global Freight",
      avatar: Keshav
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661963219843-f1a50a6cfcd3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "They consistently deliver outstanding results. The process is smooth and the support is fantastic. Highly recommend to anyone looking for reliable service.",
      name: "Keshav W",
      title: "Founder, BlueWave Shipping",
      avatar: Kunal
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661881416333-f75746261454?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "The team is professional and efficient, ensuring timely delivery of our projects every time.",
      name: "Mayank B",
      title: "Logistics Lead, StarCargo",
      avatar: Mayank
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="uppercase text-3xl font-bold tracking-wide mb-2">
            OUR <span className='text-orange-500'>SUCCESS STORIES</span>
          </p>
          <h2 className="text-3xl md:text-2xl font-bold text-gray-800">
            What our <span className="text-orange-500">clients say</span> about our{" "}
            <span className="text-orange-500">service</span>
          </h2>
        </div>

        {/* Swiper carousel */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                {/* Top image */}
                <img
                  src={item.img}
                  alt="Service"
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-8 relative flex flex-col flex-1">
                  {/* Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09L5.82 12.18 1 7.91l6.06-.88L10 2l2.94 5.03 6.06.88-4.82 4.27 1.698 5.91z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 flex-1">{item.quote}</p>

                  <div className="flex items-center">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500">{item.title}</p>
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 text-orange-500 opacity-20 text-5xl">
                    &ldquo;
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}