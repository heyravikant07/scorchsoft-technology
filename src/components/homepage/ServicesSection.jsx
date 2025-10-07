import React from 'react'
import { FileChartPie , EarthLock , Server , MonitorCog} from 'lucide-react';

const services = [
  { title: "IT Management", desc: "Managed services & monitoring", icon: <FileChartPie className='w-10 h-10' /> },
  { title: "Cyber Security", desc: "Vulnerability & risk management", icon: <EarthLock className='w-10 h-10' /> },
  { title: "Cloud Computing", desc: "AWS / Azure / GCP solutions", icon: <Server className='w-10 h-10' /> },
  { title: "Software Dev", desc: "Custom apps & integrations", icon: <MonitorCog className='w-10 h-10' /> },
];
function ServicesSection() {
  return (
     <section id="services" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className='text-1.5xl text-red-500 text-center'>OUR SERVICES</h1>
        <h3 className="text-2xl font-bold text-center">Solutions & Focus Areas</h3>
        <p className=" text-gray-600 mt-2">We deliver a range of services to support your business goals.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md text-center">
               <h1 className="w-10 h-10 mx-auto text-[#7e0c0b]">{s.icon}</h1>
              <h4 className="mt-4 font-semibold">{s.title}</h4>
              <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
              <a className="mt-4 inline-block text-[#7e0c0b] text-sm font-semibold" href="#">Read more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default ServicesSection