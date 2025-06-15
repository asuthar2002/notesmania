import React, { useState, useRef, useEffect } from "react";

const UIUserCard = ({
  name,
  location,
  profileImage,
  courses = 0,
  completion = 0,
  joinDate,
  paymentType = "Payments",
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-sm font-sans relative">
      {/* Header */}
      <div className="flex items-center p-4 space-x-4 border-b border-gray-100">
        <img
          src={profileImage}
          alt={`Profile of ${name}`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1 min-w-0">
          <p className="text-gray-900 font-extrabold text-base truncate">{name}</p>
          <p className="text-gray-500 text-sm flex items-center space-x-1">
            <i className="fas fa-map-marker-alt text-gray-400 text-xs" />
            <span>{location}</span>
          </p>
        </div>

        {/* Menu Button */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open menu"
            className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-300"
          >
            <i className="fas fa-ellipsis-h text-sm" />
          </button>

          {menuOpen && (
            <div className="absolute top-12 right-0 w-36 bg-white rounded-lg shadow-lg border border-gray-100 py-2 text-gray-700 text-sm font-medium z-10">
              <button className="flex items-center w-full px-4 py-2 hover:bg-gray-50 text-gray-600">
                <i className="far fa-edit mr-2 text-base"></i>
                Edit
              </button>
              <button className="flex items-center w-full px-4 py-2 hover:bg-gray-50 text-gray-600">
                <i className="far fa-trash-alt mr-2 text-base"></i>
                Remove
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4 space-y-4 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-lg font-semibold">
            $
          </div>
          <p className="text-gray-700 text-sm">{paymentType}</p>
        </div>

        <div className="flex items-center justify-between space-x-3">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-sm font-semibold">
              <i className="fas fa-book-open" />
            </div>
            <p className="text-gray-700 text-sm">Total Courses</p>
          </div>
          <p className="text-gray-700 font-semibold text-sm">{courses}</p>
        </div>

        <div>
          <p className="text-gray-900 font-extrabold text-sm mb-1">{completion}%</p>
          <div className="w-full h-1 bg-blue-100 rounded-full overflow-hidden">
            <div
              className="h-1 bg-blue-600 rounded-full"
              style={{ width: `${completion}%` }}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 text-gray-600 text-sm font-semibold">
        <div className="flex items-center space-x-2">
          <i className="far fa-calendar-alt text-orange-500 text-base" />
          <p>
            Join at:{" "}
            <span className="text-gray-900 font-extrabold">{joinDate}</span>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            aria-label="Send email"
            className="hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-300"
          >
            <i className="far fa-envelope" />
          </button>
          <button
            aria-label="Block user"
            className="hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-300"
          >
            <i className="fas fa-ban" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UIUserCard;
