import React from "react";
const posts = [
  {title: "Data Security With Multiple Layers", date: "Apr 3, 2024", img: "/blog1.jpg"},
  {title: "10 Efficient Benefits of Software", date: "Mar 12, 2024", img: "/blog2.jpg"},
  {title: "Digital Conference of IT Tech", date: "Feb 8, 2024", img: "/blog3.jpg"},
];

export default function Blog(){
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-center">Latest News & Articles</h3>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {posts.map((p,i)=> (
            <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img src={p.img} alt="" className="w-full h-40 object-cover"/>
              <div className="p-4">
                <p className="text-sm text-gray-500">{p.date}</p>
                <h4 className="font-semibold mt-2">{p.title}</h4>
                <a className="text-red-600 text-sm mt-3 inline-block" href="#">Read more →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
