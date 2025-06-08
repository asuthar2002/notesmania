import React, { useEffect, useState } from 'react';
import UserHeader from '../../components/comm/userProfile/UserHeader';
import UserSidebar from '../../components/comm/userProfile/UserSidebar';
import UserDashboard from './userSabPage/UserDashboard';
import EditProfileForm from '../../components/comm/userProfile/editProfile/EditProfileForm';

const UserPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeComponent, setActiveComponent] = useState('dashboard');

  useEffect(() => {
    console.log(activeComponent);
  }, [activeComponent]); // Fix: add dependency

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <UserDashboard />;
        default:
        case 'Quiz':
          return <h1>ddd</h1>;
        case 'Edit Profile':
          return <EditProfileForm/>;
        return <UserDashboard />;
    }
  };

  return (
    <>
      <UserHeader toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

      {/* Overlay: Only for mobile view */}
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
        />
      )}

      <div className="flex flex-col md:p-10">
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div
            className={`
              fixed top-0 left-0 h-full bg-white z-40 pr-4
              transform transition-transform duration-500 ease-in-out
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
              md:translate-x-0 md:relative md:block
            `}
          >
            <UserSidebar
              setActiveComponent={setActiveComponent}
              closeSidebar={() => setSidebarOpen(false)}
              activeLabel={activeComponent}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-auto">
            {renderComponent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
