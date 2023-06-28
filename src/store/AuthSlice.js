import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "@/services/authService";

export const login = createAsyncThunk("auth/login", async userData => {
  const response = await authService.login(userData);
  return response;
});

export const register = createAsyncThunk("auth/register", async userData => {
  const response = await authService.register(userData);
  return response;
});

export const auth = createAsyncThunk("auth/check", async token => {
  const response = await authService.authWithToken(token);
  return response;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    loading: false,
    token: null,
    error: null,
  },
  reducers: {
    logoutUser(state) {
      localStorage.removeItem("token");
      state.user = {};
      state.token = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.response?.status != 403) {
        state.user = action.payload;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      } else {
        state.error = action.payload?.message;
      }
    });

    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(register.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(auth.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(auth.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.token = action.payload.token;
    });
    builder.addCase(auth.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { logoutUser } = authSlice.actions;

export default authSlice;
