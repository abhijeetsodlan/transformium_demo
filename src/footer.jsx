import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" mt-10 w-full py-10 bg-gray-900 text-gray-300 border-t border-gray-700 ">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-white">Transformium</h2>
            <p className="mt-4 text-gray-400">
              Empowering innovation and transforming possibilities. Stay
              connected with us.
            </p>
            <div className="mt-4">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:contact@transformium.com"
                  className="text-blue-500 hover:underline"
                >
                  contact@transformium.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:+1234567890"
                  className="text-blue-500 hover:underline"
                >
                  +1 234 567 890
                </a>
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <p className="mt-2 text-gray-400">
              Connect with us on social media for updates and insights.
            </p>
            <div className="mt-4 flex gap-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500"
              >
                <FaTwitter size={28} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-600"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-400"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400"
              >
                <FaYoutube size={28} />
              </a>
            </div>
          </div>

          {/* Addresses */}
          <div>
            <h3 className="text-xl font-semibold text-white">Our Offices</h3>
            <div className="mt-4">
              <div className="mb-4">
                <p className="font-bold text-gray-200">Headquarters:</p>
                <p className="text-sm text-gray-400">
                  123 Transformium St, Suite 500,
                  <br />
                  Tech City, CA 12345, USA
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-200">Regional Office:</p>
                <p className="text-sm text-gray-400">
                  789 Innovation Blvd, Floor 3,
                  <br />
                  Innovation Park, TX 98765, USA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2025 Transformium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
