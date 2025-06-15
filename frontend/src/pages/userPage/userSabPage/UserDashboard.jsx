import React from "react";
import GraphComponent from "../../../components/comm/userProfile/comm/GraphComponent";
import PaginatedBox from "../../../components/comm/paginatedBox/PaginatedBox";
import CourseCard from "../../../components/comm/courseCard/CourseCard";

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

  const cardData = [
    {
      image: 'https://storage.googleapis.com/a1aa/image/2a0ed76e-8705-47ba-a362-79a1ab184af0.jpg',
      level: 'All level',
      levelBg: 'bg-[#d7d8ff]',
      levelColor: 'text-[#6b6bff]',
      title: 'Sketch from A to Z: for app designer',
      description: 'Proposal indulged no do sociable he throwing settling.',
      rating: 4,
      ratingText: '4/5.0',
      time: '12h 56m',
      lectures: 15,
      liked: false,
    },
    {
      image: 'https://storage.googleapis.com/a1aa/image/fda0a30e-7659-4633-0d0b-4a1c0736b0b6.jpg',
      level: 'Beginner',
      levelBg: 'bg-[#d7f6f6]',
      levelColor: 'text-[#3acfcf]',
      title: 'Graphic Design Masterclass',
      description: 'Rooms oh fully taken by worse do Points afraid but may end Rooms…',
      rating: 4,
      ratingText: '4.5/5.0',
      time: '9h 56m',
      lectures: 65,
      liked: true,
    },
    {
      image: 'https://storage.googleapis.com/a1aa/image/580a3161-cbed-498e-3b6a-2ef2a8e29b16.jpg',
      level: 'Beginner',
      levelBg: 'bg-[#d7f6f6]',
      levelColor: 'text-[#3acfcf]',
      title: 'Create a Design System in Figma',
      description: 'Rooms oh fully taken by worse do. Points afraid but may end afraid but…',
      rating: 4,
      ratingText: '4.5/5.0',
      time: '5h 56m',
      lectures: 32,
      liked: false,
    },
    {
      image: 'https://storage.googleapis.com/a1aa/image/580a3161-cbed-498e-3b6a-2ef2a8e29b16.jpg',
      level: 'Beginner',
      levelBg: 'bg-[#d7f6f6]',
      levelColor: 'text-[#3acfcf]',
      title: 'Create a Design System in Figma',
      description: 'Rooms oh fully taken by worse do. Points afraid but may end afraid but…',
      rating: 4,
      ratingText: '4.5/5.0',
      time: '5h 56m',
      lectures: 32,
      liked: false,
    },
    {
      image: 'https://storage.googleapis.com/a1aa/image/580a3161-cbed-498e-3b6a-2ef2a8e29b16.jpg',
      level: 'Beginner',
      levelBg: 'bg-[#d7f6f6]',
      levelColor: 'text-[#3acfcf]',
      title: 'Create a Design System in Figma',
      description: 'Rooms oh fully taken by worse do. Points afraid but may end afraid but…',
      rating: 4,
      ratingText: '4.5/5.0',
      time: '5h 56m',
      lectures: 32,
      liked: false,
    },
  ];

    
const chartData = [
  { name: "Jan", sales: 4000, users: 2400, views: 2400 },
  { name: "Feb", sales: 3000, users: 1398, views: 2210 },
  { name: "Mar", sales: 2000, users: 9800, views: 2290 },
  { name: "Apr", sales: 2780, users: 3908, views: 2000 },
  { name: "May", sales: 1890, users: 4800, views: 2181 },
  { name: "Jun", sales: 2390, users: 3800, views: 2500 },
  { name: "Jul", sales: 3490, users: 4300, views: 2100 },
];

const UserDashboard = () => {
  return (
    <>
      <div className="">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-6 ">
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
                <p className="font-extrabold text-lg leading-none">
                  {item.count}
                </p>
                <p className="text-base leading-tight">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <GraphComponent />
        <PaginatedBox
        
  title="Most Selling Courses"
  items={cardData}
  itemsPerPage={4}
  renderItem={(item, index) => <CourseCard key={index} {...item} />}
/>

      </div>
    </>
  );
};

export default UserDashboard;
