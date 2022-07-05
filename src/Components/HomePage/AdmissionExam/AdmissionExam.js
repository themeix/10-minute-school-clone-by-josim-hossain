import React from "react";
import Button  from "../../Button/Button";
import AdmissionCard from "./AdmissionCard";
import scrince from "../../../Assets/science.jpg"
import enginering from "../../../Assets/enginering.jpg"
import bs from "../../../Assets/bs.jpg"
import arts from "../../../Assets/arts.jpg"

const AdmissionExam = () => {

    const addmissionInfo = [
        {image : `${scrince}`, title: "বিশ্ববিদ্যালয় বিজ্ঞান", num:"2,456"},
        {image : `${enginering}`, title: "ইঞ্জিনিয়ারিং", num : "৯৭৫"},
        {image : `${bs}`, title: "ব্যবসায় শিক্ষা", num : "৭৩১"},
        {image : `${arts}`, title: "ডি ইউনিট/ বিবিএ+ প্রাইভেট", num : "১১১৭"}
    ]

  return (
    <div className="py-16">
      <div className="title text-center mb-5 text-gray-600">
        <h1 className="text-3xl font-semibold mb-2">
        ভর্তি পরীক্ষা
        </h1>
        <p className="text-xl text-gray-500">
        স্বপ্নের ভার্সিটিতে ভর্তি হয়ে যাও
        </p>
      </div>
      <div className="card-wrap px-10 lg:px-24 grid md:grid-cols-2 gap-y-5 gap-x-2 ">
        {addmissionInfo.map((item, index) => (
            <AdmissionCard key={index} image={item.image} title={item.title} num={item.num} />
        ))}
      </div>
      <div className="button flex mt-10">
        <Button text="সকল প্রোগ্রাম দেখো"/>
      </div>
    </div>
  );
};

export default AdmissionExam;
