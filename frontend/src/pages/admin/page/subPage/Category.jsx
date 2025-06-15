import React, { useState } from 'react';
import UITable from '../../components/ui/UITable';
import UICard from '../../components/ui/UICard';
import UISearch from '../../components/ui/UISearch';
import UIPopupCard from '../../components/ui/UIPopupCard';

const columns = (onViewClick) => [
  {
    label: 'Category Name',
    key: 'name',
    render: (item) => (
      <div className="flex items-center space-x-3 font-semibold text-gray-900">
        <img className="rounded-full w-8 h-8 object-cover" src={item.image} alt={item.name} />
        <span>{item.name}</span>
      </div>
    ),
  },
  { label: 'Date', key: 'date' },
  {
    label: 'Using',
    key: 'using',
    render: (item) => <div className="text-green-400">{item.using}</div>,
  },
  {
    label: 'Actions',
    key: 'actions',
    render: (item) => (
      <div className="space-x-3">
        <button
          className="text-sky-500 font-semibold bg-sky-100 px-3 py-1 rounded"
          onClick={() => onViewClick(item)}
        >
          View
        </button>
        <button className="text-red-500 font-semibold bg-red-100 px-3 py-1 rounded">Delete</button>
      </div>
    ),
  },
];

const data = [
  {
    name: 'Old Paper',
    date: '2021-11-29',
    using: 300,
    image: 'https://example.com/image.jpg',
  },
  {
    name: 'Exam Notes',
    date: '2022-01-15',
    using: 800,
    image: 'https://example.com/image.jpg',
  },
  {
    name: 'Study Material',
    date: '2024-03-10',
    using: 1200,
    image: 'https://example.com/image.jpg',
  },
];

const Category = () => {
  const [filters, setFilters] = useState({
    name: '',
    dateFrom: '',
    dateTo: '',
    usingFrom: '',
    usingTo: '',
  });

  const [selectedItem, setSelectedItem] = useState(null);

  const handleViewClick = (item) => {
    setSelectedItem(item);
  };

  const handlePopupClose = () => {
    setSelectedItem(null);
  };

  const handlePopupChange = (key, value) => {
    setSelectedItem((prev) => ({ ...prev, [key]: value }));
  };

  const handlePopupSubmit = () => {
    console.log('Submitted data:', selectedItem);
    handlePopupClose();
  };

  const filteredData = data.filter((item) => {
    const matchesName = item.name.toLowerCase().includes(filters.name.toLowerCase());

    const date = new Date(item.date);
    const fromDate = filters.dateFrom ? new Date(filters.dateFrom) : null;
    const toDate = filters.dateTo ? new Date(filters.dateTo) : null;

    const matchesDate =
      (!fromDate || date >= fromDate) &&
      (!toDate || date <= toDate);

    const using = parseInt(item.using, 10);
    const usingFrom = filters.usingFrom ? parseInt(filters.usingFrom, 10) : null;
    const usingTo = filters.usingTo ? parseInt(filters.usingTo, 10) : null;

    const matchesUsing =
      (!usingFrom || using >= usingFrom) &&
      (!usingTo || using <= usingTo);

    return matchesName && matchesDate && matchesUsing;
  });

  return (
    <>
      <UICard title="Category">
        <UISearch
          filters={[
            { key: 'name', label: 'Search by Name' },
            { key: 'dateFrom', label: 'Date From', type: 'date' },
            { key: 'dateTo', label: 'Date To', type: 'date' },
            { key: 'usingFrom', label: 'Using From', type: 'number' },
            { key: 'usingTo', label: 'Using To', type: 'number' },
          ]}
          onChange={setFilters}
        />
        <button onClick={() => handleViewClick(true)} className=' bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'>Add New</button>

        <UITable columns={columns(handleViewClick)} data={filteredData} />
      </UICard>

      {selectedItem && (
        <UIPopupCard
          title="Edit Category"
          onClose={handlePopupClose}
          onSubmit={handlePopupSubmit}
        >
          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                value={selectedItem.name}
                onChange={(e) => handlePopupChange('name', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Date</label>
              <input
                type="date"
                value={selectedItem.date}
                onChange={(e) => handlePopupChange('date', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Using</label>
              <input
                type="number"
                value={selectedItem.using}
                onChange={(e) => handlePopupChange('using', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Image URL</label>
              <input
                type="text"
                value={selectedItem.image}
                onChange={(e) => handlePopupChange('image', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>
        </UIPopupCard>
      )}
    </>
  );
};

export default Category;