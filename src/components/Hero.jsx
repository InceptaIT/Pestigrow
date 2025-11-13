// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import heroImg from "../assets/images/hero.png";
// import heroImg1 from "../assets/images/hero1.jpg";
// import heroImg2 from "../assets/images/hero3.jpg";
// import h1 from "../assets/images/h1.jpg";
// import { HERO, IMAGES } from "../assets/Images";

// // --- Carousel Images Data ---
// const heroImages = [
//   {
//     src: HERO.h1,
//     alt: "Farmer in field, sun shining",
//     headline: "Grow with Pestigrow",
//     subtext: "Innovative Solutions for a Healthier Harvest",
//   },
//   {
//     src: HERO.h2,
//     alt: "Close-up of vibrant, healthy crops",
//     headline: "Science-Backed Crop Protection",
//     subtext: "Maximizing Yields, Minimizing Risk",
//   },
//   {
//     src: HERO.h3,
//     alt: "Sustainable agriculture tools",
//     headline: "Rooted in Trust, Focused on Tomorrow",
//     subtext: "Your Partner in Sustainable Prosperity",
//   },
//   {
//     src: HERO.h4,
//     alt: "Farm image",
//     headline: "Quality Products Delivered",
//     subtext: "Reliable solutions for every stage of cultivation",
//   },
//   {
//     src: HERO.h5,
//     alt: "Farm image",
//   },
//   {
//     src: HERO.h6,
//     alt: "Farm image",
//   },
//   {
//     src: HERO.h7,
//     alt: "Farm image",
//   },
//   {
//     src: HERO.h8,
//     alt: "Farm image",
//   },
//   {
//     src: HERO.h9,
//     alt: "Farm image",
//   },
//   {
//     src: HERO.h10,
//     alt: "Farm image",
//   },
// ];

// const contentVariants = {
//   initial: { opacity: 0, y: 50 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
//   exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
// };

// const HeroSectionCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalSlides = heroImages.length;
//   const intervalTime = 5000; // Auto-slide every 5 seconds

//   // Re-enabled auto-slide functionality
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//     }, intervalTime);
//     return () => clearInterval(timer);
//   }, [totalSlides]);

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
//   };

//   const currentImage = heroImages[currentIndex];

//   // Helper to format the headline split for slide 1
//   const headlineParts = currentImage.headline
//     ? currentImage.headline.split(" ")
//     : ["", ""];
//   const firstPart = headlineParts.slice(0, headlineParts.length - 1).join(" ");
//   const lastPart = headlineParts.slice(-1).join("");

//   // Conditional Rendering Check
//   const renderContent = currentIndex === 0;

//   return (
//     <section className="relative h-[90vh] md:h-[85vh] flex items-center justify-center text-center overflow-hidden font-sans">
//       {/* Background Image Slider */}
//       <AnimatePresence initial={false} mode="wait">
//         <motion.div
//           key={currentIndex}
//           className="absolute inset-0 bg-cover bg-center"
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//           style={{
//             backgroundImage: `url(${currentImage.src})`,
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//           aria-label={currentImage.alt}
//         />
//       </AnimatePresence>

//       {/* Gradient Overlay & Content Container (Conditional rendering) */}
//       {renderContent && (
//         <>
//           {/* Gradient Overlay for Text Readability (Only on the content slide) */}
//           <motion.div
//             key="overlay"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             className="absolute inset-0 bg-gradient-to-br from-[#1b5e20]/0 to-[#2e7d32]/0"
//           ></motion.div>

//           {/* Content Container */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key="content-slide-0"
//               className="relative z-10 text-white px-6 md:px-8 max-w-6xl mx-auto font-sans"
//               variants={contentVariants}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//             >
//               <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 font-sans tracking-tight">
//                 <motion.span
//                   initial={{ x: -100, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
//                   className="text-[#2e7d32] drop-shadow-2xl inline-block"
//                 >
//                   {firstPart}
//                 </motion.span>
//                 <br />
//                 <motion.span
//                   initial={{ x: 100, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.7, type: "spring", stiffness: 50 }}
//                   className="text-[#e8f5e8] drop-shadow-2xl pb-2 "
//                 >
//                   {lastPart}
//                 </motion.span>
//               </h1>

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1.2, duration: 0.5 }}
//                 className="text-2xl md:text-3xl lg:text-4xl mb-8 max-w-3xl mx-auto leading-relaxed font-light mt-4 font-sans"
//               >
//                 {currentImage.subtext}
//               </motion.p>
//             </motion.div>
//           </AnimatePresence>
//         </>
//       )}

//       {/* --- Navigation Controls (Arrows) --- */}
//       {totalSlides > 1 && (
//         <>
//           <button
//             onClick={prevSlide}
//             className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-20 transition"
//             aria-label="Previous slide"
//           >
//             <FaChevronLeft className="w-6 h-6" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-20 transition"
//             aria-label="Next slide"
//           >
//             <FaChevronRight className="w-6 h-6" />
//           </button>
//         </>
//       )}

