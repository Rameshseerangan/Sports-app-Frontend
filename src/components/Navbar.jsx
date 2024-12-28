import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-600 to-green-600 p-4 text-white shadow-lg flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center text-2xl font-extrabold tracking-widest uppercase">
        <img 
          src="/src/assets/logo.webp" 
          alt="Shine Sports Logo" 
          className="h-10 w-8 mr-2" 
        />
        Shine <span className="text-yellow-400 ml-1">Sports</span>
      </div>
      {/* Navigation Links */}
      <div className="space-x-8 text-lg flex items-center">
        <Link to="/" className="flex items-center space-x-2 hover:text-yellow-400 transition duration-200">
          <FaHome />
          <span>Home</span>
        </Link>
        <Link to="/about" className="flex items-center space-x-2 hover:text-yellow-400 transition duration-200">
          <FaInfoCircle />
          <span>About</span>
        </Link>
        <Link to="/contact" className="flex items-center space-x-2 hover:text-yellow-400 transition duration-200">
          <FaEnvelope />
          <span>Contact</span>
        </Link>
        <Link
          to="/login"
          className="flex items-center space-x-2 bg-yellow-400 text-blue-900 py-2 px-5 rounded-full hover:bg-yellow-500 transition duration-200 shadow-md"
        >
          <FaSignInAlt />
          <span>Login</span>
        </Link>
        <Link
          to="/Signup"
          className="flex items-center space-x-2 bg-yellow-400 text-blue-900 py-2 px-5 rounded-full hover:bg-yellow-500 transition duration-200 shadow-md"
        >
          <FaSignInAlt />
          <span>Sighup</span>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
