import { loginUser } from "../../Services/authService"

import { Navigate, useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";



const LoginForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await loginUser(formData);
      console.log(response);
      alert("login successfully");

      localStorage.setItem("token", response.token);

      localStorage.setItem(
        "user",
        JSON.stringify(response.user)
      );

      console.log("Saved User:", localStorage.getItem("user"));

      window.dispatchEvent(new Event("authChange"));

      navigate("/")

    } catch (error) {
      console.log("Error :", error);
      alert("Invalid Credentails")
    }
  }
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-sky-50 to-blue-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-sky-700 mb-2">
          Login
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Welcome back to LaundryPro
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 focus-within:border-sky-500">
            <Mail size={18} className="text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full ml-3 outline-none"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 focus-within:border-sky-500">
            <Lock size={18} className="text-gray-500" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full ml-3 outline-none"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-sky-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Login
          </button>

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-sky-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default LoginForm;