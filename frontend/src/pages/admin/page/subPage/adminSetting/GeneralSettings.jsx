import React from 'react'

const GeneralSettings = () => {
  return (
<>
<main
    className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8"
    role="main"
  >
    <h2 className="text-gray-900 font-semibold text-lg mb-4">
      General Settings
    </h2>
    <form className="space-y-6">
      <div>
        <label
          htmlFor="site-url"
          className="block text-gray-700 text-sm font-medium mb-1"
        >
          Main Site URL
        </label>
        <input
          id="site-url"
          type="text"
          placeholder="Site URL"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
        <p className="text-xs text-gray-400 mt-1">Set your main website url.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="currency"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Select Currency
          </label>
          <select
            id="currency"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            <option disabled="" selected="">
              Select Currency
            </option>
          </select>
          <p className="text-xs text-gray-400 mt-1">
            Select currency as per Country.
          </p>
        </div>
        <div>
          <label
            htmlFor="language"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Select Language
          </label>
          <select
            id="language"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            <option disabled="" selected="">
              Select Language
            </option>
          </select>
          <p className="text-xs text-gray-400 mt-1">
            Select language as per Country.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
        <div className="flex items-center space-x-3">
          <label
            htmlFor="maintenance-mode"
            className="text-gray-700 text-sm font-medium cursor-pointer select-none"
          >
            Maintaintance mode
          </label>
          <div className="relative">
            <input
              type="checkbox"
              id="maintenance-mode"
              className="sr-only peer"
            />
            <div className="w-12 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-colors cursor-pointer" />
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform peer-checked:translate-x-6 transition-transform" />
          </div>
          <label
            htmlFor="maintenance-mode"
            className="text-gray-700 text-sm font-normal cursor-pointer select-none"
          >
            Make Site Offline
          </label>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="maintenance-text"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Maintaintance Text
          </label>
          <textarea
            id="maintenance-text"
            rows={3}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            defaultValue={""}
          />
          <p className="text-xs text-gray-400 mt-1">
            Admin login on maintenance mode:
            <a
              href="http://example.xyz/admin/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              http://example.xyz/admin/login
            </a>
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm rounded-md px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1"
        >
          Update
        </button>
      </div>
    </form>
    </main>
</>
  )
}

export default GeneralSettings
