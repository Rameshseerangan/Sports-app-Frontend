import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaSignInAlt,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status on page load
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token); // Convert token to boolean
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-600 to-green-600 p-4 text-white shadow-lg font-poppins">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-2xl font-extrabold tracking-widest uppercase">
          <img src="/src/assets/logo.webp" alt="Logo" className="h-10 w-8 mr-2" />
          Shine <span className="text-yellow-400 ml-1">Sports</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button onClick={toggleMenu} className="text-2xl md:hidden focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-8 text-lg items-center absolute md:static top-16 left-0 w-full md:w-auto to-green-600 md:bg-transparent shadow-lg md:shadow-none p-4 md:p-0`}
        >
          <Link to="/" className="flex font-poppins items-center space-x-2 hover:text-yellow-400 transition duration-200">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link to="/about" className="flex font-poppins items-center space-x-2 hover:text-yellow-400 transition duration-200">
            <FaInfoCircle />
            <span>About</span>
          </Link>
          <Link to="/contact" className="flex font-poppins items-center space-x-2 hover:text-yellow-400 transition duration-200">
            <FaEnvelope />
            <span>Contact</span>
          </Link>

          {/* Conditionally render Login/Signup or Logout */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="flex items-center font-poppins space-x-2 bg-red-500 text-white py-2 px-5 rounded-full hover:bg-red-600 transition duration-200 shadow-md"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          ) : (
            <>
              <Link
                to="/signup"
                className="flex items-center font-poppins space-x-2 bg-yellow-400 text-blue-900 py-2 px-5 rounded-full hover:bg-yellow-500 transition duration-200 shadow-md"
              >
                <FaSignInAlt />
                <span>Signup</span>
              </Link>
              <Link
                to="/login"
                className="flex items-center font-poppins space-x-2 bg-yellow-400 text-blue-900 py-2 px-5 rounded-full hover:bg-yellow-500 transition duration-200 shadow-md"
              >
                <FaSignInAlt />
                <span>Login</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
