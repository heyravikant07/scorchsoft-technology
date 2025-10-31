import React, { useState, useEffect } from 'react'
import { Link } from "react-router";
import ContactForm from '../homepage/ContactForm';
import Logomain from '../../assets/scorchsoftlogo.png'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const menuItems = [
    {name:"Home", Link: '/'},
    {name:"Services", Link: '/Services'},
    {name:"Contact", Link: '/Contact'},
    {name:"About", Link: '/About'},
    {name:"FAQ",Link:'/FAQ'},
    {name:"Blog",Link:'/Blog'},
    {name:"Careers",Link:'/Careers'}
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className={`bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 backdrop-blur-lg sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3 shadow-2xl shadow-blue-500/20' : 'py-4'
      }`}>
        <div className='max-w-7xl mx-auto px-6 flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <div>
              <img src={Logomain} alt="scorchsoft" className="w-35 h-8" />
            </div>
          </div>
          
          <div className='hidden md:block'>
            <ul className='hidden md:flex items-center gap-6 text-white'>
              {menuItems.map((item,index)=>(
                <Link to={item.Link} key={index}>
                  <li className='font-medium hover:text-cyan-300 transition-colors duration-300 py-2'>{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>
          
          <div className='flex'>
            <button 
              onClick={openModal}
              className='hidden md:flex font-bold border border-cyan-400 text-white hover:bg-cyan-400 hover:text-gray-900 px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg' 
            >
              GET STARTED
            </button>

            <button
                onClick={toggleMenu}
                className='md:hidden border border-white/30 rounded-lg p-2 text-white hover:bg-white/10 transition-colors duration-300'
              >
                {isOpen ? "close" : "menu"}
              </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='bg-white/95 backdrop-blur-md w-full py-4 border-t border-white/20'>
            <ul className='flex flex-col items-center justify-center gap-4'>
              {menuItems.map((item,index) => (
                <li key={index} className='font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300'>
                  <Link to={item.Link} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Contact Form Modal - Enhanced */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto animate-slideUp">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-300"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <ContactForm closeModal={closeModal} />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </>
  )
}