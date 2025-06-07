import React from 'react'

const SingleVideoSection = () => {
  return (
<>
<div className="relative overflow-hidden max-w-full flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:px-32 h-auto lg:h-[400px] gap-6 py-12 lg:py-0">

  {/* Orange circle top left */}
  <div className="absolute top-10 left-8 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-[#ff6f0f]"></div>

  {/* Yellow circle bottom right */}
  <div className="absolute bottom-8 right-8 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-[#f4bf2e]"></div>

  {/* Blue circle bottom center */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-[#1e5dbf]"></div>

  {/* Yellow wavy line */}
  <svg
    aria-hidden="true"
    className="absolute hidden sm:block"
    style={{ top: 180, left: 0, width: 600, height: 140 }}
    viewBox="0 0 600 140"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 140C100 40 200 40 300 60C400 80 500 140 600 140" fill="none" stroke="#f4bf2e" strokeWidth="4" />
  </svg>

  {/* Blue wavy line */}
  <svg
    aria-hidden="true"
    className="absolute hidden sm:block"
    style={{ top: 0, right: 0, width: 600, height: 140 }}
    viewBox="0 0 600 140"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M600 0C500 100 400 100 300 80C200 60 100 0 0 0" fill="none" stroke="#1e5dbf" strokeWidth="4" />
  </svg>

  {/* Text Section */}
  <div className="max-w-full lg:max-w-lg text-center lg:text-left z-10">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1f2226] leading-tight">
      Study whenever you want, from any place in the world.
    </h1>
  </div>

  {/* Image with Play Button */}
  <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl rounded-md shadow-md z-10">
    <img
      alt="Young woman wearing blue headphones and orange shirt studying"
      className="rounded-md object-cover w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[360px]"
      src="https://storage.googleapis.com/a1aa/image/acc6bf1d-61cf-4aea-fb72-fa2e5d2020c2.jpg"
    />
    <button
      aria-label="Play video"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center hover:bg-opacity-90 transition"
    >
      <svg
        aria-hidden="true"
        className="w-6 h-6 sm:w-8 sm:h-8 text-[#e11d48]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>
  </div>
</div>

</>
  )
}

export default SingleVideoSection
