import { useEffect, useState } from "react";
import { getProfile } from "../../Services/authService";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      setLoading(true);

      const data = await getProfile();

      // ❌ user not found or API failed
      if (!data.success) {
        setError(data.message);
        setUser(null);
        return;
      }

      // ✅ success
      setUser(data.user);
      setError("");

    } catch (error) {
      console.log(error);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      {/* LOADING */}
      {loading && (
        <p className="text-gray-600 font-medium">
          Loading profile...
        </p>
      )}

      {/* ERROR */}
      {!loading && error && (
        <div className="text-red-500 font-semibold text-center">
          {error}
        </div>
      )}

      {/* PROFILE CARD */}
      {!loading && user && (
        <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6">

          {/* Header */}
          <div className="flex flex-col items-center border-b pb-3">
            <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
              {user.name?.charAt(0).toUpperCase()}
            </div>

            <h1 className="mt-2 text-xl font-semibold text-gray-800">
              {user.name}
            </h1>

            <p className="text-gray-500 text-sm">{user.role}</p>
          </div>

          {/* Details */}
          <div className="mt-4 space-y-3">

            <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
              <span className="text-gray-600">Email</span>
              <span className="text-gray-800 font-medium">
                {user.email}
              </span>
            </div>

            <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
              <span className="text-gray-600">Phone</span>
              <span className="text-gray-800 font-medium">
                {user.phone}
              </span>
            </div>

            <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
              <span className="text-gray-600">User ID</span>
              <span className="text-gray-800 font-medium text-xs">
                {user._id}
              </span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Profile;