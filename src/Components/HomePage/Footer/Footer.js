import React from 'react';
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';
import {FaYoutubeSquare, FaTiktok} from 'react-icons/fa';


const Footer = () => {

    const company = [
        {items : "ক্যারিয়ার"},
        {items : "প্রাইভেসি পলিসি"},
        {items : "রিফান্ড পলিসি"},
    ];

    const others =[
        {items : "নোটস এবং গাইডস"},
        {items : "ব্লগ"},
        {items : "অ্যাফিলিয়েট হতে চাইলে"},
        {items : "ক্র্যাশ কোর্স"}
    ];

    const social = [
        {name : <AiFillFacebook />},
        {name : <AiFillInstagram />},
        {name : <AiFillLinkedin />},
        {name : <FaYoutubeSquare />},
        {name : <FaTiktok />}

    ];

    return (
        <div className='px-10 md:px-10 lg:px-20 py-10'>
            <div className=" lg:grid lg:grid-cols-12">
                <div className=" md:col-span-3 lg:col-span-4">
                    <img className=' w-[30%] lg:w-[50%] mb-5 cursor-pointer' src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg" alt="Logo" />
                    <h1 className=' text-xl md:text-2xl mb-2'>আমাদের মোবাইল অ্যাপ ডাউনলোড করুন</h1>
                    <div className="app flex space-x-4">
                        <img className='w-[30%] h-[30%] lg:w-[40%] md:h-[30%] cursor-pointer' src="https://cdn.10minuteschool.com/images/Landing_page/playstore.png" alt="play store" />
                        <img className='w-[30%] h-[30%] lg:w-[40%] md:h-[40%] cursor-pointer mb-4 md:mb-0' src="https://cdn.10minuteschool.com/images/Landing_page/appstore.png" alt="App Store" />
                    </div>
                </div>
                <div className=" md:col-span-3 lg:col-span-2">
                    <h1 className='text-xl md:mb-5'> কোম্পানি </h1>
                    {
                         company.map((item) =>(
                            <li className='list-none text-[17px] text-gray-500 hover:text-black cursor-pointer'>{item.items}</li>
                        ))
                    }
                </div>
                <div className="md:col-span-3 lg:col-span-2">
                    <h1 className='text-xl mt-3 md:mt-0 md:mb-5'>অন্যান্য</h1>
                    {
                        others.map((item) =>(
                            <li className='list-none text-[17px] text-gray-500 hover:text-black cursor-pointer'>{item.items}</li>
                        ))
                    }
                </div>
                <div className=" md:col-span-3 lg:col-span-4">
                  <h3 className='mb-3 text-xl'>সামাজিক যোগাযোগ মাধ্যমে আমরা</h3>
                  <ul className='text-[17px] font-[arial]'>
                    <li><b>Contact:</b> <span className='text-green-400'>16910</span> 8AM - 11PM </li>
                    <li><b>SMS:</b> 10MSHelp to 26969 24/7 </li>
                    <li><b>Email:</b> <span className='text-green-400'>support@10minuteschool.com </span></li>
                  </ul>
                  <div className="social flex space-x-3 mt-5">
                    {
                        social.map((item) => (
                            <span className='text-2xl bg-gray-800 text-white rounded p-[5px] cursor-pointer'>{item.name}</span>
                        ))
                    }
                  </div>
                </div>
            </div>
            <p className="text-center text-gray-400 py-10">
            স্বত্ব © ২০১৫-২০২২ টেন মিনিট স্কুল কতৃক সর্বস্বত্ব সংরক্ষিত
            </p>
        </div>
    );
};

export default Footer;