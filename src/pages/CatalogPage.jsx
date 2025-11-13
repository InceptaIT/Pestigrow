// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaSeedling,
//   FaFlask,
//   FaRupeeSign,
//   FaCheck,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";
// import { HERO, IMAGES } from "../assets/Images";

// // NOTE: Placeholder data used for this catalog component
// const rawProducts = [
//   // --- PGR (Plant Growth Regulators) ---
//   {
//     id: "pgr-gibly-plus",
//     name: "GIBLY PLUS",
//     category: "plant-growth",
//     technical_name: "GIBBERELLIC ACID 0.001% L",
//     description:
//       "GIBBERELLIC ACID 0.001% L, enhancing growth and cell division in all crops.",
//     usage: [
//       {
//         crop: "ALL CROPS",
//         pest: "INCREASE GROWTH & CELL DIVISION IN GROWING PART OF THE PLANT",
//         dosage: "1-2.5ML PER LTR WATER",
//       },
//     ],
//   },
//   {
//     id: "pgr-growculan",
//     name: "GROWCULAN",
//     category: "plant-growth",
//     technical_name: "TRIANCONTANOL 0.05% GR",
//     description:
//       "Granular plant growth regulator (TRIANCONTANOL 0.05% GR) for soil application.",
//     usage: [
//       { crop: "WHEAT", pest: null, dosage: "10 KG" },
//       { crop: "PADDY", pest: null, dosage: "10 KG" },
//       { crop: "VEGETABLES CHILLI/", pest: null, dosage: "10 KG" },
//       { crop: "COTTON", pest: null, dosage: "10 KG" },
//       { crop: "GROUNDNUT", pest: null, dosage: "10 KG" },
//     ],
//   },
//   {
//     id: "pgr-sili-ultra",
//     name: "SILI ULTRA",
//     category: "plant-growth",
//     technical_name: "SILICON BASED SPREADER",
//     description:
//       "Silicon-based spreader/adjuvant for improved spray solution efficacy.",
//     usage: [
//       {
//         crop: "DOSAGE FOR ALL CROPS",
//         pest: null,
//         dosage: "5ML PER 15 LTR. WATER",
//       },
//     ],
//   },
// ];

// const sliderImages = [
//   {
//     id: 1,
//     src: HERO.ct2,
//     alt: "PGR Product 1",
//   },
//   {
//     id: 2,
//     src: HERO.ct3,
//     alt: "PGR Product 2",
//   },
//   {
//     id: 3,
//     src: HERO.ct4,
//     alt: "PGR Product 3",
//   },
//   {
//     id: 4,
//     src: HERO.ct5,
//     alt: "PGR Product 4",
//   },
// ];

// const PGRCatalog = () => {
//   const primaryColor = "text-[#1b5e20]";
//   const accentBg = "bg-[#f8fdf8]";

//   // --- Carousel State & Logic ---
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const totalSlides = sliderImages.length;
//   const intervalTime = 4000;

//   // Check screen size for responsiveness
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);

//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevIndex) => (prevIndex + 1) % totalSlides);
//     }, intervalTime);
//     return () => clearInterval(timer);
//   }, [totalSlides]);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prevIndex) => (prevIndex + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
//   };

//   const pgrProducts = rawProducts.filter((p) => p.category === "plant-growth");

//   const aggregatedData = {};

//   pgrProducts.forEach((product) => {
//     product.usage.forEach((item) => {
//       const crop = item.crop.toUpperCase().trim();
//       if (!aggregatedData[crop]) {
//         aggregatedData[crop] = [];
//       }

//       aggregatedData[crop].push({
//         productName: product.name,
//         technicalName: product.technical_name,
//         dosage: item.dosage,
//         benefit: item.pest || product.description,
//       });
//     });
//   });

//   const sortedCrops = Object.keys(aggregatedData).sort((a, b) => {
//     if (a.includes("ALL CROPS") || a.includes("DOSAGE FOR ALL")) return -1;
//     if (b.includes("ALL CROPS") || b.includes("DOSAGE FOR ALL")) return 1;
//     return a.localeCompare(b);
//   });

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, staggerChildren: 0.1 },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
//   };

