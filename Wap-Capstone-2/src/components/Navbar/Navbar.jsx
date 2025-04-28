import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="gradient bg-gradient-to-t to-blue-800 from-orange-500  shadow-2xl text-white px-5 flex justify-between items-center">
        <div className="">
          <h1 className="text-3xl">AuctionHub</h1>
        </div>
        <ul className="flex justify-between [&>*]:p-5 text-2xl ">
          <li>
            <a className=" hover:bg-blue-500" href="#">
              Home
            </a>
          </li>
          <li>
            <a className=" hover:bg-blue-500" href="#">
              Auctions
            </a>
          </li>
          <li>
            <a className=" hover:bg-blue-500" href="#">
              About
            </a>
          </li>
          <li>
            <a className=" hover:bg-blue-500" href="#">
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
