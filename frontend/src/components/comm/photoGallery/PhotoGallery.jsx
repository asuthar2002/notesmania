import React, { useState } from "react";

const images = [
  // Left column
  "https://res.cloudinary.com/david-j-forer/image/upload/c_scale,w_888/v1638083092/IMG_1012_jalcgv.jpg",
  "https://res.cloudinary.com/david-j-forer/image/upload/v1638083091/pic12_mncuta.jpg",
  "https://res.cloudinary.com/david-j-forer/image/upload/c_scale,w_1135/v1638083103/family_jp5kws.jpg",
  // Right column
  "https://res.cloudinary.com/david-j-forer/image/upload/v1638083091/Kalpana-David_npx3xp.jpg",
  "https://res.cloudinary.com/david-j-forer/image/upload/v1638084913/KIEH3285_vljmgc.jpg",
  "https://res.cloudinary.com/david-j-forer/image/upload/v1638084913/IMG-20190525-WA0000_mftkyc.jpg",
];

const PhotoGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);
  const nextImage = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      {/* Gallery Layout */}
      <section className="overflow-hidden text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:pt-24 ">
          <div className="flex flex-wrap -m-1 md:-m-2">
            {/* Left Column */}
            <div className="flex flex-wrap w-full md:w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  src={images[0]}
                  alt="Gallery 1"
                  onClick={() => openModal(0)}
                  className="block object-cover object-center w-full h-full rounded-lg cursor-pointer hover:scale-103 transition-transform"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  src={images[1]}
                  alt="Gallery 2"
                  onClick={() => openModal(1)}
                  className="block object-cover object-center w-full h-full rounded-lg cursor-pointer hover:scale-103 transition-transform"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  src={images[2]}
                  alt="Gallery 3"
                  onClick={() => openModal(2)}
                  className="block object-cover object-center w-full h-full rounded-lg cursor-pointer hover:scale-103 transition-transform"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-wrap w-full md:w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  src={images[3]}
                  alt="Gallery 4"
                  onClick={() => openModal(3)}
                  className="block object-cover object-center w-full h-full rounded-lg cursor-pointer hover:scale-103 transition-transform"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  src={images[4]}
                  alt="Gallery 5"
                  onClick={() => openModal(4)}
                  className="block object-cover object-center w-full h-full rounded-lg cursor-pointer hover:scale-103 transition-transform"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  src={images[5]}
                  alt="Gallery 6"
                  onClick={() => openModal(5)}
                  className="block object-cover object-center w-full h-full rounded-lg cursor-pointer hover:scale-103 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              &times;
            </button>
            <img
              src={images[activeIndex]}
              alt="Enlarged"
              className="w-full rounded-lg max-h-[80vh] object-contain"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl"
            >
              &#8592;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl"
            >
              &#8594;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
