import React from "react";
import {
  FaIndustry,
  FaMapMarkerAlt,
  FaGlobe,
  FaCheck,
  FaBullseye,
  FaSeedling,
  FaRegLightbulb,
  FaPeopleCarry,
  FaUserTie,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { IMAGES } from "../assets/Images";

const About = () => {
  const PRIMARY_DARK_HEX = "#1b5e20";
  const PRIMARY_HEX = "#2e7d32";
  const PRIMARY_LIGHT_HEX = "#4caf50";
  const SECONDARY_BG_HEX = "#f8fdf8";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const valuesData = [
    {
      icon: FaRegLightbulb,
      title: "Innovation & Research",
      text: "Leading the industry with cutting-edge agrochemical R&D and proprietary, effective crop protection technology.",
    },
    {
      icon: FaSeedling,
      title: "Sustainable Practices",
      text: "Committed to eco-friendly product development, minimizing environmental impact, and supporting biodiversity.",
    },
    {
      icon: FaPeopleCarry,
      title: "Farmer Partnership",
      text: "Building enduring trust and empowering farmers through expert guidance, training, and reliable product performance.",
    },
    {
      icon: FaGlobe,
      title: "Global Quality Standards",
      text: "Adhering to strict international quality control (ISO, GLP) to ensure the purity and efficacy of every batch.",
    },
  ];

  return (
    <div className="font-sans">
      <motion.section
        className={`py-20 bg-white`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0 md:pr-12"
              variants={itemVariants}
            >
              <img
                src={
                  IMAGES.farm ||
                  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                }
                alt="Lush green farm field"
                className="rounded-xl shadow-xl w-full border-4 border-white object-cover aspect-video"
              />
            </motion.div>

            <div className="md:w-1/2 md:pl-8">
              <motion.h2
                className={`text-4xl md:text-5xl font-extrabold text-[${PRIMARY_DARK_HEX}] mb-6`}
                variants={itemVariants}
              >
                Pestigrow: A Legacy of Crop Protection 🌾
              </motion.h2>
              <motion.p
                className={`text-lg md:text-xl text-gray-700 mb-4 leading-relaxed border-l-4 border-[${PRIMARY_LIGHT_HEX}] pl-4`}
                variants={itemVariants}
              >
                Pestigrow is a pillar in the Indian agrochemical sector,
                dedicated to delivering innovative, safe, and sustainable crop
                protection solutions. For over two decades, our research-driven
                approach has ensured farmers achieve optimal yields.
              </motion.p>
              <motion.p
                className="text-lg text-gray-600 mb-6 leading-relaxed"
                variants={itemVariants}
              >
                We blend deep agricultural expertise with advanced
                biotechnology, offering a comprehensive portfolio of pesticides,
                herbicides, and growth regulators tailored specifically for
                diverse Indian climatic conditions.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-3 mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <FaUserTie className={`w-8 h-8 text-[${PRIMARY_HEX}]`} />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Founder's Commitment
                  </h3>
                  <p className="text-sm text-gray-600">
                    Founded by Mr. Abhay Sharma with a vision for farmer
                    prosperity and sustainable growth.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <hr className="border-gray-100" />

      <motion.section
        className={`py-20 bg-[${SECONDARY_BG_HEX}]`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <motion.h2
            variants={itemVariants}
            className={`text-3xl md:text-4xl font-extrabold text-[${PRIMARY_DARK_HEX}] mb-8`}
          >
            Our Mission
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className={`p-8 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-[${PRIMARY_LIGHT_HEX}] mb-12 transform hover:shadow-2xl transition duration-300`}
          >
            <FaBullseye
              className={`w-12 h-12 text-[${PRIMARY_LIGHT_HEX}] mx-auto mb-4`}
            />
            <h3
              className={`text-3xl md:text-4xl font-bold text-[${PRIMARY_DARK_HEX}] leading-snug font-sans`}
            >
              "To produce high-quality, environment-safe pesticides that enhance
              crop yield and maximize farmer income."
            </h3>
          </motion.div>
        </div>
      </motion.section>

      <hr className="border-gray-100" />

      <motion.section
        className={`py-20 bg-white`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2
            className={`text-3xl md:text-4xl font-extrabold text-center text-[${PRIMARY_DARK_HEX}] mb-12`}
          >
            State-of-the-Art Production{" "}
            <FaIndustry className={`inline mb-1 text-[${PRIMARY_LIGHT_HEX}]`} />
          </h2>
          <div className="flex flex-col lg:flex-row items-stretch lg:gap-12">
            <motion.div
              className="lg:w-1/2 mb-8 lg:mb-0 h-96 relative rounded-xl shadow-xl overflow-hidden"
              variants={itemVariants}
            >
              <img
                src={IMAGES.industry}
                alt="Pestigrow Production Facility"
                className="w-full h-full object-cover transition duration-500 hover:scale-[1.05]"
              />
            </motion.div>

            <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
              <motion.p
                className={`text-lg md:text-xl text-gray-700 leading-relaxed border-l-4 border-[${PRIMARY_DARK_HEX}] pl-4 bg-[${SECONDARY_BG_HEX}] p-4 rounded-lg`}
                variants={itemVariants}
              >
                Our production is anchored by precision and compliance. Our
                facilities are equipped with world-class reactors and quality
                control systems, ensuring the integrity of every molecule we
                synthesize. We adhere strictly to national and international
                standards.
              </motion.p>

              <div className="space-y-4">
                <motion.div
                  className="flex items-start text-base md:text-lg text-gray-700"
                  variants={itemVariants}
                >
                  <FaGlobe
                    className={`mt-1 mr-3 w-5 h-5 text-[${PRIMARY_HEX}]`}
                  />
                  <span>
                    Annual Capacity: Exceeding 5 Million Liters/Kg of high-grade
                    agrochemicals.
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-start text-base md:text-lg text-gray-700"
                  variants={itemVariants}
                >
                  <FaCheck
                    className={`mt-1 mr-3 w-5 h-5 text-[${PRIMARY_HEX}]`}
                  />
                  <span>
                    Compliance: Rigorously certified under ISO 9001 and GLP
                    (Good Laboratory Practice).
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-start text-base md:text-lg text-gray-700"
                  variants={itemVariants}
                >
                  <FaMapMarkerAlt
                    className={`mt-1 mr-3 w-5 h-5 text-[${PRIMARY_HEX}]`}
                  />
                  <span>
                    Manufactured By Agreez Agrochemical Pvt Ltd & Marketed By
                    Pestigrow Crop science
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
