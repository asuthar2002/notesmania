import React from 'react';
import UICard from '../../../components/ui/UICard';

const folderIcon = [
    "https://cdn-icons-png.flaticon.com/128/3735/3735057.png",
    "https://cdn-icons-png.flaticon.com/128/1379/1379905.png",
    "https://cdn-icons-png.flaticon.com/128/3767/3767094.png",
    "https://cdn-icons-png.flaticon.com/128/11471/11471391.png",
    "https://cdn-icons-png.flaticon.com/128/12381/12381875.png",
    "https://cdn-icons-png.flaticon.com/128/891/891094.png"
]

const getRandomFolderIcon = () => {
    const randomIndex = Math.floor(Math.random() * folderIcon.length);
    return folderIcon[randomIndex];
  };
  
  // Example usage:
  const icon = getRandomFolderIcon();


const AllFolder = () => {
    return (
   
            <div className="max-w-4xl mx-auto mt-10">
        <header className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6">
          <h2 className="text-gray-900 font-semibold text-lg">All Folders</h2>
          <a
            className="text-gray-500 text-sm flex items-center gap-1 hover:text-gray-700"
            href="#"
          >
            View All
            <i className="fas fa-arrow-right"></i>
          </a>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Folder Card 1 */}
          <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <img
                alt="Yellow folder icon"
                className="w-6 h-6"
                height={24}
                src={getRandomFolderIcon()}
                width={24}
              />
              <i className="fas fa-ellipsis-v text-gray-400 cursor-pointer"></i>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div>
                <h3 className="text-gray-900 font-semibold text-sm leading-5">
                  Images
                </h3>
                <p className="text-gray-400 text-xs mt-1">345 Files</p>
              </div>
              <p className="text-gray-400 text-xs">26.40 GB</p>
            </div>
          </div>
          {/* Folder Card 2 */}
          <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <img
                alt="Yellow folder icon"
                className="w-6 h-6"
                height={24}
                src={getRandomFolderIcon()}

                width={24}
              />
              <i className="fas fa-ellipsis-v text-gray-400 cursor-pointer"></i>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div>
                <h3 className="text-gray-900 font-semibold text-sm leading-5">
                  Documents
                </h3>
                <p className="text-gray-400 text-xs mt-1">130 Files</p>
              </div>
              <p className="text-gray-400 text-xs">26.40 GB</p>
            </div>
          </div>
          {/* Folder Card 3 */}
          <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <img
                alt="Yellow folder icon"
                className="w-6 h-6"
                height={24}
                src={getRandomFolderIcon()}

                width={24}
              />
              <i className="fas fa-ellipsis-v text-gray-400 cursor-pointer"></i>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div>
                <h3 className="text-gray-900 font-semibold text-sm leading-5">
                  Apps
                </h3>
                <p className="text-gray-400 text-xs mt-1">130 Files Files</p>
              </div>
              <p className="text-gray-400 text-xs">26.40 GB</p>
            </div>
          </div>
          {/* Folder Card 4 */}
          <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <img
                alt="Yellow folder icon"
                className="w-6 h-6"
                height={24}
                src={getRandomFolderIcon()}

                width={24}
              />
              <i className="fas fa-ellipsis-v text-gray-400 cursor-pointer"></i>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div>
                <h3 className="text-gray-900 font-semibold text-sm leading-5">
                  Downloads
                </h3>
                <p className="text-gray-400 text-xs mt-1">345 Files</p>
              </div>
              <p className="text-gray-400 text-xs">26.40 GB</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AllFolder;
