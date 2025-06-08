import React, { useState } from 'react';

const CategoryTagSelector = ({ onCategoryChange, onTagChange, selectedTag, selectedCategory }) => {
  const [categoryList, setCategoryList] = useState(['Technology', 'Travel', 'Food']);
  const [tagList, setTagList] = useState(['React', 'Health', 'Business']);

  const handleNewCategory = () => {
    const newCat = prompt('Enter new category:');
    if (newCat && !categoryList.includes(newCat)) {
      setCategoryList([...categoryList, newCat]);
      if (onCategoryChange) onCategoryChange(newCat);
    }
  };

  const handleNewTag = () => {
    const newTag = prompt('Enter new tag:');
    if (newTag && !tagList.includes(newTag)) {
      setTagList([...tagList, newTag]);
      if (onTagChange) onTagChange(newTag);
    }
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (onCategoryChange) onCategoryChange(value);
  };

  const handleTagChange = (e) => {
    const value = e.target.value;
    if (onTagChange) onTagChange(value);
  };

  return (
    <div className="max-w-xs w-full rounded-xl border border-gray-200 p-6 shadow-sm">
      <h2 className="text-gray-900 font-semibold text-lg mb-6">Details</h2>

      {/* Category Selection */}
      <div className="mb-6">
        <label htmlFor="categories" className="block text-gray-700 font-semibold mb-2">
          Categories
        </label>
        <select
          id="categories"
          name="categories"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full rounded-md border border-gray-300 text-gray-700 text-base px-4 py-2 bg-white"
        >
          <option value="">Select Category</option>
          {categoryList.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <p className="text-gray-700 text-sm mt-1 mb-4">Add blog to a category.</p>
        <button
          type="button"
          onClick={handleNewCategory}
          className="inline-flex items-center rounded-md bg-blue-100 px-4 py-2 text-blue-600 text-sm font-medium hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Create New Category
        </button>
      </div>

      {/* Tag Selection */}
      <div>
        <label htmlFor="tags" className="block text-gray-700 font-semibold mb-2">
          Tags
        </label>
        <select
          id="tags"
          name="tags"
          value={selectedTag}
          onChange={handleTagChange}
          className="w-full rounded-md border border-gray-300 text-gray-700 text-base px-4 py-2 bg-white"
        >
          <option value="">Select Tag</option>
          {tagList.map((tag, idx) => (
            <option key={idx} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <p className="text-gray-700 text-sm mt-1 mb-4">Add tags to your blog.</p>
        <button
          type="button"
          onClick={handleNewTag}
          className="inline-flex items-center rounded-md bg-blue-100 px-4 py-2 text-blue-600 text-sm font-medium hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Create New Tag
        </button>
      </div>
    </div>
  );
};

export default CategoryTagSelector;
