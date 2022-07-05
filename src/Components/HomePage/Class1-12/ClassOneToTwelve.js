import React from "react";
import ClassCard from "./ClassCard";
import bg from "../../../Assets/academic-bg.webp"

const ClassOneToTwelve = () => {


    const info =[
        {image : `${bg}`, imageText: "এইচএসসি | HSC", title: "এইচএসসি", videNum : "৫৭৭০", subNum : "৩৫" },

        {image : `${bg}`, imageText: "এসএসসি | SSC", title: "এসএসসি", videNum : "১৬৬০", subNum : "১৯" },

        {image : `${bg}`, imageText: "২য়-৮ম শ্রেণী | Class 2-8", title: "২য়-৮ম শ্রেণী", videNum : "১৮৮০", subNum : "৪৫" },
    ];

  return (
    <div className="px-10 lg:px-24">
      <div className="title text-center">
        <h1 className="text-2xl lg:text-4xl mb-2">ক্লাস ১-১২</h1>
        <h3 className="lg:text-[18px] mb-6">
          তুমি এখন পড়াশোনার কোন পর্যায়ে আছো?
        </h3>
      </div>
      <div className="grid md:grid-cols-3 gap-5">

        {
            info.map((item) =>(
                <ClassCard key={item.title} image={item.image} imageText={item.imageText} title={item.title} videNum={item.videNum} subNum={item.subNum} />
            ))
        }
        
      </div>
    </div>
  );
};

export default ClassOneToTwelve;
