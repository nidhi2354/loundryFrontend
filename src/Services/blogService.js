

import api from "./axiosInstance";

export const createBlogs = async (blogData) => {
  const response = await api.post(
    "/blog/create",
    blogData,
   
  );

  return response.data;
};


export const getBlogs = async ()=>{
  const response = await api.get("/blog/get");

  return response.data;
}



export const getSingleBlog = async (id) => {
  const response = await api.get(
    `/blog/${id}`
  );

  return response.data;
};



export const updateBlog = async (id,blogData)=>{
  const response = await api.put(`/blog/update/${id}`,blogData);

  return response.data;
}


export const deleteBlog = async (id)=>{
  const response = await api.delete(`/blog/${id}`);

  return response.data;
}









export const getBlogByTitle = async (title) => {
  const response = await api.get(`/blog/search?title=${title}`);

  return response.data;
};

