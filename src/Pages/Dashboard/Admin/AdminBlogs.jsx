import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";

import { useNavigate } from "react-router-dom";

import { getBlogs, deleteBlog, getBlogByTitle } from "../../../Services/blogService";


function AdminBlogs() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const fetchBlogs = async () => {
    try {
      const response = await getBlogs();

      console.log(response);

      setBlogs(response.blogs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);



  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this blog?"
      );

      if (!confirmDelete) return;

      const response = await deleteBlog(id);

      console.log(response);

      alert("Blog deleted successfully");

      fetchBlogs();
    } catch (error) {
      console.log(error);
      alert("Failed to delete blog");
    }
  };


  const handleSearch = async () => {
    try {
      const data = await getBlogByTitle(searchTitle);

      console.log(data.blogs)
      setBlogs(data.blogs);
    } catch (error) {
      console.log(error);
    }
  };






  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">
            Blog Management
          </h1>

          <p className="text-gray-500">
            Manage all blogs
          </p>
        </div>



        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search by title"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            className="border p-2 rounded"
          />

          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Search
          </button>



        </div>
        <button onClick={fetchBlogs}
          className="bg-blue-500 text-white px-4 py-2 rounded">
          Show All Blogs
        </button>





        <button onClick={() => navigate("/admin/create-blog")} className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg">

          <Plus size={18} />
          Create Blog
        </button>
      </div>


      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>



          <tbody>
            {blogs.map((blog) => (
              <tr
                key={blog._id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">
                  <img
                    src={`http://localhost:4000/${blog.image}`}
                    alt={blog.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                </td>

                <td className="p-4 font-semibold">
                  {blog.title}
                </td>


                <td className="p-4 text-gray-600">
                  {blog.description}
                </td>



                <td className="p-4">
                  <div className="flex justify-center gap-3">
                    <button onClick={() =>
                      navigate(`/admin/edit-blog/${blog._id}`)

                    }
                      className="
                      flex items-center gap-2
                      bg-green-500
                      hover:bg-green-600
                      text-white
                      px-4 py-2
                      rounded-lg
                      "
                    >
                      <Pencil size={16} />
                      Edit
                    </button>


                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="
                      flex items-center gap-2
                      bg-red-500
                      hover:bg-red-600
                      text-white
                      px-4 py-2
                      rounded-lg
                      "
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default AdminBlogs;

