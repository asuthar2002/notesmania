// components/ui/UIPopupCard.jsx
import React from 'react';

const UIPopupCard = ({ title, children, onClose, onSubmit, submitLabel = 'Submit' }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl font-bold"
        >
          ×
        </button>

        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>

        {/* Body */}
        <div className="px-6 py-4 max-h-[400px] overflow-y-auto">
          {children}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 text-right">
          <button
            onClick={onSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {submitLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UIPopupCard;
