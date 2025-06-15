import React from "react";

const UIStatCard = ({ value, label, iconClass, bgColor, iconBg }) => {
  return (
    <div className={`flex items-center justify-between ${bgColor} rounded-lg p-6`}>
      <div>
        <h2 className="text-3xl font-extrabold text-gray-900 leading-none">
          {value}
        </h2>
        <p className="text-sm text-gray-800 mt-1">{label}</p>
      </div>
      <div className={`${iconBg} w-12 h-12 rounded-full flex items-center justify-center`}>
        <i className={`${iconClass} text-white text-lg`} />
      </div>
    </div>
  );
};

const UIStatGrid = ({ stats, columns = 1, rows = "auto" }) => {
  return (
    <div
      className="max-w-7xl mx-auto gap-4"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridAutoRows: rows,
      }}
    >
      {stats.map((stat, index) => (
        <UIStatCard
          key={index}
          value={stat.value}
          label={stat.label}
          iconClass={stat.iconClass}
          bgColor={stat.bgColor}
          iconBg={stat.iconBg}
        />
      ))}
    </div>
  );
};

export default UIStatGrid;
