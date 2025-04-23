import React from "react";
import "./Navbar.css";
import homeMain from "../assets/homeMain.jpeg"; 


const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav_logo">
          <h1>Auction</h1>
        </div>
        <div className="nav_links">
          <a href="#">Home</a>
          <a href="#">Auctions</a>
          <a href="#">About</a>
          <a href="#">Contact us</a>
          <button className="nav_btn">login/register</button>
        </div>
      </div>
      <div className="main_page">
        <img src={homeMain} alt="" />
      </div>
    </>
  );
};

export default Navbar;
