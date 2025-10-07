import React from "react";
import Workflowimg from "../../assets/Workflow.jpg"
import Cloudworkimg from "../../assets/cloudwork.jpg"
import Financeimg from "../../assets/itfinance.jpg"

const projects = [
  { title: "Workflow Management", desc: "IT Management", img: Workflowimg , info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, neque sint deserunt ipsam debitis architecto sunt! Nesciunt tenetur reprehenderit reiciendis voluptatum explicabo dignissimos earum adipisci beatae minus nisi? Libero, nesciunt." },
  { title: "IT Practices in Cloud", desc: "Cloud Consulting", img: Cloudworkimg  , info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, neque sint deserunt ipsam debitis architecto sunt! Nesciunt tenetur reprehenderit reiciendis voluptatum explicabo dignissimos earum adipisci beatae minus nisi? Libero, nesciunt." },
  { title: "Financial Software", desc: "Custom Software", img: Financeimg , info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, neque sint deserunt ipsam debitis architecto sunt! Nesciunt tenetur reprehenderit reiciendis voluptatum explicabo dignissimos earum adipisci beatae minus nisi? Libero, nesciunt." },
];

export default function Projects(){
  return (
    <section id="projects" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className='text-1.5xl text-red-500 text-center'>OUR PROJECT</h1>
        <h3 className="text-2xl font-bold text-center">IT Solutions & Projects</h3>
        <p className=" text-gray-600 mt-2">A few projects we are proud of.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p,i)=> (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img src={p.img} alt="" className="w-full h-44 object-cover"/>
              <div className="p-4">
                <h4 className="font-semibold text-center">{p.title}</h4>
                <p className="text-gray-900 text-sm mt-2 items-center">{p.desc}</p>
                <h6 className="text-gray-500 text-sm ">{p.info}</h6>
                <a className="text-red-600 text-sm font-semibold mt-3 inline-block" href="#">View Details →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
