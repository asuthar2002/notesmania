import React from "react";
import SocialMediaProfileForm from "./SocialMediaProfileForm";
import UpdatePasswordForm from "./UpdatePasswordForm";

const EditProfileForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  const handleRemovePicture = () => {
    alert("Profile picture removed!");
  };

  const handleChangePicture = () => {
    alert("Change profile picture clicked!");
  };

  const handleAddMoreEducation = () => {
    alert("Add more education clicked!");
  };

  return (
    <main className="max-w-1xl mx-auto ">
      <form
        onSubmit={handleSubmit}
        aria-label="Edit Profile Form"
        className="border border-gray-300 rounded-md p-6 space-y-6"
      >
        <h2 className="text-lg font-semibold text-gray-900">Edit Profile</h2>

        {/* Profile Picture */}
        <section className="flex items-center space-x-4">
          <div className="flex flex-col items-center relative">
            <img
              src="https://storage.googleapis.com/a1aa/image/12541ca6-73ba-4421-9671-39d3ae2e9589.jpg"
              alt="User"
              className="w-16 h-16 rounded-full object-cover"
              width={64}
              height={64}
            />
            <button
              type="button"
              onClick={handleRemovePicture}
              className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
              aria-label="Remove profile picture"
            >
              <i className="fas fa-times" />
            </button>
          </div>
          <button
            type="button"
            onClick={handleChangePicture}
            className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Change
          </button>
        </section>

        {/* Full Name */}
        <section>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Full name
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="First name"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last name"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </section>

        {/* Username & Email */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Username
            </label>
            <div className="flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-500 text-xs">
                Eduport.com
              </span>
              <input
                defaultValue="loristev"
                type="text"
                className="flex-1 block w-full rounded-r-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Email id
            </label>
            <input
              defaultValue="example@gmail.com"
              type="email"
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </section>

        {/* Phone & Location */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Phone number
            </label>
            <input
              defaultValue={1234567890}
              type="tel"
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              defaultValue="California"
              type="text"
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </section>

        {/* About Me */}
        <section>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            About me
          </label>
          <textarea
            rows={3}
            defaultValue="I’ve found a way to get paid for my favorite hobby, and do so while following my dream of traveling the world."
            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-xs placeholder-gray-400 resize-y focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <p className="mt-1 text-xs text-gray-400">
            Brief description for your profile.
          </p>
        </section>

        {/* Education */}
        <section className="space-y-2">
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Education
          </label>
          <input
            type="text"
            defaultValue="Bachelor in Computer Graphics"
            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="text"
            defaultValue="Masters in Computer Graphics"
            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={handleAddMoreEducation}
            className="inline-flex items-center space-x-1 text-xs font-semibold text-gray-700 bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <span className="text-sm font-bold">+</span>
            <span>Add more</span>
          </button>
        </section>

        {/* Save Button */}
        <section className="flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save changes
          </button>
        </section>
      </form>
      <div className="flex w-full gap-2 mt-5">
        <SocialMediaProfileForm/>
        <UpdatePasswordForm/>
      </div>
    </main>
  );
};

export default EditProfileForm;
