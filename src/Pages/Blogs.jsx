import React, { useEffect, useState } from "react";
import { getBlogs } from "../Services/blogService";

import { useNavigate } from "react-router-dom";


function Blogs() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await getBlogs();

    console.log(response.blogs)

    if (response.success) {
      setBlogs(response.blogs);
    }
  };


  useEffect(() => {
    fetchBlogs();
  }, []);



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Laundry Blog
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto text-blue-100">
            Discover laundry tips, stain removal tricks, fabric care guides,
            and professional cleaning insights.
          </p>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={`http://localhost:4000/${blog.image}`}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm leading-6 mb-5 line-clamp-3">
                  {blog.description}
                </p>

                <button
                  onClick={() => navigate(`/blogs/${blog._id}`)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;