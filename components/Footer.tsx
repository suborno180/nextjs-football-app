import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Your App Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
