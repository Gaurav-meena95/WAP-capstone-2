import React, { useState } from "react";
import home from "../../assets/home2.png";
import effort from "../../assets/effort.png";
import smart from "../../assets/smart.png";
import unlock from "../../assets/unlock.png";
import Properties from "../Properties/Properties";
import Footer from "../Footer/Footer";
import Explore from "../Explore/Explore";
import Expirence from "../Expirence/Expirence";
import HomeFeatures from "./HomeFeatures";
const Home = () => {
  return (
    <div className=" text-white">
      {/* this div for upper */}
      <div className="disply_flex bg-gray-900 border border-gray-600  phone  ">
        <div className="text_cont">
          <div className=" mx-10 my-10">
            <h1 className="text-2xl md:text-4xl">
              Discover Your Dream Property with Estatein
            </h1>
            <p className="text-gray-500">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
          </div>
          <div className="flex gap-6  mx-10 my-10">
            <button className="border_stl p-2 ">Learn More</button>
            <button className="bg-purple-600 p-2 rounded ">
              Browse Properties
            </button>
          </div>
          <Expirence/>
        </div>
        <div className=" w-full md:w-1/2 mx-10 flex max-[432px]:w-full max-[432px]:my-10 bg-contain  ">
          <img className="rounded"
            src="https://wallpapers.com/images/hd/dark-luxury-house-and-tall-glass-windows-cll7wwtf2mmy19zu.jpg" alt="home img"
          />
        </div>
      </div>
      <HomeFeatures
        home={home}
        unlock={unlock}
        effort={effort}
        smart={smart}
      />
      <div>
        <div className="flex my-10 mt-30 mx-10">
          <div>
            <h1> Top Featured Properties</h1>
            <p className="text-gray-500 my-5">
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein. Click "View Details" for more
              information.
            </p>
          </div>
          
        </div>

        <div className="flex justify-around items-center phone  gap-1 max-[432px]:hidden ">
          <Properties  />
          <Properties />
          <Properties />
        </div>
        <div className="min-[432px]:hidden flex justify-around items-center phone  gap-1 ">
          <Properties  />
        </div>
        <div className="flex justify-center items-center my-10">
            <button  className="border_stl  cursor-pointer  p-3 w-50 max-[432px]:w-40 max-[432px]:text-xs">View All Properties</button>
          </div>
        <div className="my-10 mx-10">
          <Explore/>
        </div>
      </div>
    </div>
  );
};

export default Home;
