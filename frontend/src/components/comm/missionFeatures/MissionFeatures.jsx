import React from "react";

const features = [
  {
    img: "https://storage.googleapis.com/a1aa/image/4be09adb-8fd1-432e-3ea4-0792f10c954b.jpg",
    title: "We care about kids",
    description:
      "Man children rejoiced. Yet uncommonly his ten who diminution astonished.",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/6a5b65bf-3a8d-4922-8806-9dc81f8b7f13.jpg",
    title: "Building life-long learners",
    description:
      "Who diminution astonished. Yet uncommonly his ten who diminution astonished.",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/bf274087-719a-440c-35b6-9fe03ad150db.jpg",
    title: "Helping struggling students",
    description:
      "Man children rejoiced. Yet uncommonly his ten who diminution astonished.",
  },
];

const FeatureCard = ({ img, title, description }) => (
  <div className="flex flex-col items-center max-w-xs text-center relative z-10">
    <div className="bg-white rounded-full p-6 shadow-[0_0_30px_rgba(0,0,0,0.1)] mb-6">
      <img src={img} alt={title} className="w-20 h-20" />
    </div>
    <h3 className="font-semibold text-gray-900 text-lg leading-6 mb-2">
      {title}
    </h3>
    <p className="text-gray-600 text-sm leading-5 max-w-[220px]">{description}</p>
  </div>
);

const MissionFeatures = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col sm:flex-row justify-between items-center gap-12 sm:gap-0 relative">
      {/* Feature Cards */}
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}

      {/* SVG Curved Arrows */}
      <svg
        aria-hidden="true"
        className="absolute pointer-events-none"
        fill="none"
        height={200}
        style={{ top: 0, left: "50%", transform: "translateX(-50%)" }}
        viewBox="0 0 400 200"
        width={400}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth={10}
            markerHeight={7}
            refX="10"
            refY="3.5"
            orient="auto"
            fill="#7f8c8d"
          >
            <polygon points="0 0, 10 3.5, 0 7" />
          </marker>
        </defs>
        <path
          d="M 80 40 Q 140 10 190 60"
          stroke="#7f8c8d"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M 210 60 Q 270 110 320 40"
          stroke="#7f8c8d"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
      </svg>
    </div>
  );
};

export default MissionFeatures;
