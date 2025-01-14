import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import ContactPage from "./ContactPage";
import Login from "./login";
import Products from "./products";
import Footer from "./Footer"; // Import Footer component
import "./index.css";

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState(null);
  const [darkTheme, setDarkTheme] = useState(true);
  const [showContactPage, setShowContactPage] = useState(false); // State to control ContactPage visibility

  // Update cursor position on mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [showBlackScreen, setShowBlackScreen] = useState(true);
  const [textAnimationCompleted, setTextAnimationCompleted] = useState(false);

  const handlePlayButtonClick = () => {
    setShowBlackScreen(false);
    setTimeout(() => setTextAnimationCompleted(true), 3000); // Text animation duration
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  // Scroll event to show Contact page when scrolled past the Landing page
  useEffect(() => {
    const handleScroll = () => {
      const contactPageTrigger = window.scrollY > window.innerHeight; // Show after the Landing page scroll
      setShowContactPage(contactPageTrigger);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        {/* Moving Circle */}
        <div
          className="circle"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        ></div>

        {/* Black Screen and Play Button */}
        {showBlackScreen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-black flex justify-center items-center z-50">
            <button
              onClick={handlePlayButtonClick}
              className="cursor-pointer p-10 text-6xl text-white hover:text-red-500 transition-all"
            >
              ▶
            </button>
          </div>
        )}

        {/* Text Animation */}
        {!showBlackScreen && !textAnimationCompleted && (
          <div className="fixed top-0 left-0 w-full h-screen bg-black flex justify-center items-center text-white z-40">
            <h1 className="text-[8rem] font-extrabold uppercase leading-snug mb-6 drop-shadow-lg">
              <span className="animate-wordAppear text-red-700">The</span>{" "}
              <span
                className="animate-wordAppear text-red-700"
                style={{ animationDelay: "0.5s" }}
              >
                Future
              </span>{" "}
              <span
                className="animate-wordAppear text-red-700"
                style={{ animationDelay: "1s" }}
              >
                Is
              </span>{" "}
              <span
                className="animate-wordAppear text-red-700"
                style={{ animationDelay: "1.5s" }}
              >
                Now!
              </span>
            </h1>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-grow">
          {textAnimationCompleted && (
            <Routes>
              <Route path="/" element={<LandingPage />} />
              {showContactPage && <Route path="/contact" element={<ContactPage />} />}
              <Route path="/products" element={<Products />} />
            </Routes>
          )}
        </div>

        {/* Footer */}
        <Footer />
      </div>

      {/* Styles for Animations */}
      <style>{`
        .circle {
          position: fixed;
          width: 50px; /* Increased circle size */
          height: 50px; /* Increased circle size */
          border-radius: 50%;
          background: rgba(255, 0, 0, 0.5);
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease-out, width 0.3s ease, height 0.3s ease;
          z-index: 9999; /* Ensure it's on top */
        }

        /* Circle Ripple Effect */
        .circle:hover {
          width: 60px;  /* Slightly enlarge the circle on hover */
          height: 60px; /* Slightly enlarge the circle on hover */
        }

        .animate-wordAppear {
          opacity: 0;
          animation: wordAppear 1s ease forwards;
        }

        @keyframes wordAppear {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Router>
  );
};

export default App;
