import React from "react";

const UICard = ({ title, buttonLabel, onButtonClick, children }) => {
  return (
    <div className="max-w-full bg-white rounded-md shadow-sm border border-gray-200 p-5">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        {buttonLabel && (
          <button
            onClick={onButtonClick}
            className="bg-blue-600 text-white font-semibold text-sm px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="button"
          >
            {buttonLabel}
          </button>
        )}
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
};

export default UICard;
