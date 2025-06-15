// components/ui/UISearch.jsx
import React from 'react';

const UISearch = ({ filters, onChange }) => {
  const handleChange = (key, value) => {
    onChange((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex  gap-4 mb-4">
      {filters.map(({ key, label, type = 'text', placeholder, isRange }) => {
        if (isRange) {
          return (
            <div key={key} className="flex flex-col sm:flex-row gap-2 items-center">
              <label className="font-medium text-sm">{label}</label>
              <input
                type={type}
                placeholder="From"
                onChange={(e) => handleChange(`${key}From`, e.target.value)}
                className="border px-3 py-2 rounded w-32"
              />
              <span className="text-gray-500">to</span>
              <input
                type={type}
                placeholder="To"
                onChange={(e) => handleChange(`${key}To`, e.target.value)}
                className="border px-3 py-2 rounded w-32"
              />
            </div>
          );
        }

        return (
          <input
            key={key}
            type={type}
            placeholder={placeholder || label}
            onChange={(e) => handleChange(key, e.target.value)}
            className="border px-3 py-2 rounded w-full sm:w-48"
          />
        );
      })}
    </div>
  );
};

export default UISearch;
