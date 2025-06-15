// AllCourses.jsx
import React, { useState, useMemo } from 'react';
import UICard from '../components/ui/UICard';
import PaginatedBox from '../../../components/comm/paginatedBox/PaginatedBox';
import CourseCard from '../../../components/comm/courseCard/CourseCard';

const cardData = [
  {
    name: 'Suthar',
    location: 'Rajasthan, India',
    profileImage: 'https://storage.googleapis.com/a1aa/image/2a0ed76e-8705-47ba-a362-79a1ab184af0.jpg',
    courses: 15,
    completion: 76,
    joinDate: 'Jan 2024',
    category: 'design',
    price: 'free',
    skill: 'beginner',
    language: 'english',
    image: 'https://i.pinimg.com/736x/d4/ec/de/d4ecde0d5df25113423d19bae55084d5.jpg',
    level: 'Beginner',
    levelBg: 'bg-green-100',
    levelColor: 'text-green-700',
    title: 'Intro to Design',
    description: 'Learn the basics of design.',
    rating: 4,
    ratingText: '4.0 (230)',
    time: '6h 30m',
    lectures: 20,
    liked: true,
  },
  {
    name: 'Suthar',
    location: 'Rajasthan, India',
    profileImage: 'https://storage.googleapis.com/a1aa/image/2a0ed76e-8705-47ba-a362-79a1ab184af0.jpg',
    courses: 15,
    completion: 76,
    joinDate: 'Jan 2024',
    category: 'design',
    price: 'free',
    skill: 'beginner',
    language: 'english',
    image: 'https://i.pinimg.com/736x/d4/ec/de/d4ecde0d5df25113423d19bae55084d5.jpg',
    level: 'Beginner',
    levelBg: 'bg-green-100',
    levelColor: 'text-green-700',
    title: 'Intro to Design',
    description: 'Learn the basics of design.',
    rating: 4,
    ratingText: '4.0 (230)',
    time: '6h 30m',
    lectures: 20,
    liked: true,
  },
  {
    name: 'Suthar',
    location: 'Rajasthan, India',
    profileImage: 'https://storage.googleapis.com/a1aa/image/2a0ed76e-8705-47ba-a362-79a1ab184af0.jpg',
    courses: 15,
    completion: 76,
    joinDate: 'Jan 2024',
    category: 'design',
    price: 'free',
    skill: 'beginner',
    language: 'english',
    image: 'https://i.pinimg.com/736x/d4/ec/de/d4ecde0d5df25113423d19bae55084d5.jpg',
    level: 'Beginner',
    levelBg: 'bg-green-100',
    levelColor: 'text-green-700',
    title: 'Intro to Design',
    description: 'Learn the basics of design.',
    rating: 4,
    ratingText: '4.0 (230)',
    time: '6h 30m',
    lectures: 20,
    liked: true,
  },
  {
    name: 'Suthar',
    location: 'Rajasthan, India',
    profileImage: 'https://storage.googleapis.com/a1aa/image/2a0ed76e-8705-47ba-a362-79a1ab184af0.jpg',
    courses: 15,
    completion: 76,
    joinDate: 'Jan 2024',
    category: 'design',
    price: 'paid',
    skill: 'beginner',
    language: 'english',
    image: 'https://i.pinimg.com/736x/d4/ec/de/d4ecde0d5df25113423d19bae55084d5.jpg',
    level: 'Beginner',
    levelBg: 'bg-green-100',
    levelColor: 'text-green-700',
    title: 'manm',
    description: 'Learn the basics of design.',
    rating: 4,
    ratingText: '4.0 (230)',
    time: '6h 30m',
    lectures: 20,
    liked: true,
  },
  {
    name: 'Suthar',
    location: 'Rajasthan, India',
    profileImage: 'https://storage.googleapis.com/a1aa/image/2a0ed76e-8705-47ba-a362-79a1ab184af0.jpg',
    courses: 15,
    completion: 76,
    joinDate: 'Jan 2024',
    category: 'design',
    price: 'free',
    skill: 'beginner',
    language: 'english',
    image: 'https://i.pinimg.com/736x/d4/ec/de/d4ecde0d5df25113423d19bae55084d5.jpg',
    level: 'Beginner',
    levelBg: 'bg-green-100',
    levelColor: 'text-green-700',
    title: 'Intro to Design',
    description: 'Learn the basics of design.',
    rating: 4,
    ratingText: '4.0 (230)',
    time: '6h 30m',
    lectures: 20,
    liked: true,
  },
  // Add more data as needed...
];

const AllCourses = () => {
  const [filters, setFilters] = useState({
    keyword: '',
    category: '',
    price: '',
    skill: '',
    language: '',
  });

  const handleSearchChange = (e) => {
    setFilters({ ...filters, keyword: e.target.value });
  };

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const filteredItems = useMemo(() => {
    return cardData.filter((item) => {
      return (
        (!filters.keyword || item.title.toLowerCase().includes(filters.keyword.toLowerCase())) &&
        (!filters.category || item.category === filters.category) &&
        (!filters.price || item.price === filters.price) &&
        (!filters.skill || item.skill === filters.skill) &&
        (!filters.language || item.language === filters.language)
      );
    });
  }, [filters]);

  return (
    <>
      <UICard title={'All Courses'}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl w-full">
          <div className="border border-blue-500 rounded-md bg-blue-100 p-6 flex flex-col items-center text-center">
            <p className="font-semibold text-gray-700 mb-2">Total Courses</p>
            <p className="text-blue-700 font-extrabold text-4xl">1200</p>
          </div>
          <div className="border border-emerald-400 rounded-md bg-emerald-100 p-6 flex flex-col items-center text-center">
            <p className="font-semibold text-gray-700 mb-2">Activated Courses</p>
            <p className="text-emerald-600 font-extrabold text-4xl">996</p>
          </div>
          <div className="border border-yellow-400 rounded-md bg-yellow-100 p-6 flex flex-col items-center text-center">
            <p className="font-semibold text-gray-700 mb-2">Pending Courses</p>
            <p className="text-yellow-400 font-extrabold text-4xl">200</p>
          </div>
        </div>

        <PaginatedBox
          title="My Uploads"
          items={filteredItems}
          itemsPerPage={4}
          renderItem={(item, index) => <CourseCard key={index} {...item} />}
          searchBar={true}
          handleSearchChange={handleSearchChange}
          handleFilterChange={handleFilterChange}
          searchValue={filters.keyword}
        />
      </UICard>
    </>
  );
};

export default AllCourses;
