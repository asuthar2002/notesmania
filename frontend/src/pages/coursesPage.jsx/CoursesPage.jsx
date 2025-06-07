// pages/Courses.jsx
import React from 'react';
import CourseCard from '../../components/comm/courseCard/CourseCard';
import { useLocation } from 'react-router-dom';
import SectionHeader from '../../components/comm/sectionHeader/SectionHeader';

const Courses = () => {

  const location = useLocation();
  console.log('Current location:', location.pathname);
  

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

  return (
<>





{location.pathname === '/' ? (
  <SectionHeader
  title="Our"
  highlightText="Trending"
  highlightColor="text-orange-500"
  subtitle="Check out the most popular"
  iconClass="fas fa-fire text-orange-500"
/>
) : (
  
  <>
  <header className="bg-gray-100 rounded-lg mx-4 mt-6 p-6 text-center">
  <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
    Course Grid Minimal
  </h1>
  <nav className="text-sm text-gray-500 flex justify-center items-center space-x-2">
    <a href="#" className="hover:underline">Home</a>
    <span>•</span>
    <a href="#" className="hover:underline">Course minimal</a>
  </nav>
</header>
<section className="mx-4 m-8 p-4 bg-gray-100  rounded-lg">
  <form className="flex flex-col sm:flex-row flex-wrap gap-4">
    <input
      type="text"
      placeholder="Enter keyword"
      className="w-full sm:flex-1 min-w-[100px] rounded-md border border-gray-300 px-4 py-2 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
    />
    <select className="w-full sm:w-auto rounded-md border border-gray-300 px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
      <option>Categories</option>
    </select>
    <select className="w-full sm:w-auto rounded-md border border-gray-300 px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
      <option>Price level</option>
    </select>
    <select className="w-full sm:w-auto rounded-md border border-gray-300 px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
      <option>Skill level</option>
    </select>
    <select className="w-full sm:w-auto rounded-md border border-gray-300 px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
      <option>Language</option>
    </select>
    <button
      type="submit"
      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 rounded-md px-5 py-2 text-white flex items-center justify-center"
      aria-label="Search"
    >
      <i className="fas fa-search" />
    </button>
  </form>
</section>
  </>

)}



<main className="max-w-7xl  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {cardData.map((item, index) => (
        <CourseCard key={index} {...item} />
      ))}
    </main>
</>
  );
};

export default Courses;
