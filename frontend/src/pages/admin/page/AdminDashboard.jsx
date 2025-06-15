import React from "react";
import UICard from "../components/ui/UICard";
import UIStatGrid from "../components/ui/UIStatCards";
import UIChart from "../components/ui/UIChart";
import UIUserCard from "../components/ui/UIUserCard";
import UIPaginatedBox from "../components/ui/UIPaginatedBox";

const AdminDashboard = () => {
  const stats = [
    {
      value: "1958",
      label: "Completed Courses",
      iconClass: "fas fa-desktop",
      bgColor: "bg-[#FFF8E1]",
      iconBg: "bg-yellow-400",
    },
    {
      value: "1600",
      label: "Enrolled Courses",
      iconClass: "fas fa-user-tie",
      bgColor: "bg-[#EDE6FA]",
      iconBg: "bg-purple-700",
    },
    {
      value: "1235",
      label: "Course In Progress",
      iconClass: "fas fa-user-graduate",
      bgColor: "bg-[#E6F0FA]",
      iconBg: "bg-blue-700",
    },
    {
      value: "845hrs",
      label: "Total Watch Time",
      iconClass: "fas fa-stopwatch",
      bgColor: "bg-[#DFF6F0]",
      iconBg: "bg-green-600",
    },
  ];

  const cardData = [
    {
      image:
        "https://storage.googleapis.com/a1aa/image/2a0ed76e-8705-47ba-a362-79a1ab184af0.jpg",
      level: "All level",
      levelBg: "bg-[#d7d8ff]",
      levelColor: "text-[#6b6bff]",
      title: "Sketch from A to Z: for app designer",
      description: "Proposal indulged no do sociable he throwing settling.",
      rating: 4,
      ratingText: "4/5.0",
      time: "12h 56m",
      lectures: 15,
      liked: false,
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/fda0a30e-7659-4633-0d0b-4a1c0736b0b6.jpg",
      level: "Beginner",
      levelBg: "bg-[#d7f6f6]",
      levelColor: "text-[#3acfcf]",
      title: "Graphic Design Masterclass",
      description:
        "Rooms oh fully taken by worse do Points afraid but may end Rooms…",
      rating: 4,
      ratingText: "4.5/5.0",
      time: "9h 56m",
      lectures: 65,
      liked: true,
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/580a3161-cbed-498e-3b6a-2ef2a8e29b16.jpg",
      level: "Beginner",
      levelBg: "bg-[#d7f6f6]",
      levelColor: "text-[#3acfcf]",
      title: "Create a Design System in Figma",
      description:
        "Rooms oh fully taken by worse do. Points afraid but may end afraid but…",
      rating: 4,
      ratingText: "4.5/5.0",
      time: "5h 56m",
      lectures: 32,
      liked: false,
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/580a3161-cbed-498e-3b6a-2ef2a8e29b16.jpg",
      level: "Beginner",
      levelBg: "bg-[#d7f6f6]",
      levelColor: "text-[#3acfcf]",
      title: "Create a Design System in Figma",
      description:
        "Rooms oh fully taken by worse do. Points afraid but may end afraid but…",
      rating: 4,
      ratingText: "4.5/5.0",
      time: "5h 56m",
      lectures: 32,
      liked: false,
    },
    {
      image:
        "https://storage.googleapis.com/a1aa/image/580a3161-cbed-498e-3b6a-2ef2a8e29b16.jpg",
      level: "Beginner",
      levelBg: "bg-[#d7f6f6]",
      levelColor: "text-[#3acfcf]",
      title: "Create a Design System in Figma",
      description:
        "Rooms oh fully taken by worse do. Points afraid but may end afraid but…",
      rating: 4,
      ratingText: "4.5/5.0",
      time: "5h 56m",
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
  return (
    <>
      <UICard title="Dashboard">
        <div className="flex flex-col gap-4">
          <UIStatGrid stats={stats} columns={4} rows="auto" />
          <UICard>
            <UIChart
              data={chartData}
              xKey="name"
              barDataKey="sales"
              lineDataKey="users"
              dotDataKey="views"
              showLine={true}
              showBar={true}
              showDot={true}
            />
          </UICard>

          <UIPaginatedBox
            title="Most Selling Courses"
            items={cardData}
            itemsPerPage={3}
            renderItem={(item, index) => (
              <UIUserCard
                name="Carolyn Ortiz"
                location="Mumbai"
                profileImage="https://storage.googleapis.com/a1aa/image/6d67c2a9-8cee-42be-44ee-4d0d29d2297e.jpg"
                courses={21}
                completion={85}
                joinDate="29 Aug 2021"
              />
            )}
          />
        </div>
      </UICard>
    </>
  );
};

export default AdminDashboard;
