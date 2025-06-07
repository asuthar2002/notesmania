// components/LiveCoursesSlider.jsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const courseData = [
  {
    title: "English for Beginners: Intensive Spoken English Course",
    img: "https://storage.googleapis.com/a1aa/image/9f4f90c9-e06e-4c3d-b11e-1d79f58eb510.jpg",
  },
  {
    title: "Learn the French Language: Complete Course",
    img: "https://storage.googleapis.com/a1aa/image/bf0ddf26-4d65-4008-bd15-8aa6c6ce8a8c.jpg",
  },
  // Add more courses here if needed
];

const LiveCoursesSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Text Section */}
        <div className="flex flex-col justify-center md:col-span-1">
          <h1 className="text-4xl font-extrabold leading-tight mb-4">
            Today's Top Free
            <br />
            Live Courses
          </h1>
          <p className="text-gray-600 text-base mb-6 max-w-md">
            How promotion excellent curiosity yet attempted happiness prosperous
            impression had conviction. For every delay death ask to style. Me mean
            able my by in they. Extremity now strangers contained.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-5 py-3 rounded-md w-max">
            Get premium courses
          </button>
        </div>

        {/* Slider Section */}
        <div className="md:col-span-2">
          <Slider {...sliderSettings}>
            {courseData.map((course, index) => (
              <div key={index} className="px-3">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="w-full h-[200px] object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 cursor-pointer">
                      <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center">
                        <i className="fas fa-play text-lg text-black"></i>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h2 className="font-bold text-lg mb-3">{course.title}</h2>
                    <div className="flex items-center mb-3 space-x-2">
                      <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                      <span className="text-sm text-gray-700">Live Students</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-3">
                        {[
                          "f43e559a-2905-4698-4ba3-b7eb733b2f8d",
                          "e0baf16c-f6cc-4524-22fa-b623b41f0cca",
                          "fb5b1146-1303-4283-7609-0448b8e98ff1",
                          "770c6e31-abc5-4ea9-2a3d-c7728fbcf081",
                        ].map((id, idx) => (
                          <img
                            key={idx}
                            className="w-8 h-8 rounded-full border-2 border-white"
                            src={`https://storage.googleapis.com/a1aa/image/${id}.jpg`}
                            alt="Student"
                          />
                        ))}
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center border-2 border-white">
                          1K+
                        </div>
                      </div>
                      <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded">
                        Join now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LiveCoursesSlider;
