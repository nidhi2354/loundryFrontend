import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getSingleBlog } from "../../../Services/blogService";

import { updateBlog } from "../../../Services/blogService";


import toast, { Toaster } from "react-hot-toast";


function EditBlog() {

  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  console.log(id);


  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData({
        ...formData,
        image: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("image", formData.image);


    try {
      setLoading(true);
      const response = await updateBlog(id, data);

      console.log(response);
      setLoading(false);
      toast.success("Blog update Successfully");

      navigate("/admin/blogs");
    } catch (error) {
      setLoading(false);
      toast.error(
        "Something went wrong"
      )
    }
  };



  const fetchSingleBlog = async () => {
    const response = await getSingleBlog(id);

    setFormData({
      title: response.blog.title,
      description: response.blog.description,
    });
  };

  useEffect(() => {
    fetchSingleBlog();
  }, []);


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Edit Blog
          </h1>

          <p className="text-gray-500 mt-2">
            Update your blog details and save changes
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Blog Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter blog title"
              value={formData.title}
              onChange={handleChange}
              className="
                w-full
                border
                border-gray-300
                rounded-xl
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-blue-500
              "
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Blog Description
            </label>

            <textarea
              rows="6"
              name="description"
              placeholder="Write blog description..."
              value={formData.description}
              onChange={handleChange}
              className="
                w-full
                border
                border-gray-300
                rounded-xl
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-blue-500
                resize-none
              "
              required
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Change Blog Image
            </label>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="
                w-full
                border
                border-gray-300
                rounded-xl
                p-3
                bg-white
              "
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="
                flex-1
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-semibold
                py-3
                rounded-xl
                transition
              "
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Update Blog"
              )}
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin/blogs")}
              className="
                flex-1
                bg-gray-200
                hover:bg-gray-300
                text-gray-800
                font-semibold
                py-3
                rounded-xl
                transition
              "
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditBlog;