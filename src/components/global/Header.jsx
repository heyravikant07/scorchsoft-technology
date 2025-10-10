// import React from "react";
import React, { useState } from 'react'
import Mainlogo from "../../assets/mainlogo.webp"
import { Link } from "react-router";
import ContactForm from '../homepage/ContactForm';

export default function Header() {
  const [isOpen,setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <header className='bg-[#7e0c0b] backdrop-blur sticky top-0 z-100 shadow-sm '>
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <div>
                 {/* <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold">S</div> */}
          {/* <span className="text-lg font-semibold text-white">SCORCHSOFT</span> */}
          <img src={Mainlogo} alt="scorchsoft" className="w-35 h-10" />
        </div>
            </div>
            <div className='hidden md:block'>
              <ul className='hidden md:flex items-center gap-6 text-white '>
                {menuItems.map((item,index)=>(
                  <Link to={item.Link} key={index}>
                <li className='font-medium'>{item.name}</li>
                </Link>
                ))}
              </ul>
            </div>
            <div className='flex'>
              <button 
              onClick={openModal}
              className='hidden md:flex  font-bold border border-[#e3b9b9] text-white hover:bg-red-50 hover:text-[#7e0c0b] px-4 py-2 rounded-md ' >GET STARTED</button>

              <button
                  onClick={toggleMenu}
                  className='md:hidden border rounded-md p-2'>{isOpen ? "close" : "menu"}</button>
            </div>
          </div>
     {
      isOpen && (
          <div className='bg-[#fafbfc] w-full py-3'>
              <ul className='flex flex-col items-center justify-center gap-4'>
                  {menuItems.map((item,index) => (
                      <li key={index} className='font-medium'>{item.name}</li>
                  ))}
              </ul>
          </div>
      )
     }
</header>
{/* contact form open when click on get started */}
{isModalOpen && (
        <div className="fixed inset-0 bg-transparent flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative p-6 mt-16">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>
            <ContactForm closeModal={closeModal} />
          </div>
        </div>
      )}
    </>



  )
}
