import React from 'react'

const AccountSettings = () => {
  return (
<>
<div className="max-w-5xl mx-auto space-y-6">
    <section className="bg-blue-50 rounded-lg p-4 sm:p-6">
      <h2 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
        Activity Logs
      </h2>
      <p className="text-xs sm:text-sm text-gray-500 max-w-xl leading-tight">
        You can save your all activity logs including unusual activity detected.
      </p>
      <div className="flex justify-end mt-2">
        <label
          htmlFor="toggle1"
          className="relative inline-flex items-center cursor-pointer"
        >
          <input
            type="checkbox"
            id="toggle1"
            className="sr-only peer"
            defaultChecked=""
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-300 transition-colors" />
          <div className="absolute left-0.5 top-0.5 bg-white border border-gray-300 rounded-full w-5 h-5 transition-transform peer-checked:translate-x-5" />
        </label>
      </div>
    </section>
    <section className="bg-blue-50 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between">
      <div>
        <h2 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
          Change Password
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 max-w-xl leading-tight">
          Set a unique password to protect your account.
        </p>
      </div>
      <div className="mt-3 sm:mt-0 text-right">
        <button
          className="bg-blue-700 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded hover:bg-blue-800 transition"
          type="button"
        >
          Change Password
        </button>
        <p className="text-xs text-gray-500 mt-1">Last change 10 Aug 2020</p>
      </div>
    </section>
    <section className="bg-blue-50 rounded-lg p-4 sm:p-6">
      <h2 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
        2 Step Verification
      </h2>
      <p className="text-xs sm:text-sm text-gray-500 max-w-xl leading-tight">
        Secure your account with 2 Step security. When it is activated you will
        need to enter not only your password, but also a special code using app.
        You can receive this code by in mobile app.
      </p>
      <div className="flex justify-end mt-2">
        <label
          htmlFor="toggle2"
          className="relative inline-flex items-center cursor-pointer"
        >
          <input
            type="checkbox"
            id="toggle2"
            className="sr-only peer"
            defaultChecked=""
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-300 transition-colors" />
          <div className="absolute left-0.5 top-0.5 bg-white border border-gray-300 rounded-full w-5 h-5 transition-transform peer-checked:translate-x-5" />
        </label>
      </div>
    </section>
    <section className="border border-gray-200 rounded-md">
      <h3 className="font-semibold text-gray-900 text-sm sm:text-base p-3 border-b border-gray-200">
        Active Logs
      </h3>
      <table className="w-full text-xs sm:text-sm text-left text-gray-600">
        <thead className="bg-gray-900 text-white text-xs sm:text-sm">
          <tr>
            <th scope="col" className="py-2 px-3 font-semibold">
              Browser
            </th>
            <th scope="col" className="py-2 px-3 font-semibold">
              IP
            </th>
            <th scope="col" className="py-2 px-3 font-semibold">
              Time
            </th>
            <th scope="col" className="py-2 px-3 font-semibold">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-2 px-3">Chrome On Window</td>
            <td className="py-2 px-3">173.238.198.108</td>
            <td className="py-2 px-3">12 Nov 2021</td>
            <td className="py-2 px-3">
              <button
                className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded"
                type="button"
              >
                Sign out
              </button>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 px-3">Mozilla On Window</td>
            <td className="py-2 px-3">107.222.146.90</td>
            <td className="py-2 px-3">08 Nov 2021</td>
            <td className="py-2 px-3">
              <button
                className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded"
                type="button"
              >
                Sign out
              </button>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 px-3">Chrome On iMac</td>
            <td className="py-2 px-3">231.213.125.55</td>
            <td className="py-2 px-3">06 Nov 2021</td>
            <td className="py-2 px-3">
              <button
                className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded"
                type="button"
              >
                Sign out
              </button>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-3">Mozilla On Window</td>
            <td className="py-2 px-3">37.242.105.138</td>
            <td className="py-2 px-3">02 Nov 2021</td>
            <td className="py-2 px-3">
              <button
                className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded"
                type="button"
              >
                Sign out
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</>
  )
}

export default AccountSettings
