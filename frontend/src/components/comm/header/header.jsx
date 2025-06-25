import React, { useState } from "react";
import MainBtn from "../mainBtn/MainBtn";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const loginIcon = `<i class="fa-solid fa-right-to-bracket"></i>`;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <>
      <header className="flex items-center md:px-10 justify-between px-6 py-4 max-w-[1440px] mx-auto">
        {/* Left: Logo */}
        <a className="flex items-center gap-2" href="#">
          <img
            width={100}
            src="https://notesmania.in/static/media/logo-black.8bcd68e31e1a3b445c10.png"
            alt=""
            srcset=""
          />
        </a>
        {/* Center: Navigation */}
        <nav className=" hidden  md:flex items-center gap-6 text-base font-semibold">
          <div className="relative group">
            <button
              aria-expanded="false"
              aria-haspopup="true"
              className=" flex items-center gap-1 focus:outline-none"
            >
              Demos
              <i className="fas fa-caret-down"></i>
            </button>
            <ul
              aria-label="Demos submenu"
              className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-20"
              role="menu"
            >
              <li>
                <a
                  className="block px-4 py-2 text-gray-600 hover:text-gray-900"
                  href="#"
                >
                  Home Default
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-gray-600 hover:text-gray-900"
                  href="#"
                >
                  Home Education
                </a>
              </li>
            </ul>
          </div>
          <div className="relative group">
            <button
              aria-expanded="false"
              aria-haspopup="true"
              className="flex items-center gap-1 focus:outline-none"
            >
              Pages
              <i className="fas fa-caret-down"></i>
            </button>
            <ul
              aria-label="Pages submenu"
              className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-20"
              role="menu"
            >
              <li>
                <a
                  className="block px-4 py-2 text-gray-600 hover:text-gray-900"
                  href="#"
                >
                  Home Default
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-gray-600 hover:text-gray-900"
                  href="#"
                >
                  Home Education
                </a>
              </li>
            </ul>
          </div>
          <div className="relative group">
            <button
              aria-expanded="false"
              aria-haspopup="true"
              className="text-gray-600 flex items-center gap-1 focus:outline-none"
            >
              Accounts
              <i className="fas fa-caret-down text-gray-600"></i>
            </button>
            <ul
              aria-label="Accounts submenu"
              className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-20"
              role="menu"
            >
              <li>
                <a
                  className="block px-4 py-2 text-gray-600 hover:text-gray-900"
                  href="#"
                >
                  Home Default
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-gray-600 hover:text-gray-900"
                  href="#"
                >
                  Home Education
                </a>
              </li>
            </ul>
          </div>
          <div className="relative group">
            <Link to={'/user'}>users</Link>
          </div>
          <button
            aria-label="More options"
            className="text-gray-600 text-2xl leading-none px-2 py-1 focus:outline-none"
          >
            {/* <i className="fas fa-ellipsis-h"></i> */}
          </button>
        </nav>
        {/* Right: Search and Profile */}
        <div className="flex items-center ">
          <div className="hidden md:block mr-3">
            <form
              aria-label="Site search"
              className="relative"
              onsubmit="event.preventDefault()"
              role="search"
            >
              <input
                aria-label="Search"
                className="w-48 sm:w-64 md:w-80 rounded-lg border border-gray-300 py-2 pl-4 pr-10 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0047cc] focus:border-transparent shadow-sm"
                placeholder="Search"
                type="search"
              />
              <button
                aria-label="Submit search"
                className="absolute right-5 inset-y-0 flex items-center  text-gray-400 hover:text-gray-600 focus:outline-none"
                type="submit"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          {isLoggedIn ? (
            <div className="relative group">
              <button
                aria-expanded="false"
                aria-haspopup="true"
                aria-label="User menu"
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent focus:outline-none focus:border-[#0047cc]"
              >
                <img
                  alt="Profile picture of a woman wearing a pink knit hat and blue shirt"
                  className="w-full h-full object-cover"
                  height={40}
                  src="https://storage.googleapis.com/a1aa/image/e590a43e-fdaf-4652-bbc8-4d68f5e9d774.jpg"
                  width={40}
                />
              </button>
              <div
                aria-label="User menu dropdown"
                className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-30"
                role="menu"
              >
                <div className="p-4 border-b border-gray-200 flex items-center gap-4">
                  <img
                    alt="Profile picture of a woman wearing a pink knit hat and blue shirt"
                    className="w-12 h-12 rounded-full object-cover"
                    height={48}
                    src="https://storage.googleapis.com/a1aa/image/e590a43e-fdaf-4652-bbc8-4d68f5e9d774.jpg"
                    width={48}
                  />
                  <div>
                    <p className="font-semibold text-gray-900 leading-tight">
                      Lori Ferguson
                    </p>
                    <p className="text-gray-500 text-sm leading-tight">
                      example@gmail.com
                    </p>
                  </div>
                </div>
                <ul className="py-3 text-gray-600 text-sm space-y-3 px-6">
                  <li className="flex items-center gap-3 cursor-pointer hover:text-gray-900">
                    <i className="far fa-user text-lg"></i>
                    <span>Edit Profile</span>
                  </li>
                  <li className="flex items-center gap-3 cursor-pointer hover:text-gray-900">
                    <i className="fas fa-cog text-lg"></i>
                    <span>Account Settings</span>
                  </li>
                  <li className="flex items-center gap-3 cursor-pointer hover:text-gray-900">
                    <i className="fas fa-info-circle text-lg"></i>
                    <span>Help</span>
                  </li>
                  <li className="flex items-center gap-3 cursor-pointer hover:text-gray-900">
                    <i className="fas fa-power-off text-lg"></i>
                    <span>Sign Out</span>
                  </li>
                </ul>
                <div className="border-t border-gray-200 p-4 flex items-center justify-between gap-4">
                  <button
                    aria-pressed="true"
                    className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-gray-100 py-2 text-gray-700 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0047cc]"
                  >
                    <i className="fas fa-sun"></i>
                    Light
                  </button>
                  <button
                    aria-pressed="false"
                    className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-300 py-2 text-gray-700 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0047cc]"
                  >
                    <i className="fas fa-moon"></i>
                    Dark
                  </button> 
                  <button
                    aria-pressed="false"
                    className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-300 py-2 text-gray-700 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0047cc]"
                  >
                    <i className="fas fa-adjust"></i>
                    Auto
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <MainBtn
                text="Login"
                icon={loginIcon}
                bgColor="#1e40af"
                textColor="#fff"
                onClick={() => navigate("/login")}
              />
            </>
          )}

          <div className="md:hidden ml-3">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={33} /> : <Menu size={33} />}
            </button>
          </div>

          <div />
        </div>
      </header>

      {isOpen && (
        <>
             <div className="fixed inset-0 top-16 bg-white z-50 px-5 py-4 space-y-2 md:hidden">
            <a
              href="/#features"
              className="block text-gray-700 hover:text-[#fd4a18] text-2xl font-medium"
            >
              Features
            </a>
            <a
              href="/#solutions"
              className="block text-gray-700 hover:text-[#fd4a18]  text-2xl font-medium"
            >
              Solutions
            </a>
            <a
              href="/#pricing"
              className="block text-gray-700 hover:text-[#fd4a18] text-2xl font-medium"
            >
              Pricing
            </a>
            <a
              href="/about"
              className="block text-gray-700 hover:text-[#fd4a18] text-2xl font-medium"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="block text-gray-700 hover:text-[#fd4a18] text-2xl font-medium"
            >
              Contact
            </a>

            <div className="pt-4 border-t border-gray-200">
              <div className=" md:block mr-3">
                <form
                  aria-label="Site search"
                  className="relative"
                  onsubmit="event.preventDefault()"
                  role="search"
                >
                  <input
                    aria-label="Search"
                    className="w-full sm:w-full md:w-full rounded-lg border border-gray-300 py-2 pl-4 pr-10 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0047cc] focus:border-transparent shadow-sm"
                    placeholder="Search"
                    type="search"
                  />
                  <button
                    aria-label="Submit search"
                    className="absolute right-5 inset-y-0 flex items-center  text-gray-400 hover:text-gray-600 focus:outline-none"
                    type="submit"
                  >
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="pt-4 flex gap-5 border-t border-gray-200">
            <MainBtn
                text="Login"
                icon={loginIcon}
                bgColor="#1e40af"
                textColor="#fff"
                onClick={() => alert("Login 2")}
              />
            <MainBtn
                text="Sign Up"
                icon={loginIcon}
                bgColor="#1e40af"
                textColor="#fff"
                onClick={() => alert("Login 3")}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