//   return (
//     <section className={`py-12 sm:py-16 md:py-20 ${accentBg} font-sans`}>
//       <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
//         {/* --- HEADING --- */}
//         <div className="text-center mb-8 sm:mb-10 md:mb-12">
//           <motion.h1
//             className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold ${primaryColor} mb-2 sm:mb-3`}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             PGR Product Catalogue
//           </motion.h1>
//           <motion.p
//             className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-2"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Explore our advanced Plant Growth Regulator solutions.
//           </motion.p>
//         </div>

//         {/* --- CAROUSEL / SLIDER SECTION (RESPONSIVE LIKE HERO) --- */}
//         <motion.div
//           className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] flex items-center justify-center text-center overflow-hidden font-sans rounded-xl sm:rounded-2xl shadow-lg"
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <AnimatePresence initial={false} mode="wait">
//             <motion.div
//               key={sliderImages[currentSlide].id}
//               className="absolute inset-0 bg-cover bg-center"
//               initial={{ opacity: 0, scale: 1.02 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.98 }}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//               style={{
//                 backgroundImage: `url(${sliderImages[currentSlide].src})`,
//                 // backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//                 backgroundSize: "contain",
//                 // Ensure full image visibility on mobile
//                 ...(isMobile && {
//                   backgroundSize: "contain",
//                   backgroundColor: "#f5f5f5",
//                 }),
//               }}
//               aria-label={sliderImages[currentSlide].alt}
//             >
//               <div className="absolute inset-0 bg-black/20 sm:bg-black/30"></div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Navigation Arrows */}
//           {totalSlides > 1 && (
//             <>
//               <button
//                 onClick={prevSlide}
//                 className="absolute left-2 xs:left-3 sm:left-4 md:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 md:p-3 rounded-full z-20 transition-all duration-300 backdrop-blur-sm"
//                 aria-label="Previous slide"
//               >
//                 <FaChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="absolute right-2 xs:right-3 sm:right-4 md:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 md:p-3 rounded-full z-20 transition-all duration-300 backdrop-blur-sm"
//                 aria-label="Next slide"
//               >
//                 <FaChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
//               </button>
//             </>
//           )}

//           {/* Navigation Dots */}
//           {totalSlides > 1 && (
//             <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 md:bottom-6 flex justify-center space-x-1.5 sm:space-x-2 z-20 px-4">
//               {sliderImages.map((_, index) => (
//                 <motion.button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`rounded-full transition-all duration-300 border border-white ${
//                     currentSlide === index
//                       ? "bg-[#4caf50]"
//                       : "bg-white/50 hover:bg-white"
//                   } ${
//                     isMobile
//                       ? `w-1.5 h-1.5 ${currentSlide === index ? "w-3" : ""}`
//                       : `w-2 h-2 ${currentSlide === index ? "w-4" : ""}`
//                   }`}
//                   whileHover={{ scale: 1.2 }}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           )}

//           {/* Optional: Slide Counter */}
//           <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs sm:text-sm z-20 backdrop-blur-sm">
//             {currentSlide + 1} / {totalSlides}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default PGRCatalog;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaSeedling,
//   FaFlask,
//   FaRupeeSign,
//   FaCheck,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";
// import { HERO, IMAGES } from "../assets/Images";

