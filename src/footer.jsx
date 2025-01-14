import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full p-8 bg-white text-black border-t-2 border-gray-200 rounded-t-lg">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-start">
        
        {/* Brand and Contact Info */}
        <div className="flex flex-col items-start space-y-4 mb-8">
          <div className="text-2xl font-bold">Transformium</div>
          <div>
            <p>Email: contact@transformium.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-col items-start space-y-4 mb-8">
          <h3 className="font-semibold text-lg">Navigation</h3>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="text-black hover:text-red-700">Home</Link>
            <Link to="/about" className="text-black hover:text-red-700">About Us</Link>
            <Link to="/services" className="text-black hover:text-red-700">Services</Link>
            <Link to="/contact" className="text-black hover:text-red-700">Contact</Link>
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="flex flex-col items-start space-y-4 mb-8">
          <h3 className="font-semibold text-lg">Follow Us</h3>
          <div className="flex gap-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col items-start space-y-4 mb-8">
          <h3 className="font-semibold text-lg">Our Address</h3>
          <p>123 Transformium St, Tech City, 12345</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="w-full text-center text-sm text-gray-600 mt-8">
        <p>&copy; 2025 Transformium. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
