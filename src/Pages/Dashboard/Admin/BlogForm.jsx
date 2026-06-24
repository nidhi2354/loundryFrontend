import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBlogs } from "../../../Services/blogService";



function CreateBlog() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  console.log(FormData)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("image", formData.image);




    try {
      const response = await createBlogs(data);

      console.log(response);

      alert("Blog Created Successfully");

      navigate("/admin/blogs");
    } catch (error) {
      console.log(error.response?.data);

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Blog
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Enter blog title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mb-4"
          required
        />

        <textarea
          name="description"
          rows="5"
          placeholder="Write blog description..."
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mb-4"
          required
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full border rounded-lg p-2 mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;