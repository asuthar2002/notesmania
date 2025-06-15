import React from 'react'
import UIPaginatedBox from '../components/ui/UIPaginatedBox';
import UIUserCard from '../components/ui/UIUserCard';
import UILoading from '../components/comm/loading/UILoading';

const StudentsPage = () => {
  const [loading, setLoading] = React.useState(false);

  const cardData = [
    {
      name: "Suthar",
      location: "Rajasthan, India",
      profileImage: "https://storage.googleapis.com/a1aa/image/2a0ed76e-8705-47ba-a362-79a1ab184af0.jpg",
      courses: 15,
      completion: 76,
      joinDate: "Jan 2024",
      category: "design",
      price: "free",
      skill: "beginner",
      language: "english"
    },
    {
      name: "Figma Designer",
      location: "Mumbai, India",
      profileImage: "https://storage.googleapis.com/a1aa/image/580a3161-cbed-498e-3b6a-2ef2a8e29b16.jpg",
      courses: 32,
      completion: 90,
      joinDate: "Feb 2023",
      category: "dev",
      price: "paid",
      skill: "advanced",
      language: "hindi"
    },
    {
      name: "Figma Designer",
      location: "Mumbai, India",
      profileImage: "https://storage.googleapis.com/a1aa/image/580a3161-cbed-498e-3b6a-2ef2a8e29b16.jpg",
      courses: 32,
      completion: 90,
      joinDate: "Feb 2023",
      category: "dev",
      price: "paid",
      skill: "advanced",
      language: "hindi"
    },
    {
      name: "Figma Designer",
      location: "Mumbai, India",
      profileImage: "https://storage.googleapis.com/a1aa/image/580a3161-cbed-498e-3b6a-2ef2a8e29b16.jpg",
      courses: 32,
      completion: 90,
      joinDate: "Feb 2023",
      category: "dev",
      price: "paid",
      skill: "advanced",
      language: "hindi"
    },
    {
      name: "Figma Designer",
      location: "Mumbai, India",
      profileImage: "https://storage.googleapis.com/a1aa/image/580a3161-cbed-498e-3b6a-2ef2a8e29b16.jpg",
      courses: 32,
      completion: 90,
      joinDate: "Feb 2023",
      category: "dev",
      price: "paid",
      skill: "advanced",
      language: "hindi"
    },
    {
      name: "Figma Designer",
      location: "Mumbai, India",
      profileImage: "https://storage.googleapis.com/a1aa/image/580a3161-cbed-498e-3b6a-2ef2a8e29b16.jpg",
      courses: 32,
      completion: 90,
      joinDate: "Feb 2023",
      category: "dev",
      price: "paid",
      skill: "advanced",
      language: "hindi"
    },
    {
      name: "Figma Designer",
      location: "Mumbai, India",
      profileImage: "https://storage.googleapis.com/a1aa/image/580a3161-cbed-498e-3b6a-2ef2a8e29b16.jpg",
      courses: 32,
      completion: 90,
      joinDate: "Feb 2023",
      category: "dev",
      price: "paid",
      skill: "advanced",
      language: "hindi"
    },
    {
      name: "shiv Designer",
      location: "Mumbai, India",
      profileImage: "https://storage.googleapis.com/a1aa/image/580a3161-cbed-498e-3b6a-2ef2a8e29b16.jpg",
      courses: 32,
      completion: 90,
      joinDate: "Feb 2023",
      category: "dev",
      price: "paid",
      skill: "advanced",
      language: "hindi"
    },
  ];

  const [filteredItems, setFilteredItems] = React.useState(cardData || ["hyy"]);
  const [searchValue, setSearchValue] = React.useState('');
  const [filters, setFilters] = React.useState({ category: '', price: '', skill: '', language: '' });

  const handleSearchChange = () => {
    const query = searchValue.toLowerCase();
    const { category, price, skill, language } = filters;

    const results = cardData.filter((item) => {
      const matchQ = item.name.toLowerCase().includes(query);
      const matchCategory = category ? item.category === category : true;
      const matchPrice = price ? item.price === price : true;
      const matchSkill = skill ? item.skill === skill : true;
      const matchLanguage = language ? item.language === language : true;
      return matchQ && matchCategory && matchPrice && matchSkill && matchLanguage;
    });

    setFilteredItems(results);
  };

  const handleFilterChange = (field, value) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
  };

  React.useEffect(() => {
    handleSearchChange();
  }, [searchValue, filters]);

  return (
    <>
      {loading ? (
        <UILoading />
      ) : (
        <>
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="border p-2 rounded w-full"
            />
            <select onChange={(e) => handleFilterChange('category', e.target.value)} className="border p-2 rounded">
              <option value="">All Categories</option>
              <option value="design">Design</option>
              <option value="dev">Development</option>
            </select>
            <select onChange={(e) => handleFilterChange('price', e.target.value)} className="border p-2 rounded">
              <option value="">All Prices</option>
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </select>
            <select onChange={(e) => handleFilterChange('skill', e.target.value)} className="border p-2 rounded">
              <option value="">All Skill Levels</option>
              <option value="beginner">Beginner</option>
              <option value="advanced">Advanced</option>
            </select>
            <select onChange={(e) => handleFilterChange('language', e.target.value)} className="border p-2 rounded">
              <option value="">All Languages</option>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>

          {filteredItems.length === 0 ? (
  <div className="text-center text-red-500 text-lg font-semibold mt-10">
    No matching courses or PDFs found.
  </div>
) : (
  <UIPaginatedBox
    title="Most Selling Courses"
    items={filteredItems}
    itemsPerPage={6}
    renderItem={(item, index) => (
      <UIUserCard
        key={index}
        name={item.name}
        location={item.location}
        profileImage={item.profileImage}
        courses={item.courses}
        completion={item.completion}
        joinDate={item.joinDate}
      />
    )}
  />
)}

        </>
      )}
    </>
  )
}

export default StudentsPage;
