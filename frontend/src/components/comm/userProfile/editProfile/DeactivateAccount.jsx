import React, { useState } from 'react';

const DeactivateAccount = () => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = () => {
    if (confirmDelete) {
      // Perform delete logic (e.g., API call)
      alert('Account deleted!');
    } else {
      alert('Please confirm that you want to delete your account.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto border border-gray-200 rounded-lg">
      <div className="border-b border-gray-200 px-6 py-4">
        <h2 className="text-gray-900 font-extrabold text-2xl leading-tight">
          Deactivate Account
        </h2>
      </div>

      <div className="px-6 py-6">
        <p className="font-semibold text-gray-800 mb-2">Before you go...</p>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
          <li>
            Take a backup of your data{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Here
            </a>
          </li>
          <li>If you delete your account, you will lose all your data.</li>
        </ul>

        <label className="inline-flex items-center text-gray-600 mb-6 cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            checked={confirmDelete}
            onChange={(e) => setConfirmDelete(e.target.checked)}
          />
          <span className="ml-3 text-base">
            Yes, I'd like to delete my account
          </span>
        </label>

        <div className="flex space-x-3 mt-4">
          <button
            type="button"
            className="bg-emerald-200 text-emerald-700 font-semibold px-4 py-2 rounded-md hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onClick={() => alert('Account kept safe!')}
          >
            Keep my account
          </button>
          <button
            type="button"
            className="bg-red-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={handleDelete}
          >
            Delete my account
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeactivateAccount;
