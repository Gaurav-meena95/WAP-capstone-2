import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png"


const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav_logo">
          <img className="logo" src={logo} alt="" />
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
        
      </div>
    </>
  );
};

export default Navbar;
