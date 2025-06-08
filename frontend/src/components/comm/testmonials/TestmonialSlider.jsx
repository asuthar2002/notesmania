// components/LiveCoursesSlider.jsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const UserReview = [
  {
    id: 1,
    category: "Article",
    categoryColor: "bg-sky-600",
    title: "Boost your conversion rate",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa.",
    image:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1679&q=80",
    author: {
      name: "Roel Aufderehar",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-03-16",
    readTime: "6 min read",
  },
  {
    id: 2,
    category: "Video",
    categoryColor: "bg-red-400",
    title: "How to use search engine optimization to drive sales",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus.",
    image:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1679&q=80",
    author: {
      name: "Brenna Goyette",
      image:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-03-10",
    readTime: "4 min read",
  },
  {
    id: 3,
    category: "Case Study",
    categoryColor: "bg-purple-600",
    title: "Improve your customer experience",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1679&q=80",
    author: {
      name: "Daniela Metz",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-02-12",
    readTime: "11 min read",
  },
  {
    id: 4,
    category: "Case Study",
    categoryColor: "bg-purple-600",
    title: "Stay Tension Free with HandyProp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1679&q=80",
    author: {
      name: "Daniela Metz",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-02-12",
    readTime: "11 min read",
  },
  {
    id: 5,
    category: "Case Study",
    categoryColor: "bg-purple-600",
    title: "Get Good House At Cheap Price",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1679&q=80",
    author: {
      name: "Daniela Metz",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-02-12",
    readTime: "11 min read",
  },
  {
    id: 6,
    category: "Article",
    categoryColor: "bg-sky-600",
    title: "Boost your conversion rate",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa.",
    image:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1679&q=80",
    author: {
      name: "Roel Aufderehar",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-03-16",
    readTime: "6 min read",
  },
  {
    id: 7,
    category: "Video",
    categoryColor: "bg-red-400",
    title: "How to use search engine optimization to drive sales",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus.",
    image:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1679&q=80",
    author: {
      name: "Brenna Goyette",
      image:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-03-10",
    readTime: "4 min read",
  },
];

const TestmonialSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
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
    <div className="max-w-7xl mx-auto px-4 py-10 ">
      <div className="">
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center md:mb-5">
          <h1 className="text-4xl font-extrabold leading-tight mb-4">
          Feedbacks
          </h1>
          <p className="text-gray-600 text-base text-center mb-6 max-w-md">
           Your Valueable Feedbacks makes Us motivated
          </p>
        </div>

        {/* Slider Section */}
        <div className="">
          <Slider {...sliderSettings}>
            {UserReview.map((post, index) => (
              <div key={index} className="px-3 md:pb-10 p-3">
                <div className="bg-white rounded-lg  overflow-hidden hover:scale-[1.02] cursor-pointer h-full  flex md:flex-row  flex-col transition duration-300 ease-in-out" >
                  <div className="relative md:w-5/12 flex items-center justify-center">
                    <img
                      src={post.author.image}
                      alt={post.author.name}
                      className=" object-cover rounded-full md:p-5"
                    />
                  </div>
                  <div className="flex justify-between items-center flex-1  md:justify-start">
                    <div>
                      <h2 className="font-bold text-lg flex items-center justify-center  line-clamp-2 h-[3.5rem] md:justify-start ">
                        {post.author.name}
                      </h2>
                    <p className="text-sm text-gray-600 mb-3 text-center md:text-left">

                        {post.description.length > 100
                          ? post.description.slice(0, 100) + "..."
                          : post.description}
                      </p>
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

export default TestmonialSlider;
