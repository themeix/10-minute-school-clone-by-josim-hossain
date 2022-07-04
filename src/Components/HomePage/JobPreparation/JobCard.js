import React from 'react';

const JobCard = (props) => {
    const {image, title, link} = props;
    return (
        <div className='border-2 text-center rounded-lg overflow-hidden bg-white cursor-pointer'>
            <img src={image} alt="" className='w-full' />

            <h1 className='text-2xl mt-6 pb-3 border-b-2 border-gray-300'> {title} </h1>
            <a href="https://josimhossain.com" className='mt-6 pb-6 block text-xl text-green-600 cursor-pointer'>{link}</a>
        </div>
    );
};

export default JobCard;