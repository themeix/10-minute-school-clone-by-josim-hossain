import React from 'react';
import CoursesCard from '../Components/Courses/CoursesCard';
import Language from "../Data/Course/LanguageLearnData";
import KidsCourse from "../Data/Course/KidsCourseData";
import SkillDevCourse from "../Data/Course/SkillDevCourseData";
import ProfessionalCourse from "../Data/Course/ProfessionalCourseData";
import FreeCourse from "../Data/Course/FreeCourseData";


const CoursesPage = () => {
    return (
        <div className='py-32 px-24'>

           <div className="div">
            <h1 className='text-2xl mb-3 font-[arial]'>Language Learning</h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5">
                {Language.map((item, index) => (
                    <CoursesCard key={index} cover={item.image} title={item.title} price={item.price} />
                ))}
              
            </div>
           </div>
           {/* Kids Course */}
           <div className="div">
            <h1 className='text-2xl mt-10 mb-3 font-[arial]'>Kid's Course</h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5">
                {KidsCourse.map((item, index) => (
                    <CoursesCard key={index} cover={item.image} title={item.title} price={item.price} />
                ))}
              
            </div>
           </div>

           {/* Skill Development Course */}
           <div className="div">
            <h1 className='text-2xl mt-10 mb-3 font-[arial]'>Skill Development Course</h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5">
                {SkillDevCourse.map((item, index) => (
                    <CoursesCard key={index} cover={item.image} title={item.title} price={item.price} />
                ))}
              
            </div>
           </div>
                    {/* Professional Course */}
           <div className="div">
            <h1 className='text-2xl mt-10 mb-3 font-[arial]'>Professional Course</h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5">
                {ProfessionalCourse.map((item, index) => (
                    <CoursesCard key={index} cover={item.image} title={item.title} price={item.price} />
                ))}
              
            </div>
           </div>

           <div className="div">
            <h1 className='text-2xl mt-10 mb-3 font-[arial]'>Free Course</h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5">
                {FreeCourse.map((item, index) => (
                    <CoursesCard key={index} cover={item.image} title={item.title} price={item.price} />
                ))}
              
            </div>
           </div>
            
        </div>
    );
};

export default CoursesPage;