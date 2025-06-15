import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSwipeable } from "react-swipeable";

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
const POSTS_PER_PAGE = 3;

function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const loadMoreRef = useRef(null);

  const loadMore = () => {
    if (visibleCount < blogPosts.length) {
      setVisibleCount((prev) => Math.min(prev + POSTS_PER_PAGE, blogPosts.length));
    }
  };
    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
            loadMore();
            }
        },
        {
            threshold: 1.0,
        }
        );

        if (loadMoreRef.current) {
        observer.observe(loadMoreRef.current);
        }
        return () => {
        if (loadMoreRef.current) {
            observer.unobserve(loadMoreRef.current);
        }
        };
    }, [visibleCount]);
    const handlers = useSwipeable({
        onSwipedLeft: loadMore,
        trackMouse: true,
    });
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
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
    <>
      <div className="text-center  bg-amber-400  py-4 md:py-5">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Latest Articles
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
          Click below to load more
        </p>
      </div>
      <div className="max-w-full mx-auto p-4 mt-10 md:p-8 md:mt-5 flex flex-col md:flex-row gap-6">
        <main className="flex-1 space-y-6" {...handlers}>
          {blogPosts.slice(0, visibleCount).map((post) => (
            <a
              key={post.id}
              href={`/blog/${post.id}`}
              className="block rounded-lg transition duration-300 transform hover:shadow-2xl hover:scale-[1.01] "
            >
              <article className="flex p-3 flex-col md:flex-row gap-4 md:gap-7">
                <img
                  alt={post.title}
                  className="w-full md:w-[300px] aspect-[16/9] md:aspect-auto h-auto md:h-[180px] object-cover rounded-lg flex-shrink-0"
                  src={post.image}
                />

                <div className="flex flex-col justify-center">
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="font-semibold text-base md:text-lg leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-sm md:text-base mt-1 max-w-xl leading-relaxed">
                    {post.description.length > 100 ? (
                      <>
                        {post.description.slice(0, 100)}...
                        <a
                          className="text-red-600 text-sm inline-flex items-center font-semibold hover:underline ml-1"
                          href={`/blog/${post.id}`}
                        >
                          Read More
                          <i className="fas fa-arrow-right ml-1"></i>
                        </a>
                      </>
                    ) : (
                      post.description
                    )}
                  </p>

                  <div className="flex items-center mt-2">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={post.author.image}
                      alt={`Author: ${post.author.name}`}
                    />
                    <p className="text-sm font-medium text-gray-900 px-2">
                      {post.author.name}
                    </p>
                  </div>
                </div>
              </article>
            </a>
          ))}
          <a>
            {visibleCount < blogPosts.length && (
              <div ref={loadMoreRef} className="text-center mt-10">
                <button
                  onClick={loadMore}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Load More
                </button>
              </div>
            )}
          </a>
        </main>

        <aside className="w-full md:w-80 hidden md:hidden lg:block space-y-6 sticky top-5 self-start">
          <section className="bg-white rounded-lg p-4 border border-gray-200 md:mb-3 shadow-md">
            <h3 className="text-md font-semibold mb-4">Search Blogs</h3>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                {/* Heroicon: Magnifying Glass */}
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </section>
          <section className="bg-white rounded-lg p-4 border border-gray-200 shadow-md">
            <h3 className="font-semibold text-sm mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-semibold hover:scale-102 cursor-pointer text-red-600 bg-red-100 rounded-full px-3 py-1">
                Productivity
              </span>
              <span className="text-xs font-semibold hover:scale-102 cursor-pointer text-purple-600 bg-purple-100 rounded-full px-3 py-1">
                Development
              </span>
              <span className="text-xs font-semibold hover:scale-102 cursor-pointer text-blue-600 bg-blue-100 rounded-full px-3 py-1">
                UI/UX
              </span>
              <span className="text-xs font-semibold hover:scale-102 cursor-pointer text-green-600 bg-green-100 rounded-full px-3 py-1">
                Tutorials
              </span>
            </div>
          </section>
          <section className="bg-white rounded-lg p-4 border border-gray-200 shadow-md">
            <h3 className="font-semibold text-sm mb-3">Recent Posts</h3>
            <ul className="space-y-4">
              {blogPosts.slice(0, 3).map((post) => (
                <li key={post.id}>
                  <a
                    href={`#`} // Replace with your dynamic route like `/blog/${post.id}`
                    className="flex gap-3 hover:bg-gray-100  hover:scale-102 p-2 rounded-md transition"
                  >
                    <img
                      alt={post.title}
                      className="rounded-md w-16 h-16 object-cover flex-shrink-0"
                      src={post.image}
                      width={60}
                      height={60}
                    />
                    <div className="text-xs">
                      <p className="font-semibold leading-tight text-black">
                        {post.title}
                      </p>
                      <p className="text-gray-500">
                        {post.author.name} &middot; {post.date}
                      </p>
                      <p className="text-gray-400 italic">{post.readTime}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
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
                <div key={index} className="px-3 md:py-10 ">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-[1.02] cursor-pointer h-full flex flex-col transition duration-300 ease-in-out">
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
          
        </div>
      </div>
    </>
  );
}

export default BlogPage;
