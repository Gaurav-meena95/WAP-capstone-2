import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div>
      <div>
        <div className="disply_flex  max-[432px]:flex-wrap  max-[432px]:my-10 my-10">
          <div className="max-[432px]:flex-col">
            <h1>Aution Hub</h1>
            <input
              className="border_stl my-5 py-3 px-10 w-80 block" 
              type="email"
              placeholder="Enter Your Email"
              required
            />
            <button className="border_stl block bg-purple-900 px-10 py-2">Send</button>
          </div>
          <div className="flex  max-[432px]:flex-wrap  max-[432px]:my-10  gap-15">
            <div className="w-30 hover:cursor-pointer">
              <h2 className="mb-3 text-gray-700">Home</h2>
              <p>Features</p>
              <p>Properties</p>
              <p>Testimonials</p>
              <p>FAQs</p>
            </div>
            <div className="w-30 hover:cursor-pointer">
              <h2 className="mb-3 text-gray-700">About Us</h2>
              <p>Our Story</p>
              <p>Our Team</p>
              <p>Careers</p>
              <p>Press</p>
            </div>
            <div className="w-30 hover:cursor-pointer">
              <h2 className="mb-3 text-gray-700">Properties</h2>
              <p>Portfolio</p>
              <p>Categories</p>
              <p>Featured Listings</p>
              <p>Recently Sold</p>
            </div>
            <div className="w-30 hover:cursor-pointer">
              <h2 className="mb-3 text-gray-700">Services</h2>
              <p>Valuation Mastery</p>
              <p>Strategic Marketing</p>
              <p>Closing Success</p>
              <p>Property Management</p>
            </div>
            <div className="w-30 hover:cursor-pointer">
              <h2 className="mb-3 text-gray-700">Contact Us</h2>
              <p>Contact Form</p>
              <p>Our Offices</p>
              <p>Support</p>
              <p>Live Chat</p>
            </div>
          </div>
        </div>
        <div className="disply_flex my-10  max-[432px]:flex-col ">
          <div className="flex gap-10">
            <span>@2023 Estatein. All Rights Reserved.</span>
            <span>Terms & Conditions</span>
          </div>

          <div className=" max-[432px]:mt-15 mb-5">
            <span className="mx-5">
              <FontAwesomeIcon className="text-3xl" icon={faGithub} />
            </span>
            <span className="mx-5">
              <FontAwesomeIcon className="text-3xl" icon={faInstagram} />
            </span>
            <span className="mx-5">
              <FontAwesomeIcon className="text-3xl" icon={faFacebook} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
