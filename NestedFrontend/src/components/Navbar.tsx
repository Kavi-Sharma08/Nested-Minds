import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-blue-600 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="w-14 h-14 flex items-center">
          <Link to="/">
            <img
              src={LOGO_URL}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-wrap gap-3 sm:gap-5 items-center text-white text-sm sm:text-base">
          <li>
            <Link to="/">
              <button className="px-3 py-1.5 rounded-lg border border-white hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <button className="px-3 py-1.5 rounded-lg border border-white hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Login
              </button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button className="px-3 py-1.5 rounded-lg border border-white hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Contact Us
              </button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button className="px-3 py-1.5 rounded-lg border border-white hover:bg-white hover:text-blue-600 transition-colors duration-200">
                About
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
