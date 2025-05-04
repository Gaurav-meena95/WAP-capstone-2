import React from "react";
import home from "../../assets/home2.png";
import effort from "../../assets/effort.png";
import smart from "../../assets/smart.png";
import unlock from "../../assets/unlock.png";
import home1 from "../../assets/home1.png"
import Properties from "../Properties/Properties";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div className=" text-white">
      {/* this div for upper */}
      <div className="disply_flex bg-gray-900 border border-gray-600"> 
        <div className="text_cont">
          <div className=" mx-10 my-10">
            <h1 className="text-5xl my-10">Discover Your Dream Property with Estatein</h1>
            <p className="text-gray-500">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
          </div>
          <div className="flex gap-6  mx-10 my-10">
            <button className="border_stl p-2 ">Learn More</button>
            <button className="bg-purple-600 p-2 rounded ">Browse Properties</button>
          </div>
          <div className="disply_flex  mx-10"> 
            <div className="w-1/4 p-4 border_stl bg-gray-800"><h1>200+</h1><p>Happy Customers</p></div>
            <div className="w-1/4 p-4 border_stl bg-gray-800"><h1>10K</h1><p>Properties For Clients</p></div>
            <div className="w-1/4 p-4 border_stl bg-gray-800"><h1>16+</h1><p>Years of Experience</p></div>
          </div>
        </div>
        <div className=" flex bg-contain ">
          <img className="  bg-cover" src={home1} alt="" />
          <img className="  bg-cover" src={home1} alt="" />
        </div>
      </div>
      {/* this div for next four */}
      <div className="disply_flex  ">
        <div className="home_cont_2 border_stl ">
          <img className=""  src={home} alt="" /> 
          <p>Find Your Dream Home</p>
        </div>
        <div className="home_cont_2 border_stl ">
          <img className=""  src={unlock} alt="" /> 
          <p>Unlock Property Value</p>
        </div>
        <div className="home_cont_2 border_stl ">
          <img className=""  src={effort} alt="" /> 
          <p>Effortless Property Management</p>
        </div>
        <div className="home_cont_2 border_stl ">
          <img className=""  src={smart} alt="" />{" "}
          <p>Smart Investments, Informed Decisions</p>
        </div>
      </div>
      <div>
        <div className="flex my-10 mx-10">
          <div>
          <h1>Featured Properties</h1>
          <p className="text-gray-500 my-5">Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.</p>
          </div>
          <div><button className="border_stl p-3 w-50">View All Properties</button></div>
        </div>

        <div className="flex justify-around items-center gap-1 ">
          <Properties/>
          <Properties/>
          <Properties/>
        </div>
        <div className="my-10 mx-10">
        <Footer/>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
