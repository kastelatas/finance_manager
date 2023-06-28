import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import settingsService from "@/services/settingsService";

export const updateProfile = createAsyncThunk(
  "settings/updateProfile",
  async profile => {
    const response = await settingsService.updateProfile(profile);
    return response;
  }
);

const settingsSlice = createSlice({
  name: "settings",
  initialState: {},
  reducers: {},
  extraReducers: builder => {
    builder.addCase(updateProfile.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default settingsSlice;
