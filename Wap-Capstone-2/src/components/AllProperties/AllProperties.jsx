import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faMagnifyingGlass,
  faLocationDot,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
import Properties from "../Properties/Properties";
import PropertyDetails from "../PropertyDetails/PropertyDetails";

const AllProperties = () => {
  return (
    <div className="text-white">
      <div className="p-10 mx-10 my-10  bg-[#0e1225b9] max-[432px]:mx-5 max-[432px]:p-5">
        <h1 className="my-10">Find Your Dream Property</h1>
        <p className="my-5 max-[432px]:text-[15px] ">
          Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey{" "}
        </p>
      </div>
      <div className="2-2">
        <div className="flex justify-center items-center ">
          <input
            className="border_stl w-300 p-4 max-[432px]:w-90"
            type="text"
            placeholder="Search For A Property"
          />
          <button className="bg-purple-600 p-2.5 px-5 ml-[-70px] rounded-xl mb-0 cursor-pointer max-[432px]:">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg disply_flex mt-10 mx-10 max-[432px]:flex-wrap max-[432px]:">
          <div className="slected px-3 py-3 border_stl max-[432px]:my-5">
            <select
              id="country"
              name="country"
              required
              class="block w-55 rounded-md max-[432px]:w-70"
            >
              <option>Location</option>
              <option value="in">India</option>
              <option value="es">Spain</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>
          <div className="slected px-3 py-3 border_stl max-[432px]:my-5">
            <select
              id="country"
              name="country"
              required
              class="block w-55 rounded-md  max-[432px]:w-70"
            >
              <option>Property Type </option>
              <option value="in">India</option>
              <option value="es">Spain</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>
          <div className="slected px-3 py-3 border_stl max-[432px]:my-5">
            <select
              id="country"
              name="country"
              required
              class="block w-55 rounded-md  max-[432px]:w-70"
            >
              <option>Pricing Range </option>
              <option value="in">India</option>
              <option value="es">Spain</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>
          <div className="slected px-3 py-3 border_stl max-[432px]:my-5">
            <select
              id="country"
              name="country"
              required
              class="block w-55 rounded-md  max-[432px]:w-70"
            >
              <option>Property Size </option>
              <option value="in">India</option>
              <option value="es">Spain</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>
          <div className="slected px-3 py-3 border_stl max-[432px]:my-5">
            <select
              id="country"
              name="country"
              required
              class="block w-55 rounded-md  max-[432px]:w-70"
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
          <div className="p-10 mx-10 my-10 bg-[#0e1225b9] max-[432px]:px-5 max-[432px]:pt-1">
            <h1 className="my-10">Discover a World of Possibilities</h1>
            <p className="text-[15px]">
              Our portfolio of properties is as diverse as your dreams. Explore
              the following categories to find the perfect property that
              resonates with your vision of home
            </p>
          </div>
          <div className="my-10">
            <div className="flex  flex-wrap mx-10 justify-between items-center max-[432px]:hidden">
              <Properties />
              <Properties />
              <Properties />
            </div>
            <div className=" min-[432px]:hidden flex  flex-wrap mx-10 justify-between items-center ">
              <Properties />
            </div>
            <div className="mx-10 my-10">
              <div className=" flex justify-between gap-10">
                <FontAwesomeIcon className="bg-gray-800 p-3 rounded-full" icon={faArrowLeft} />
                <div>
                  <h3>01 of 10</h3>
                </div>
                <FontAwesomeIcon className="bg-gray-800 p-3 rounded-full" icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
        <div className="my-20">
          <PropertyDetails />
        </div>
      </div>
      <div className="px-10">
        <Footer />
      </div>
    </div>
  );
};

export default AllProperties;
