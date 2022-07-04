import React from 'react';

const ProgramList = () => {

    const CourseList =[
        {name : "ঘরে বসে Spoken English"},
        {name : "IELTS Course by Munzereen Shahid"},
        {name : "Facebook Marketing"},
        {name : "২৪ ঘণ্টায় কোরআন শিখি"},
        {name : "ঘরে বসে Freelancing"},
    ];
    const HscCourse =[
        {name : "HSC’22 শেষ মুহূর্তের প্রস্তুতি কোর্স"},
        {name : "HSC 2023 Short Syllabus [Crash Course]"},
        {name : "HSC 2022 English Short Syllabus Course"},
        {name : "HSC 2022 Bangla Short Syllabus Course"},
      
    ];

    const OnlineBatch = [
        {name : "৯ম - ১০ম শ্রেণি অনলাইন ব্যাচ"},
        {name : "৮ম শ্রেণি অনলাইন ব্যাচ"},
        {name : "৭ম শ্রেণি অনলাইন ব্যাচ"},
        {name : "৬ম শ্রেণি অনলাইন ব্যাচ"},
        {name : "৫ম শ্রেণি অনলাইন ব্যাচ"},
    ];

    const JobPreparation =[
        {name : "ব্যাংক জবস কোর্স"},
        {name : "বিসিএস প্রিলি কোর্স"},
        {name : "বিসিএস প্রশ্ন সমাধান"},
        {name : "প্রাথমিক সহকারী শিক্ষক নিয়োগ পরীক্ষা কোর্স"}
    ];
    return (
        <div className=' bg-gray-200 px-10 md:px-16 lg:px-24 py-16'>
            <div className=" grid md:grid-cols-2 md:gap-5 lg:grid-cols-4">
                <div className="course">
                    <h1 className='text-xl font-semibold text-gray-800 mb-3'>জনপ্রিয় স্কিল ডেভেলপমেন্ট কোর্স</h1>
                {
                     CourseList.map((course,index)=>(
                            <li className='list-none text-[18px] mt-2 text-gray-500 cursor-pointer hover:text-orange-500'>{course.name}</li>
                        ))
                    }
                </div>
                <div className="HSC lg:ml-10 mt-5 md:mt-0">
                <h1 className='text-xl font-semibold text-gray-800 mb-3'>এইচএসসি কোর্সসমূহ</h1>

                {
                     HscCourse.map((course,index)=>(
                        <li className='list-none text-[18px] mt-2 text-gray-500 cursor-pointer hover:text-orange-500'>{course.name}</li>
                        ))
                    }
                </div>
                <div className="Online lg:ml-10 mt-5 md:mt-0">
                <h1 className='text-xl font-semibold text-gray-800 mb-3'>অনলাইন ব্যাচ</h1>

                {
                 OnlineBatch.map((course,index)=>(
                    <li className='list-none text-[18px] mt-2 text-gray-500 cursor-pointer hover:text-orange-500'>{course.name}</li>
                        ))
                    }
                </div>
                <div className="Job-Cource lg:ml-5 mt-5 md:mt-0">
                <h1 className='text-xl font-semibold text-gray-800 mb-3'>চাকরি প্রস্তুতি</h1>

                {
                     JobPreparation.map((course,index)=>(
                        <li className='list-none text-[18px] mt-2 text-gray-500 cursor-pointer hover:text-orange-500'>{course.name}</li>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ProgramList;