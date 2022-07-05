import React from 'react';

const ServiceCard = (props) => {
    const {images, title, text} = props;
    return (
        <div className='text-center p-6'>
            <img className='mx-auto' src={images} alt="images" />
            <h2 className='text-xl my-4 text-gray-600 font-semibold'>{title}</h2>
            <p className='text-lg text-gray-600'>{text}</p>
        </div>
    );
};

export default ServiceCard;