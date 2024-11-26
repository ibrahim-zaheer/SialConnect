// src/redux/reducers/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Load initial user data from localStorage, if available
const initialState = JSON.parse(localStorage.getItem("user")) || { name: '', email: '', role:'',profilePicture:'' };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.profilePicture = action.payload.profilePicture;
    },
    clearUser: (state) => {
      state.name = '';
      state.email = '';
      state.role = '';
      state.profilePicture ='';
      localStorage.removeItem("user"); // Clear from localStorage on logout
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
