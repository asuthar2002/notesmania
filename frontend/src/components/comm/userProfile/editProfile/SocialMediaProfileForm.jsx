import React from "react";

const SocialMediaProfileForm = () => {
  return (
    <main className=" w-full border border-gray-300 rounded-lg">
      <header className="px-6 py-4  border-b border-gray-300">
        <h1 className="text-gray-900 font-semibold text-lg">
          Social media profile
        </h1>
      </header>
      <form
        className="px-6 py-4 space-y-5"
        action="#"
        method="POST"
        autoComplete="off"
      >
        {/* Facebook */}
        <label
          className="block text-gray-600 text-sm font-normal"
          htmlFor="facebook"
        >
          <i className="fab fa-facebook-f text-blue-700 mr-2" />
          Enter facebook username
        </label>
        <input
          id="facebook"
          name="facebook"
          type="text"
          defaultValue="loristev"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />

        {/* Twitter */}
        <label
          className="block text-gray-600 text-sm font-normal"
          htmlFor="twitter"
        >
          <i className="fab fa-twitter text-sky-400 mr-2" />
          Enter twitter username
        </label>
        <input
          id="twitter"
          name="twitter"
          type="text"
          defaultValue="loristev"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />

        {/* Instagram */}
        <label
          className="block text-gray-600 text-sm font-normal"
          htmlFor="instagram"
        >
          <i className="fab fa-instagram text-pink-600 mr-2" />
          Enter instagram username
        </label>
        <input
          id="instagram"
          name="instagram"
          type="text"
          defaultValue="loristev"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />

        {/* YouTube */}
        <label
          className="block text-gray-600 text-sm font-normal"
          htmlFor="youtube"
        >
          <i className="fab fa-youtube text-red-600 mr-2" />
          Add your youtube profile URL
        </label>
        <input
          id="youtube"
          name="youtube"
          type="text"
          defaultValue="https://www.youtube.com/in/Eduport-05620abc"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold text-sm px-5 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1"
          >
            Save changes
          </button>
        </div>
      </form>
    </main>
  );
};

export default SocialMediaProfileForm;
