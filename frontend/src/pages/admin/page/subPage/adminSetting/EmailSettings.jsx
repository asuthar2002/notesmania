import React from 'react'

const EmailSettings = () => {
  return (
<>
<div className="max-w-full bg-white rounded-md shadow border border-gray-200 p-6">
    <h2 className="font-semibold text-gray-900 mb-4 text-sm">Email Settings</h2>
    <form>
      <fieldset className="mb-6">
        <legend className="text-xs font-normal text-gray-600 mb-2">
          Choose Email Drive
        </legend>
        <div className="flex space-x-12 text-xs text-gray-600">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              name="emailDrive"
              className="form-radio text-blue-600"
            />
            <span className="ml-2">Send Mail</span>
          </label>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              name="emailDrive"
              className="form-radio text-blue-600"
              defaultChecked=""
            />
            <span className="ml-2">SMTP</span>
          </label>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              name="emailDrive"
              className="form-radio text-blue-600"
            />
            <span className="ml-2">Mail</span>
          </label>
        </div>
      </fieldset>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 mb-4 text-xs text-gray-700">
        <div>
          <label htmlFor="smtpHost" className="block mb-1">
            SMTP HOST
          </label>
          <input
            id="smtpHost"
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
          />
        </div>
        <div>
          <label htmlFor="smtpPort" className="block mb-1">
            SMTP Port
          </label>
          <input
            id="smtpPort"
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
          />
        </div>
        <div>
          <label htmlFor="smtpSecure" className="block mb-1">
            SMTP Secure
          </label>
          <input
            id="smtpSecure"
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
          />
        </div>
        <div>
          <label htmlFor="smtpUsername" className="block mb-1">
            SMTP Username
          </label>
          <input
            id="smtpUsername"
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
          />
        </div>
        <div>
          <label htmlFor="smtpPassword" className="block mb-1">
            SMTP Password
          </label>
          <input
            id="smtpPassword"
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
          />
        </div>
        <div />
        <div>
          <label htmlFor="emailFromAddress" className="block mb-1">
            Email From Address
          </label>
          <input
            id="emailFromAddress"
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
          />
        </div>
        <div>
          <label htmlFor="emailFromName" className="block mb-1">
            Email From Name
          </label>
          <input
            id="emailFromName"
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
          />
        </div>
        <div />
        <div>
          <label htmlFor="emailSendTo" className="block mb-1">
            Email Send To
          </label>
          <select
            id="emailSendTo"
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-gray-400 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
          >
            <option>Email Send to</option>
          </select>
        </div>
        <div>
          <label htmlFor="emailExternal" className="block mb-1">
            Email External Email
          </label>
          <input
            id="emailExternal"
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-900 text-xs">
          Edit Email Template
        </h3>
        <button
          type="button"
          className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Add Template
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-semibold text-gray-700">
        <div className="flex justify-between items-center bg-gray-100 rounded px-3 py-2">
          <span>Welcome Email</span>
          <button
            type="button"
            className="text-gray-900 bg-gray-700 bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Edit Welcome Email"
          >
            <i className="fas fa-edit text-xs" />
          </button>
        </div>
        <div className="flex justify-between items-center bg-gray-100 rounded px-3 py-2">
          <span>Send Email to User</span>
          <button
            type="button"
            className="text-gray-900 bg-gray-700 bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Edit Send Email to User"
          >
            <i className="fas fa-edit text-xs" />
          </button>
        </div>
        <div className="flex justify-between items-center bg-gray-100 rounded px-3 py-2">
          <span>Password Change</span>
          <button
            type="button"
            className="text-gray-900 bg-gray-700 bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Edit Password Change"
          >
            <i className="fas fa-edit text-xs" />
          </button>
        </div>
        <div className="flex justify-between items-center bg-gray-100 rounded px-3 py-2">
          <span>Unusual Login Email</span>
          <button
            type="button"
            className="text-gray-900 bg-gray-700 bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Edit Unusual Login Email"
          >
            <i className="fas fa-edit text-xs" />
          </button>
        </div>
        <div className="flex justify-between items-center bg-gray-100 rounded px-3 py-2">
          <span>Password Reset Email by Admin</span>
          <button
            type="button"
            className="text-gray-900 bg-gray-700 bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Edit Password Reset Email by Admin"
          >
            <i className="fas fa-edit text-xs" />
          </button>
        </div>
        <div className="flex justify-between items-center bg-gray-100 rounded px-3 py-2">
          <span>KYC Approve Email</span>
          <button
            type="button"
            className="text-gray-900 bg-gray-700 bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Edit KYC Approve Email"
          >
            <i className="fas fa-edit text-xs" />
          </button>
        </div>
        <div className="flex justify-between items-center bg-gray-100 rounded px-3 py-2">
          <span>KYC Reject Email</span>
          <button
            type="button"
            className="text-gray-900 bg-gray-700 bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Edit KYC Reject Email"
          >
            <i className="fas fa-edit text-xs" />
          </button>
        </div>
        <div className="flex justify-between items-center bg-gray-100 rounded px-3 py-2">
          <span>KYC Missing Email</span>
          <button
            type="button"
            className="text-gray-900 bg-gray-700 bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Edit KYC Missing Email"
          >
            <i className="fas fa-edit text-xs" />
          </button>
        </div>
        <div className="flex justify-between items-center bg-gray-100 rounded px-3 py-2">
          <span>KYC Submitted Email</span>
          <button
            type="button"
            className="text-gray-900 bg-gray-700 bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Edit KYC Submitted Email"
          >
            <i className="fas fa-edit text-xs" />
          </button>
        </div>
        <div className="flex justify-between items-center bg-gray-100 rounded px-3 py-2">
          <span>Token Purchase - Cancel by User</span>
          <button
            type="button"
            className="text-gray-900 bg-gray-700 bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Edit Token Purchase - Cancel by User"
          >
            <i className="fas fa-edit text-xs" />
          </button>
        </div>
        <div className="flex justify-between items-center bg-gray-100 rounded px-3 py-2">
          <span>Token Purchase - Order Placed</span>
          <button
            type="button"
            className="text-gray-900 bg-gray-700 bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Edit Token Purchase - Order Placed"
          >
            <i className="fas fa-edit text-xs" />
          </button>
        </div>
        <div className="flex justify-between items-center bg-gray-100 rounded px-3 py-2">
          <span>Token Purchase - Order Successfully</span>
          <button
            type="button"
            className="text-gray-900 bg-gray-700 bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Edit Token Purchase - Order Successfully"
          >
            <i className="fas fa-edit text-xs" />
          </button>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Update
        </button>
      </div>
    </form>
  </div>
</>
  )
}

export default EmailSettings
