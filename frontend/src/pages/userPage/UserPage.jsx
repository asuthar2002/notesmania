import React, { useEffect, useState } from "react";
import UserHeader from "../../components/comm/userProfile/UserHeader";
import UserSidebar from "../../components/comm/userProfile/UserSidebar";
import UserDashboard from "./userSabPage/UserDashboard";
import EditProfileForm from "../../components/comm/userProfile/editProfile/EditProfileForm";
import ComingSoonPage from "../comingSoonPage/ComingSoonPage";
import SettingsForm from "../../components/comm/userProfile/editProfile/SettingsForm";
import DeactivateAccount from "../../components/comm/userProfile/editProfile/DeactivateAccount";
import MyUploads from "../../components/comm/userProfile/MyUploads";
import MySaved from "./userSabPage/MySaved";
import UserUpload from "./userSabPage/UserUpload";
import GeneralForm from "../../components/comm/subComm/GeneralForm";

const UserPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeComponent, setActiveComponent] = useState("Dashboard");



  const renderComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <UserDashboard />;
      case "My Subscriptions":
        return <ComingSoonPage />;
      case "New Upload":
        return <UserUpload />;
      case "My Uploads":
        return <MyUploads />;
      case "My Like/Saved":
        return <MySaved />;
      case "Quiz":
        return <ComingSoonPage />;
      case "Wishlist":
        return <ComingSoonPage />;
      case "Quiz":
        return <ComingSoonPage />;
      case "Settings":
        return <SettingsForm />;
      case "Edit Profile":
        return <EditProfileForm />;
      case "Delete Profile":
        return <DeactivateAccount />;
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

      <div className="flex min-h-screen md:p-10">
        {/* Sidebar */}
        <div
          className={`
      fixed top-0 left-0 h-full bg-white z-40 pr-4
      transform transition-transform duration-500 ease-in-out
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      md:translate-x-0 md:relative md:block
      md:sticky md:top-0 md:h-screen
    `}
        >
          <UserSidebar
            className="h-full"
            setActiveComponent={setActiveComponent}
            closeSidebar={() => setSidebarOpen(false)}
            activeLabel={activeComponent}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto  md:mt-0 ml-0 ">
          {renderComponent()}
        </div>
      </div>
    </>
  );
};

export default UserPage;
