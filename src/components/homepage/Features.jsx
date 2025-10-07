import React from "react";
import { ComputerIcon ,Computer,Cog , Headset , UserCog , MonitorCog} from 'lucide-react';
const items = [
  { title: "IT Expertise", desc: "Certified experts across cloud & infra", icon: <UserCog className="w-12 h-12" /> },
  { title: "24/7 Support", desc: "Always-on managed services", icon: <Headset className="w-12 h-12" /> },
  { title: "Custom Solutions", desc: "Tailored software & automation", icon: <MonitorCog className=" w-12 h-12" /> },
];

export default function Features(){
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {items.map((it, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm flex-1">
              <h1 className="w-12 h-12 mx-auto text-[#7e0c0b]">{it.icon}</h1>
              <h4 className="mt-4 font-semibold text-gray-800">{it.title}</h4>
              <p className="mt-2 text-gray-600 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