//       {/* --- Navigation Dots --- */}
//       {totalSlides > 1 && (
//         <div className="absolute bottom-6 flex justify-center space-x-3 z-20">
//           {heroImages.map((_, index) => (
//             <motion.button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 border-2 border-white ${
//                 currentIndex === index
//                   ? "bg-[#4caf50] w-6"
//                   : "bg-white/50 hover:bg-white"
//               }`}
//               whileHover={{ scale: 1.2 }}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default HeroSectionCarousel;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import heroImg from "../assets/images/hero.png";
// import heroImg1 from "../assets/images/hero1.jpg";
// import heroImg2 from "../assets/images/hero3.jpg";
// import h1 from "../assets/images/h1.jpg";
// import { HERO, IMAGES } from "../assets/Images";

// // --- Carousel Images Data ---
// const heroImages = [
//   {
//     src: HERO.h1,
//     alt: "Farmer in field, sun shining",
//     headline: "Grow with Pestigrow",
//     subtext: "Innovative Solutions for a Healthier Harvest",
//   },
// ];

// const contentVariants = {
//   initial: { opacity: 0, y: 50 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
//   exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
// };

// const HeroSectionCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const totalSlides = heroImages.length;
//   const intervalTime = 5000; // Auto-slide every 5 seconds

//   // Check screen size for responsiveness
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);

//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   // Re-enabled auto-slide functionality
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//     }, intervalTime);
//     return () => clearInterval(timer);
//   }, [totalSlides]);

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
//   };

//   const currentImage = heroImages[currentIndex];

//   // Helper to format the headline split
//   const headlineParts = currentImage.headline
//     ? currentImage.headline.split(" ")
//     : ["", ""];
//   const firstPart = headlineParts
//     .slice(0, Math.ceil(headlineParts.length / 2))
//     .join(" ");
//   const lastPart = headlineParts
//     .slice(Math.ceil(headlineParts.length / 2))
//     .join(" ");

//   // Show content for all slides, not just the first one
//   const showContent = currentImage.headline && currentImage.subtext;

//   return (
//     <section className="relative h-[60vh] sm:h-[55vh] md:h-[60vh] lg:h-[85vh] flex items-center justify-center text-center overflow-hidden font-sans">
//       {/* Background Image Slider */}
//       <AnimatePresence initial={false} mode="wait">
//         <motion.div
//           key={currentIndex}
//           className="absolute inset-0 bg-cover bg-center"
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//           style={{
//             backgroundImage: `url(${currentImage.src})`,
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             // Ensure full image is visible on mobile
//             ...(isMobile && {
//               backgroundSize: "contain",
//               backgroundColor: "#f5f5f5", // Add background color for letterboxing
//             }),
//           }}
//           aria-label={currentImage.alt}
//         />
//       </AnimatePresence>

//       {/* Dark Overlay for Better Text Readability */}
//       <div className="absolute inset-0 bg-black/30 z-10"></div>

//       {/* Content Container - Show for all slides that have content */}
//       {showContent && (
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={`content-${currentIndex}`}
//             className="relative z-20 text-white px-4 sm:px-6 md:px-8 max-w-4xl lg:max-w-6xl mx-auto font-sans"
//             variants={contentVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//           >
//             <h1 className=" xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold  mb-3 sm:mb-4 font-sans tracking-tight leading-tight">
//               {isMobile ? (
//                 // Mobile: Single line or simpler layout
//                 <motion.span
//                   initial={{ y: 50, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
//                   className="text-white drop-shadow-2xl"
//                 >
//                   {currentImage.headline}
//                 </motion.span>
//               ) : (
//                 // Desktop: Split headline
//                 <>
//                   <motion.span
//                     initial={{ x: -100, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
//                     className="text-[#2e7d32] drop-shadow-2xl inline-block"
//                   >
//                     {firstPart}
//                   </motion.span>
//                   <br />
//                   <motion.span
//                     initial={{ x: 100, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 0.7, type: "spring", stiffness: 50 }}
//                     className="text-[#e8f5e8] drop-shadow-2xl pb-2"
//                   >
//                     {lastPart}
//                   </motion.span>
//                 </>
//               )}
//             </h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.2, duration: 0.5 }}
//               className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-light mt-1 sm:mt-2 font-sans px-2"
//             >
//               {currentImage.subtext}
//             </motion.p>
//           </motion.div>
//         </AnimatePresence>
//       )}

