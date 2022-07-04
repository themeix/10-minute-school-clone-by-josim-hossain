import React from 'react';

const Button = (props) => {
    return (
        <div className='mx-auto'>
           <button className='bg-[#27895D] text-white py-2 drop-shadow-lg px-5 text-[19px] rounded-md'>{props.text}</button>
        </div>
    );
};

export default Button;