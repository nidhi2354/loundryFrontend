import { Routes, Route, useLocation } from "react-router-dom";

import { useState } from "react"; import "./App.css";


import Home from "./Pages/Home";
import About from "./Pages/About"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import Blogs from "./Pages/Blogs";
import BlogDetails from "./Pages/BlogDetails"

import Signup from "./Pages/Auth/Signup";
import Login from "./Pages/Auth/Login"
import Profile from "./Pages/Auth/Profile"
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import AdminLayout from "./Pages/Dashboard/Admin/AdminLayout";

import AdminDashboard from "./Pages/Dashboard/Admin/AdminDashboard";
import UserDashboard from "./Pages/Dashboard/User/UserDashboard";
import AdminBlogs from "./Pages/Dashboard/Admin/AdminBlogs";

import CreateBlog from "./Pages/Dashboard/Admin/BlogForm";

import EditBlog from "./Pages/Dashboard/Admin/EditBlog";





function AppRoutes() {
  const location = useLocation();
  const isDashboardRoute =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/user");


  return (
    <>

      {!isDashboardRoute && <Header />}

      <Routes>


        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/blogs" element={<Blogs />} />

        <Route path="/blogs/:id" element={<BlogDetails />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<Profile />} />





        <Route path="/admin" element={<AdminLayout />}>

          <Route path="dashboard" element={<AdminDashboard />} />

          <Route path="blogs" element={<AdminBlogs />} />

          <Route path="create-blog" element={<CreateBlog />} />


          <Route path="edit-blog/:id" element={<EditBlog />} />

        </Route>













      </Routes>





      {!isDashboardRoute && <Footer />}
    </>
  );
}

export default AppRoutes;