// // NOTE: Placeholder data used for this catalog component (kept for context)
// const rawProducts = [
//   // --- PGR (Plant Growth Regulators) ---
//   {
//     id: "pgr-gibly-plus",
//     name: "GIBLY PLUS",
//     category: "plant-growth",
//     technical_name: "GIBBERELLIC ACID 0.001% L",
//     description:
//       "GIBBERELLIC ACID 0.001% L, enhancing growth and cell division in all crops.",
//     usage: [
//       {
//         crop: "ALL CROPS",
//         pest: "INCREASE GROWTH & CELL DIVISION IN GROWING PART OF THE PLANT",
//         dosage: "1-2.5ML PER LTR WATER",
//       },
//     ],
//   },
//   {
//     id: "pgr-growculan",
//     name: "GROWCULAN",
//     category: "plant-growth",
//     technical_name: "TRIANCONTANOL 0.05% GR",
//     description:
//       "Granular plant growth regulator (TRIANCONTANOL 0.05% GR) for soil application.",
//     usage: [
//       { crop: "WHEAT", pest: null, dosage: "10 KG" },
//       { crop: "PADDY", pest: null, dosage: "10 KG" },
//       { crop: "VEGETABLES CHILLI/", pest: null, dosage: "10 KG" },
//       { crop: "COTTON", pest: null, dosage: "10 KG" },
//       { crop: "GROUNDNUT", pest: null, dosage: "10 KG" },
//     ],
//   },
//   {
//     id: "pgr-sili-ultra",
//     name: "SILI ULTRA",
//     category: "plant-growth",
//     technical_name: "SILICON BASED SPREADER",
//     description:
//       "Silicon-based spreader/adjuvant for improved spray solution efficacy.",
//     usage: [
//       {
//         crop: "DOSAGE FOR ALL CROPS",
//         pest: null,
//         dosage: "5ML PER 15 LTR. WATER",
//       },
//     ],
//   },
// ];

// const sliderImages = [
//   {
//     id: 1,
//     src: HERO.ct2,
//     alt: "PGR Product 1",
//   },
//   {
//     id: 2,
//     src: HERO.ct3,
//     alt: "PGR Product 2",
//   },
//   {
//     id: 3,
//     src: HERO.ct4,
//     alt: "PGR Product 3",
//   },
//   {
//     id: 4,
//     src: HERO.ct5,
//     alt: "PGR Product 4",
//   },
// ];

// const PGRCatalog = () => {
//   const primaryColor = "text-[#1b5e20]";
//   const accentBg = "bg-[#f8fdf8]";

//   // --- Carousel State & Logic ---
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const totalSlides = sliderImages.length;
//   const intervalTime = 4000;

//   // Check screen size for responsiveness
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);

//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevIndex) => (prevIndex + 1) % totalSlides);
//     }, intervalTime);
//     return () => clearInterval(timer);
//   }, [totalSlides]);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prevIndex) => (prevIndex + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
//   };

//   // --- Data Aggregation Logic (kept as is) ---
//   const pgrProducts = rawProducts.filter((p) => p.category === "plant-growth");

//   const aggregatedData = {};

//   pgrProducts.forEach((product) => {
//     product.usage.forEach((item) => {
//       const crop = item.crop.toUpperCase().trim();
//       if (!aggregatedData[crop]) {
//         aggregatedData[crop] = [];
//       }

//       aggregatedData[crop].push({
//         productName: product.name,
//         technicalName: product.technical_name,
//         dosage: item.dosage,
//         benefit: item.pest || product.description,
//       });
//     });
//   });

//   const sortedCrops = Object.keys(aggregatedData).sort((a, b) => {
//     if (a.includes("ALL CROPS") || a.includes("DOSAGE FOR ALL")) return -1;
//     if (b.includes("ALL CROPS") || b.includes("DOSAGE FOR ALL")) return 1;
//     return a.localeCompare(b);
//   });
//   // ---------------------------------------------

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, staggerChildren: 0.1 },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
//   };

//   return (
//     <section className={`py-12 sm:py-16 md:py-20 ${accentBg} font-sans`}>
//       <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
//         {/* --- HEADING --- */}
//         <div className="text-center mb-8 sm:mb-10 md:mb-12">
//           <motion.h1
//             className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold ${primaryColor} mb-2 sm:mb-3`}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             PGR Product Catalogue
//           </motion.h1>
//           <motion.p
//             className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-2"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Explore our advanced Plant Growth Regulator solutions.
//           </motion.p>
//         </div>

