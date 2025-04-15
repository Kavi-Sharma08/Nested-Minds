import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-blue-600 text-white py-6 px-4 md:px-12 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left text-sm md:text-base">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>

        <div className="flex gap-6 items-center justify-center">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-pink-300 transition-colors duration-200"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-blue-200 transition-colors duration-200"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
