import React from 'react';

const AcchiveCard = (props) => {
    const { image, title, text } = props;
    return (
        <div className='flex justify-center items-center space-x-4'>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="text">
                <h1 className='text-4xl font-semibold text-gray-700'>{title}</h1>
                <p className='text-xl font-semibold text-gray-500'>{text}</p>
                </div>
        </div>
    );
};

export default AcchiveCard;