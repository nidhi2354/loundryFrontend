import api from "./axiosInstance";



//registerUser
export const registerUser = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

//login User
export const loginUser = async (userData)=>{
 const response = await api.post("/auth/login",userData)
 return response.data;
}

//get Profile
export const getProfile = async () => {
  const response = await api.get("/auth/profile");
  return response.data;
};


//logout User
export const logoutUser = async()=>{
  const response = await api.post("/auth/logout");
  return response.data;
}