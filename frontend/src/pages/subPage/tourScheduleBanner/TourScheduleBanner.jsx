import React from "react";

const TourScheduleBanner = () => {
  return (
    <div className="relative bg-[#F3F7FA] rounded-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 max-w-7xl mx-auto overflow-visible">
      {/* Decorative Circles */}
      <img
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-6 -translate-y-1/2 rounded-full pointer-events-none select-none"
        src="https://storage.googleapis.com/a1aa/image/9310e43e-12d8-41d8-9a4e-d6c9e033b3af.jpg"
        width={200}
        height={200}
      />
      <img
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-6 translate-y-1/2 rounded-full pointer-events-none select-none"
        src="https://storage.googleapis.com/a1aa/image/58844a02-d5da-45a7-434e-5471a9af309f.jpg"
        width={200}
        height={200}
      />
      <img
        alt=""
        aria-hidden="true"
        className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full pointer-events-none select-none"
        src="https://storage.googleapis.com/a1aa/image/cae02496-de86-4ff4-2e4f-7eaa478ec855.jpg"
        width={16}
        height={16}
      />
      <img
        alt=""
        aria-hidden="true"
        className="absolute top-12 left-3/4 -translate-x-1/2 rounded-full pointer-events-none select-none"
        src="https://storage.googleapis.com/a1aa/image/4ab57745-975a-418c-9eed-4676fed6cb87.jpg"
        width={16}
        height={16}
      />
      <img
        alt=""
        aria-hidden="true"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full pointer-events-none select-none"
        src="https://storage.googleapis.com/a1aa/image/8cbd8949-beb1-4bb6-1430-a251cc65c287.jpg"
        width={16}
        height={16}
      />

      {/* Text Content */}
      <div className="relative z-10 flex-1 max-w-xl text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
          Find out why families love Eduport! Schedule your Personal Tour today.
        </h2>
        <p className="mt-2 text-gray-600 text-sm md:text-base max-w-md mx-auto md:mx-0">
          Speedily say has suitable disposal ad boy. On forth doubt miles of
          child. Exercise joy man children rejoiced.
        </p>
      </div>

      {/* Button */}
      <div className="relative z-10">
        <button
          type="button"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium text-sm md:text-base py-2 px-5 rounded-md transition"
        >
          Schedule Tour
        </button>
      </div>
    </div>
  );
};

export default TourScheduleBanner;
