import React from 'react';

const AdmissoinExamCard = ({cover, title}) => {
    return (
        <div>
            <div className="card border overflow-hidden rounded-lg cursor-pointer">
                <img src={cover} alt="" />
                <h1 className=' text-center my-4 font-[arial]'>{title}</h1>
            </div>
        </div>
    );
};

export default AdmissoinExamCard;