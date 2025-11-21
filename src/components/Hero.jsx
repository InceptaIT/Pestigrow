import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HERO, IMAGES } from "../assets/Images";

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

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (totalSlides <= 1) return;
    const timer = setInterval(nextSlide, intervalTime);
    return () => clearInterval(timer);
  }, [nextSlide, totalSlides, intervalTime]);

  const showContent = currentImage.headline && currentImage.subtext;

  const headlineParts = currentImage.headline
    ? currentImage.headline.split(" ")
    : ["", ""];
  const splitIndex = Math.ceil(headlineParts.length / 2);
  const firstPart = headlineParts.slice(0, splitIndex).join(" ");
  const lastPart = headlineParts.slice(splitIndex).join(" ");

  return (
    <section className="relative h-auto flex items-center justify-center text-center overflow-hidden font-sans">
      <div
        className={`relative w-full overflow-hidden ${
          isMobile ? "aspect-video" : "h-[85vh] md:h-[85vh]"
        }`}
      >
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

        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>

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
