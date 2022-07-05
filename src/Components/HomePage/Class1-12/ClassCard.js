import React from 'react';
import {BsFillPlayCircleFill} from 'react-icons/bs';
import {GiAerialSignal} from 'react-icons/gi';
import {FaUserFriends} from 'react-icons/fa';


const ClassCard = ({image, imageText, title, videNum, subNum}) => {
    return (
        <div className='border-2 text-center rounded-lg overflow-hidden bg-white cursor-pointer'>
            <div className='bg-[#055F60] relative'>
            <img src={image} alt="" className='w-full' />
            <h1 className='absolute top-4 left-4 text-white text-xl'>{imageText}</h1>
            </div>

            <h1 className='text-2xl mt-6 pb-3'>{title}</h1>

            <div className="flex border-b-2 pb-4  justify-between  items-center px-5">
                <div className="div">
                    <div className="flex space-x-3 text-gray-400">
                        <BsFillPlayCircleFill />
                        <p>{videNum} ফ্রী ভিডিও</p>
                    </div>
                    <div className="flex space-x-2 mt-2 text-gray-400">
                        <GiAerialSignal />
                        <p>লাইভ ক্লাস</p>
                    </div>

                </div>
                <div className="div">
                    <div className="flex space-x-2 text-gray-400">
                        <FaUserFriends />
                        <p>{subNum} বিষয়</p>
                    </div>
                    <div className="flex space-x-2 mt-2 text-gray-400">
                        <BsFillPlayCircleFill />
                        <p>MCQ এবং CQ সল্ভ</p>
                    </div>

                </div>
            </div>
            <a href="https://josimhossain.com" className='mt-6 pb-6 block text-xl text-green-600 cursor-pointer font-semibold'>বিস্তারিত দেখো</a>
        </div>
    );
};

export default ClassCard;