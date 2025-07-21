import {
  faAreaChart,
  faArrowLeft,
  faArrowRight,
  faBathtub,
  faBed,
  faChartArea,
  faLandmark,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

const PropertyDetails = () => {
  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <div className="disply_flex my-10 mx-10 bg-gray-950 max-[432px]:flex-wrap">
        <div className="disply_flex gap-4">
          <h2 className="text-gray-200">Seaside Serenity Villa</h2>
          <FontAwesomeIcon icon={faLocationDot} />
          <p>Malibu, California</p>
        </div>
        <div>
          <p>Price</p>
          <h3>$1,250,000</h3>
        </div>
      </div>
      <div className="flex justify-between p-10 mx-10 bg-gray-900 phone">
        <div className="image-container">
        <img
          className="responsive-image mobile-image"
          src="https://ik.imagekit.io/iyp2cf0jo/Image%20(8).png?updatedAt=1747477087897"
          alt="Property image"
        />
        </div>
        <div className="image-container">
        <img
          className="responsive-image mobile-image"
          src="https://ik.imagekit.io/iyp2cf0jo/Image%20(9).png?updatedAt=1747477267959"
          alt="Property image"
        />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-1">
          <FontAwesomeIcon className="text-2xl" icon={faArrowLeft} />
          <div className="bg-gray-700 w-6 h-2 rounded-4xl cursor-pointer  hover:bg-gray-400"></div>
          <div className="bg-gray-700 w-6 h-2 rounded-4xl cursor-pointer  hover:bg-gray-400"></div>
          <div className="bg-gray-700 w-6 h-2 rounded-4xl cursor-pointer  hover:bg-gray-400"></div>
          <div className="bg-gray-700 w-6 h-2 rounded-4xl cursor-pointer  hover:bg-gray-400"></div>
          <FontAwesomeIcon className="text-2xl" icon={faArrowRight} />
        </div>
      </div>
      <div className="my-40 flex justify-center items-start mx-10 max-[432px]:flex-wrap">
        <div className="w-1/2">
          <div className="mx-10 mb-10">
            <h1>Description</h1>
            <p className="my-10">
              Discover your own piece of paradise with the Seaside Serenity
              Villa. T With an open floor plan, breathtaking ocean views from
              every room, and direct access to a pristine sandy beach, this
              property is the epitome of coastal living.
            </p>
          </div>
          <div className="disply_flex">
            <div className="p-10 bg-gray-900 w-60 mx-1 rounded-lg border border-gray-700">
              <div className="flex  items-center gap-2 ">
                <FontAwesomeIcon icon={faBed} />
                <p>Bedrooms</p>
              </div>
              <h3 className="my-2">04</h3>
            </div>
            <div className="p-10 bg-gray-900 w-60 mx-1 rounded-lg border border-gray-700">
              <div className="flex  items-center gap-2 ">
                <FontAwesomeIcon icon={faBathtub} />
                <p>Bathrooms</p>
              </div>
              <h3 className="my-2">03</h3>
            </div>
            <div className="p-10 bg-gray-900 w-60 mx-1 rounded-lg border border-gray-700">
              <div className="flex  items-center gap-2 ">
                <FontAwesomeIcon icon={faChartArea} />
                <p>Area</p>
              </div>
              <h3 className="my-2">2,500 Square Feet</h3>
            </div>
          </div>
        </div>
        <div className="w-1/2 mx-5">
          <h1>Key Features and Amenities</h1>
          <div className="my-10">
            <div className="feature">
              <FontAwesomeIcon icon={faStar} />
              <p>Expansive oceanfront terrace for outdoor entertaining</p>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faStar} />
              <p>Gourmet kitchen with top-of-the-line appliances</p>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faStar} />
              <p>Private beach access for morning strolls and sunset views</p>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faStar} />
              <p>
                Master suite with a spa-inspired bathroom and ocean-facing
                balcony
              </p>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faStar} />
              <p>Private garage and ample storage space</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
