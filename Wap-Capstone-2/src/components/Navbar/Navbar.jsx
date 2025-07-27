import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import humburger from "../../assets/Icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt, faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const isActive = (path) => {
    return location.pathname === path ? "text-blue-400" : "";
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <>
      <nav className="w-full px-4 py-4 flex items-center justify-between bg-gray-900 mb-5">
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
          <Link className={`navbarLine ${isActive('/services')}`} to="/services">
            Services
          </Link>
          <Link className={`navbarLine ${isActive('/contact')}`} to="/contact">
            Contact Us
          </Link>
        </ul>

        {/* Authentication Section */}
        <div className="hidden md:flex items-center gap-4">
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
              >
                <FontAwesomeIcon icon={faUser} />
                <span>{currentUser.email}</span>
              </button>
              
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700 flex items-center gap-2"
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
              >
                <FontAwesomeIcon icon={faSignInAlt} />
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faUserPlus} />
                Sign Up
              </Link>
            </div>
          )}
        </div>

        <button className="md:hidden text-2xl" onClick={() => setIsmenuOpen((prev) => !prev)}>
          <div className="image-container p-2 md:hidden cursor-pointer mx-4">
            <img
              className="logo-image"
              src={humburger}
              alt="Menu"
            />
          </div>
        </button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <ul className="flex flex-col absolute top-16 left-0 w-full bg-gray-900 md:hidden z-50 px-5">
            <Link className={`navbarLine ${isActive('/')}`} to="/" onClick={() => setIsmenuOpen(false)}>
              Home
            </Link>
            <Link className={`navbarLine ${isActive('/about')}`} to="/about" onClick={() => setIsmenuOpen(false)}>
              About Us
            </Link>
            <Link className={`navbarLine ${isActive('/properties')}`} to="/properties" onClick={() => setIsmenuOpen(false)}>
              Properties
            </Link>
            <Link className={`navbarLine ${isActive('/services')}`} to="/services" onClick={() => setIsmenuOpen(false)}>
              Services
            </Link>
            <Link className={`navbarLine ${isActive('/contact')}`} to="/contact" onClick={() => setIsmenuOpen(false)}>
              Contact Us
            </Link>
            
            {/* Mobile Authentication */}
            {currentUser ? (
              <>
                <div className="px-4 py-2 text-gray-400 border-t border-gray-700">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faUser} />
                    <span>{currentUser.email}</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsmenuOpen(false);
                  }}
                  className="navbarLine flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link className="navbarLine flex items-center gap-2" to="/login" onClick={() => setIsmenuOpen(false)}>
                  <FontAwesomeIcon icon={faSignInAlt} />
                  Sign In
                </Link>
                <Link className="navbarLine flex items-center gap-2" to="/signup" onClick={() => setIsmenuOpen(false)}>
                  <FontAwesomeIcon icon={faUserPlus} />
                  Sign Up
                </Link>
              </>
            )}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
