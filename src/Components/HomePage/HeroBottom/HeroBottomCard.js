import React from 'react';


const HeroBottomCard = (props) => {
    return (
        <div className='bg-white p-4 rounded-md border-2 border-gray-100 hover:text-green-600 hover:border-2 hover:border-green-600 flex items-center space-x-4 hover:scale-95'>
            <img className='w-[16%]' src={props.images} alt="book" />
            <h1 className='text-xl'>{props.text}</h1>
        </div>
    );
};

export default HeroBottomCard;