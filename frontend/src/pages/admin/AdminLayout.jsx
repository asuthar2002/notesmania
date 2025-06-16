import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import AdminDashboard from "./page/AdminDashboard";
import StudentsPage from "./page/StudentsPage";
import UILoading from "./components/comm/loading/UILoading";
import EditUserProfile from "./page/subPage/UserProfile/EditUserProfile";
import AllCourses from "./page/AllCourses";
import Category from "./page/subPage/Category";
import WebsiteSettings from "./page/subPage/adminSetting/WebsiteSettings";
import GeneralSettings from "./page/subPage/adminSetting/GeneralSettings";
import NotificationsSettings from "./page/subPage/adminSetting/NotificationsSettings";
import AccountSettings from "./page/subPage/adminSetting/AccountSettings";
import EmailSettings from "./page/subPage/adminSetting/EmailSettings";
import FileManager from "./page/subPage/fileManager/FileManager";

function AdminLayout() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    switch (location.pathname) {
      case "/admin":
        setActiveTab("dashboard");
        break;
      case "/admin/students":
        setActiveTab("students");
        break;
      case "/admin/file-manager":
        setActiveTab("file-manager");
        break;
      case "/admin/student-profile":
        setActiveTab("student-profile");
        break;
      case "/admin/all-courses":
        setActiveTab("all-courses");
        break;
      case "/admin/category":
        setActiveTab("category");
        break;
      case "/admin/website-settings":
        setActiveTab("website-settings");
        break;
      case "/admin/general-settings":
        setActiveTab("general-settings");
        break;
      case "/admin/notifications-settings":
        setActiveTab("notifications-settings");
        break;
      case "/admin/account-settings":
        setActiveTab("account-settings");
        break;
      case "/admin/email-settings":
        setActiveTab("email-settings");
        break;
      // Add more routes as needed
      default:
        setActiveTab("dashboard");
    }
  }, [location.pathname]);
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <AdminDashboard />;
      case "students":
        return loading ? <UILoading /> : <StudentsPage />;
      case "student-profile":
        return loading ? <UILoading /> : <EditUserProfile />;
      case "all-courses":
        return loading ? <UILoading /> : <AllCourses/>;
      case "category":
        return loading ? <UILoading /> : <Category/>;
      default:
      case "website-settings":
        return loading ? <UILoading /> : <WebsiteSettings />;
      case "general-settings":
        return loading ? <UILoading /> : <GeneralSettings />;
      case "notifications-settings":
        return loading ? <UILoading /> : <NotificationsSettings />;
      case "account-settings":
        return loading ? <UILoading /> : <AccountSettings />;
      case "email-settings":
        return loading ? <UILoading /> : <EmailSettings />;
      case "file-manager":
        return loading ? <UILoading /> : <FileManager />;

        return <div>Not Found</div>;
    }
  };
  
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sticky Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 h-full fixed top-0 left-0 z-10">
        <AdminSidebar />
      </aside>

      {/* Main Content (scrollable) */}
      <main className="ml-64 flex-1 overflow-y-auto bg-gray-100 p-6">
        {renderContent()}
      </main>
    </div>
  );
}

export default AdminLayout;