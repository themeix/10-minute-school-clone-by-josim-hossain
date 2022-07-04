import React from "react";
import HeroBottomCard from "./HeroBottomCard";
import book from "../../../Assets/book.png"
import had from "../../../Assets/mortarboard.png"
import suitcase from "../../../Assets/black-suitcase.png"
import rocket from "../../../Assets/rocket.png"

const HeroBottom = () => {
    const cardItems =[
        {  id: 1, image : `${book}`, text : "ক্লাস ১- ১২"  },
        {  id: 2, image : `${had}`, text : "ভর্তি পরীক্ষা"  },
        {  id: 3, image : `${suitcase}`, text : "চাকরি প্রস্তুতি"  },
        {  id: 4, image : `${rocket}`, text : "কোর্স সমূহ"  },


    ];
  return (
    <div className="py-8">
      <div className="title text-center mb-5 text-gray-600">
        <h1 className="text-4xl font-semibold mb-2">
          নিজের শেখা নিজেই গুছিয়ে <br /> নেয়ার যাত্রা শুরু হোক
        </h1>
        <p className="text-xl text-gray-500">
          যেকোনো বিষয়ের যেকোনো টপিকে পড়ালেখা করতে চলে যাও তোমার পছন্দের সেকশনে
        </p>
      </div>
      <div className="card-content lg:px-24 ">
        <div className="card-wrapper bg-gray-100 rounded-md p-4 w-full grid grid-cols-4 gap-4">
            {
                cardItems.map((items) => (
                    <HeroBottomCard image={items.image} text={items.text} />
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
