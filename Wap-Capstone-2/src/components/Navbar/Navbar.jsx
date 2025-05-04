import React, { useState } from "react";
import humburger from "../../assets/Icon.png";

const Navbar = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);
  return (
    <>
      <div className="bg-gray-800 text-white disply_flex relative p-5 ">
        <div className="mx-4">
          <h1 className="text-3xl">AuctionHub</h1>
        </div>

        <div className=" disply_flex  mx-4 [*>&]:p-2 gap-12">
          <a className="font-medium hover:bg-gray-600  " href="">Home</a>
          <a className="font-medium hover:bg-gray-600  " href="">About Us</a>
          <a className="font-medium hover:bg-gray-600  " href="">Properties</a>
          <a className="font-medium hover:bg-gray-600  " href="">Services</a>
          <a className="font-medium hover:bg-gray-600  " href="">Contact Us</a>
        </div>

        <img
          onClick={() => setIsmenuOpen((prev) => !prev)}
          className="p-2 md:hidden cursor-pointer mx-4"
          src={humburger}
          alt="Menu"
        />

        {/* {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-black text-white shadow-md p-4 flex flex-col gap-4">
            <a className="font-medium hover:bg-gray-600  " href="">Home</a>
            <a className="font-medium hover:bg-gray-600  " href="">About Us</a>
            <a className="font-medium hover:bg-gray-600  " href="">Properties</a>
            <a className="font-medium hover:bg-gray-600  " href="">Services</a>
            <a className="font-medium hover:bg-gray-600  " href="">Contact Us</a>
          </div>
        )} */}
      </div>
      <hr />
    </>
  );
};

export default Navbar;
