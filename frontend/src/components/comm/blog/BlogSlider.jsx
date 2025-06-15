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

const blogPosts = [
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

const BlogSlider = () => {
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
            Our Latest Blogs
          </h1>
          <p className="text-gray-600 text-base text-center mb-6 max-w-md">
            Check out our latest blog posts.
          </p>
        </div>

        {/* Slider Section */}
        <div className="">
          <Slider {...sliderSettings}>
            {blogPosts.map((post, index) => (
              <div key={index} className="px-3 md:pb-10">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.02] cursor-pointer h-full flex flex-col transition duration-300 ease-in-out" >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      {/* Title with line clamp to 2 lines */}
                      <h2 className="font-bold text-lg mb-3 line-clamp-2 h-[3.5rem]">
                        {post.title}
                      </h2>

                      {/* Description with line clamp to 3 lines */}
                      <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                        {post.description.length > 100
                          ? post.description.slice(0, 100) + "..."
                          : post.description}
                      </p>

                      {/* Meta info */}
                      <div className="flex items-center mb-3 gap-2 h-5">
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        <span className="text-sm text-gray-700 flex items-center">
                          {post.readTime}
                          <span className="text-gray-500 px-1">·</span>
                          {post.date}
                        </span>
                      </div>
                    </div>

                    {/* Author & Button */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center">
                        <img
                          src={post.author.image}
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {post.author.name}
                        </span>
                      </div>
                      <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded">
                        Read now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex flex-col items-center justify-center mt-15 ">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-5 py-3 rounded-md w-max">
           View All Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
