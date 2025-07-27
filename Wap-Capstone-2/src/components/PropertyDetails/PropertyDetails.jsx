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
import { useNavigate, useLocation } from "react-router-dom";

const PropertyDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const property = state?.property;

  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!property) {
    return <div>Property not found.</div>;
  }

  return (
    <div className="">
      <div className="disply_flex flex-col md:flex-row my-5 rounded-md mx-2 md:mx-10 bg-gray-900 max-[432px]:flex-wrap p-3 md:p-5">
        <div className="disply_flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center">
          <h2 className="text-gray-200 text-xl md:text-2xl lg:text-3xl font-semibold">{property.title}</h2>
          <div className="flex items-center gap-1 text-sm md:text-base">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>{property.location}</p>
          </div>
        </div>
        <div className="mt-2 md:mt-0 md:ml-auto text-left md:text-right">
          <p className="text-gray-400 text-xs md:text-sm">Price</p>
          <h3 className="text-lg md:text-2xl font-bold">{property.price}</h3>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4 p-2 md:p-8 lg:p-12 mx-1 md:mx-6 lg:mx-10 bg-gray-900 rounded-md phone">
        <div className="image-container w-full flex items-center justify-center mb-4 md:mb-0">
          <img 
            src={property.image} 
            alt={property.title} 
            className="object-cover w-full h-48 sm:h-60 md:h-80 lg:h-96 rounded-md shadow-md"
          />
        </div>
      </div>
      <div className="py-6 md:py-10 my-6 md:my-10 flex flex-col md:flex-row justify-center items-start mx-2 md:mx-10 max-[432px]:flex-wrap rounded-sm bg-gray-800 gap-6 md:gap-0">
        <div className="w-full md:w-1/2">
          <div className="mx-2 md:mx-10 mb-6 md:mb-10">
            <h1 className="text-lg md:text-xl font-semibold">Description</h1>
            <p className="my-4 md:my-10 text-sm md:text-base text-gray-300">{property.description}</p>
          </div>
          <div className="disply_flex flex-col sm:flex-row gap-4 px-1 md:px-3">
            <div className="p-4 md:p-10 bg-gray-900 w-full sm:w-60 mx-0 sm:mx-1 rounded-lg border border-gray-700 mb-2 sm:mb-0">
              <div className="flex items-center gap-2 ">
                <FontAwesomeIcon icon={faBed} />
                <p>Bedrooms</p>
              </div>
              <h3 className="my-2 text-lg md:text-xl">{property.bedrooms}</h3>
            </div>
            <div className="p-4 md:p-10 bg-gray-900 w-full sm:w-60 mx-0 sm:mx-1 rounded-lg border border-gray-700 mb-2 sm:mb-0">
              <div className="flex items-center gap-2 ">
                <FontAwesomeIcon icon={faBathtub} />
                <p>Bathrooms</p>
              </div>
              <h3 className="my-2 text-lg md:text-xl">{property.bathrooms}</h3>
            </div>
            <div className="p-4 md:p-10 bg-gray-900 w-full sm:w-60 mx-0 sm:mx-1 rounded-lg border border-gray-700">
              <div className="flex items-center gap-2 ">
                <FontAwesomeIcon icon={faChartArea} />
                <p>Type</p>
              </div>
              <h3 className="my-2 text-lg md:text-xl">{property.type}</h3>
            </div>
          </div>
        </div>
        <div className="px-3 w-full md:w-1/2 mx-0 md:mx-5 mt-8 md:mt-0">
          <h1 className="text-lg md:text-xl font-semibold">Key Features and Amenities</h1>
          <div className="my-4 md:my-10 space-y-3 md:space-y-5">
            <div className="feature flex items-start gap-2">
              <FontAwesomeIcon icon={faStar} className="mt-1 text-purple-400" />
              <p>Expansive oceanfront terrace for outdoor entertaining</p>
            </div>
            <div className="feature flex items-start gap-2">
              <FontAwesomeIcon icon={faStar} className="mt-1 text-purple-400" />
              <p>Gourmet kitchen with top-of-the-line appliances</p>
            </div>
            <div className="feature flex items-start gap-2">
              <FontAwesomeIcon icon={faStar} className="mt-1 text-purple-400" />
              <p>Private beach access for morning strolls and sunset views</p>
            </div>
            <div className="feature flex items-start gap-2">
              <FontAwesomeIcon icon={faStar} className="mt-1 text-purple-400" />
              <p>Master suite with a spa-inspired bathroom and ocean-facing balcony</p>
            </div>
            <div className="feature flex items-start gap-2">
              <FontAwesomeIcon icon={faStar} className="mt-1 text-purple-400" />
              <p>Private garage and ample storage space</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
