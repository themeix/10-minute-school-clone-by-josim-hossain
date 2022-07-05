import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { GiAerialSignal } from "react-icons/gi";
const CrushCard = ({ image, title, subtitle, classDuration }) => {
  return (
    <div className="border-2 text-center rounded-lg overflow-hidden bg-white cursor-pointer">
      <img src={image} alt="" className="w-full" />

      <h1 className="text-lg font-[arial] mt-6 pb-3">{title}</h1>

      <div className="px-6 border-b-2 pb-5">
        <div className="flex space-x-3 text-gray-400">
          <BsFillPlayCircleFill />
          <p>{subtitle}</p>
        </div>
        <div className="flex space-x-2 mt-2 text-gray-400">
          <GiAerialSignal />
          <p>লাইভ ক্লাস</p>
        </div>
      </div>
      <a
        href="https://josimhossain.com"
        className=" py-2 block text-xl text-green-600 cursor-pointer font-semibold"
      >
        ভর্তি হও
      </a>
    </div>
  );
};

export default CrushCard;
