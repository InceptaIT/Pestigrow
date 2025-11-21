import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaFlask,
  FaSeedling,
  FaChartLine,
  FaArrowRight,
  FaHandshake,
  FaUser,
  FaTint,
  FaSun,
  FaTractor,
  FaHeart,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import HeroSectionCarousel from "../components/Hero";
import WhyChooseUsSection from "../components/WhyChooseUs";
import { CARD, IMAGES } from "../assets/Images";

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

const productImg = IMAGES.product;

const categoryData = [
  {
    title: "Insecticides",
    category: "insecticide",
    description:
      "Protect your crops from harmful insects and pests for a robust harvest. Our formulas are highly targeted.",
    icon: FaLeaf,
    iconImage: CARD.insecticide,
    color: "text-[#2e7d32]",
  },
  {
    title: "Herbicides",
    category: "herbicide",
    description:
      "Effective and selective weed control solutions to maximize crop yields. Achieve pristine fields with targeted action.",
    icon: FaSeedling,
    iconImage: CARD.herbicide,
    color: "text-[#2e7d32]",
  },
  {
    title: "Fungicides",
    category: "fungicide",
    description:
      "Combat fungal diseases effectively and promote healthy plant growth, safeguarding your investment and ensuring quality.",
    icon: FaFlask,
    iconImage: CARD.fungicide,
    color: "text-[#2e7d32]",
  },
  {
    title: "Plant Growth Regulators",
    category: "plant-growth",
    description:
      "Enhance crop growth, quality, and overall productivity with advanced formulas for stronger plants and higher yields.",
    icon: FaChartLine,
    iconImage: CARD.pgr,
    color: "text-[#2e7d32]",
  },
];

