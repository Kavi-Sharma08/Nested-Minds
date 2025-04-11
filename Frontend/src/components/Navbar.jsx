import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="w-full h-1/2 bg-blue-500 flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <div className="w-[56px]">
          <img src={LOGO_URL} alt="Logo" />
        </div>

        {/* Navigation */}
        <div className="mr-4 sm:mr-9 p-2 sm:p-4">
          <ul className="flex justify-center items-center flex-wrap text-white text-sm sm:text-base gap-2 sm:gap-4">
            <Link to="/">
              <li>
                <button className="border border-slate-500 px-2 py-1 sm:px-3 sm:py-2 rounded-xl hover:bg-white hover:text-black text-xs sm:text-sm">
                  Home
                </button>
              </li>
            </Link>
            <Link to="/login">
              <li>
                <button className="border border-slate-500 px-2 py-1 sm:px-3 sm:py-2 rounded-xl hover:bg-white hover:text-black text-xs sm:text-sm">
                  Login
                </button>
              </li>
            </Link>
            <Link to="/contact">
              <li>
                <button className="border border-slate-500 px-2 py-1 sm:px-3 sm:py-2 rounded-xl hover:bg-white hover:text-black text-xs sm:text-sm">
                  Contact-Us
                </button>
              </li>
            </Link>
            <Link to="/about">
              <li>
                <button className="border border-slate-500 px-2 py-1 sm:px-3 sm:py-2 rounded-xl hover:bg-white hover:text-black text-xs sm:text-sm">
                  About
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
