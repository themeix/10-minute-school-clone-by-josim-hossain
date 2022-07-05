import React from "react";
import download from "../../../Assets/app-download.webp";
import playstore from "../../../Assets/playstore.webp";
import appStore from "../../../Assets/appstore.webp";

// icons
import {HiOutlineDownload} from "react-icons/hi";
import {BsFillKeyFill} from "react-icons/bs";
import {ImSafari} from "react-icons/im";
import {GiNotebook} from "react-icons/gi";


const Download = () => {
  return (
    <div className="px-10 lg:px-24 py-10">
      <div className="black-box grid md:grid-cols-2 items-center space-x-4 bg-black rounded-lg p-5">
        <div className="content">
          <h1 className="title text-white text-center md:text-left text-2xl px-20 lg:px-14 mb-5">
            ডাউনলোড করো আমাদের মোবাইল অ্যাপ, শেখা শুরু করো আজ থেকেই
          </h1>
          <div className="process grid grid-cols-2 my-6">
          <div className="left mx-auto">
              <div className="flex items-center space-x-4">
                <div className="circle bg-[#F14135] w-9 h-9 rounded-full flex justify-center items-center">
                    <HiOutlineDownload className="icon text-white"/>
                </div>
                <div className="text">
                  <h2 className="text-white text-center text-xl">
                  রিসোর্স ডাউনলোড
                  </h2>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-5">
                <div className="circle bg-[#3865F3] w-9 h-9 rounded-full flex justify-center items-center">
                    <BsFillKeyFill className="icon text-white"/>
                </div>
                <div className="text">
                  <h2 className="text-white text-center text-xl">
                  অফলাইন এক্সেস
                  </h2>
                </div>
              </div>
            </div>
            <div className="right mx-auto">
              <div className="flex items-center space-x-4">
                <div className="circle bg-[#E3AA3D] w-9 h-9 rounded-full flex justify-center items-center">
                    <ImSafari className="icon text-white"/>
                </div>
                <div className="text">
                  <h2 className="text-white text-center text-xl">
                  প্রোগ্রেস ট্র্যাকিং
                  </h2>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-5">
                <div className="circle bg-[#27895D] w-9 h-9 rounded-full flex justify-center items-center">
                    <GiNotebook className="icon text-white"/>
                </div>
                <div className="text">
                  <h2 className="text-white text-center text-xl">
                  কোর্স নোটিফিকেশন
                  </h2>
                </div>
              </div>
            </div>
            
          
          </div>
          <div className="download-source mb-5 lg:flex justify-center mt-10">
            <a href="https">
                <img className="mx-autow-[30%] lg:w-[60%]" src={playstore} alt="play Store" />
            </a>
            <a href="https">
                <img className=" mx-auto w-[30%] lg:w-[60%]" src={appStore} alt="App Store" />
            </a>
          </div>
        </div>
        <div className="image">
          <img className="w-[70%] mx-auto" src={download} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Download;
