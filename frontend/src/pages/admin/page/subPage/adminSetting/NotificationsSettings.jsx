import React from 'react'

const NotificationsSettings = () => {
  return (
<>
<div className="max-w-4xl bg-white rounded-lg shadow-sm p-6 sm:p-8 md:p-10">
    <h2 className="text-gray-900 font-semibold text-base mb-4">
      Notifications Settings
    </h2>
    <form className="space-y-6 text-sm text-gray-600 max-w-xl">
      <div>
        <p className="font-semibold text-gray-900 mb-3 text-xs">
          Choose type of notifications you want to receive
        </p>
        <div className="flex items-center mb-3 space-x-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-colors" />
            <div className="absolute left-1 top-1 bg-white border border-gray-300 rounded-full w-4 h-4 transition-transform peer-checked:translate-x-5" />
          </label>
          <span>Withdrawal activity</span>
        </div>
        <div className="flex items-center mb-3 space-x-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-colors" />
            <div className="absolute left-1 top-1 bg-white border border-gray-300 rounded-full w-4 h-4 transition-transform peer-checked:translate-x-5" />
          </label>
          <span>Weekly report</span>
        </div>
        <div className="flex items-center mb-3 space-x-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-colors" />
            <div className="absolute left-1 top-1 bg-white border border-gray-300 rounded-full w-4 h-4 transition-transform peer-checked:translate-x-5" />
          </label>
          <span>Password change</span>
        </div>
        <div className="flex items-center mb-3 space-x-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-colors" />
            <div className="absolute left-1 top-1 bg-white border border-gray-300 rounded-full w-4 h-4 transition-transform peer-checked:translate-x-5" />
          </label>
          <span>Play sound on a message</span>
        </div>
      </div>
      <div>
        <p className="font-semibold text-gray-900 mb-3 text-xs">
          Instructor Related Notification
        </p>
        <div className="flex items-center mb-3 space-x-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-colors" />
            <div className="absolute left-1 top-1 bg-white border border-gray-300 rounded-full w-4 h-4 transition-transform peer-checked:translate-x-5" />
          </label>
          <span>Joining new instructors</span>
        </div>
        <div className="flex items-center mb-3 space-x-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-colors" />
            <div className="absolute left-1 top-1 bg-white border border-gray-300 rounded-full w-4 h-4 transition-transform peer-checked:translate-x-5" />
          </label>
          <span>Notify when the instructorss added new courses</span>
        </div>
        <div className="flex items-center mb-3 space-x-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-colors" />
            <div className="absolute left-1 top-1 bg-white border border-gray-300 rounded-full w-4 h-4 transition-transform peer-checked:translate-x-5" />
          </label>
          <span>Notify when instructors update courses</span>
        </div>
        <div className="flex items-center mb-3 space-x-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-colors" />
            <div className="absolute left-1 top-1 bg-white border border-gray-300 rounded-full w-4 h-4 transition-transform peer-checked:translate-x-5" />
          </label>
          <span>Course weekly report</span>
        </div>
      </div>
      <div>
        <p className="font-semibold text-gray-900 mb-3 text-xs">
          Student Related Notification
        </p>
        <div className="flex items-center mb-3 space-x-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-colors" />
            <div className="absolute left-1 top-1 bg-white border border-gray-300 rounded-full w-4 h-4 transition-transform peer-checked:translate-x-5" />
          </label>
          <span>Joining new student</span>
        </div>
        <div className="flex items-center mb-3 space-x-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-colors" />
            <div className="absolute left-1 top-1 bg-white border border-gray-300 rounded-full w-4 h-4 transition-transform peer-checked:translate-x-5" />
          </label>
          <span>Notify when students purchase new courses</span>
        </div>
        <div className="flex items-center mb-3 space-x-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-colors" />
            <div className="absolute left-1 top-1 bg-white border border-gray-300 rounded-full w-4 h-4 transition-transform peer-checked:translate-x-5" />
          </label>
          <span>Course weekly report</span>
        </div>
      </div>
    </form>
  </div>
</>
  )
}

export default NotificationsSettings
