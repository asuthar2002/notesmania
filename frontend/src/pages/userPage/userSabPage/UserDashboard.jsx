import React from "react";

const dashboardData = [
  {
    icon: "fas fa-desktop",
    bgColor: "#FFE9D3",
    iconColor: "#FF7F1A",
    count: 9,
    label: "Total Courses",
  },
  {
    icon: "fas fa-clipboard-check",
    bgColor: "#E5DFF8",
    iconColor: "#6B3BD2",
    count: 52,
    label: "Complete Lessons",
  },
  {
    icon: "fas fa-medal",
    bgColor: "#E6F6F2",
    iconColor: "#00A67E",
    count: 8,
    label: "Achieved Certificates",
  },
];

const UserDashboard = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-6 px-4">
      {dashboardData.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-6 rounded-lg p-6 flex-1 min-w-[200px]"
          style={{ backgroundColor: item.bgColor }}
        >
          <i
            className={`${item.icon} text-5xl`}
            style={{ color: item.iconColor }}
          />
          <div>
            <p className="font-extrabold text-lg leading-none">{item.count}</p>
            <p className="text-base leading-tight">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserDashboard;
