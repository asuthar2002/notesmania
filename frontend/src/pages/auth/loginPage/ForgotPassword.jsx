import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login with:", { email, password, rememberMe });
    // Add form submission logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="bg-[#E3EFF9] flex flex-col justify-between md:w-1/2 p-6 sm:p-10 md:p-16">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-2 leading-tight">
            Welcome to our largest community
          </h1>
          <p className="text-[#475569] text-sm sm:text-base mb-10">
            Let's learn something new today!
          </p>
          <img
            src="https://storage.googleapis.com/a1aa/image/fb492712-436c-47dc-390a-e538611060a4.jpg"
            alt="Learning illustration"
            className="w-full max-w-[600px] h-auto"
            width={600}
            height={350}
          />
        </div>
        <div className="flex items-center space-x-2 mt-8">
          {["ca18cf7f-8c0a-4db0-6649-5c4d75b66ac6", "3cd32280-a021-4b37-848e-69927dcd8682", "dc2fdc2c-785d-496a-7a6b-30bcd1a358de", "6b4dd5c7-25f4-4e8c-9ebd-e1fdf9b3fc50"].map((id, idx) => (
            <img
              key={idx}
              src={`https://storage.googleapis.com/a1aa/image/${id}.jpg`}
              alt="Student avatar"
              className="w-8 h-8 rounded-full border border-white"
            />
          ))}
          <span className="text-[#475569] text-sm ml-4">
            4k+ Students joined us, now it's your turn.
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center md:w-1/2 p-6 sm:p-10 md:p-16">
        <div className="max-w-md w-full mx-auto">
          <div className="text-4xl mb-2">🤔</div>
          <h2 className="text-3xl font-extrabold text-[#1E293B] mb-2 leading-tight">
          Forgot Password
          </h2>
          <p className="text-[#6B7280] mb-8">
          To receive a new password, enter your email address below
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm text-[#475569] mb-1">
                Email address *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-[#94A3B8]">
                  <i className="fas fa-envelope"></i>
                </span>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@email.com"
                  className="w-full pl-10 pr-4 py-3 rounded-md bg-[#F1F5F9] text-[#475569] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-[#475569] text-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300"
                />
                <span>Remember me</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
            >
              Reset Password
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