//       {/* --- Navigation Controls (Arrows) --- */}
//       {totalSlides > 1 && (
//         <>
//           <button
//             onClick={prevSlide}
//             className="absolute left-2 xs:left-3 sm:left-4 md:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 md:p-3 rounded-full z-30 transition-all duration-300 backdrop-blur-sm"
//             aria-label="Previous slide"
//           >
//             <FaChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-2 xs:right-3 sm:right-4 md:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 md:p-3 rounded-full z-30 transition-all duration-300 backdrop-blur-sm"
//             aria-label="Next slide"
//           >
//             <FaChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
//           </button>
//         </>
//       )}

//       {/* --- Navigation Dots --- */}
//       {totalSlides > 1 && (
//         <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 flex justify-center space-x-1.5 sm:space-x-2 z-30 px-4">
//           {heroImages.map((_, index) => (
//             <motion.button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`rounded-full transition-all duration-300 border border-white ${
//                 currentIndex === index
//                   ? "bg-[#4caf50]"
//                   : "bg-white/50 hover:bg-white"
//               } ${
//                 isMobile
//                   ? `w-1.5 h-1.5 ${currentIndex === index ? "w-3" : ""}`
//                   : `w-2 h-2 ${currentIndex === index ? "w-4" : ""}`
//               }`}
//               whileHover={{ scale: 1.2 }}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default HeroSectionCarousel;

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// Assuming HERO and IMAGES are correctly imported
import { HERO, IMAGES } from "../assets/Images";

// --- Carousel Images Data (Restored original data structure) ---
const heroImages = [
  {
    src: IMAGES.hero,
    alt: "Farmer in field, sun shining",
    headline: "Grow with Pestigrow",
    subtext: "Innovative Solutions for a Healthier Harvest",
  },
];

const contentVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const HeroSectionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalSlides = heroImages.length;
  const intervalTime = 5000;

  // --- State Logic ---
  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const currentImage = heroImages[currentIndex];

  // --- Effects ---
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (totalSlides <= 1) return;
    const timer = setInterval(nextSlide, intervalTime);
    return () => clearInterval(timer);
  }, [nextSlide, totalSlides, intervalTime]);

  // --- Content Parsing ---
  const showContent = currentImage.headline && currentImage.subtext;

  // Helper to format the headline split for desktop
  const headlineParts = currentImage.headline
    ? currentImage.headline.split(" ")
    : ["", ""];
  const splitIndex = Math.ceil(headlineParts.length / 2);
  const firstPart = headlineParts.slice(0, splitIndex).join(" ");
  const lastPart = headlineParts.slice(splitIndex).join(" ");

  return (
    // The section height is now based on its internal content (the image)
    <section className="relative h-auto flex items-center justify-center text-center overflow-hidden font-sans">
      {/* Image Wrapper for Aspect Ratio Control */}
      <div
        className={`relative w-full overflow-hidden ${
          isMobile ? "aspect-video" : "h-[85vh] md:h-[85vh]"
        }`}
      >
        {/* Background Image Slider (Now using <img> tag) */}
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentIndex}
            src={currentImage.src}
            alt={currentImage.alt}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Dark Overlay for Better Text Readability (Fixed position relative to image) */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Gradient Overlay for Text Readability (Subtle accent) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>

        {/* Content Container - Show for all slides that have content */}
        {showContent && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentIndex}`}
              className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white px-4 sm:px-6 md:px-8 max-w-4xl lg:max-w-6xl mx-auto font-sans text-shadow"
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <h1 className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-black mb-3 sm:mb-4 tracking-tight leading-tight">
                {isMobile ? (
                  <motion.span
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
                    className="text-white drop-shadow-2xl"
                  >
                    {currentImage.headline}
                  </motion.span>
                ) : (
                  <>
                    <motion.span
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
                      className="text-[#e8f5e8] drop-shadow-2xl inline-block"
                    >
                      {firstPart}
                    </motion.span>
                    <br className="hidden md:block" />
                    <motion.span
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7, type: "spring", stiffness: 50 }}
                      className="text-[#4caf50] drop-shadow-2xl pb-2"
                    >
                      {lastPart}
                    </motion.span>
                  </>
                )}
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 max-w-2xl lg:max-w-3xl leading-relaxed font-light mt-1 sm:mt-2 px-2"
              >
                {currentImage.subtext}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        )}

        {/* --- Navigation Controls (Arrows) --- */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 xs:left-3 sm:left-4 md:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full z-30 transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 xs:right-3 sm:right-4 md:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full z-30 transition-all duration-300 backdrop-blur-sm"
              aria-label="Next slide"
            >
              <FaChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </>
        )}

        {/* --- Navigation Dots --- */}
        {totalSlides > 1 && (
          <div className="absolute bottom-4 flex justify-center space-x-2 z-30">
            {heroImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 border border-white ${
                  currentIndex === index
                    ? "bg-[#4caf50] w-4 h-2"
                    : "bg-white/50 hover:bg-white w-2 h-2"
                }`}
                whileHover={{ scale: 1.2 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSectionCarousel;
