import React from 'react';

const ComingSoonPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle email submission here (e.g., API call)
  };

  return (
    <main className="flex flex-col md:flex-row items-center justify-between max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-24 min-h-screen">
      <section className="w-full md:w-1/2 max-w-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          We are building
          <br />
          something awesome!
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          Hey you! Eduport is coming. We are doing our best to launch our website
          and we will be back soon.
        </p>

        {/* Progress Bar */}
        <div className="mb-4">
          <label className="block text-gray-800 font-semibold mb-1" htmlFor="progress">
            Launch progress
          </label>
          <div className="relative w-full h-4 rounded-full bg-gray-200 overflow-hidden">
            <div
              className="absolute top-0 left-0 h-4 rounded-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"
              style={{
                width: '85%',
                backgroundImage:
                  'repeating-linear-gradient(45deg, #1f2937, #1f2937 4px, #374151 4px, #374151 8px)',
              }}
            ></div>
            <div className="absolute -top-6 right-[15%] bg-gray-900 text-white text-xs font-semibold px-2 rounded">
              85%
            </div>
          </div>
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <div className="flex w-full sm:w-auto">
            <input
              className="flex-grow border border-gray-300 rounded-l-md px-4 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              id="email"
              placeholder="Enter your email"
              required
              type="email"
            />
            <button
              className="bg-gray-900 text-white font-bold px-6 py-3 rounded-r-md hover:bg-gray-800 transition-colors"
              type="submit"
            >
              Notify Me!
            </button>
          </div>
        </form>
      </section>

      {/* Right Side Illustration */}
      <section className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
        <img
          alt="Isometric illustration showing people working with cloud servers, laptops, and data charts"
          className="max-w-full h-auto"
          height={400}
          width={600}
          src="https://img.freepik.com/free-vector/solving-problem-concept-difficult-work-teamwork-assemble-effective-business-solution-strategy_513217-185.jpg?semt=ais_hybrid&w=740"
        />
      </section>
    </main>
  );
};

export default ComingSoonPage;
