import React from 'react'
import PaginatedBox from '../../../components/comm/paginatedBox/PaginatedBox';
import CourseCard from '../../../components/comm/courseCard/CourseCard';

const MySaved = () => {

    
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
      liked: true,
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
      liked: true,
    },
  ];



  return (
<>

<PaginatedBox
        
        title="My Like/Saved Courses"
        items={cardData}
        itemsPerPage={4}
        BtnTitle='Remove All'
        searchBar={true}
        

        renderItem={(item, index) => <CourseCard key={index} {...item} />}
      />
</>
  )
}

export default MySaved
