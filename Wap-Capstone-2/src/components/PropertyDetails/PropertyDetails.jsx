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
      <div className="disply_flex my-5 rounded-md mx-10 bg-gray-900 max-[432px]:flex-wrap p-5">
        <div className="disply_flex gap-4">
          <h2 className="text-gray-200">{property.title}</h2>
          <FontAwesomeIcon icon={faLocationDot} />
          <p>{property.location}</p>
        </div>
        <div>
          <p>Price</p>
          <h3>{property.price}</h3>
        </div>
      </div>
      <div className="flex justify-between p-10 mx-10 bg-gray-900 rounded-md phone">
        <div className="image-container h-120">
          <img src={property.image} alt={property.title} />
        </div>
      </div>
      <div className="py-10 my-10 flex justify-center items-start mx-10 max-[432px]:flex-wrap rounded-sm bg-gray-800">
        <div className="w-1/2">
          <div className="mx-10 mb-10">
            <h1>Description</h1>
            <p className="my-10">{property.description}</p>
          </div>
          <div className="disply_flex px-3">
            <div className="p-10 bg-gray-900 w-60 mx-1 rounded-lg border border-gray-700">
              <div className="flex  items-center gap-2 ">
                <FontAwesomeIcon icon={faBed} />
                <p>Bedrooms</p>
              </div>
              <h3 className="my-2">{property.bedrooms}</h3>
            </div>
            <div className="p-10 bg-gray-900 w-60 mx-1 rounded-lg border border-gray-700">
              <div className="flex  items-center gap-2 ">
                <FontAwesomeIcon icon={faBathtub} />
                <p>Bathrooms</p>
              </div>
              <h3 className="my-2">{property.bathrooms}</h3>
            </div>
            <div className="p-10 bg-gray-900 w-60 mx-1 rounded-lg border border-gray-700">
              <div className="flex  items-center gap-2 ">
                <FontAwesomeIcon icon={faChartArea} />
                <p>Type</p>
              </div>
              <h3 className="my-2">{property.type}</h3>
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
