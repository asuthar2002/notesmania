// components/CourseCard.jsx
import React from 'react';

const CourseCard = ({
  image,
  level,
  levelBg = 'bg-blue-100',
  levelColor = 'text-blue-600',
  title,
  description,
  rating = 0,
  ratingText = '',
  time,
  lectures,
  liked = false,
  params = false, // 👈 Control to show edit/delete
  onEdit = () => {},
  onDelete = () => {},
}) => {
  return (
    <article className="bg-white rounded-xl shadow hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col max-w-sm w-full mx-auto relative">
      {/* Top-right corner Edit/Delete Buttons if params true */}
      {params && (
        <div className="absolute top-3 right-3 flex space-x-2 z-10">
          <button
            onClick={onEdit}
            className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded hover:bg-yellow-200 font-medium"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded hover:bg-red-200 font-medium"
          >
            Delete
          </button>
        </div>
      )}

      {/* Course image */}
      <img
        alt={title}
        className="w-full h-48 object-cover"
        src={image}
      />

      {/* Content */}
      <section className="p-4 flex flex-col flex-grow">
        <div className="mb-2 flex justify-between items-center">
          <span className={`text-xs font-medium ${levelColor} ${levelBg} rounded-md px-2 py-0.5`}>
            {level}
          </span>
          <button
            aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}
            className={`text-lg focus:outline-none ${liked ? 'text-red-600' : 'text-gray-400 hover:text-red-500'}`}
          >
            <i className={`${liked ? 'fas' : 'far'} fa-heart`}></i>
          </button>
        </div>

        <h2 className="font-semibold text-lg leading-tight mb-1 text-gray-800 line-clamp-2">
          {title}
        </h2>

        <p className="text-gray-500 text-sm mb-3 leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex items-center mb-3 space-x-2">
          <div className="flex text-yellow-400 text-sm space-x-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <i key={i} className={i <= rating ? 'fas fa-star' : 'far fa-star'}></i>
            ))}
          </div>
          <span className="text-sm text-gray-700">{ratingText}</span>
        </div>

        <hr className="border-gray-200 mb-3" />

        <div className="flex justify-between text-gray-700 text-sm">
          <div className="flex items-center space-x-2">
            <i className="far fa-clock text-red-500"></i>
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
