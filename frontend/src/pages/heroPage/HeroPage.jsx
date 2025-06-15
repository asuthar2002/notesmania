import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Start learning from ",
    Subtitle: "best institutions",
    discount: "35 % OFF",
    description:
      "Demesne far-hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet no jokes worse her why.",
    imageMain: "./assets/images/trans-2.png",

    background:
      "https://storage.googleapis.com/a1aa/image/cacfc71c-4b4a-4eee-f0e1-4e6309446637.jpg",
  },
  {
    title: "Lets Make Some",
    Subtitle: "Great Things",
    discount: "50 % OFF",
    description: "Hot Deals on All Summer Shipping Supplies – Limited Time!",
    imageMain: "./assets/images/trans-1.png",

    background:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
  },
];

const HeroPage = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slide = slides[current];
  return (
    <>
      {/* <section
        className="relative mt-5 clip-polygon rounded-xl overflow-hidden "
        style={{ backgroundColor: "#1f2937" }}
      >
        <img
          alt="Woman sitting on floor using laptop in modern room with wicker basket and table with books and vase"
          className="w-full h-[50vh] md:h-[70vh] object-cover brightness-50"
          loading="lazy"
          src="https://storage.googleapis.com/a1aa/image/cacfc71c-4b4a-4eee-f0e1-4e6309446637.jpg"
        />

        <div
          className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-10"
          style={{ maxWidth: 1920 }}
        >
          <div className="flex flex-col items-center justify-center min-h-screen px-4 md:flex md:flex-col  md:items-start md:justify-center ">
            <span
              className="inline-flex items-center bg-white rounded-full px-3 py-1 mb-4 text-sm font-semibold text-gray-800"
              style={{ maxWidth: "fit-content" }}
            >
              <span className="bg-[#00b37e] text-white rounded-full px-2 py-0.5 mr-2 font-semibold text-xs leading-none">
                New
              </span>
              One to one video call using web browser
            </span>
            <h1 className="text-white font-extrabold leading-tight tracking-tight mb-3 text-4xl sm:text-5xl md:text-6xl">
              Start learning from
              <br />
              <span className="text-yellow-400">best institutions</span>
            </h1>
            <p className="text-white text-sm sm:text-base font-normal mb-8 max-w-md">
              Demesne far-hearted suppose venture excited see had has. Dependent
              on so extremely delivered by. Yet no jokes worse her why.
            </p>
            <div className="flex items-center space-x-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base px-5 py-3 rounded-md transition">
                Get Started
              </button>
              <div className="flex items-center space-x-3 cursor-pointer select-none">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </div>
                </div>
                <span className="text-white font-semibold text-sm sm:text-base">
                  Watch video
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-orange-500"></div>
        <div className="absolute bottom-6 right-16 w-6 h-6 rounded-full bg-blue-700"></div>
      </section> */}

      {/* section hero 2 */}

      <section>
        <div className="relative w-full h-screen overflow-hidden bg-[#011319] rounded-2xl my-5 md:my-3">
          <img
            src={slide.background}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#030c107e] bg-opacity-90" />

          <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col  md:flex-row items-center px-6  pt-5 sm:px-12 md:px-20 transition-all duration-500">
            <div className="md:w-7/12 text-black ">
              <div className="flex justify-center md:justify-start">
                <span
                  className="flex justify-center items-center  bg-white rounded-full px-3 py-1 mb-4 text-sm font-semibold text-gray-800"
                  style={{ maxWidth: "fit-content" }}
                >
                  <span className="bg-[#00b37e] text-white rounded-full px-2 py-0.5 mr-2 font-semibold text-xs leading-none">
                    New
                  </span>
                  {slide.discount}
                </span>
              </div>
              <AnimatePresence mode="wait">
                <>
                  <motion.h1
                    key={slide.title}
                    className="text-white font-extrabold leading-tight tracking-tight mb-3 text-center md:text-left text-4xl sm:text-5xl md:text-6xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {slide.title}
                    <br />
                    <span className="text-yellow-400"> {slide.Subtitle}</span>
                  </motion.h1>

                  <motion.p
                    key={slide.description}
                    className="text-white text-center md:text-left text-sm sm:text-base font-normal mb-8 max-w-md"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                      ease: "easeInOut",
                    }}
                  >
                    {slide.description}
                  </motion.p>
                </>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <div className="flex items-center justify-center mb-3 md:justify-start">
                  {/* Get Started Button */}

                  <motion.button
                    key={slide.title + "-get-started"}
                    className="bg-blue-600 hover:bg-blue-700 md:mr-5 text-white font-semibold text-sm sm:text-base px-5 py-3 rounded-md transition"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
                  >
                    Get Started
                  </motion.button>

                  {/* Watch Video Button Group */}
                  <motion.div
                    key={slide.title + "-watch-video"}
                    className="flex items-center ml-3"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                      <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
                        <svg
                          className="w-4 h-4 text-red-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 5v14l11-7z"></path>
                        </svg>
                      </div>
                    </div>
                    <span className="text-white font-semibold md:ml-3 ml-3 text-sm sm:text-base cursor-pointer">
                      Watch video
                    </span>
                  </motion.div>
                </div>
              </AnimatePresence>
            </div>

            <div className="flex-1 relative flex justify-end items-center md:w-3/12">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slide.imageMain}
                  src={slide.imageMain}
                  alt="Main visual"
                  className="relative z-20 w-full object-cover"
                  initial={{ y: 50, opacity: 0, scale: 0.95 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -30, opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#ffffff58] w-10 h-15 flex justify-center items-center text-black text-lg font-bold rounded-full shadow-md hover:bg-gray-100 z-30"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#ffffff58] w-10 h-15 flex justify-center items-center text-black text-lg font-bold rounded-full shadow-md hover:bg-gray-100 z-30"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroPage;
