import React from 'react';

const Footer = () => {
    return (
<>
<footer className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 pb-6 ">
    <div className="flex flex-wrap justify-between border-b border-gray-200 pb-10">
      <div className="w-full sm:w-auto max-w-xs mb-10 sm:mb-0">
        <a className="inline-flex items-center mb-4" href="#">
          <img
            alt="Eduport logo icon with letter E in black and orange"
            className="w-50 h-50"
            height={80}
            src="https://notesmania.in/static/media/logo-black.8bcd68e31e1a3b445c10.png"
            
          />
        </a>
        <p className="text-gray-600 text-sm leading-relaxed max-w-[280px]">
          Eduport education theme, built specifically for the education centers
          which is dedicated to teaching and involve learners.
        </p>
        <div className="flex space-x-3 mt-6">
          <a
            aria-label="Facebook"
            className="w-10 h-10 flex items-center justify-center rounded-md bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.05)] text-blue-600 hover:bg-blue-50"
            href="#"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            aria-label="Instagram"
            className="w-10 h-10 flex items-center justify-center rounded-md bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.05)] text-pink-600 hover:bg-pink-50"
            href="#"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            aria-label="Twitter"
            className="w-10 h-10 flex items-center justify-center rounded-md bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.05)] text-sky-500 hover:bg-sky-50"
            href="#"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            aria-label="LinkedIn"
            className="w-10 h-10 flex items-center justify-center rounded-md bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.05)] text-blue-700 hover:bg-blue-100"
            href="#"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="w-1/2 sm:w-auto mb-10 sm:mb-0">
        <h3 className="text-gray-900 font-extrabold mb-5 text-lg">Company</h3>
        <ul className="space-y-3 text-gray-600 text-sm">
          <li>
            <a className="hover:underline" href="#">
              About us
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#">
              Contact us
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#">
              News and Blogs
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#">
              Library
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#">
              Career
            </a>
          </li>
        </ul>
      </div>
      <div className="w-1/2 sm:w-auto mb-10 sm:mb-0">
        <h3 className="text-gray-900 font-extrabold mb-5 text-lg">Community</h3>
        <ul className="space-y-3 text-gray-600 text-sm">
          <li>
            <a className="hover:underline" href="#">
              Documentation
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#">
              Faq
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#">
              Forum
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#">
              Sitemap
            </a>
          </li>
        </ul>
      </div>
      <div className="w-1/2 sm:w-auto mb-10 sm:mb-0">
        <h3 className="text-gray-900 font-extrabold mb-5 text-lg">Teaching</h3>
        <ul className="space-y-3 text-gray-600 text-sm">
          <li>
            <a className="hover:underline" href="#">
              Become a teacher
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#">
              How to guide
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#">
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full sm:w-auto max-w-xs">
        <h3 className="text-gray-900 font-extrabold mb-5 text-lg">Contact</h3>
        <p className="text-gray-600 text-sm mb-1">
          Toll free:
          <span className="font-semibold text-gray-900">+1234 568 963</span>
        </p>
        <p className="text-gray-500 text-xs mb-4">(9:AM to 8:PM IST)</p>
        <p className="text-gray-600 text-sm mb-4">
          Email:
          <span className="font-semibold text-gray-900">example@gmail.com</span>
        </p>
        <div className="flex space-x-3">
          <a
            aria-label="Google Play Store"
            className="inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 text-xs font-semibold"
            href="#"
          >
            <img
              alt="Google Play icon"
              className="mr-2"
              height={24}
              src="https://cdn-icons-png.flaticon.com/128/300/300218.png"
              width={24}
            />
            <div className="text-left leading-tight">
              <div className="text-[8px] font-normal">GET IT ON</div>
              <div className="text-sm font-semibold -mt-0.5">Google Play</div>
            </div>
          </a>
          <a
            aria-label="Apple App Store"
            className="inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 text-xs font-semibold"
            href="#"
          >
            <img
              alt="Apple icon"
              className="mr-2"
              height={24}
              src="https://cdn-icons-png.flaticon.com/128/831/831276.png"
              width={24}
            />
            <div className="text-left leading-tight">
              <div className="text-[8px] font-normal">Download on the</div>
              <div className="text-sm font-semibold -mt-0.5">App Store</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap items-center justify-between pt-6 text-gray-600 text-sm">
      <p className="mb-3 sm:mb-0">
        Copyrights ©2025 NotesMania. Build by Manmohan Suthar
      </p>
      <div className="flex items-center space-x-6">
        <button
          className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 focus:outline-none"
          type="button"
        >
          <i className="fas fa-globe"></i>
          <span>Language</span>
          <i className="fas fa-chevron-up text-xs"></i>
        </button>
        <a className="hover:underline" href="#">
          Terms of use
        </a>
        <a className="hover:underline" href="#">
          Privacy policy
        </a>
        <button
          aria-label="Scroll to top"
          className="ml-4 p-3 rounded-md bg-sky-100 text-sky-700 hover:bg-sky-200 focus:outline-none"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  </footer>
</>
    );
}

export default Footer;
