import React from 'react';

const BookStoreCard = ({img, title, writer, ammount}) => {
    return (
        <div>
            <div className="card bg-gray-200 rounded">
                <img className='p-7 rounded-lg' src={img} alt="" />
                <div className="content px-4">
                    <h1 className="title text-[18px] font-[arial]">
                        {title}
                    </h1>
                    <h3 className="writer text-lg font-[arial] text-gray-500">
                        { writer }
                    </h3>
                    <h3 className="ammount text-[19px] font-[arial] py-4 text-green-700 font-bold">
                        { ammount }
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default BookStoreCard;