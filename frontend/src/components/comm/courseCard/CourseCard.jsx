// components/CourseCard.jsx
import React from 'react';

const CourseCard = ({
  image,
  level,
  levelBg,
  levelColor,
  title,
  description,
  rating,
  ratingText,
  time,
  lectures,
  liked
}) => {
  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col max-w-sm mx-auto">
      <img
        alt={title}
        className="w-full h-48 object-cover"
        height={200}
        src={image}
        width={400}
      />
      <section className="p-4 flex flex-col flex-grow">
        <div className="mb-2 flex justify-between items-center">
          <span className={`text-xs font-medium ${levelColor} ${levelBg} rounded-md px-2 py-0.5`}>
            {level}
          </span>
          <button
            aria-label="Add to favorites"
            className={`text-lg ${liked ? 'text-red-600' : 'text-black'}`}
          >
            <i className={`${liked ? 'fas' : 'far'} fa-heart`}></i>
          </button>
        </div>
        <h2 className="font-semibold text-lg leading-tight mb-1">
          {title}
        </h2>
        <p className="text-gray-500 text-sm mb-3 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center mb-3 space-x-2">
          <div className="flex text-yellow-400 text-sm space-x-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <i key={i} className={i <= rating ? 'fas fa-star' : 'far fa-star'}></i>
            ))}
          </div>
          <span className="text-sm text-gray-700 font-normal">{ratingText}</span>
        </div>
        <hr className="border-gray-300 mb-3" />
        <div className="flex justify-between text-gray-700 text-sm font-normal">
          <div className="flex items-center space-x-2">
            <i className="far fa-clock text-red-600"></i>
            <span>{time}</span>
          </div>
          <div className="flex items-center space-x-2 text-orange-600">
            <i className="fas fa-th-large"></i>
            <span>{lectures} lectures</span>
          </div>
        </div>
      </section>
    </article>
  );
};

export default CourseCard;
