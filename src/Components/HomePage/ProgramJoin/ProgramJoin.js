import React from 'react';

const ProgramJoin = () => {
    return (
        <div className='grid md:grid-cols-2 px-24 py-10 items-center justify-between'>
            <div className="textSide">
                <h1 className='text-3xl text-center md:text-left lg:text-5xl font-bold lg:leading-[55px]'>আজই জয়েন করুন বাংলাদেশের সবচেয়ে বড় লার্নিং প্ল্যাটফর্মে</h1>
                <p className='font-semibold text-[19px] text-center md:text-left text-gray-600 my-3'>ফ্রি রেজিস্ট্রেশন করে শেখা শুরু করে দিন</p>
                <button className='text-white w-full lg:w-[40%]  bg-green-700 hover:bg-green-800  text-2xl px-4 py-2 rounded shadow-lg mb-5'>আজই জয়েন করুন</button>
            </div>
            <div className="ImageSide ml-20">
                <img className='w-[100%]' src="https://cdn.10minuteschool.com/home/join.jpg" alt="JoinImage" />
            </div>
            
        </div>
    );
};

export default ProgramJoin;