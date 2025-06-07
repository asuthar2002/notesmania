import React from 'react'

const HeroPage = () => {
  return (
<>
<section
    className="relative mt-5 clip-polygon rounded-xl overflow-hidden "
    style={{ backgroundColor: "#1f2937" }}
  >
<img
  alt="Woman sitting on floor using laptop in modern room with wicker basket and table with books and vase"
  className="w-full h-[50vh] md:h-[70vh] object-cover brightness-50"
  loading="lazy"
  src="https://storage.googleapis.com/a1aa/image/cacfc71c-4b4a-4eee-f0e1-4e6309446637.jpg"
/>

    <div
      className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32"
      style={{ maxWidth: 1920 }}
    >
<div className="flex flex-col items-center justify-center min-h-screen px-4 md:flex md:flex-col  md:items-start md:justify-center ">
        <span
          className="inline-flex items-center bg-white rounded-full px-3 py-1 mb-4 text-sm font-semibold text-gray-800"
          style={{ maxWidth: "fit-content" }}
        >
          <span className="bg-[#00b37e] text-white rounded-full px-2 py-0.5 mr-2 font-semibold text-xs leading-none">
            New
          </span>
          One to one video call using web browser
        </span>
        <h1 className="text-white font-extrabold leading-tight tracking-tight mb-3 text-4xl sm:text-5xl md:text-6xl">
          Start learning from
          <br />
          <span className="text-yellow-400">best institutions</span>
        </h1>
        <p className="text-white text-sm sm:text-base font-normal mb-8 max-w-md">
          Demesne far-hearted suppose venture excited see had has. Dependent on
          so extremely delivered by. Yet no jokes worse her why.
        </p>
        <div className="flex items-center space-x-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base px-5 py-3 rounded-md transition">
            Get Started
          </button>
          <div className="flex items-center space-x-3 cursor-pointer select-none">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
              <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </div>
            </div>
            <span className="text-white font-semibold text-sm sm:text-base">
              Watch video
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-orange-500"></div>
    <div className="absolute bottom-6 right-16 w-6 h-6 rounded-full bg-blue-700"></div>
  </section>
</>
  )
}

export default HeroPage
