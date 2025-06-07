import React from "react";

const stats = [
  {
    label: "Students Enrolled",
    value: "75,992",
    icon: "https://storage.googleapis.com/a1aa/image/fdbb03f2-5751-42d1-a2f0-5a9a42fd0dbc.jpg",
    alt: "Icon of three people representing students",
  },
  {
    label: "Total Courses",
    value: "546",
    icon: "https://storage.googleapis.com/a1aa/image/625c04b0-84ce-4960-e053-4d46bacbdd57.jpg",
    alt: "Icon of a book with a bookmark representing courses",
  },
  {
    label: "Online Learners",
    value: "5,298",
    icon: "https://storage.googleapis.com/a1aa/image/fe8f845c-66f9-4272-cdaf-ff60a7c70041.jpg",
    alt: "Icon of a graduation cap and diploma representing online learners",
  },
  {
    label: "Foreign Followers",
    value: "44,000",
    icon: "https://storage.googleapis.com/a1aa/image/11f33e51-fb66-4c51-2454-17025d93ff66.jpg",
    alt: "Icon of a globe with a location pin representing foreign followers",
  },
];

const ProudStatsSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#0B1033] leading-tight inline-block relative text-center sm:text-left">
        We Are Proud
        <span
          className="absolute -bottom-1 left-0 w-20 h-2 rounded-sm"
          style={{ backgroundColor: "#fbbf24", filter: "brightness(0.85)" }}
        ></span>
      </h2>

      <p className="mt-2 text-gray-600 text-base sm:text-lg max-w-xl mx-auto text-center sm:text-left">
        You don't have to struggle alone, you've got our assistance and help.
      </p>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-6 sm:gap-x-12 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={stat.icon}
              alt={stat.alt}
              className="w-8 h-8 mb-3"
              width={32}
              height={32}
            />
            <span className="text-[#0B1033] font-extrabold text-xl sm:text-2xl leading-none">
              {stat.value}
            </span>
            <span className="text-gray-600 text-sm sm:text-base mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProudStatsSection;
