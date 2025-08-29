import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#204e51] text-white pt-12 pb-6 px-6 md:px-16 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

      
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="flex items-center gap-2">
              <FaEnvelope /> hello@planttribe.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +1 (800) 555-PLNT
            </li>
            <li>123 Greenhouse Lane, Portland, OR</li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a  className="hover:underline">Terms & Conditions</a></li>
            <li><a  className="hover:underline">Privacy Policy</a></li>
            <li><a  className="hover:underline">FAQs</a></li>
            <li><a  className="hover:underline">Support</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-white text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      <div className="mt-10 border-t border-green-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} PlantTribe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
