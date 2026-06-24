
import { registerUser } from "../../Services/authService";

import { Navigate, useNavigate } from "react-router-dom";



import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
} from "lucide-react";




const SignupForm = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
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

      const response = await registerUser(formData);
      console.log(response);
      alert("Registration successful");

      navigate("/login");
    } catch (error) {
      console.log("Error:", error);

      alert("Registration Failed");
    }
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-sky-50 to-blue-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">

        <h2 className="text-3xl font-bold text-center text-sky-700 mb-6">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="flex items-center border rounded-lg px-3 py-3">
            <User size={18} className="text-gray-500" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full ml-3 outline-none"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-3">
            <Mail size={18} className="text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full ml-3 outline-none"
            />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-3">
            <Phone size={18} className="text-gray-500" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full ml-3 outline-none"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-3">
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

          <div className="flex items-center border rounded-lg px-3 py-3">
            <Lock size={18} className="text-gray-500" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full ml-3 outline-none"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <span className="text-sky-600 font-medium cursor-pointer">
              Login
            </span>
          </p>

        </form>
      </div>
    </div>
  );
};

export default SignupForm;