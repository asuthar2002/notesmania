import React, { useState } from 'react';

const CategoryTagSelector = ({
  onCategoryChange,
  onTagChange,
  selectedCategory = [],
  selectedTag = [],
}) => {
  const [categoryList, setCategoryList] = useState(['Technology', 'Travel', 'Food']);
  const [tagList, setTagList] = useState(['React', 'Health', 'Business']);

  const handleNewCategory = () => {
    const newCat = prompt('Enter new category:');
    if (newCat && !categoryList.includes(newCat)) {
      setCategoryList([...categoryList, newCat]);
      onCategoryChange?.([...selectedCategory, newCat]);
    }
  };

  const handleNewTag = () => {
    const newTag = prompt('Enter new tag:');
    if (newTag && !tagList.includes(newTag)) {
      setTagList([...tagList, newTag]);
      onTagChange?.([...selectedTag, newTag]);
    }
  };

  const handleCategorySelect = (e) => {
    const value = e.target.value;
    if (value && !selectedCategory.includes(value)) {
      onCategoryChange?.([...selectedCategory, value]);
    }
  };

  const handleTagSelect = (e) => {
    const value = e.target.value;
    if (value && !selectedTag.includes(value)) {
      onTagChange?.([...selectedTag, value]);
    }
  };

  const removeCategory = (cat) => {
    onCategoryChange?.(selectedCategory.filter((item) => item !== cat));
  };

  const removeTag = (tag) => {
    onTagChange?.(selectedTag.filter((item) => item !== tag));
  };

  const Chip = ({ label, onRemove }) => (
    <span className="inline-flex items-center px-3 py-1 mr-2 mb-2 bg-blue-100 text-blue-700 text-sm rounded-full">
      {label}
      <button
        onClick={onRemove}
        className="ml-2 text-blue-500 hover:text-red-500 focus:outline-none"
      >
        &times;
      </button>
    </span>
  );

  return (
    <div className="max-w-md w-full rounded-xl border border-gray-200 p-6 shadow-sm">
      <h2 className="text-gray-900 font-semibold text-lg mb-6">Details</h2>

      {/* Categories */}
      <div className="mb-6">
        <label htmlFor="categories" className="block text-gray-700 font-semibold mb-2">
          Categories
        </label>
        <select
          id="categories"
          onChange={handleCategorySelect}
          className="w-full rounded-md border border-gray-300 text-gray-700 text-base px-4 py-2 bg-white mb-2"
        >
          <option value="">Select Category</option>
          {categoryList.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <div className="flex flex-wrap">
          {selectedCategory.map((cat, idx) => (
            <Chip key={idx} label={cat} onRemove={() => removeCategory(cat)} />
          ))}
        </div>
        <button
          type="button"
          onClick={handleNewCategory}
          className="mt-3 inline-flex items-center rounded-md bg-blue-100 px-4 py-2 text-blue-600 text-sm font-medium hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Create New Category
        </button>
      </div>

      {/* Tags */}
      <div>
        <label htmlFor="tags" className="block text-gray-700 font-semibold mb-2">
          Tags
        </label>
        <select
          id="tags"
          onChange={handleTagSelect}
          className="w-full rounded-md border border-gray-300 text-gray-700 text-base px-4 py-2 bg-white mb-2"
        >
          <option value="">Select Tag</option>
          {tagList.map((tag, idx) => (
            <option key={idx} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <div className="flex flex-wrap">
          {selectedTag.map((tag, idx) => (
            <Chip key={idx} label={tag} onRemove={() => removeTag(tag)} />
          ))}
        </div>
        <button
          type="button"
          onClick={handleNewTag}
          className="mt-3 inline-flex items-center rounded-md bg-blue-100 px-4 py-2 text-blue-600 text-sm font-medium hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
