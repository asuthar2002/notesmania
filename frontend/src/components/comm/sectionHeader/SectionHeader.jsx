import React from "react";

const SectionHeader = ({
  title,
  highlightText,
  highlightColor = "text-yellow-500",
  subtitle,
  iconClass = "fas fa-fire text-yellow-500",
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-extrabold text-gray-900">
        {title}{" "}
        <span className={`${highlightColor} font-extrabold`}>
          {highlightText}
        </span>{" "}
      </h1>
      <p className="mt-1 text-gray-600 text-sm">
        {subtitle} <i className={iconClass} />
      </p>
    </div>
  );
};

export default SectionHeader;
