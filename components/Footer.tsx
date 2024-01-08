import Link from 'next/link';
import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link href="#" className="hover:text-gray-300">
            <FaTwitter size={24} />
          </Link>
          <Link href="#" className="hover:text-gray-300">
            <FaFacebook size={24} />
          </Link>
          <Link href="#" className="hover:text-gray-300">
            <FaInstagram size={24} />
          </Link>
          <Link href="#" className="hover:text-gray-300">
            <FaLinkedin size={24} />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Link href="#" className="text-sm hover:text-gray-300">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm hover:text-gray-300">
            About us
          </Link>
          <Link href="#" className="text-sm hover:text-gray-300">
            FAQ
          </Link>
          <Link href="#" className="text-sm hover:text-gray-300">
            Contact
          </Link>
          <Link href="/dmca-copyright" className="text-sm hover:text-gray-300">
            DMCA Copyright
          </Link>
        </div>
        <p className="text-sm mt-4 md:mt-0">
          © {new Date().getFullYear()} Your App Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;