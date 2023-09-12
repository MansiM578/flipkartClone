// authSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  userData: {
    username: string;
    email: string;
    password: string;
  } | null;
}

const loadUserFromLocalStorage = () => {
  const storedCart = localStorage.getItem("userData");
  return storedCart
    ? JSON.parse(storedCart)
    : { isLoggedIn: false, userData: null };
};

const initialState: AuthState = loadUserFromLocalStorage();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
      localStorage.setItem("userData", JSON.stringify(state));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