const CategoryCard = ({ title, description, category, iconImage, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const imageTransition = {
    duration: 1.8,
    ease: "easeInOut",
    times: [0, 0.5, 1],

    repeat: isHovered ? Infinity : undefined,
    repeatType: "reverse",
  };

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative rounded-xl shadow-xl py-3 bg-white border border-gray-100 flex flex-col items-center text-center w-72 max-h-[500px] overflow-hidden overflow-x-hidden font-sans"
      whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)" }}
      transition={{ type: "spring", stiffness: 300 }}
      variants={itemVariants}
    >
      <motion.div
        className={`w-40 h-40 rounded-full bg-[#e8f5e8] mb-8 p-1 ${color}`}
        animate={{ y: isHovered ? [0, -10, 0] : 0 }}
        transition={imageTransition}
      >
        <img
          src={iconImage}
          alt={`${title} icon`}
          className="w-full h-full object-cover rounded-full p-2 border-4 border-white shadow-lg"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/160x160/f8f8f8/1b5e20?text=ICON";
          }}
        />
      </motion.div>

      <h3
        className={`text-2xl sm:text-3xl font-bold font-sans mb-3 leading-tight ${color}`}
      >
        {title}
      </h3>

      <p className="text-lg min-h-30  text-[#4a5568] mb-8 mx-1 flex-grow font-sans">
        {description}
      </p>

      <Link
        to={`/products?category=${category}`}
        className="mt-auto bg-[#1b5e20] text-white px-6 py-4 rounded-full text-lg font-bold
                  hover:bg-[#2e7d32] transition-all duration-300 ease-in-out inline-flex items-center shadow-md font-sans"
      >
        <AnimatePresence mode="wait" initial={false}>
          {!isHovered ? (
            <motion.div
              key="arrow"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2, type: "tween" }}
            >
              <FaArrowRight className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="text"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2, type: "tween" }}
              className="flex items-center whitespace-nowrap font-sans"
            >
              View All Products
              <FaArrowRight className="ml-3 w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <div className="bg-secondary text-textDark font-sans max-w-full overflow-x-hidden">
      <HeroSectionCarousel />

      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#d4edda] via-[#c8efd4] to-[#b5e8b5] font-sans">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[
            ...Array(
              typeof window !== "undefined" && window.innerWidth < 768 ? 6 : 12
            ),
          ].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#1b5e20]/30"
              initial={{
                y: Math.random() * 100 + 50,
                x: Math.random() * 100,
                scale: 0,
                rotate: 0,
              }}
              animate={{
                y: [null, -Math.random() * 300 - 150],
                x: [null, Math.random() * 100 - 50],
                scale: [0, 1, 0.8, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + Math.random() * 8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: Math.random() * 6,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${
                  window.innerWidth < 768
                    ? 12 + Math.random() * 15
                    : 16 + Math.random() * 20
                }px`,
              }}
            >
              <FaSeedling />
            </motion.div>
          ))}

          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#2e7d32]/30 rounded-full"
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: [0, 1, 0.5, 1, 0],
                opacity: [0, 1, 0.8, 0.3, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                repeatType: "loop",
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}

          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            style={{
              backgroundImage: `radial-gradient(circle at 30% 30%, #1b5e20 2px, transparent 2px),
                         radial-gradient(circle at 70% 70%, #2e7d32 2px, transparent 2px),
                         radial-gradient(circle at 50% 20%, #4caf50 1px, transparent 1px)`,
              backgroundSize: "100px 100px, 150px 150px, 200px 200px",
            }}
          />

          <motion.div
            className="absolute top-10 left-10 text-[#1b5e20]/10 text-6xl md:text-8xl"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <FaLeaf />
          </motion.div>

          <motion.div
            className="absolute bottom-10 right-10 text-[#2e7d32]/10 text-4xl md:text-6xl"
            animate={{ rotate: -360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <FaSeedling />
          </motion.div>

          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 border-2 border-[#4caf50]/20 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            <motion.div
              className="lg:w-2/5 flex justify-center lg:justify-start mb-8 lg:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1, ease: "easeOut" },
                },
              }}
            >
              <div className="relative">
                <motion.div
                  className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-gradient-to-br from-[#1b5e20] to-[#4caf50] rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden"
                  animate={{
                    y: [0, -10, 0],
                    boxShadow: [
                      "0 25px 50px -12px rgba(27, 94, 32, 0.25)",
                      "0 35px 60px -12px rgba(76, 175, 80, 0.4)",
                      "0 25px 50px -12px rgba(27, 94, 32, 0.25)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-t from-[#2e7d32] to-[#4caf50] rounded-t-full"
                    animate={{
                      height: ["32px", "48px", "32px"],
                      scaleY: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />

                  <motion.div
                    className="relative z-10 text-white"
                    animate={{
                      y: [0, -8, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaUser className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36" />
                  </motion.div>

                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                      animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeOut",
                      }}
                      style={{
                        left: `${20 + (i % 4) * 20}%`,
                        bottom: "20%",
                      }}
                    />
                  ))}

                  <motion.div
                    className="absolute inset-0 rounded-3xl border-4 border-transparent bg-gradient-to-r from-[#4caf50] to-[#1b5e20] bg-clip-border"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                      maskComposite: "exclude",
                    }}
                  />
                </motion.div>

                {[
                  { icon: FaSeedling, text: "Growth", delay: 0 },
                  { icon: FaTint, text: "Care", delay: 0.5 },
                  { icon: FaSun, text: "Energy", delay: 1 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="absolute bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-[#4caf50]/30"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 + item.delay }}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0],
                    }}
                    style={{
                      left: index === 0 ? "-20%" : index === 1 ? "80%" : "40%",
                      top: index === 0 ? "20%" : index === 1 ? "60%" : "80%",
                    }}
                  >
                    <item.icon className="text-[#1b5e20] w-4 h-4 mb-1" />
                    <span className="text-[#1b5e20] text-xs font-semibold">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="lg:w-3/5 text-left font-sans"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg mb-4 md:mb-6 font-sans"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    color: ["#ef4444", "#1b5e20", "#ef4444"],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaHeart className="text-lg md:text-xl lg:text-2xl" />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-[#1b5e20] font-semibold text-sm md:text-lg lg:text-xl font-sans"
                >
                  Our Core Philosophy
                </motion.span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-5xl sm:text-4xl lg:text-5xl font-bold text-[#1b5e20] mb-4 md:mb-6 font-sans leading-tight"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Farmer is First,
                </motion.span>
                <br />
                <motion.span
                  className="bg-gradient-to-r from-[#1b5e20] to-[#4caf50] bg-clip-text text-transparent font-sans"
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: "100% 50%" }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Always in Pestigrow
                </motion.span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-xl text-[#2d3748] mb-6 md:mb-8 leading-relaxed  font-sans"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Our journey is rooted in the success of every Indian farmer. We
                are dedicated to providing accessible, high-quality, and
                sustainable agricultural solutions that empower them to achieve
                prosperity and contribute to a food-secure nation.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-xl text-[#1b5e20] mb-8 md:mb-10 leading-relaxed font-semibold font-sans"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Your growth is our greatest achievement.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 items-start font-sans"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    to="/about"
                    className="group bg-gradient-to-r from-[#1b5e20] to-[#2e7d32] text-white px-2 py-3 md:px-8 md:py-4 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center shadow-lg font-sans w-full sm:w-auto text-center"
                  >
                    <span>Learn More </span>
                    <motion.span
                      className="ml-2 md:ml-3"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FaArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </motion.span>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    to="/contact"
                    className="group bg-white/90 backdrop-blur-sm text-[#1b5e20] border-2 border-[#1b5e20] px-6 py-3 md:px-8 md:py-4 rounded-full text-xl font-bold hover:bg-[#1b5e20] hover:text-white transition-all duration-300 inline-flex items-center justify-center shadow-lg font-sans w-full sm:w-auto text-center"
                  >
                    <span>Connect Us</span>
                    <motion.span
                      className="ml-2 md:ml-3"
                      animate={{ rotate: [0, 12, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FaHandshake className="w-4 h-4 md:w-5 md:h-5" />
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-[#1b5e20]/20 font-sans"
              >
                {[
                  { number: "50K+", label: "Farmers Served" },
                  { number: "25+", label: "States" },
                  { number: "98%", label: "Success Rate" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ y: -3, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1b5e20] font-sans"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-[#4a5568] text-xs sm:text-sm md:text-base lg:text-lg font-medium font-sans">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        className="container mx-auto px-4 py-20 text-center bg-white font-sans"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold text-[#1b5e20] mb-4 font-sans"
          >
            Our Vision
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-3xl md:text-2xl text-[#2d3748] leading-relaxed font-light relative z-10 px-8 mb-12 border-b-2 border-[#e8f5e8] pb-10 font-sans"
          >
            To strengthen Indian agriculture through{" "}
            <span className="text-[#2e7d32] font-semibold">science</span>,{" "}
            <span className="text-[#2e7d32] font-semibold">sustainability</span>
            , and{" "}
            <span className="text-[#2e7d32] font-semibold">innovation</span>.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto font-sans">
          {[
            {
              icon: FaFlask,
              title: "Innovation",
              text: "Pioneering new, effective crop care formulas.",
            },
            {
              icon: FaSeedling,
              title: "Sustainability",
              text: "Eco-friendly products for a healthier planet.",
            },
            {
              icon: FaHandshake,
              title: "Trust",
              text: "Building long-term partnerships with farmers.",
            },
            {
              icon: FaTractor,
              title: "Efficiency",
              text: "Maximizing yields with minimal application.",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 bg-[#f8fdf8] rounded-xl shadow-lg border-t-4 border-[#2e7d32] transition duration-300 hover:shadow-xl hover:translate-y-[-5px] font-sans"
            >
              <value.icon className="w-12 h-12 text-[#2e7d32] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#1b5e20] mb-3 font-sans">
                {value.title}
              </h3>
              <p className="text-lg text-[#4a5568] font-sans">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-[#e8f5e8] font-sans"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
            <motion.div
              className="lg:w-1/2 font-sans"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl font-bold text-[#1b5e20] mb-6 font-sans leading-tight">
                Comprehensive Crop Care Products
              </h1>
              <p className="text-xl text-[#2d3748] mb-8 leading-relaxed font-sans">
                Pestigrow offers a powerful portfolio of agricultural products,
                meticulously developed to protect your crops from every threat,
                from seed to harvest. We deliver high-efficacy, science-backed
                solutions—including specialized **Insecticides**,
                **Herbicides**, **Fungicides**, and **Growth Regulators**—that
                ensure crop health and significantly boost farmer productivity.
              </p>
              <Link
                to="/products"
                className="bg-[#1b5e20] text-white px-8 py-4 rounded-full text-xl font-bold
                            hover:bg-[#2e7d32] transition-colors duration-300 inline-flex items-center shadow-lg font-sans"
              >
                View All Products & Categories
                <FaArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              className="lg:w-1/2 w-full h-80 rounded-xl shadow-2xl overflow-hidden relative"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div
                className="w-auto h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${productImg})`,
                }}
              >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-4 left-4 p-4 bg-white/80 rounded-lg text-[#1b5e20] font-bold text-xl font-sans">
                  Guaranteed Quality. Trusted by Farmers.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-20 bg-[#f8fdf8] flex justify-center items-center font-sans">
        <motion.div
          className="container mx-auto  px-4 max-w-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <div className="text-center mb-16 font-sans">
            <motion.h1
              variants={itemVariants}
              className="text-5xl font-bold text-[#1b5e20] mb-4 font-sans"
            >
              Our Specialized Product Range
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#4a5568] max-w-3xl mx-auto font-sans"
            >
              Explore our core categories tailored to protect and enhance your
              crops.
            </motion.p>
          </div>

          <div className="relative max-w-9xl mx-auto">
            <motion.div
              className="grid grid-cols-1 justify-items-center  lg:grid-cols-4  md:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
            >
              {categoryData.map((section) => (
                <CategoryCard key={section.category} {...section} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      <WhyChooseUsSection />
    </div>
  );
};

export default HomePage;
