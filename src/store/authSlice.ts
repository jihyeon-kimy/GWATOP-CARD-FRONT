import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isLoggedIn: false,
    name: "",
    redirectPath: "/",
  },
  reducers: {
    setRedirectPath: (state, action) => {
      state.redirectPath = action.payload.redirectPath;
    },
    logIn: (state, action) => {
      state.isLoggedIn = true;
      state.name = action.payload.name;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.name = "";
      state.redirectPath = "/";
    },
  },
});

export default authSlice.reducer;

export const { logIn, logOut, setRedirectPath } = authSlice.actions;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectName = (state: RootState) => state.auth.name;
export const selectRedirectPath = (state: RootState) => state.auth.redirectPath;
