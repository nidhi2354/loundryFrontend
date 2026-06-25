import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";


import { useParams } from "react-router-dom";
import { getSingleBlog } from "../Services/blogService";




function BlogDetails() {

  const [blog, setBlog] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();


  const fetchBlog = async () => {
    const response = await getSingleBlog(id);

    console.log(response.blog)
    if (response.success) {
      setBlog(response.blog);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 bg-white px-4 py-2 rounded-xl shadow hover:shadow-md transition"
        >
          <ArrowLeft size={18} />
          Back to Blogs
        </button>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Blog Image */}
          <div className="overflow-hidden">
            <img
              src={`http://localhost:4000/${blog.image}`}
              alt={blog.title}
              className="w-full h-[250px] md:h-[450px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">

            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                Laundry Tips
              </span>

              <span className="text-gray-500 text-sm">
                {new Date(blog.createdAt).toDateString()}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {blog.title}
            </h1>

            <div className="w-24 h-1 bg-blue-600 rounded-full mb-8"></div>

            <div className="prose max-w-none">
              <p className="text-gray-700 text-lg leading-9 whitespace-pre-line">
                {blog.description}
              </p>
            </div>
          </div>
        </div>

        {/* Tips Card */}
        <div className="mt-8 bg-white rounded-3xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            Laundry Care Tips
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-xl">
              ✓ Separate white and colored clothes.
            </div>

            <div className="bg-blue-50 p-4 rounded-xl">
              ✓ Avoid overloading the washing machine.
            </div>

            <div className="bg-blue-50 p-4 rounded-xl">
              ✓ Use the correct detergent quantity.
            </div>

            <div className="bg-blue-50 p-4 rounded-xl">
              ✓ Dry clothes according to fabric type.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BlogDetails;