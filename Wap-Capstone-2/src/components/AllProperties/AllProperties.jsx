import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";

const AllProperties = () => {
  return (
    <div className="text-white">
      <div className="p-10 mx-10 my-10 pr-50 bg-[#0e1225b9]">
        <h1 className="my-10">Find Your Dream Property</h1>
        <p>
          Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey{" "}
        </p>
      </div>
      <div className="2-2">
        <div className="flex justify-center items-center ">
          <input
            className="border_stl w-200 p-4"
            type="text"
            placeholder="Search For A Property"
          />
          <button className="bg-purple-600 p-2.5 px-5 ml-[-170px] rounded mb-0 cursor-pointer">
            <FontAwesomeIcon icon={faMagnifyingGlass} /> Find Property
          </button>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex justify-between items-center mt-10 mx-20">
          <div className="slected px-3 py-3 border_stl">
            <select
              id="country"
              name="country"
              required
              class="block 1/5 rounded-md"
            >
              <option>
                {" "}
                <FontAwesomeIcon icon={faLocationDot} /> Location{" "}
              </option>
              <option value="in">India</option>
              <option value="es">Spain</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>
          <div className="slected px-3 py-3 border_stl">
            <select
              id="country"
              name="country"
              required
              class="block 1/5 rounded-md"
            >
              <option>Property Type </option>
              <option value="in">India</option>
              <option value="es">Spain</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>
          <div className="slected px-3 py-3 border_stl">
            <select
              id="country"
              name="country"
              required
              class="block 1/5 rounded-md"
            >
              <option>Pricing Range </option>
              <option value="in">India</option>
              <option value="es">Spain</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>
          <div className="slected px-3 py-3 border_stl">
            <select
              id="country"
              name="country"
              required
              class="block 1/5 rounded-md"
            >
              <option>Property Size </option>
              <option value="in">India</option>
              <option value="es">Spain</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>
          <div className="slected px-3 py-3 border_stl">
            <select
              id="country"
              name="country"
              required
              class="block 1/5 rounded-md"
            >
              <option>Build Year </option>
              <option value="in">India</option>
              <option value="es">Spain</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>
        </div>
        <div className="propperty">
          <div className="p-10 mx-10 my-10 pr-50 bg-[#0e1225b9]">
            <h1 className="my-10">Discover a World of Possibilities</h1>
            <p>
            Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home
            </p>
          </div>
          <div className="card"></div>
        </div>
      </div>
      <div className="px-10">
      <Footer />
      </div>
    </div>
  );
};

export default AllProperties;
