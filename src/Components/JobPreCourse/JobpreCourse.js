import React from "react";
import JobPreCard from "./JobPreCourseCard";
import bcs from "../../Assets/BCS-Course-Thumbnail.jpg";
import bank from "../../Assets/job.webp";
import primary from "../../Assets/prathomic.jpg";
import bcsQ from "../../Assets/BCS-Question-Solving.webp";
import Button from "../Button/Button";

const JobpreCourse = () => {
  const jobs = [
    {
      id: 1,
      image: `${bcs}`,
      title: " বিসিএস প্রিলি কোর্স ",
      ammount: "৳ 3000",
      link: "বিস্তারিত দেখুন",
    },
    {
      id: 2,
      image: `${bank}`,
      title: "ব্যাংক জবস কোর্স",
      ammount: "৳ 1500",
      link: "বিস্তারিত দেখুন",
    },
    {
      id: 3,
      image: `${primary}`,
      title: " প্রাথমিক সহকারী শিক্ষক...",
      ammount: "৳ 450",
      link: "বিস্তারিত দেখুন",
    },
    {
      id: 4,
      image: `${bcsQ}`,
      title: "বিসিএস প্রশ্ন সমাধান",
      ammount: "ফ্রী",
      link: "বিস্তারিত দেখুন",
    },
  ];

  return (
    <div className="bg-gray-200 pt-32 px-24">
        <h1 className="text-2xl font-[arial] mb-2">Job Recruitment</h1>
      <div className="cardWrap grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {jobs.map((job) => (
          <div className="wrap hover:-mt-2 transition duration-1000">
            <JobPreCard
              key={job.id}
              image={job.image}
              title={job.title}
              link={job.link}
              ammount={job.ammount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};


export default JobpreCourse;