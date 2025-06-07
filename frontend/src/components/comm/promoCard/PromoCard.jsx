import React from "react";

const PromoCard = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6  py-6">
      {/* Card 1 */}
    <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-between">
      <div className="max-w-[60%]">
        <h2 className="font-semibold text-gray-900 text-lg leading-tight">
          Best Rated Courses
        </h2>
        <p className="text-gray-900 text-sm mt-1">
          Enroll now in the most popular and best rated courses.
        </p>
        <button
          className="mt-4 bg-yellow-400 text-yellow-900 text-xs font-semibold px-4 py-2 rounded"
          type="button"
        >
          View Courses
        </button>
      </div>
      <img
        alt="Illustration of a woman with a laptop and smiley icons around"
        className="w-[100px] h-[80px] object-contain"
        height={80}
        src="https://storage.googleapis.com/a1aa/image/c54e281c-d3e5-4d88-3e03-48fe1535ae0e.jpg"
        width={100}
      />
    </div>
    <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-between">
      <div className="max-w-[60%]">
        <h2 className="font-semibold text-gray-900 text-lg leading-tight">
          Best Rated Courses
        </h2>
        <p className="text-gray-900 text-sm mt-1">
          Enroll now in the most popular and best rated courses.
        </p>
        <button
          className="mt-4 bg-yellow-400 text-yellow-900 text-xs font-semibold px-4 py-2 rounded"
          type="button"
        >
          View Courses
        </button>
      </div>
      <img
        alt="Illustration of a woman with a laptop and smiley icons around"
        className="w-[100px] h-[80px] object-contain"
        height={80}
        src="https://storage.googleapis.com/a1aa/image/c54e281c-d3e5-4d88-3e03-48fe1535ae0e.jpg"
        width={100}
      />
    </div>
  </div>
  );
};

export default PromoCard;
