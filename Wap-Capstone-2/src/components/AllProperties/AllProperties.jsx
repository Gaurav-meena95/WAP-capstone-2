import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faMagnifyingGlass,
  faLocationDot,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
import PropertyDetails from "../Properties/PropertyDetails/PropertyDetails";
import Properties from "../Properties/Properties";
import PropertyForm from "../Properties/PropertyDetails/PropertyForm";

const AllProperties = () => {
  return (
    <div className="text-white mx-10 max-[432px]:mx-0">
      <div className="p-10 mx-10 my-10  bg-[#0e1225b9] max-[432px]:mx-5 max-[432px]:p-5 ">
        <h1 className="my-10">Find Your Dream Property</h1>
        <p className="my-5 max-[432px]:text-[15px] ">
          Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey{" "}
        </p>
      </div>
      <div className="2-2">
        <div className="flex justify-center items-center max-[432px]:w-full ">
          <input
            className="border_stl w-300 p-4 max-[432px]:w-80"
            type="text"
            placeholder="Search For A Property"
          />
          <button className="bg-purple-600 p-2.5 px-5 ml-[-70px] rounded-xl mb-0 cursor-pointer ">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg disply_flex mx-5 mt-10 max-[432px]:flex-wrap  max-[432px]:justify-center">
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
          <div className="p-10 mx-10 my-10 bg-[#0e1225b9] max-[432px]:px-5 max-[432px]:pt-1 max-[432px]:mx-5">
            <h1 className="my-10">Discover a World of Possibilities</h1>
            <p className="text-[15px]">
              Our portfolio of properties is as diverse as your dreams. Explore
              the following categories to find the perfect property that
              resonates with your vision of home
            </p>
          </div>
          <div className="my-10">
            <div className="flex  flex-wrap mx-10 justify-between items-center max-[432px]:hidden">
              <Properties/>
              <Properties/>
              <Properties/>
            </div>
            <div className=" min-[432px]:hidden m-5 ">
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
          <PropertyDetails/>
        </div>
        <div>
          <div className="my-10 ">
            <h1 className="my-5">Frequently Asked Questions</h1>
            <p>Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
          </div>
          <div className="flex justify-center items-center gap-5 my-10 ">
            <div className=" w-1/2.8 h-50 border_stl p-5">
              <h1 className="my-5 text-2xl">How do I search for properties on Estatein?</h1>
              <p>Learn how to use our user-friendly search tools to find properties that match your criteria.</p>
            </div>
            <div className=" w-1/2.8 h-50 border_stl p-5">
              <h1 className="my-5 text-2xl">What documents do I need to sell my property through Estatein?</h1>
              <p>Find out about the necessary documentation for listing your property with us.</p>
            </div>
            <div className=" w-1/2.8 h-50 border_stl p-5">
              <h1 className="my-5 text-2xl">How can I contact an Estatein agent?</h1>
              <p>Discover the different ways you can get in touch with our experienced agents.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10">
        <Footer />
      </div>
    </div>
  );
};

export default AllProperties;
