import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppDispatch';
import { verifyToken } from "../../../features/auth/authSlice";
import { loginUser, signupUser } from '../../../features/auth/authSlice';
const FormField = ({ label, name, type = "text", value, onChange, iconClass, error, required = false, placeholder = "" }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm text-[#475569] mb-1">
      {label} {required && "*"}
    </label>
    <div className="relative">
      {iconClass && (<span className="absolute inset-y-0 left-3 flex items-center text-[#94A3B8]"> <i className={iconClass}></i> </span>)}
      <input type={type} name={name} id={name} value={value} onChange={onChange} required={required} placeholder={placeholder} className={`w-full ${iconClass ? "pl-10" : "pl-4"} pr-4 py-3 rounded-md bg-[#F1F5F9] text-[#475569] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-blue-600`} />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  </div>
);
const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { loading, error, isAuthenticated } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({ email: "", password: "", firstName: "", lastName: "", confirmPassword: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [authState, setAuthState] = useState("login");
  const fields = [
    { name: "firstName", label: "First Name", type: "text", required: true, showIn: ["signup"] },
    { name: "lastName", label: "Last Name", type: "text", required: true, showIn: ["signup"] },
    { name: "email", label: "Email", type: "email", required: true, showIn: ["login", "signup"] },
    { name: "password", label: "Password", type: "password", required: true, showIn: ["login", "signup"] },
    { name: "confirmPassword", label: "Confirm Password", type: "password", required: true, showIn: ["signup"] },
  ];

  useEffect(() => {
    dispatch(verifyToken()).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        navigate("/");
      }
    });
  }, [dispatch, navigate]);

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
    if (name === "confirmPassword" && authState === "signup") {
      setErrors((prev) => ({ ...prev, confirmPassword: value === loginForm.password ? "" : "Passwords do not match", }));
    }
  }
  const validateForm = () => {
    const newErrors = {};
    if (!loginForm.email) newErrors.email = "Email is required";
    if (!loginForm.password) newErrors.password = "Password is required";
    if (authState === "signup") {
      if (!loginForm.firstName) newErrors.firstName = "First name is required";
      if (!loginForm.lastName) newErrors.lastName = "Last name is required";
      if (!loginForm.confirmPassword)
        newErrors.confirmPassword = "Please confirm your password";
      if (loginForm.password !== loginForm.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix form errors before submitting");
      return;
    }
    const payload = { ...loginForm };
    if (authState === "login") {
      delete payload.confirmPassword;
      delete payload.firstName;
      delete payload.lastName;
    }
    try {
      let result;
      if (authState === "login") {
        result = await dispatch(loginUser(payload));
      } else {
        result = await dispatch(signupUser(payload));
      }

      if (result.meta.requestStatus === "fulfilled") {
        toast.success(`${authState === "login" ? "Login" : "Signup"} successful!`);
        navigate("/");
      } else {
        toast.error(result.payload || "Authentication failed");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("Something went wrong");
    }
  }
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="bg-[#E3EFF9] flex flex-col justify-between md:w-1/2 p-6 sm:p-10 md:p-16">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-2 leading-tight"> Welcome to our largest community </h1>
          <p className="text-[#475569] text-sm sm:text-base mb-10"> Let's learn something new today! </p>
          <img src="https://storage.googleapis.com/a1aa/image/fb492712-436c-47dc-390a-e538611060a4.jpg" alt="Learning illustration" className="w-full max-w-[600px] h-auto" width={600} height={350} />
        </div>
        <div className="flex items-center space-x-2 mt-8">
          {["ca18cf7f-8c0a-4db0-6649-5c4d75b66ac6", "3cd32280-a021-4b37-848e-69927dcd8682", "dc2fdc2c-785d-496a-7a6b-30bcd1a358de", "6b4dd5c7-25f4-4e8c-9ebd-e1fdf9b3fc50"].map((id, idx) => (
            <img key={idx} src={`https://storage.googleapis.com/a1aa/image/${id}.jpg`} alt="Student avatar" className="w-8 h-8 rounded-full border border-white" />
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
            {authState === "login" ? "Login " : "SignUp "}   into Eduport!
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {fields.map(field => {
              if (!field.showIn.includes(authState)) return null;
              return (
                <FormField key={field.name} {...field} value={loginForm[field.name] || ""} onChange={handleChange} error={errors[field.name]} placeholder={field.label} />
              );
            })}
            <button
              type="submit"
              disabled={loading || !!errors.email || !!errors.password}
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
            >
              {loading ? "Processing..." : authState === "login" ? "Login" : "Sign Up"}
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
            {authState === "login" &&
              (<button onClick={() => setAuthState("signup")} className="flex items-center justify-center space-x-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold py-3 rounded-md transition"><span>SignUp</span></button>)}
            {authState === "signup" &&
              (<button onClick={() => setAuthState("login")} className="flex items-center justify-center space-x-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold py-3 rounded-md transition"><span>Login</span></button>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;