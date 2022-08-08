import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

const flipkartSlice = createSlice({
  name: "FLIPKART",
  initialState,
  reducers: {
    isLogin(state, action) {
      state.isLogin = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: flipkartSlice.reducer,
});

export const flipkartActions = flipkartSlice.actions;
