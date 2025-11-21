import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaSeedling,
  FaShieldAlt,
  FaRupeeSign,
} from "react-icons/fa";

const WhyChooseUsSection = () => {
  const primaryColor = "text-[#1b5e20]";
  const accentBg = "bg-[#e8f5e8]";

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const reasons = [
    {
      icon: FaGraduationCap,
      title: "Science-Backed Formulas",
      description:
        "Our products are developed through rigorous R&D and field testing, ensuring superior efficacy and targeted pest/disease control.",
    },
    {
      icon: FaSeedling,
      title: "Sustainable Agriculture",
      description:
        "We prioritize eco-friendly and responsible chemical use, supporting long-term soil health and environmental balance.",
    },
    {
      icon: FaShieldAlt,
      title: "Guaranteed Quality & Trust",
      description:
        "Manufactured in ISO-certified plants, we provide high-grade, reliable solutions trusted by thousands of farmers nationwide.",
    },
    {
      icon: FaRupeeSign,
      title: "Maximizing Farmer Income",
      description:
        "By significantly boosting crop yield and minimizing losses, our solutions directly translate to higher profitability for you.",
    },
  ];

  return (
    <motion.section
      className={`py-20 ${accentBg} font-sans`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h1
            variants={itemVariants}
            className={`text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${primaryColor} mb-4`}
          >
            Why Choose Pestigrow?
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-2xl text-gray-600 max-w-3xl mx-auto"
          >
            We combine agricultural expertise with a dedication to farmer
            success and environmental stewardship.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white text-2xl p-8 rounded-xl shadow-lg border-t-4 border-[#4caf50] transition duration-300 hover:shadow-2xl hover:translate-y-[-5px] flex flex-col items-center text-center"
            >
              <reason.icon className={`w-12 h-12 text-[#1b5e20] mb-4`} />
              <h3 className={` font-bold ${primaryColor} mb-3`}>
                {reason.title}
              </h3>
              <p className="text-gray-700 text-lg">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUsSection;