//         {/* --- CAROUSEL / SLIDER SECTION (RESPONSIVE LIKE HERO) --- */}
//         <motion.div
//           // Increased min height slightly to accommodate tall product images better
//           className="relative h-[60vh] sm:h-[70vh] md:h-[80vh]   flex items-center justify-center text-center overflow-hidden font-sans rounded-xl sm:rounded-2xl shadow-lg"
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <AnimatePresence initial={false} mode="wait">
//             <motion.div
//               key={sliderImages[currentSlide].id}
//               className="absolute inset-0"
//               initial={{ opacity: 0, scale: 1.02 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.98 }}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//               style={{
//                 backgroundImage: `url(${sliderImages[currentSlide].src})`,
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//                 // ✅ FIX: Use 'contain' to ensure the entire image is visible within the container
//                 backgroundSize: "contain",
//                 backgroundColor: "#fff", // Light background for the unused space
//               }}
//               aria-label={sliderImages[currentSlide].alt}
//             >
//               <div className="absolute inset-0 bg-black/10 sm:bg-black/20"></div>{" "}
//               {/* Slightly reduced overlay */}
//             </motion.div>
//           </AnimatePresence>

//           {/* Navigation Arrows (Conditional rendering kept) */}
//           {totalSlides > 1 && (
//             <>
//               <button
//                 onClick={prevSlide}
//                 className="absolute left-2 xs:left-3 sm:left-4 md:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 md:p-3 rounded-full z-20 transition-all duration-300 backdrop-blur-sm"
//                 aria-label="Previous slide"
//               >
//                 <FaChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="absolute right-2 xs:right-3 sm:right-4 md:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 md:p-3 rounded-full z-20 transition-all duration-300 backdrop-blur-sm"
//                 aria-label="Next slide"
//               >
//                 <FaChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
//               </button>
//             </>
//           )}

//           {/* Navigation Dots (Conditional rendering kept) */}
//           {totalSlides > 1 && (
//             <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 md:bottom-6 flex justify-center space-x-1.5 sm:space-x-2 z-20 px-4">
//               {sliderImages.map((_, index) => (
//                 <motion.button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`rounded-full transition-all duration-300 border border-white ${
//                     currentSlide === index
//                       ? "bg-[#4caf50]"
//                       : "bg-white/50 hover:bg-white"
//                   } ${
//                     isMobile
//                       ? `w-1.5 h-1.5 ${currentSlide === index ? "w-3" : ""}`
//                       : `w-2 h-2 ${currentSlide === index ? "w-4" : ""}`
//                   }`}
//                   whileHover={{ scale: 1.2 }}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           )}

//           {/* Optional: Slide Counter */}
//           <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs sm:text-sm z-20 backdrop-blur-sm">
//             {currentSlide + 1} / {totalSlides}
//           </div>
//         </motion.div>

//         {/* --- AGGREGATED USAGE TABLE (NEW SECTION) --- */}
//         <motion.div
//           className="mt-12 sm:mt-16 md:mt-20"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           variants={sectionVariants}
//         >
//           <motion.h2
//             className={`text-3xl sm:text-4xl font-extrabold text-center ${primaryColor} mb-8`}
//             variants={cardVariants}
//           >
//             Crop-Specific Application Guide
//           </motion.h2>

//           <div className="space-y-6">
//             {sortedCrops.map((crop, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-t-4 border-[#2e7d32]"
//                 variants={cardVariants}
//               >
//                 <div className="flex items-center space-x-3 mb-4 border-b pb-3">
//                   <FaSeedling className={`w-6 h-6 text-[#4caf50]`} />
//                   <h3 className="text-xl sm:text-2xl font-bold text-[#1b5e20]">
//                     {crop}
//                   </h3>
//                 </div>

