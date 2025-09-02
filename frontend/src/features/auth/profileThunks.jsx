import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateProfileAPI } from "./profileAPI";

export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async ({ profileData, token }, thunkAPI) => {
    try {
      const response = await updateProfileAPI(profileData, token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Profile update failed"
      );
    }
  }
);
