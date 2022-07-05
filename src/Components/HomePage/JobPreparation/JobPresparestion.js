import React from "react";
import JobCard from "./JobCard";
import bcs from "../../../Assets/BCS-Course-Thumbnail.jpg";
import bank from "../../../Assets/job.webp";
import primary from "../../../Assets/prathomic.jpg";
import bcsQ from "../../../Assets/BCS-Question-Solving.webp";
import Button from "../../Button/Button";

const JobPresparestion = () => {
  const jobs = [
    {
      id: 1,
      image: `${bcs}`,
      title: " বিসিএস প্রিলি কোর্স ",
      link: "বিস্তারিত দেখুন",
    },
    {
      id: 2,
      image: `${bank}`,
      title: "ব্যাংক জবস কোর্স",
      link: "বিস্তারিত দেখুন",
    },
    {
      id: 3,
      image: `${primary}`,
      title: " প্রাথমিক সহকারী শিক্ষক...",
      link: "বিস্তারিত দেখুন",
    },
    {
      id: 4,
      image: `${bcsQ}`,
      title: "বিসিএস প্রশ্ন সমাধান",
      link: "বিস্তারিত দেখুন",
    },
  ];

  return (
    <div className="bg-gray-200 py-16">
      <div className="title text-center">
        <h1 className="text-4xl mb-2">চাকরি পরীক্ষা প্রস্তুতি</h1>
        <h3 className="text-[18px] mb-6">
          আপনি কোন চাকরির জন্য প্রস্তুতি নিচ্ছেন?
        </h3>
      </div>
      <div className="cardWrap px-24 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {jobs.map((job) => (
          <div className="wrap hover:-mt-2 transition duration-1000">
            <JobCard
              key={job.id}
              image={job.image}
              title={job.title}
              link={job.link}
            />
          </div>
        ))}
      </div>

      <div className="button text-center mt-8">
        <Button text=" সকল কোর্স দেখুন  " />
      </div>
    </div>
  );
};

export default JobPresparestion;