//                 <div className="overflow-x-auto">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-[#f8fdf8]">
//                       <tr>
//                         <th className="px-3 py-2 text-left text-xs sm:text-sm font-medium text-gray-700 uppercase tracking-wider">
//                           Product Name
//                         </th>
//                         <th className="px-3 py-2 text-left text-xs sm:text-sm font-medium text-gray-700 uppercase tracking-wider">
//                           Technical Name
//                         </th>
//                         <th className="px-3 py-2 text-left text-xs sm:text-sm font-medium text-gray-700 uppercase tracking-wider">
//                           Dosage
//                         </th>
//                         <th className="px-3 py-2 text-left text-xs sm:text-sm font-medium text-gray-700 uppercase tracking-wider">
//                           Benefit / Purpose
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {aggregatedData[crop].map((data, dataIndex) => (
//                         <tr key={dataIndex} className="hover:bg-gray-50">
//                           <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
//                             {data.productName}
//                           </td>
//                           <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-600">
//                             {data.technicalName}
//                           </td>
//                           <td className="px-3 py-3 whitespace-nowrap text-sm font-semibold text-[#1b5e20]">
//                             {data.dosage}
//                           </td>
//                           <td className="px-3 py-3 text-sm text-gray-600 max-w-xs">
//                             {data.benefit}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default PGRCatalog;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSeedling,
  FaFlask,
  FaRupeeSign,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { HERO, IMAGES } from "../assets/Images";

// NOTE: Product data and sliderImages array kept as is...

const rawProducts = [
  // --- PGR (Plant Growth Regulators) ---
  {
    id: "pgr-gibly-plus",
    name: "GIBLY PLUS",
    category: "plant-growth",
    technical_name: "GIBBERELLIC ACID 0.001% L",
    description:
      "GIBBERELLIC ACID 0.001% L, enhancing growth and cell division in all crops.",
    usage: [
      {
        crop: "ALL CROPS",
        pest: "INCREASE GROWTH & CELL DIVISION IN GROWING PART OF THE PLANT",
        dosage: "1-2.5ML PER LTR WATER",
      },
    ],
  },
  {
    id: "pgr-growculan",
    name: "GROWCULAN",
    category: "plant-growth",
    technical_name: "TRIANCONTANOL 0.05% GR",
    description:
      "Granular plant growth regulator (TRIANCONTANOL 0.05% GR) for soil application.",
    usage: [
      { crop: "WHEAT", pest: null, dosage: "10 KG" },
      { crop: "PADDY", pest: null, dosage: "10 KG" },
      { crop: "VEGETABLES CHILLI/", pest: null, dosage: "10 KG" },
      { crop: "COTTON", pest: null, dosage: "10 KG" },
      { crop: "GROUNDNUT", pest: null, dosage: "10 KG" },
    ],
  },
  {
    id: "pgr-sili-ultra",
    name: "SILI ULTRA",
    category: "plant-growth",
    technical_name: "SILICON BASED SPREADER",
    description:
      "Silicon-based spreader/adjuvant for improved spray solution efficacy.",
    usage: [
      {
        crop: "DOSAGE FOR ALL CROPS",
        pest: null,
        dosage: "5ML PER 15 LTR. WATER",
      },
    ],
  },
];

const sliderImages = [
  {
    id: 1,
    src: HERO.ct2,
    alt: "PGR Product 1",
  },
  {
    id: 2,
    src: HERO.ct3,
    alt: "PGR Product 2",
  },
  {
    id: 3,
    src: HERO.ct4,
    alt: "PGR Product 3",
  },
  {
    id: 4,
    src: HERO.ct5,
    alt: "PGR Product 4",
  },
];

const PGRCatalog = () => {
  const primaryColor = "text-[#1b5e20]";
  const accentBg = "bg-[#f8fdf8]";

  // --- Carousel State & Logic ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalSlides = sliderImages.length;
  const intervalTime = 4000;

  // Check screen size for responsiveness
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % totalSlides);
    }, intervalTime);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // --- Data Aggregation Logic (kept as is) ---
  const pgrProducts = rawProducts.filter((p) => p.category === "plant-growth");

  const aggregatedData = {};

  pgrProducts.forEach((product) => {
    product.usage.forEach((item) => {
      const crop = item.crop.toUpperCase().trim();
      if (!aggregatedData[crop]) {
        aggregatedData[crop] = [];
      }

      aggregatedData[crop].push({
        productName: product.name,
        technicalName: product.technical_name,
        dosage: item.dosage,
        benefit: item.pest || product.description,
      });
    });
  });

  const sortedCrops = Object.keys(aggregatedData).sort((a, b) => {
    if (a.includes("ALL CROPS") || a.includes("DOSAGE FOR ALL")) return -1;
    if (b.includes("ALL CROPS") || b.includes("DOSAGE FOR ALL")) return 1;
    return a.localeCompare(b);
  });
  // ---------------------------------------------

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section className={`py-12 sm:py-16 md:py-20 ${accentBg} font-sans`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        {/* --- HEADING --- */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <motion.h1
            className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold ${primaryColor} mb-2 sm:mb-3`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            PGR Product Catalogue
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our advanced Plant Growth Regulator solutions.
          </motion.p>
        </div>

        {/* --- CAROUSEL / SLIDER SECTION (RESPONSIVE LIKE HERO) --- */}
        <motion.div
          // Increased min height slightly to accommodate tall product images better
          className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-full flex items-center justify-center text-center overflow-hidden font-sans rounded-xl sm:rounded-2xl shadow-lg mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={sliderImages[currentSlide].id}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                backgroundImage: `url(${sliderImages[currentSlide].src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                // ✅ FIX: Use 'contain' to ensure the whole image is visible
                backgroundSize: "contain",
                // ✅ FIX: Use a white background to blend with product packaging
                backgroundColor: "#ffffff",
              }}
              aria-label={sliderImages[currentSlide].alt}
            >
              {/* Removed the dark overlay to keep the product image bright and clear */}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows (Conditional rendering kept) */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 xs:left-3 sm:left-4 md:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 md:p-3 rounded-full z-20 transition-all duration-300 backdrop-blur-sm"
                aria-label="Previous slide"
              >
                <FaChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 xs:right-3 sm:right-4 md:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 md:p-3 rounded-full z-20 transition-all duration-300 backdrop-blur-sm"
                aria-label="Next slide"
              >
                <FaChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </button>
            </>
          )}

          {/* Navigation Dots (Conditional rendering kept) */}
          {totalSlides > 1 && (
            <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 md:bottom-6 flex justify-center space-x-1.5 sm:space-x-2 z-20 px-4">
              {sliderImages.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 border border-white ${
                    currentSlide === index
                      ? "bg-[#4caf50]"
                      : "bg-white/50 hover:bg-white"
                  } ${
                    isMobile
                      ? `w-1.5 h-1.5 ${currentSlide === index ? "w-3" : ""}`
                      : `w-2 h-2 ${currentSlide === index ? "w-4" : ""}`
                  }`}
                  whileHover={{ scale: 1.2 }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Optional: Slide Counter */}
          <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs sm:text-sm z-20 backdrop-blur-sm">
            {currentSlide + 1} / {totalSlides}
          </div>
        </motion.div>

        {/* --- AGGREGATED USAGE TABLE (kept as is) --- */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <motion.h2
            className={`text-3xl sm:text-4xl font-extrabold text-center ${primaryColor} mb-8`}
            variants={cardVariants}
          >
            Crop-Specific Application Guide
          </motion.h2>

          <div className="space-y-6">
            {sortedCrops.map((crop, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-t-4 border-[#2e7d32]"
                variants={cardVariants}
              >
                <div className="flex items-center space-x-3 mb-4 border-b pb-3">
                  <FaSeedling className={`w-6 h-6 text-[#4caf50]`} />
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1b5e20]">
                    {crop}
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#f8fdf8]">
                      <tr>
                        <th className="px-3 py-2 text-left text-xs sm:text-sm font-medium text-gray-700 uppercase tracking-wider">
                          Product Name
                        </th>
                        <th className="px-3 py-2 text-left text-xs sm:text-sm font-medium text-gray-700 uppercase tracking-wider">
                          Technical Name
                        </th>
                        <th className="px-3 py-2 text-left text-xs sm:text-sm font-medium text-gray-700 uppercase tracking-wider">
                          Dosage
                        </th>
                        <th className="px-3 py-2 text-left text-xs sm:text-sm font-medium text-gray-700 uppercase tracking-wider">
                          Benefit / Purpose
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {aggregatedData[crop].map((data, dataIndex) => (
                        <tr key={dataIndex} className="hover:bg-gray-50">
                          <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                            {data.productName}
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-600">
                            {data.technicalName}
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap text-sm font-semibold text-[#1b5e20]">
                            {data.dosage}
                          </td>
                          <td className="px-3 py-3 text-sm text-gray-600 max-w-xs">
                            {data.benefit}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PGRCatalog;
