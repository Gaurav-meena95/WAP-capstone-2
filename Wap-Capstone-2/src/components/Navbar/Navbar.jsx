import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import humburger from "../../assets/Icon.png";

const Navbar = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "text-blue-400" : "";
  };

  return (
    <>
      <nav className="w-full px-4 py-2 flex items-center justify-between bg-gray-900">
        <div className="text-xl font-bold">AuctionHub</div>
        <ul className="hidden md:flex gap-6">
          <Link className={`navbarLine ${isActive('/')}`} to="/">
            Home
          </Link>
          <Link className={`navbarLine ${isActive('/about')}`} to="/about">
            About Us
          </Link>
          <Link className={`navbarLine ${isActive('/properties')}`} to="/properties">
            Properties
          </Link>
          <Link className={`navbarLine ${isActive('/explore')}`} to="/explore">
            Services
          </Link>
          <Link className={`navbarLine ${isActive('/contact')}`} to="/contact">
            Contact Us
          </Link>
        </ul>
        <button className="md:hidden text-2xl" onClick={() => setIsmenuOpen((prev) => !prev)}>
          {/* Hamburger icon */}
          <img
            className="p-2 md:hidden cursor-pointer mx-4"
            src={humburger}
            alt="Menu"
          />
        </button>
        {/* Mobile menu */}
        {isMenuOpen && (
          <ul className="flex flex-col absolute top-16 left-0 w-full bg-gray-900 md:hidden">
            <Link className={`navbarLine ${isActive('/')}`} to="/" onClick={() => setIsmenuOpen(false)}>
              Home
            </Link>
            <Link className={`navbarLine ${isActive('/about')}`} to="/about" onClick={() => setIsmenuOpen(false)}>
              About Us
            </Link>
            <Link className={`navbarLine ${isActive('/properties')}`} to="/properties" onClick={() => setIsmenuOpen(false)}>
              Properties
            </Link>
            <Link className={`navbarLine ${isActive('/explore')}`} to="/explore" onClick={() => setIsmenuOpen(false)}>
              Services
            </Link>
            <Link className={`navbarLine ${isActive('/contact')}`} to="/contact" onClick={() => setIsmenuOpen(false)}>
              Contact Us
            </Link>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
