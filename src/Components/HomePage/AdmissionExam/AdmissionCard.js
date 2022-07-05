import React from 'react';
import {FiUsers} from 'react-icons/fi';


const AdmissionCard = (props) => {
    const {image, title, num} = props;
    return (
        <div className='flex space-x-5 items-center bg-gray-100 rounded-md overflow-hidden hover:scale-110 cursor-pointer'>
            <img className='w-[30%]' src={image} alt="" />
            <div className="content">
                <h1 className='text-[20px] font-semibold text-gray-500'>{title}</h1>
                <div className="flex space-x-2 text-gray-400 mt-1">
                    <FiUsers />
                    <p>ইতিমধ্যে ভর্তি হয়েছে {num} জন</p>
                </div>
            </div>
        </div>
    );
};

export default AdmissionCard;