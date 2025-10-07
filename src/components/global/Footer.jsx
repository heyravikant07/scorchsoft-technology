import React from "react";

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-white font-semibold">Scorchsoft</h4>
          <p className="text-gray-400 mt-2">Modern IT & Tech Service Solutions</p>
        </div>
        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-3 text-gray-400 space-y-2">
            <li>Services</li>
            <li>Case Studies</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Newsletter</h5>
          <div className="mt-3 flex gap-2">
            <input className="p-2 rounded border border-gray-700" placeholder="Email"/>
            <button className="bg-red-600 text-white px-3 rounded">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">© {new Date().getFullYear()} Scorchsoft. All rights reserved.</div>
    </footer>
  );
}
