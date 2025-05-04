import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div>
      <div className="disply_flex p-20 border_stl">
        <div>
          <h1>Start Your Real Estate Journey Today</h1>
          <p className="text-gray-500 my-5">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>
        <div className=" mx-10">
          <button className="bg-purple-600 p-2 rounded  w-50">
            Explore Properties
          </button>
        </div>
      </div>
      <div>
        <div className="disply_flex my-10">
          <div>
            <h1>Aution Hub</h1>
            <input
              className="border_stl my-5"
              type="text"
              placeholder="Enter Your Email"
            />
            <button className="border_stl bg-purple-900 px-5">Send</button>
          </div>
          <div className="flex  gap-15">
            <div>
              <h2>Home</h2>
              <p>Features</p>
              <p>Properties</p>
            </div>
            <div>
              <h2>About Us</h2>
              <p>Our Story</p>
              <p>Our Story</p>
              <p>Our Story</p>
              <p>Our Story</p>
            </div>
            <div>
              <h2>Properties</h2>
              <p>Portfolio</p>
              <p>Categories</p>
            </div>
            <div>
              <h2>Services</h2>
              <p>Valuation Mastery</p>
              <p>Strategic Marketing</p>
              <p>Closing Success</p>
              <p>Property Management</p>
            </div>
            <div>
              <h2>Contact Us </h2>
              <p>Contact Form</p>
              <p>Our Offices</p>
            </div>
          </div>
        </div>
        <div className="disply_flex my-10 ">
          <div className="flex gap-10">
            <span>@2023 Estatein. All Rights Reserved.</span>
            <span>Terms & Conditions</span>
          </div>

          <div className="">
            <span className="mx-2">
              <FontAwesomeIcon icon={faGithub} />
            </span>
            <span className="mx-2">
              <FontAwesomeIcon className="text-<xl" icon={faInstagram} />
            </span>
            <span className="mx-2">bye</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
