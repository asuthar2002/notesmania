import React from "react";

const MainBtn = ({ text, icon = null, bgColor = "#60B5FF", textColor = "#ffffff", onClick = () => {} }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center space-x-2 font-semibold text-base px-4 py-2 rounded-md transition duration-300 ease-in-out hover:brightness-90"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <span className="text-lg capitalize">{text}</span>
      {icon && <div dangerouslySetInnerHTML={{ __html: icon }} />}
    </button>
  );
};

export default MainBtn;
