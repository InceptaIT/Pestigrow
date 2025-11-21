import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPaperPlane,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const primaryColor = "text-[#1b5e20]";
  const accentBg = "bg-[#4caf50]";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate WhatsApp message with form data
    const whatsappMessage =
      `*New Contact Form Submission*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Mobile:* ${formData.mobile || "Not provided"}%0A` +
      `*Subject:* ${formData.subject}%0A` +
      `*Message:* ${formData.message}%0A%0A` +
      `_Sent from Pestigrow website contact form_`;

    const whatsappNumber = "918962303996";

    // Open WhatsApp with the pre-filled message
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );

    // Reset form
    setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
  };

  const handleDirectWhatsApp = () => {
    const defaultMessage = `Hello! I'm interested in Pestigrow products and would like to know more.`;
    const whatsappNumber = "918962303996";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      defaultMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const companyDetails = {
    phone: "8962303996",
    email: "pestigrowcropscience@gmail.com",
    location: "Gohad Chouraha Bhind (MP)",
    whatsappNumber: "918962303996",
  };

  const locationSearchLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Ward No 18, Station Road, Gohad Chouraha Bhind MP"
  )}`;

  return (
    <section className="py-20 bg-[#f8fdf8] font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-extrabold ${primaryColor} mb-3`}
          >
            Let's Grow Together
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We are here to answer your questions and help you find the best
            solutions for your crops.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2 p-6 md:p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
            <h3
              className={`text-2xl md:text-3xl font-bold ${primaryColor} mb-6 md:mb-8 border-b pb-4`}
            >
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-4">
                  <label
                    className={`block text-base md:text-lg font-medium text-gray-700 mb-2 ${primaryColor}`}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#4caf50] focus:border-[#4caf50] transition duration-200 text-base md:text-lg font-sans"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className={`block text-base md:text-lg font-medium text-gray-700 mb-2 ${primaryColor}`}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#4caf50] focus:border-[#4caf50] transition duration-200 text-base md:text-lg font-sans"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Mobile Field */}
                <div className="mb-4">
                  <label
                    className={`block text-base md:text-lg font-medium text-gray-700 mb-2 ${primaryColor}`}
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    pattern="[0-9]{10}"
                    maxLength="10"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#4caf50] focus:border-[#4caf50] transition duration-200 text-base md:text-lg font-sans"
                    placeholder="Enter 10-digit number"
                  />
                </div>

                {/* Subject Field */}
                <div className="mb-4">
                  <label
                    className={`block text-base md:text-lg font-medium text-gray-700 mb-2 ${primaryColor}`}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#4caf50] focus:border-[#4caf50] transition duration-200 text-base md:text-lg font-sans"
                    placeholder="Enter subject"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label
                  className={`block text-base md:text-lg font-medium text-gray-700 mb-2 ${primaryColor}`}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#4caf50] focus:border-[#4caf50] transition duration-200 resize-none text-base md:text-lg font-sans"
                  placeholder="Enter your message..."
                ></textarea>
              </div>

              {/* Submit Button - Now for WhatsApp */}
              <button
                type="submit"
                className={`w-full bg-[#25D366] text-white px-8 py-3 rounded-full font-bold text-base md:text-lg hover:bg-[#1DA851] transition duration-300 shadow-md inline-flex items-center justify-center font-sans`}
              >
                Send via WhatsApp <FaWhatsapp className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone */}
            <a
              href={`tel:${companyDetails.phone.replace(/\s/g, "")}`}
              className="flex items-start p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl hover:translate-y-[-2px] group font-sans"
            >
              <FaPhone
                className={`w-6 h-6 md:w-7 md:h-7 ${primaryColor} flex-shrink-0 mt-1 mr-4 transition group-hover:scale-110`}
              />
              <div>
                <h3
                  className={`text-lg md:text-xl font-bold ${primaryColor} mb-1`}
                >
                  Customer Care
                </h3>
                <p className="text-gray-600 text-base md:text-lg group-hover:text-[#2e7d32]">
                  {companyDetails.phone}
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${companyDetails.email}`}
              className="flex items-start p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl hover:translate-y-[-2px] group font-sans"
            >
              <FaEnvelope
                className={`w-6 h-6 md:w-7 md:h-7 ${primaryColor} flex-shrink-0 mt-1 mr-4 transition group-hover:scale-110`}
              />
              <div>
                <h3
                  className={`text-lg md:text-xl font-bold ${primaryColor} mb-1`}
                >
                  General Enquiries
                </h3>
                <p className="text-gray-600 text-base md:text-lg group-hover:text-[#2e7d32]">
                  {companyDetails.email}
                </p>
              </div>
            </a>

            {/* Location */}
            <a
              href={locationSearchLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl hover:translate-y-[-2px] group font-sans"
            >
              <FaMapMarkerAlt
                className={`w-6 h-6 md:w-7 md:h-7 ${primaryColor} flex-shrink-0 mt-1 mr-4 transition group-hover:scale-110`}
              />
              <div>
                <h3
                  classN
                  ame={`text-lg md:text-xl font-bold ${primaryColor} mb-1`}
                >
                  Registered Office
                </h3>
                <p className="text-gray-600 text-base md:text-lg group-hover:text-[#2e7d32]">
                  {companyDetails.location}
                </p>
              </div>
              <FaExternalLinkAlt className="w-4 h-4 text-gray-400 ml-auto mt-2 opacity-50 group-hover:opacity-100 transition duration-300 flex-shrink-0" />
            </a>

            {/* WhatsApp Card */}
            <div
              onClick={handleDirectWhatsApp}
              className="p-6 md:p-8 mt-6 bg-[#25D366] rounded-xl shadow-2xl transition duration-300 hover:bg-[#1DA851] transform hover:scale-[1.02] flex flex-col items-center text-white text-center font-sans cursor-pointer"
            >
              <FaWhatsapp className="w-10 h-10 md:w-12 md:h-12 mb-3" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Quick WhatsApp
              </h3>
              <p className="text-base md:text-lg font-medium mb-4">
                Start a quick conversation
              </p>
              <div className="bg-white text-[#25D366] px-4 py-2 md:px-6 md:py-2 rounded-full font-semibold text-base md:text-lg inline-flex items-center shadow-md">
                Quick Chat <FaArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
