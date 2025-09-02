import axios from "axios";

// Update user profile API call
export const updateProfileAPI = async (profileData, token) => {
  const response = await axios.put(
    "http://localhost:5000/api/auth/update-profile",
    profileData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
  return response.data;
};
