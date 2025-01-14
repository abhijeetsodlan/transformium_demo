import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import roboImage from "./assets/robo4.jpg"; // Import the image correctly
import ContactPage from "./ContactPage"; // Import ContactPage

const LandingPage = ({ setHoveredElement, hoveredElement }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleMouseEnter = (element) => {
    setHoveredElement(element);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  // Navigate to the Products page when button is clicked
  const handleOrderClick = () => {
    navigate("/products"); // Navigate to the products page
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Main Landing Page Content */}
      <div className="relative flex-1 flex justify-center items-center fade-in">
        {/* Main Content Container */}
        <div className="relative w-[95%] h-[95%] flex flex-col justify-between rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="w-full h-full relative slide-in-from-bottom">
            <img
              src={roboImage} 
              alt="Futuristic Robot"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Overlay on the Left */}
          <div
            className={`absolute top-1/4 left-12 text-white animate-textAppear ${
              hoveredElement === "mainText" ? "transform scale-110 shadow-xl" : ""
            }`}
            onMouseEnter={() => handleMouseEnter("mainText")}
            onMouseLeave={handleMouseLeave}
          >
            {/* Vertical Line */}
            <div className="h-20 border-l-2 border-gray-500 mb-4"></div>
            {/* Headline and Button */}
            <p className="text-sm text-red-700 uppercase mb-2">Terry Pugmire</p>
            <h1
              className={`text-4xl font-extrabold uppercase leading-snug mb-6 drop-shadow-lg transition-all ${
                hoveredElement === "mainText"
                  ? "transform scale-x-110 text-red-700"
                  : ""
              }`}
            >
              <span className="font-thin text-5xl text-red-700">Transformium:</span>
              <br />
              Shaping Tomorrow, Today.
            </h1>

            <button
              onClick={handleOrderClick} // Attach the click handler
              className="px-6 py-3 text-lg font-semibold text-white border border-white hover:bg-white hover:text-black transition-all"
            >
              Visit Products
            </button>
          </div>

          {/* Navigation Section (no effect applied) */}
          <div className="absolute bottom-24 right-12 flex flex-col items-center fade-in-delay">
            {/* Vertical Line */}
            <div className="h-20 border-l-2 border-gray-500 mb-4"></div>
            {/* Links */}
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Insurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Whitepaper
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Page Rendered Below the Landing Page */}
      <div className="flex-shrink-0">
        <ContactPage />
      </div>

      {/* CSS Animations */}
      <style>{`
        /* Fade-in Animation */
        .fade-in {
          opacity: 0;
          animation: fadeIn 1.5s ease forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Slide-in Animation */
        .slide-in-from-bottom {
          opacity: 0;
          transform: translateY(50px);
          animation: slideIn 1.5s ease forwards 0.5s;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Fade-in Delay for Navigation Section */
        .fade-in-delay {
          opacity: 0;
          animation: fadeInDelay 1.5s ease forwards 1s;
        }

        @keyframes fadeInDelay {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Text Appearance Animation */
        .animate-textAppear {
          opacity: 0;
          transform: translateY(20px);
          animation: textAppear 1.5s ease forwards 0.8s;
        }

        @keyframes textAppear {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Text Stretching Effect */
        .scale-x-110 {
          transform: scaleX(1.1);
          transition: transform 0.3s ease-out;
        }

        /* Text Shadow when hovered */
        .shadow-xl {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
