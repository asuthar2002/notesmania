import React from "react";

const UpdatePasswordForm = () => {
  return (
    <div className="w-full border border-gray-200 rounded-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-gray-900 font-semibold text-lg">Update password</h2>
      </div>
      <form className="px-6 py-4 space-y-4">
        {/* Current Password */}
        <div>
          <label
            htmlFor="current-password"
            className="block text-gray-600 text-sm mb-1"
          >
            Current password
          </label>
          <input
            id="current-password"
            type="password"
            placeholder="Enter current password"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        {/* New Password with Eye Icon */}
        <div>
          <label
            htmlFor="new-password"
            className="block text-gray-600 text-sm mb-1"
          >
            Enter new password
          </label>
          <div className="flex rounded-md border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-blue-600 focus-within:border-transparent">
            <input
              id="new-password"
              type="password"
              placeholder="Enter new password"
              className="flex-grow px-3 py-2 text-gray-500 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="button"
              className="px-3 flex items-center justify-center text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <i className="fas fa-eye" />
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirm-password"
            className="block text-gray-600 text-sm mb-1"
          >
            Confirm new password
          </label>
          <input
            id="confirm-password"
            type="password"
            placeholder="Enter new password"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1"
          >
            Change password
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePasswordForm;
