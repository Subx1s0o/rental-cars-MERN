import { createSlice } from "@reduxjs/toolkit";
import { login, register, logout, refreshUser } from "./operations";

const initialState = {
  user: {
    username: null,
    email: null,
    avatar: null,
    favourites: null,
    notifications: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
};

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  if (action.payload) {
    state.error = action.payload.error || "Unknown error occurred";
  } else {
    state.error = "Wrong email or password!";
  }
  state.loading = false;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.error = null;
        state.user = action.payload.user;
        state.loading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.error = null;

        state.loading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, handleRejected)
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export default userSlice.reducer;
