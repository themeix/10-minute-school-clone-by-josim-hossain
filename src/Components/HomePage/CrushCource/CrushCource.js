import React from "react";
import ClassCard from "./CrushCard";
import hscSyllabus from "../../../Assets/HSC-short-syllabus.jpg";
import hscLast from "../../../Assets/hsc-last-time.jpg";
import sscLast from "../../../Assets/ssc-last-time.jpg";

const CrushCource = () => {
  const info = [
    {
      image: `${hscSyllabus}`,
      title: "HSC 2023 Short Syllasbus [Crash Cource]",
      subtitle: "৪০০টি লাইভ ক্লাস, সাথে আছে মডেল টেস্ট",
      classDuration: "ক্লাস চলবে: ৮ মাস",
    },
    {
      image: `${hscLast}`,
      title: "HSC'22 শেষ মুহূর্তের প্রস্তুতি",
      subtitle: "১০টি বিষয়ে ৪টি লাইভ ক্লাস",
      classDuration: "ক্লাস চলবে মোট ১৯২ ঘণ্টা",
    },
    {
      image: `${sscLast}`,
      title: "SSC 22 শেষ মুহূর্তের প্রস্তুতি",
      subtitle: "১০টি বিষয়ে ৪টি লাইভ ক্লাস",
      classDuration: "ক্লাস চলবে মোট ১৯২ ঘণ্টা",
    }
     
  ];

  return (
    <div className="px-10 py-10 lg:px-24">
      <h3 className="lg:text-[18px] mb-6 text-center">স্পেশাল ক্র্যাশ কোর্স</h3>
      <div className="grid md:grid-cols-3 gap-5">
        {info.map((item) => (
          <ClassCard
            key={item.title}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            classDuration={item.classDuration}
          />
        ))}
      </div>
    </div>
  );
};

export default CrushCource;
