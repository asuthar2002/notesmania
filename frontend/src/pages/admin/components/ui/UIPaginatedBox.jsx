import React, { useState, useEffect } from 'react';

const UIPaginatedBox = ({
  title,
  itemsPerPage = 1,
  items = [],
  renderItem,
  BtnTitle = 'View All',
  searchBar = false,
  onSearchChange
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setCurrentPage(1);
    onSearchChange?.(searchText); // trigger live search
  }, [searchText]);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const visibleItems = items.slice(startIdx, startIdx + itemsPerPage);

  const handlePrev = () => currentPage > 1 && setCurrentPage((p) => p - 1);
  const handleNext = () => currentPage < totalPages && setCurrentPage((p) => p + 1);

  return (
    <div className="max-w-5xl border mt-7 border-gray-200 rounded-lg shadow-sm">
      <div className="flex justify-between items-center border-b border-gray-200 px-6 py-4">
        <h2 className="text-gray-900 font-extrabold text-lg">{title}</h2>
        <button className="text-blue-600 bg-blue-100 hover:bg-blue-200 font-semibold text-sm rounded px-3 py-1.5">
          {BtnTitle}
        </button>
      </div>

      {searchBar && (
        <section className="mx-4 my-6 p-4 bg-gray-100 rounded-lg">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search by name..."
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </section>
      )}

      <div className="min-h-[280px] grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
        {visibleItems.map((item, index) => (
          <div key={index}>{renderItem(item, index)}</div>
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
            &lt;
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
            &gt;
          </button>
        </nav>
      </div>
    </div>
  );
};

export default UIPaginatedBox;
