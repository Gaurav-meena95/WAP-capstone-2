import { faEnvelope, faPhone, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PropertyForm = () => {
  return (
    <div className="mx-10 my-10">
      <div className="heading">
        <h1>Let's Make it Happen</h1>
        <p className="my-5">
          Ready to take the first step toward your dream property? Fill out the
          form below, and our real estate wizards will work their magic to find
          your perfect match. Don't wait; let's embark on this exciting journey
          together.
        </p>
      </div>
      <div className="form">
        <form>
            <div className="flex flex-col">
              <label htmlFor="">Frist Name</label>
              <input
                type="text"
                placeholder="Enter First Name "
                className="bg-[#484545d4] px-5 py-2 w-75 mt-2 "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name "
                className="bg-[#484545d4] px-5 py-2 w-75 mt-2 "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="Enter your Email "
                className="bg-[#484545d4] px-5 py-2 w-75 mt-2 "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Phone</label>
              <input
                type="text"
                placeholder="Enter Phone Number "
                className="bg-[#484545d4] px-5 py-2 w-75 mt-2 "
              />
            </div>
          <div className="flex justify-between items-center p-10">
          </div>
        </form>
      </div>
      <div className=" rounded-lg disply_flex mx-5  max-[432px]:flex-wrap  max-[432px]:justify-center">
        <div className="slected px-3 py-3 w-75   max-[432px]:my-5">
          <label htmlFor="">Preferred Location</label>
          <select
            id="country"
            name="country"
            required
            class="block mt-2 p-2 rounded-md border_stl w-full max-[432px]:w-70"
          >
            <option>Select Location</option>
            <option value="in">India</option>
            <option value="es">Spain</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>
        <div className="slected px-3 py-3 w-75   max-[432px]:my-5">
          <label htmlFor="">Property Type</label>
          <select
            id="country"
            name="country"
            required
            class="block mt-2 p-2 rounded-md border_stl w-full  max-[432px]:w-70"
          >
            <option>Select Property Type </option>
            <option value="in">India</option>
            <option value="es">Spain</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>
        <div className="slected px-3 py-3 w-75   max-[432px]:my-5">
          <label htmlFor="">No. of Bathrooms</label>
          <select
            id="country"
            name="country"
            required
            class="block mt-2 p-2 rounded-md border_stl w-full  max-[432px]:w-70"
          >
            <option>Select no. of Bedrooms </option>
            <option value="in">India</option>
            <option value="es">Spain</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>
        <div className="slected px-3 py-3 w-75   max-[432px]:my-5">
          <label htmlFor="">No. of Bedrooms</label>
          <select
            id="country"
            name="country"
            required
            class="block mt-2 p-2 rounded-md border_stl w-full  max-[432px]:w-70"
          >
            <option>Select no. of Bedrooms </option>
            <option value="in">India</option>
            <option value="es">Spain</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between items-center p-10">
        <div className="slected  py-3 w-1/2   max-[432px]:my-5">
          <label htmlFor="">No. of Bedrooms</label>
          <select
            id="country"
            name="country"
            required
            class="block mt-2 p-2 rounded-md border_stl w-full  max-[432px]:w-70"
          >
            <option>Select no. of Bedrooms </option>
            <option value="in">India</option>
            <option value="es">Spain</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>
        <div className="flex flex-col">
              <label htmlFor="">Preferred Contact Method</label>
              <div>
                <FontAwesomeIcon icon={faPhone}  />
              <input
                type="text"
                placeholder="Enter Your Number "
                className="bg-[#484545d4] px-5 py-2 w-70 mt-2 mx-2 "
              />
                <FontAwesomeIcon icon={faEnvelope}  />
              <input
                type="text"
                placeholder="Enter Your Email "
                className="bg-[#484545d4] px-5 py-2 w-70 mt-2 mx-2 "
                />
              </div>
          </div>

      </div>
      <div className="check_btn"></div>
    </div>
  );
};

export default PropertyForm;
