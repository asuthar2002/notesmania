import { useState } from "react";
import {
  FaHome,
  FaShoppingBasket,
  FaUserGraduate,
  FaUserTie,
  FaCommentAlt,
  FaFileAlt,
  FaUserCog,
  FaLock,
  FaChevronUp,
  FaChevronDown,
  FaCog,
  FaGlobe,
  FaPowerOff,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SidebarLink = ({ icon, label, active = false, href = "#" }) => (
  <a
    href={href}
    className={`flex items-center gap-2 text-base px-3 py-2 rounded-md ${
      active ? "text-[#1e73be] font-bold" : "text-white font-bold"
    } hover:bg-[#2a2f35] transition-all`}
  >
    {icon}
    {label}
  </a>
);

const SidebarDropdown = ({ icon, label, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-3 py-2 text-white font-bold text-base hover:bg-[#2a2f35] rounded-md transition-all"
      >
        {icon}
        {label}
        {open ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
      </button>
      {open && (
        <ul className="pl-10 py-2 space-y-2">
          {items.map((item, idx) => (
            <li key={idx}>
             
              <Link to={item.href} className="text-white font-bold text-sm block hover:text-[#1e73be]">{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-[#1f2429] text-gray-400 flex flex-col justify-between h-full overflow-x-scroll scrollbar-hide">
      {/* Logo */}
      <div>
        <div className="flex items-center gap-2 mb-8 mt-2 px-4">
          <img
            alt="Eduport logo"
            className="w-30"
            src="https://notesmania.in/static/media/logo-black.8bcd68e31e1a3b445c10.png"
          />
        </div>

        {/* Navigation */}
        <nav className="px-4 space-y-4">
          <Link to="/admin">
          <SidebarLink icon={<FaHome className="text-lg" />} label="Dashboard" active />
          </Link>

          <p className="text-gray-500 text-sm mt-6 select-none">Pages</p>

          <SidebarDropdown
            icon={<FaShoppingBasket className="text-lg" />}
            label="Courses"
            items={[
              { label: "All Courses", href: "/admin/all-courses" },
              { label: "Course Category", href: "/admin/category" },
              { label: "Course Detail", href: "#" },
            ]}
          />

         <Link to="/admin/students">
         <SidebarLink icon={<FaUserGraduate className="text-lg" />} label="Students" />
         </Link>
          <SidebarDropdown
            icon={<FaUserTie className="text-lg" />}
            label="Instructors"
            items={[
              { label: "All Instructors", href: "#" },
              { label: "Add Instructor", href: "#" },
            ]}
          />
          <SidebarLink icon={<FaCommentAlt className="text-lg" />} label="Reviews" />
          <SidebarLink icon={<FaFileAlt className="text-lg" />} label="Earnings" />
          <SidebarDropdown
            icon={<FaUserTie className="text-lg" />}
            label="Instructors"
            items={[
              { label: "All Instructors", href: "#" },
              { label: "Add Instructor", href: "#" },
            ]}
          />
          <SidebarDropdown
            icon={<FaLock className="text-lg" />}
            label="Admin Settings"
            items={[
              { label: "Website Settings", href: "/admin/website-settings" },
              { label: "General Settings", href: "/admin/general-settings" },
              { label: "Notifications Settings", href: "/admin/notifications-settings" },
              { label: "Account Settings", href: "/admin/account-settings" },
              { label: "Email Settings", href: "/admin/email-settings" },
            ]}
          />
        </nav>
      </div>

      {/* Footer Icons */}
      <div className="flex justify-around py-4 border-t border-[#2a2f35]">
        <button aria-label="Settings" className="text-gray-600 hover:text-gray-400">
          <FaCog className="text-xl" />
        </button>
        <button aria-label="Language" className="text-gray-600 hover:text-gray-400">
          <FaGlobe className="text-xl" />
        </button>
        <button aria-label="Logout" className="text-gray-600 hover:text-gray-400">
          <FaPowerOff className="text-xl" />
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
