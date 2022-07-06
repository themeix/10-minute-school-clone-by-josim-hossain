import React from "react";
import HeroBottomCard from "./HeroBottomCard";
import book from "../../../Assets/book.png";
import had from "../../../Assets/mortarboard.png";
import suitcase from "../../../Assets/black-suitcase.png";
import rocket from "../../../Assets/rocket.png";
import ServiceCard from "./ServiceCard";

import videoRecord from "../../../Assets/Video lecture.svg";
import exprience from "../../../Assets/Exercise.svg";
import LiveClass from "../../../Assets/LIve Class.svg";
import Sheet from "../../../Assets/Lecture sheet.svg";
import LeaderBoard from "../../../Assets/Daily result and leaderboard.svg";
import Questions from "../../../Assets/ask question.svg";

const HeroBottom = () => {
  const cardItems = [
    { id: 1, image: `${book}`, text: "ক্লাস ১- ১২" },
    { id: 2, image: `${had}`, text: "ভর্তি পরীক্ষা" },
    { id: 3, image: `${suitcase}`, text: "চাকরি প্রস্তুতি" },
    { id: 4, image: `${rocket}`, text: "কোর্স সমূহ" },
  ];

  const services = [
    {
      id: 1,
      image: `${videoRecord}`,
      title: "ভিডিও লেকচার",
      text: "শেখো নিজের ইচ্ছেমতো, পেয়ে যাও ২০ হাজারেরও বেশি ভিডিও লেকচার",
    },
    {
      id: 2,
      image: `${exprience}`,
      title: "সুবিধামত অনুশীলন",
      text: "অনুশীলন করো সুবিধামত সময়ে, মুহূর্তেই দেখে নাও তোমার স্কোর",
    },
    {
      id: 3,
      image: `${LiveClass}`,
      title: "লাইভ ক্লাস",
      text: "দৈনিক লাইভ ক্লাসে অংশ নিয়ে বজাও রাখো রুটিনমাফিক পড়াশোনা",
    },
    {
      id: 4,
      image: `${Sheet}`,
      title: "লেকচার শীট",
      text: "নিমিষেই পেয়ে যাও সহায়ক লেকচার শীট এবং ইন্টার‍্যাক্টিভ বই",
    },
    {
      id: 5,
      image: `${LeaderBoard}`,
      title: "দৈনিক লিডারবোর্ড",
      text: "শেখার প্রতিযোগিতায় বন্ধুদের মাঝে নিজের অবস্থান দেখো লিডারবোর্ডে",
    },
    {
      id: 6,
      image: `${Questions}`,
      title: "প্রশ্ন করো মন খুলে",
      text: "তোমার যেকোনো জিজ্ঞাসায় পাচ্ছো এক্সপার্ট গাইডলাইন এক প্ল্যাটফর্মেই",
    },
  ];
  return (
    <div className="py-8">
      <div className="title text-center mb-5 text-gray-600">
        <h1 className=" text-2xl lg:text-4xl font-semibold mb-2">
          নিজের শেখা নিজেই গুছিয়ে <br /> নেয়ার যাত্রা শুরু হোক
        </h1>
        <p className="text-xl px-3 text-gray-500">
          যেকোনো বিষয়ের যেকোনো টপিকে পড়ালেখা করতে চলে যাও তোমার পছন্দের সেকশনে
        </p>
      </div>
      <div className="card-content lg:px-24 ">
        <div className="card-wrapper bg-gray-100 rounded-md p-4 w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cardItems.map((items) => (
            <HeroBottomCard images={items.image} text={items.text} />
          ))}
        </div>
      </div>

      <div className="services-content lg:px-24">
        <div className="card md:p-10 grid  grid-cols-2 lg:grid-cols-3 md:gap-8 ">
            {
            services.map((items) => (
                <ServiceCard images={items.image} title={items.title} text={items.text} />
            ))
            }          
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
