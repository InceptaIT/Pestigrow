import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../assets/Images";
// import logo from "../assets/images/logo1.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const colors = {
    primary: {
      light: "#4caf50",
      main: "#2e7d32",
      dark: "#1b5e20",
      contrast: "#ffffff",
    },
    secondary: {
      light: "#f5f5f5",
      main: "#e8f5e8",
      dark: "#cccccc",
    },
    text: {
      primary: "#4a4a4a",
      secondary: "#4a4a4a",
      light: "#666666",
    },
  };

  const navLinkClass = `font-semibold text-xl text-[${colors.text.primary}] hover:text-[${colors.primary.dark}] transition-all duration-300 ease-in-out hover:scale-105`;

  const mobileLinkClass = `text-[${colors.text.primary}] hover:bg-[${colors.secondary.main}] transition duration-300 ease-in-out w-full text-center py-3 font-medium`;

  return (
    <header className={`bg-white shadow-lg sticky top-0 z-50`}>
      <div className=" mx-auto px-6  flex justify-between items-center font-sans">
        <Link
          to="/"
          className="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={IMAGES.logo}
            alt="Pestigrow Logo"
            className="h-14 w-40 my-3"
          />
        </Link>

        <nav className="hidden  lg:flex font-sans text-[#2e7d32] space-x-8 items-center">
          <Link to="/" className={`${navLinkClass} text-lg hover:scale-120`}>
            Home
          </Link>
          <Link
            to="/products"
            className={`${navLinkClass} text-lg hover:scale-120`}
          >
            Products
          </Link>
          <Link
            to="/about"
            className={`${navLinkClass} text-lg hover:scale-120`}
          >
            About
          </Link>
          <Link
            to="/catalog"
            className={`${navLinkClass} text-lg hover:scale-120`}
          >
            Catalogue
          </Link>

          <Link
            to="/contact"
            className={`bg-gradient-to-r from-[${colors.primary.main}] to-[${colors.primary.dark}] text-white hover:text-white px-6 py-2.5 rounded-full font-semibold text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg`}
          >
            Contact Us
          </Link>
        </nav>

        <button
          className="lg:hidden p-2 rounded-md text-[#333333] hover:bg-[#f5f5f5] transition duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`lg:hidden bg-white shadow-lg border-t border-[${
          colors.secondary.main
        }] transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col items-center py-4 space-y-1">
          <Link
            onClick={() => setIsOpen(false)}
            to="/"
            className={mobileLinkClass}
          >
            Home
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/products"
            className={mobileLinkClass}
          >
            Products
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/about"
            className={mobileLinkClass}
          >
            About
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/catalog"
            className={mobileLinkClass}
          >
            Catalogue
          </Link>
          <div className="pt-2 flex flex-col items-center space-y-3 w-full px-4">
            <Link
              onClick={() => setIsOpen(false)}
              to="/contact"
              className={`bg-gradient-to-r from-[${colors.primary.main}] to-[${colors.primary.dark}] text-white px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out w-full text-center`}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
