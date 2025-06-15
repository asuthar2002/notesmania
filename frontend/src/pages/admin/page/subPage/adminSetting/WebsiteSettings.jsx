import React from 'react'

const WebsiteSettings = () => {
  return (
<>
<div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
    <h2 className="font-semibold text-gray-900 text-lg mb-4 border-b border-gray-200 pb-2">
      Website Settings
    </h2>
    <form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 mb-6">
        <div>
          <label
            htmlFor="siteName"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Site Name
          </label>
          <input
            type="text"
            id="siteName"
            name="siteName"
            placeholder="Site Name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <p className="text-xs text-gray-300 mt-1 select-none">
            Enter Website Name. It Display in Website and Email.
          </p>
        </div>
        <div>
          <label
            htmlFor="siteCopyrights"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Site Copyrights
          </label>
          <input
            type="text"
            id="siteCopyrights"
            name="siteCopyrights"
            placeholder="Site Copyrights"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <p className="text-xs text-gray-300 mt-1 select-none">
            Using for Contact and Send Email.
          </p>
        </div>
        <div>
          <label
            htmlFor="siteEmail"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Site Email
          </label>
          <input
            type="email"
            id="siteEmail"
            name="siteEmail"
            placeholder="Site Email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <p className="text-xs text-gray-300 mt-1 select-none">
            For Copyrights Text.
          </p>
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="siteDescription"
          className="block text-gray-700 text-sm font-medium mb-1"
        >
          Site Description
        </label>
        <textarea
          id="siteDescription"
          name="siteDescription"
          rows={3}
          placeholder=""
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          defaultValue={""}
        />
        <p className="text-xs text-gray-300 mt-1 select-none">
          For write brief description of your organization, or a Website.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
        <div>
          <label
            htmlFor="contactPhone"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Contact Phone
          </label>
          <input
            type="text"
            id="contactPhone"
            name="contactPhone"
            placeholder="Contact Phone"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <p className="text-xs text-gray-300 mt-1 select-none">
            Using for Contact and Support.
          </p>
        </div>
        <div>
          <label
            htmlFor="supportEmail"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Support Email
          </label>
          <input
            type="email"
            id="supportEmail"
            name="supportEmail"
            placeholder="Support Email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <p className="text-xs text-gray-300 mt-1 select-none">
            For Support Email.
          </p>
        </div>
      </div>
      <div className="mb-6">
        <p className="text-gray-700 text-sm font-medium mb-2 select-none">
          Allow Registration
        </p>
        <div className="flex items-center space-x-6 text-gray-700 text-sm">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="allowRegistration"
              defaultValue="enable"
              defaultChecked=""
            />
            <span className="ml-2 select-none">Enable</span>
          </label>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              className="form-radio text-gray-400"
              name="allowRegistration"
              defaultValue="disable"
            />
            <span className="ml-2 select-none">Disable</span>
          </label>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              className="form-radio text-gray-400"
              name="allowRegistration"
              defaultValue="onRequest"
            />
            <span className="ml-2 select-none">On Request</span>
          </label>
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="contactAddress"
          className="block text-gray-700 text-sm font-medium mb-1"
        >
          Contact Address
        </label>
        <textarea
          id="contactAddress"
          name="contactAddress"
          rows={4}
          placeholder=""
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          defaultValue={""}
        />
        <p className="text-xs text-gray-300 mt-1 select-none">
          Enter support Address.
        </p>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm px-5 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1"
        >
          Update
        </button>
      </div>
    </form>
  </div>
</>
  )
}

export default WebsiteSettings
