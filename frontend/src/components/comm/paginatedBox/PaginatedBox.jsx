// PaginatedBox.jsx
import React, { useState } from 'react';

const PaginatedBox = ({
  title,
  itemsPerPage = 1,
  items = [],
  renderItem,
  BtnTitle = 'View All',
  searchBar,
  handleSearchChange,
  handleFilterChange,
  searchValue = ''
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const visibleItems = items.slice(startIdx, startIdx + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-5xl mx-auto border mt-7 border-gray-200 rounded-lg shadow-sm">
      <div className="flex justify-between items-center border-b border-gray-200 px-6 py-4">
        <h2 className="text-gray-900 font-extrabold text-lg">{title}</h2>
        <button className="text-blue-600 bg-blue-100 hover:bg-blue-200 font-semibold text-sm rounded px-3 py-1.5">
          {BtnTitle}
        </button>
      </div>

      {searchBar && (
        <section className="mx-4 m-8 p-4 bg-gray-100 rounded-lg">
          <form onSubmit={onFormSubmit} className="flex flex-col sm:flex-row flex-wrap gap-4">
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Enter keyword"
              className="w-full sm:flex-1 min-w-[100px] rounded-md border border-gray-300 px-4 py-2 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <select
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full sm:w-auto rounded-md border border-gray-300 px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            >
              <option value="">Categories</option>
              <option value="design">Design</option>
              <option value="development">Development</option>
            </select>
            <select
              onChange={(e) => handleFilterChange('price', e.target.value)}
              className="w-full sm:w-auto rounded-md border border-gray-300 px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            >
              <option value="">Price level</option>
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </select>
            <select
              onChange={(e) => handleFilterChange('skill', e.target.value)}
              className="w-full sm:w-auto rounded-md border border-gray-300 px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            >
              <option value="">Skill level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <select
              onChange={(e) => handleFilterChange('language', e.target.value)}
              className="w-full sm:w-auto rounded-md border border-gray-300 px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            >
              <option value="">Language</option>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 rounded-md px-5 py-2 text-white flex items-center justify-center"
              aria-label="Search"
            >
              <i className="fas fa-search" />
            </button>
          </form>
        </section>
      )}

<div className="min-h-[280px] grid grid-cols-2 md:grid-cols-2 md:grid-row-1 gap-4 p-6">
        {visibleItems.length > 0 ? (
          visibleItems.map((item, index) => (
            <div key={index}>{renderItem(item, index)}</div>
          ))
        ) : (
          <div className="col-span-2 text-center text-gray-500 py-8">No results found.</div>
        )}
      </div>

      <div className="flex justify-between items-center px-6 py-3">
        <p className="text-gray-500 text-sm">
          Showing {startIdx + 1} to {Math.min(startIdx + itemsPerPage, items.length)} of {items.length} entries
        </p>
        <nav className="inline-flex space-x-2" aria-label="Pagination">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="text-blue-600 bg-blue-100 hover:bg-blue-200 rounded px-3 py-1.5 disabled:opacity-50"
          >
            <i className="fas fa-chevron-left" />
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`rounded px-3 py-1.5 ${
                currentPage === i + 1
                  ? 'text-white bg-blue-700'
                  : 'text-blue-600 bg-blue-100 hover:bg-blue-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="text-blue-600 bg-blue-100 hover:bg-blue-200 rounded px-3 py-1.5 disabled:opacity-50"
          >
            <i className="fas fa-chevron-right" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default PaginatedBox;
