import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md w-full">
        <h1 className="text-[96px] font-extrabold text-[#d32f3f] leading-none">
          404
        </h1>
        <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
          Oh no, something went wrong!
        </h2>
        <p className="text-gray-500 mt-2 mb-6">
          Either something went wrong or this page doesn't exist anymore.
        </p>
        <button
          className="bg-[#0b66c2] text-white font-semibold text-lg px-6 py-3 rounded-md hover:bg-[#0959a6] transition-colors"
          type="button"
          onClick={() => navigate('/')}
        >
          Take me to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
