import React from 'react'

function UserHeader() {
  return (
  <>
 <div className="bg-amber-400 w-full h-25  md:h-30"></div>

<div className="max-w-[90%] md:max-w-6xl mx-auto -mt-10 bg-white  border-2 border-slate-200 rounded-2xl ">
  {/* Top bar with profile and stats */}
  <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-6   ">
    {/* Profile Info */}
    <div className="flex items-center space-x-4 w-full md:w-auto">
      <div className="relative w-30 h-20">
        <img
          src="https://storage.googleapis.com/a1aa/image/c086452c-ad60-4cc8-33c6-448830f1a99a.jpg"
          alt="Profile"
          className="rounded-full border-2 border-black w-[80px] h-[80px]  object-cover"
        />
        <div className="absolute bottom-0 md:right-7 right-0 bg-[#00b37e] text-white text-[10px] font-semibold px-2 py-[2px] rounded-full select-none shadow-sm">
          Pro
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-gray-900 text-lg">Lori Stevens</span>
        <div className="flex flex-wrap gap-x-2 text-[11px] text-gray-500 font-medium">
          <span><span className="font-bold text-black">255</span> points</span>
          <span>·</span>
          <span><span className="font-bold text-black">7</span> Completed courses</span>
          <span>·</span>
          <span><span className="font-bold text-black">52</span> Completed lessons</span>
        </div>
      </div>
    </div>

    {/* Button */}
    <div className="mt-4 md:mt-0 w-full md:w-auto">
      <button className="w-full md:w-auto border border-[#0f3557] text-[#0f3557] text-sm font-semibold rounded px-4 py-2 hover:bg-[#0f3557] hover:text-white transition">
        View my courses
      </button>
    </div>
  </div>
</div>

  </>
  )
}

export default UserHeader