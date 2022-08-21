import { configureStore, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  isLogging: false,
  isLogin: false,
  cart: [],
  totalProducts: [],
  count: [],
  name: "",
};

const flipkartSlice = createSlice({
  name: "FLIPKART",
  initialState,
  reducers: {
    isLogging(state, action) {
      state.isLogging = action.payload;
    },
    isLogin(state, action) {
      state.isLogin = action.payload;
    },
    cartItem(state, action) {
      state.totalProducts.push(action.payload);
      const c = state.cart.find((i) => i.id === action.payload.id);
      if (!c) {
        state.cart.push(action.payload);
        // localStorage.setItem("cartProduct", current(state.cart));
        // console.log(current(state.cart));
      }
      let count = 0;
      for (let i; i < state.totalProducts; i++) {
        if (action.payload.id === state.totalProducts[i].id) {
          count++;
        }
      }
      state.count.push([`${action.payload.id}`, count]);
    },
    count(state, action) {},
    name(state, action) {
      state.name = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: flipkartSlice.reducer,
});

export const flipkartActions = flipkartSlice.actions;
