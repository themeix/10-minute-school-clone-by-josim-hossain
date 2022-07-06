import React from 'react';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import logo from "../../Assets/logo.svg";
import {AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name : "ক্লাস ১-১২", link: "/academic" },
    { name : " কোর্স সমূহ ", link: "/cource" },
    { name : " ভর্তি পরিক্ষা ", link: "/admission" },
    { name : " চাকরি প্রস্তুতি ", link: "/jobpre" },
    { name : "বুক স্টোর", link: "/bookstore" },

  ];

    const toggle = () => {
      console.log("toggle");
      setIsOpen(!isOpen);
    }

  return (
    <div className='bg-white py-4 fixed w-full z-20 px-5 lg:px-24 shadow-lg'>
        <nav className=' hidden md:flex justify-between items-center'>
          

        <ul className='flex space-x-4'>
        <div className="hidden logo md:block">
           <NavLink to="/"> <img className='w-[130px] cursor-pointer lg:mr-10' src={logo} alt="logo" /></NavLink>
          </div>
          {
            menuItems.map((item, index) => (
              <NavLink to={item.link} className='text-[16px] md:text-[19px] hover:bg-[#ff284f] hover:text-white px-2 py-1 rounded cursor-pointer '>{item.name}</NavLink>
            ))
          }
        </ul>

          <div className="block md:hidden logo ">
            <img className='w-[40%]' src={logo} alt="" />
          </div>

          <div className="login space-x-3">
            <select name="" id="" className='outline-none'>
              <option value="">বাংলা</option>
              <option value="">English</option>
            </select>
            <NavLink to="/login" className="hover:bg-transparent"><button className="bg-gray-800 border-2 border-gray-800 hover:bg-transparent hover:text-black text-white font-bold py-1 px-6 rounded">
              লগ-ইন
            </button></NavLink>
          </div>
        </nav>


        <nav className='md:hidden flex justify-between items-center'>
          <div className="hamburger">
            <AiOutlineMenu onClick={toggle} className='text-2xl cursor-pointer' />
          </div>
           <div className="block md:hidden logo ">
            <NavLink to="/"><img className='w-[100px]' src={logo} alt="logo" /></NavLink>
          </div>

          <div className="login">
            <button className="text-[19px] font-semibold text-gray-600">
              লগ-ইন
            </button>
          </div>
        </nav>

        <ul className={` pt-10 md:hidden ${!isOpen ? "hidden" : "block"}`}>
          {
            menuItems.map((item, index) => (
              <NavLink to={item.link} className='md:text-[16px] block text-[19px] hover:bg-[#ff284f] hover:text-white px-2 py-1 rounded cursor-pointer '>{item.name}</NavLink>
            ))
          }
        </ul>
    </div>
  );
};

export default Navbar;