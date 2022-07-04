import React from 'react';
import AcchiveCard from './AcchiveCard';

const Accivment = () => {
    return (
        <div className='px-24 py-10'>
            <h1 className='text-center text-4xl font-semibold py-5'>আমাদের অর্জন</h1>
            <div className="div mx-auto ml-32 items-center grid gap-x-32 grid-cols-3">
                <div className="imgSide hidden lg:block">
                    <img src="https://cdn.10minuteschool.com/home/career.jpg" alt="" />
                </div>
                <div className="space-y-10">
                    <AcchiveCard image="https://10minuteschool.com/assets/icons/home-page/amader-orjon/teacher.png" title="৪৫০+" text="শিক্ষক" />
                    <AcchiveCard image="https://10minuteschool.com/assets/icons/home-page/amader-orjon/student.png" title="৯৩ লক্ষ+" text="শিক্ষার্থী" />
                </div>
                <div className="space-y-10">
                <AcchiveCard  image="https://10minuteschool.com/assets/icons/home-page/amader-orjon/content.png" title="১৮ হাজার+" text="ভিডিও" />
                <AcchiveCard   image="https://10minuteschool.com/assets/icons/home-page/amader-orjon/user.png" title="৩২ লক্ষ+" text="অ্যাপ ব্যবহারকারী" />
                </div>
            </div>
        </div>
    );
};

export default Accivment;