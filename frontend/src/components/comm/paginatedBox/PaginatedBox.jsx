import React, { useState } from 'react';

const PaginatedBox = ({ title, itemsPerPage = 1, items = [], renderItem }) => {
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

  return (
    <div className="max-w-5xl mx-auto border mt-7 border-gray-200 rounded-lg shadow-sm">
      <div className="flex justify-between items-center border-b border-gray-200 px-6 py-4">
        <h2 className="text-gray-900 font-extrabold text-lg">{title}</h2>
        <button className="text-blue-600 bg-blue-100 hover:bg-blue-200 font-semibold text-sm rounded px-3 py-1.5">
          View all
        </button>
      </div>

      <div className="min-h-[280px] grid grid-cols-2 md:grid-cols-2 md:grid-row-1 gap-4 p-6">
        {visibleItems.map((item, index) => (
          <div key={index}>
            {renderItem(item, index)}
          </div>
        ))}
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
