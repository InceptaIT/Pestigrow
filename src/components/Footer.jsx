import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IMAGES } from "../assets/Images";

const Footer = () => {
  return (
    <footer className="bg-[#1b5e20] text-white py-10 font-sans">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 font-sans">
        <div className="col-span-full md:col-span-1">
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <img
              src={IMAGES.logo1}
              alt="Pestigrow Logo"
              className="h-10 w-auto  "
            />
          </Link>

          <div className="flex space-x-4 my-2 text-[#4caf50]">
            <a
              href="#"
              className="text-white transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/pestigrow?igsh=MWZjczg3OXZnYTA3bQ=="
              className="text-white transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>

          <p className="text-sm">
            Strengthening Indian agriculture through science, sustainability,
            and innovation.
          </p>
        </div>

        <div className="font-sans">
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/about"
                className="hover:text-[#4caf50] transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-[#4caf50] transition duration-300"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#4caf50] transition duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-[#4caf50] transition duration-300"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div className="font-sans">
          <h4 className="font-semibold text-lg mb-4">Product Categories</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/products?category=insecticide"
                className="hover:text-[#4caf50] transition duration-300"
              >
                Insecticides
              </Link>
            </li>
            <li>
              <Link
                to="/products?category=herbicide"
                className="hover:text-[#4caf50] transition duration-300"
              >
                Herbicides
              </Link>
            </li>
            <li>
              <Link
                to="/products?category=fungicide"
                className="hover:text-[#4caf50] transition duration-300"
              >
                Fungicides
              </Link>
            </li>
            <li>
              <Link
                to="/products?category=plant-growth"
                className="hover:text-[#4caf50] transition duration-300"
              >
                PGRs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info & Social Media */}
        <div className="font-sans">
          <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
          <p className="text-sm">
            <span className="font-bold">Office </span> : Ward No 18, Station
            Road, Gohad Chouraha Bhind (MP), India.
          </p>

          <p className="text-sm">
            <span className="font-bold">Factory </span>: BO-20 UPSIDC, Gopalpur
            Ind. Area Sikandrabad (UP), India.
          </p>
          <p className="text-sm mt-2">Email: pestigrowcropsciene@gmail.com</p>
          <p className="text-sm">Phone: +91 89623 03996</p>
        </div>
      </div>
      <div className="border-t border-[#2e7d32] mt-8 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Pestigrow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
