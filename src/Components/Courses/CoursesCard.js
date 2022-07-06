import React from "react";

const CoursesCard = ({cover, title, price}) => {
  return (
    <div>
      <div className="card cursor-pointer border rounded-lg overflow-hidden">
        <img
          src={cover}
          alt=""
        />
        <div className="content">
          <div className="title">
            <h3 className="p-3 text-[18px] font-[arial] border-b">
              {title}
            </h3>
          </div>
          <div className="price px-3 flex justify-between items-center font-semibold">
            <h3 className="p-3 text-[18px] font-[arial]">{price}</h3>
            <h3 className="text-green-600"> বিস্তারিত দেখুন</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
