import React from "react";

export default function ContactForm(){
  return (
    <section id="contact" className="py-15 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="space-y-4 bg-cover bg-center rounded-lg shadow-md bg-[url('https://images.unsplash.com/photo-1754039985001-ccafee437736?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHdvcmtmbG93fGVufDB8fDB8fHww')] bg-black bg-opacity-65 ">
          <h3 className="text-1.5xl font-serif text-white">Don't Hesitate To Contact Us</h3>
          <p className="text-white">Reach out and we'll get back to you within 1 business day.</p>
          <div className="flex gap-4 mt-4 text-white">
            <div>📍 123 Main St, City</div>
            <div>✉️ contact@scorchsofts.com</div>
            <div>☎️ +1 234 567 890</div>
          </div>
        </div>
        <form className="space-y-3 bg-gray-50 p-6 rounded-lg shadow-sm">
          <input className="w-full p-2 border rounded" placeholder="Name" />
          <input className="w-full p-2 border rounded" placeholder="Email" />
          <input className="w-full p-2 border rounded" placeholder="Subject" />
          <textarea className="w-full p-2 border rounded" rows="4" placeholder="Message"></textarea>
          <button className="bg-red-600 text-white px-4 py-2 rounded">Submit Request</button>
        </form>
      </div>
    </section>
  );
}
