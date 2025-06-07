import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {
    title: "Engineer",
    img: "https://storage.googleapis.com/a1aa/image/51f32a44-c173-4c54-70ac-95cde4549216.jpg",
  },
  {
    title: "Engineer",
    img: "https://storage.googleapis.com/a1aa/image/51f32a44-c173-4c54-70ac-95cde4549216.jpg",
  },
  {
    title: "Engineer",
    img: "https://storage.googleapis.com/a1aa/image/51f32a44-c173-4c54-70ac-95cde4549216.jpg",
  },
  {
    title: "Chemistry",
    img: "https://storage.googleapis.com/a1aa/image/e137cc92-31b7-40c1-1482-6fa4d437a3c7.jpg",
  },
  {
    title: "Physics",
    img: "https://storage.googleapis.com/a1aa/image/6b515a75-ccc6-496e-a364-60325d3930e4.jpg",
  },
  {
    title: "Technology",
    img: "https://storage.googleapis.com/a1aa/image/4b80b850-0ebd-4c2e-c8c3-7ea4b2b0f657.jpg",
  },
  {
    title: "Health",
    img: "https://storage.googleapis.com/a1aa/image/ef044b8c-9df9-4015-a8f4-9fae03eb9e55.jpg",
  },
  {
    title: "Technology",
    img: "https://storage.googleapis.com/a1aa/image/4b80b850-0ebd-4c2e-c8c3-7ea4b2b0f657.jpg",
  },
  {
    title: "Health",
    img: "https://storage.googleapis.com/a1aa/image/ef044b8c-9df9-4015-a8f4-9fae03eb9e55.jpg",
  },
  {
    title: "Technology",
    img: "https://storage.googleapis.com/a1aa/image/4b80b850-0ebd-4c2e-c8c3-7ea4b2b0f657.jpg",
  },
  {
    title: "Health",
    img: "https://storage.googleapis.com/a1aa/image/ef044b8c-9df9-4015-a8f4-9fae03eb9e55.jpg",
  },
];

const CategorySlider = () => {
  return (
    <div className="max-w-7xl  rounded-lg p-6 m-5">
      <Swiper
        spaceBetween={20} // 20px gap between slides
        loop={true}
        grabCursor={true}
        navigation={false}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={2} // Default slides per view on mobile = 2
        breakpoints={{
          640: { slidesPerView: 3 },  // Small tablets show 3
          768: { slidesPerView: 4 },  // Medium screens show 4
          1024: { slidesPerView: 7 }, // Large screens show 5
        }}
      >
        {categories.map((item, index) => (
          <SwiperSlide key={index}>
            <button
              type="button"
              className="flex items-center gap-3 md:my-3  rounded-md px-6 py-3  hover:shadow-md transition-shadow"
            >
              <img
                src={item.img}
                alt={`${item.title} icon`}
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <span className="font-semibold text-gray-900 text-base">
                {item.title}
              </span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
