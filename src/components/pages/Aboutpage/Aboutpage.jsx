import React from "react";
import { Flame, User } from "lucide-react";
import Aboutheropng from "../../../assets/herosection.webp"
import Workflowbg from "../../../assets/workflow.jpg"
import Processimg from "../../../assets/processimg.avif"
import Keshav from "../../../assets/keshav.avif"


const Aboutpage = () => {
  return (
    <div className="w-full font-sans">
      {/* ===== Hero Section ===== */}
      <section className="bg-gradient-to-b from-[#7e0c0b] to-[#b51c1a] text-white py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4">About Scorchsoft</h2>
            <p className="text-lg text-gray-200 mb-6">
              Scorchsoft is a web and mobile app development company that helps
              businesses create innovative solutions using modern technologies.
            </p>
            <button className="bg-white text-red-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
              See Projects
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={Aboutheropng}
              alt="About Hero"
            />
          </div>
        </div>
      </section>

      {/* ===== Intro Section ===== */}
      <section className="relative py-20 bg-gray-50">
        <img
          src={Workflowbg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="relative max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg text-center">
          <p className="text-gray-700 leading-relaxed mb-6">
            We’ve been developing apps and web platforms that help clients
            achieve ambitious digital goals. Our expert team transforms complex
            requirements into powerful, intuitive digital experiences.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-red-700 text-white px-6 py-2 rounded-full">
              View Projects
            </button>
            <button className="border border-red-700 text-red-700 px-6 py-2 rounded-full hover:bg-red-700 hover:text-white">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* ===== Team Section ===== */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Meet the Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-red-800 rounded-full p-2 w-28 h-28 flex items-center justify-center overflow-hidden mb-3">
                <User></User>
              </div>
              {/* <p className="text-gray-800 font-medium">Team Member {i + 1}</p> */}
            </div>
          ))}
        </div>
      </section>

      {/* ===== Process Section ===== */}
      <section className="bg-gradient-to-b from-[#7e0c0b] to-[#b51c1a] text-white py-20">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <img
            src={Processimg}
            alt="Process illustration"
            className="mx-auto rounded-lg w-72"
          />
        </div>

        <div className="max-w-4xl mx-auto text-left space-y-10 px-6">
          {[
            "Initial phone call or enquiry",
            "Face-to-face meeting or video call",
            "Planning process",
            "Proposal finalisation",
            "Milestones & agreement",
            "Project start",
            "Graphic design process",
            "Frontend & backend coding",
            "Testing",
            "Launch",
            "Post-project support",
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              <Flame className="w-8 h-8 text-yellow-400 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">{`${i + 1}. ${step}`}</h3>
                <p className="text-gray-200">
                  We follow a clear and transparent process ensuring quality and
                  timely delivery for every project.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Aboutpage;
