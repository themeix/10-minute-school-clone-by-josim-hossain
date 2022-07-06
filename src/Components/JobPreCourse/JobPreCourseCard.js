import React from "react";

const JobPreCard = ({ image, title, link, ammount }) => {
  return (
    <div className="border-2 rounded-lg overflow-hidden bg-white cursor-pointer">
      <img src={image} alt="" className="w-full" />
      <h1 className="text-2xl mt-6 pb-3 px-3 border-b-2 border-gray-300">
        {title}
      </h1>
      <div className="flex justify-between items-baseline px-2 font-semibold">
        <h2 className="ammount text-[17px] font-[arial]">{ammount}</h2>
        <a
          href="https://josimhossain.com"
          className="mt-6 pb-6 block text-[17px] text-green-600 cursor-pointer"
        >
          {link}
        </a>
      </div>
    </div>
  );
};

export default JobPreCard;
