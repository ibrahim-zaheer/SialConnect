// src/redux/reducers/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Load initial user data from localStorage, if available
const initialState = JSON.parse(localStorage.getItem("user")) || { name: '', email: '' };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    clearUser: (state) => {
      state.name = '';
      state.email = '';
      localStorage.removeItem("user"); // Clear from localStorage on logout
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
