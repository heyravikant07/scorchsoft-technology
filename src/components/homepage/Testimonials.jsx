import React from "react";
const t = [
  { name: "Kunal", text: "Great partner for our cloud migration." },
  { name: "Mayank ", text: "Reliable team and fast delivery." },
];

export default function Testimonials(){
  return (
    <section className="py-16 bg-red-200">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-center">What Clients Say</h3>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {t.map((item,i)=> (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 italic">"{item.text}"</p>
              <p className="mt-4 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
