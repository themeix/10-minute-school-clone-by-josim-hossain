import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HeroArea = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



  return (
    <div className="p-28  bg-black text-center">

    <div className="text text-white">
      <h1 className="text-5xl font-semibold">বিশেষ মূল্যছাড়!</h1>
      <p className="text-xl my-5">পুরো জুলাই মাস জুড়ে টেন মিনিট স্কুলের বিভিন্ন কোর্স করা যাবে আরো সাশ্রয়ে!</p>
    </div>

      <Carousel 
         swipeable={true}
         draggable={true}
         showDots={true}
         responsive={responsive}
         ssr={true} // means to render carousel on server-side.
         infinite={true}
         dotListClass="custom-dot-list-style"
         slidesToSlide={1}>
       
          < img className="w-30% pr-4 rounded-lg" src="https://cdn.10minuteschool.com/md/images/HSC-2022-SMP-500x710.jpg" alt="" />
        
          < img className="w-30% pr-4 rounded-lg" src="https://cdn.10minuteschool.com/md/images/HSC-Short-2023.jpg" alt="" />
       
          < img className="w-30% pr-4 rounded-lg" src="https://cdn.10minuteschool.com/md/images/GBSE-500x710.jpg" alt="" />
       
          < img className="w-30% pr-4 rounded-lg" src="https://cdn.10minuteschool.com/md/images/IELTS-Course-by-Munzereen-Shahid-500x710.jpg" alt="" />
       
          < img className="w-30% pr-4 rounded-lg" src="https://cdn.10minuteschool.com/md/images/thumbnails/eid-special/facebook-marketing.jpg" alt="" />
       
          < img className="w-30% pr-4 rounded-lg" src="https://cdn.10minuteschool.com/md/images/Bcs.jpg" alt="" />
      
      </Carousel>
      

    <div className="arrow">
      <div>
        
      </div>
    </div>

    </div>
  );
};

export default HeroArea;
