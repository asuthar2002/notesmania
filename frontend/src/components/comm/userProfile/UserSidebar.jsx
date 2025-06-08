import React from "react";

const navItems = [
  { label: "Dashboard", icon: "fas fa-th-large" },
  { label: "My Subscriptions", icon: "far fa-credit-card" },
  { label: "My Courses", icon: "fas fa-shopping-basket" },
  { label: "Course Resume", icon: "far fa-file-alt" },
  { label: "Quiz", icon: "far fa-question-circle" },
  { label: "Wishlist", icon: "fas fa-shopping-cart" },
  { label: "Edit Profile", icon: "far fa-edit" },
  { label: "Settings", icon: "fas fa-cog" },
  { label: "Delete Profile", icon: "far fa-trash-alt" },
];

const UserSidebar = ({setActiveComponent,closeSidebar,activeLabel }) => {
  const handleAddNew = () => {
    // Add your custom logic here
    alert("Add New function triggered!");
  };

  console.log(activeLabel);
  

  const handleClick = (comp) => {
    setActiveComponent(comp);
    console.log("juu");
    
    closeSidebar(); // Auto-close on mobile
  };

  return (
<>
<div className="h-full w-full bg-white">
    <div className="flex md:hidden justify-between items-center mb-4 ">
        <h1 className="text-xl">My Profile</h1>
        <span className="text-2xl cursor-pointer" onClick={() => {closeSidebar()}} >x</span>
    </div>
    <nav
  className="min-h-lg md:min-h-fit  text-black w-64 b-10 md:mt-0 bg-[#1f2937] rounded-lg p-4 space-y-2 text-white font-sans select-none shadow-md"
  aria-label="Sidebar Navigation"
  onClick={(e) => e.stopPropagation()} // prevent overlay click from closing
>
  {navItems.map((item, index) => (
    <a
      key={index}
      className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-md hover:bg-white hover:text-[#1f2937]  cursor-pointer ${
        activeLabel === item.label
          ? 'bg-white text-[#1f2937]'
          : 'text-white'
      }`}
      onClick={() => {
        handleClick(item.label);
        closeSidebar?.(); // Optional: close on mobile after selecting
      }}
    >
      <i className={`${item.icon} text-sm`} />
      <span>{item.label}</span>
    </a>
  ))}

  <a
    href="#"
    className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-red-700 hover:text-red-600"
  >
    <i className="fas fa-sign-out-alt text-red-700 text-sm" />
    <span>Sign Out</span>
  </a>

  <button
    onClick={handleAddNew}
    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2 px-3 rounded-md text-sm"
  >
    + Add New
  </button>
</nav>
</div>
</>

  );
};

export default UserSidebar;
