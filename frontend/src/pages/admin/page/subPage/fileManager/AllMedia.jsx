import React from 'react';
import UICard from '../../../components/ui/UICard';

const AllMedia = () => {
    return (

        <div className="max-w-7xl mx-auto">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <h1 className="text-lg font-semibold text-gray-900">All Media</h1>
          <div className="flex gap-4 w-full sm:w-auto">
            <label className="relative flex-1" htmlFor="search">
              <input
                className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-4 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                id="search"
                placeholder="Search..."
                type="search"
              />
              <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                <i className="fas fa-search"></i>
              </span>
            </label>
            <button
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-2"
              type="button"
            >
              <i className="fas fa-plus"></i>
              Upload File
            </button>
          </div>
        </header>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image */}
          <div className="flex items-center justify-between border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-green-50 text-green-600">
              <img
                alt="Green folder icon representing Image files"
                className="w-6 h-6"
                height={24}
                src="https://cdn-icons-png.flaticon.com/128/1375/1375106.png"
                width={24}
              />
            </div>
            <div className="flex flex-col flex-1 ml-6">
              <span className="font-semibold text-gray-900 text-base">Image</span>
              <span className="text-gray-500 text-sm mt-1">17% Used</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-gray-500 text-sm">245 files</span>
              <span className="text-gray-900 font-semibold text-base mt-1">
                26.40 GB
              </span>
            </div>
          </div>
          {/* Videos */}
          <div className="flex items-center justify-between border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-pink-50 text-pink-500">
              <img
                alt="Pink play icon representing Video files"
                className="w-6 h-6"
                height={24}
                src="https://cdn-icons-png.flaticon.com/128/1179/1179069.png"
                width={24}
              />
            </div>
            <div className="flex flex-col flex-1 ml-6">
              <span className="font-semibold text-gray-900 text-base">Videos</span>
              <span className="text-gray-500 text-sm mt-1">22% Used</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-gray-500 text-sm">245 files</span>
              <span className="text-gray-900 font-semibold text-base mt-1">
                26.40 GB
              </span>
            </div>
          </div>
          {/* Pdf */}
          <div className="flex items-center justify-between border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-yellow-50 text-yellow-600">
              <img
                alt="Yellow document icon representing Document files"
                className="w-6 h-6"
                height={24}
                src="https://cdn-icons-png.flaticon.com/128/4726/4726010.png"
                width={24}
              />
            </div>
            <div className="flex flex-col flex-1 ml-6">
              <span className="font-semibold text-gray-900 text-base">
                Pdf
              </span>
              <span className="text-gray-500 text-sm mt-1">10% Used</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-gray-500 text-sm">78 files</span>
              <span className="text-gray-900 font-semibold text-base mt-1">
                5.40 GB
              </span>
            </div>
          </div>
        </section>
      </div>
        
    );
}

export default AllMedia;
