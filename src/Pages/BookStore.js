import React from "react";
import BookStoreCard from "../Components/BookStore/BookStoreCard";
import AcademicBookData from "../Data/AcademicBookData";
import SkillDev from "../Data/SkillDev";

const BookStore = () => {
  return (
    <div className="py-32 px-5 md:px-10 lg:px-24">
      <div className="academicBooks">

        <h1 className="text-2xl mb-5">একাডেমিক বইসমূহ</h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-8 lg:gap-10 gap-5 ">
          {AcademicBookData.map((book, index) => (
            <BookStoreCard
              img={book.image}
              title={book.title}
              writer={book.writer}
              ammount={book.ammount}
              key={index}
            />
          ))}
        </div>
        <div>
        </div>
      </div>

      <div className="skillDev">
        <h1 className="text-2xl mt-10 mb-5">স্কিল ডেভেলপমেন্ট বইসমূহ</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-8 lg:gap-10 gap-5 ">
          {SkillDev.map((book, index) => (
            <BookStoreCard
              img={book.image}
              title={book.title}
              writer={book.writer}
              ammount={book.ammount}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookStore;
