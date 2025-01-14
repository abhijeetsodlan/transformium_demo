import React from "react";
import backgroundImage from "./assets/terry2.jpg"; // Update the path if necessary
import { FaMoon, FaSun } from 'react-icons/fa'; 
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div
      className="relative h-screen w-full bg-black"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center left",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contact Us Heading */}
      <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 text-center z-10">
        <h1 className="text-white text-5xl font-semibold mb-4">
          Connect with the <br /> <span className="text-red-700 font-bold">Future of Innovation</span>
        </h1>
      </div>

      {/* Message Input */}
      <div className="absolute mr-2 top-2/4 right-1/4 transform translate-x-1/2 z-10 w-4/5 md:w-1/2">
        <textarea
          className="w-full p-4 rounded-lg border border-gray-300 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"
          rows="1"
          placeholder="Your message..."
          
        ></textarea>
        <button
          className="mt-4 px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
        >
          Send Message
        </button>
      </div>

      {/* Social Media Icons */}
      <div className="absolute left-12 top-1/3 flex flex-col space-y-6 z-10">
        {/* Icons with Animations */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-blue-500 transition-transform transform hover:rotate-12 hover:scale-125"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-blue-400 transition-transform transform hover:rotate-12 hover:scale-125"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-pink-500 transition-transform transform hover:rotate-12 hover:scale-125"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-blue-700 transition-transform transform hover:rotate-12 hover:scale-125"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-gray-400 transition-transform transform hover:rotate-12 hover:scale-125"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
