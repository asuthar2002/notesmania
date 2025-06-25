import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
const LoginPage = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState({ email: "", password: "" });
  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      try {
        // You can change `/api/verify-token` to any lightweight endpoint like /api/me
        const res = await axios.get("/api/auth/verify-token", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 200) {
          navigate("/");
        }
      } catch (err) {
        console.log("Invalid or expired token");
        // Optionally: remove token if invalid
        localStorage.removeItem("accessToken");
      }
    };

    checkToken();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value
    })
    if (name === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }

    if (name === "password") {
      if (value.length < 8) {
        setErrors((prev) => ({ ...prev, password: "Password must be at least 8 characters" }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loginForm.email || !loginForm.password) {
      toast.error("All fields are required");
      return;
    }
    if (errors.email || errors.password) {
      toast.error("Please fix the form errors before submitting");
      return;
    }
    try {
      const loginResponse = await axios.post("http://localhost:5000/api/auth/login", loginForm, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
        }
      })
      toast.success("Login successful!");
      const { accessToken, user } = loginResponse.data.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      // navigate to the home page or dashboard
      navigate("/");

    }
    catch (err) {
      console.error(err);
      const errorMsg = err.response?.data?.message || "Login failed";
      toast.error(errorMsg);
    }
  }
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
          <div className="text-4xl mb-2">👋</div>
          <h2 className="text-3xl font-extrabold text-[#1E293B] mb-2 leading-tight">
            Login into Eduport!
          </h2>
          <p className="text-[#6B7280] mb-8">
            Nice to see you! Please log in with your account.
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
                  name="email"
                  type="email"
                  id="email"
                  required
                  value={loginForm.email}
                  onChange={handleChange}
                  placeholder="user@email.com"
                  className="w-full pl-10 pr-4 py-3 rounded-md bg-[#F1F5F9] text-[#475569] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-[#475569] mb-1">
                Password *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-[#94A3B8]">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                  name="password"
                  type="password"
                  id="password"
                  required
                  value={loginForm.password}
                  onChange={handleChange}
                  placeholder="********"
                  className="w-full pl-10 pr-4 py-3 rounded-md bg-[#F1F5F9] text-[#475569] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>
            </div>
            <button
              type="submit"
              disabled={!!errors.email || !!errors.password || !loginForm.email || !loginForm.password}
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
            >
              Login page
            </button>
          </form>

          <div className="flex items-center my-8 text-[#94A3B8] text-sm">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4">Or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold py-3 rounded-md transition">
              <i className="fab fa-google"></i>
              <span>Login with Google</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-[#4B6CB7] hover:bg-[#3B5998] text-white font-semibold py-3 rounded-md transition">
              <i className="fab fa-facebook-f"></i>
              <span>Login with Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
