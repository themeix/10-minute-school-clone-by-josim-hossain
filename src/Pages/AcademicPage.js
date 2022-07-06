import React from "react";
import { NavLink } from "react-router-dom";

const AcademicPage = () => {
  const classList = [
    { name: "এইচএসসি" },
    { name: "দশম শ্রেণী" },
    { name: "নবম শ্রেণী" },
    { name: "অষ্টম শ্রেণী" },
    { name: "সপ্তম শ্রেণী" },
    { name: "ষষ্ট শ্রেণী" },
    { name: "পঞ্চম শ্রেণী" },
    { name: "চতুর্থ  শ্রেণী" },
    { name: "তৃতীয় শ্রেণী" },
    { name: "দ্বিতীয় শ্রেণী" },
    { name: "প্রথম শ্রেণী" },
  ];

  const sub = [
    {
      image:
        "https://d1yreyj8btzg0t.cloudfront.net/pro/Subject%20Icon/Physics_First.png",
      subName: "পদার্থবিজ্ঞান ১ম পত্র ",
    },
    {
      image:
        "https://d1yreyj8btzg0t.cloudfront.net/pro/Subject%20Icon/Physics_Second.png",
      subName: "পদার্থবিজ্ঞান ২য় পত্র ",
    },
    {
      image:
        "https://d1yreyj8btzg0t.cloudfront.net/pro/Subject%20Icon/Maths_One.png",
      subName: " উচ্চতর গণিত ১ম পত্র ",
    },
    {
      image:
        "https://d1yreyj8btzg0t.cloudfront.net/pro/Subject%20Icon/Maths_Two.png",
      subName: " উচ্চতর গণিত ২য় পত্র ",
    },
    {
      image:
        "https://d1yreyj8btzg0t.cloudfront.net/pro/Subject%20Icon/Chemistry_First.png",
      subName: " রসায়ন ১ম পত্র ",
    },
    {
      image:
        "https://d1yreyj8btzg0t.cloudfront.net/pro/Subject%20Icon/Chemistry_Second.png",
      subName: " রসায়ন ২য় পত্র ",
    },
    {
      image:
        "https://d1yreyj8btzg0t.cloudfront.net/pro/Subject%20Icon/Biology_One.png",
      subName: " জীববিজ্ঞান ১ম পত্র ",
    },
    {
      image:
        "https://d1yreyj8btzg0t.cloudfront.net/pro/Subject%20Icon/Biology_Second.png",
      subName: " জীববিজ্ঞান ২য় পত্র ",
    },
  ];

  return (
    <div className="py-32 px-5 md:px-10 lg:px-24">
      <div className="group-select-box flex justify-between">
        <div className="group-box bg-gray-100 w-fit md:px-4 py-3 rounded-lg md:space-x-4">
          <NavLink
            to=""
            className="science bg-red-500 text-white px-2 md:px-8  py-2 rounded-full font-[arial]"
          >
            Science
          </NavLink>
          <NavLink
            to="/"
            className="commerce  hover:bg-red-500 hover:text-white md:px-8  py-2 rounded-full font-[arial]"
          >
            Business Studies
          </NavLink>
          <NavLink
            to="/"
            className="arts  hover:bg-red-500 hover:text-white px-8  py-2 rounded-full font-[arial]"
          >
            Humanities
          </NavLink>
        </div>
        <div className="class-list">
          <select
            name=""
            id=""
            className="border py-1 px-3 bg-gray-100 font-semibold rounded cursor-pointer"
          >
            {classList.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="scrinceContent mt-5">
        <h1 className="text-xl font-[arial]"> Science </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {sub.map((item, index) => (
                <div className="flex items-center space-x-3 px-3 py-1 rounded hover:shadow hover:scale-105 ">
                    <img className="w-[40px]" src={item.image} alt="" />
                    <p>{item.subName}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicPage;
