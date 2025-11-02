import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "laptop",
      price: 55000,
    },
    {
      id: 2,
      name: "mobile",
      price: 20000,
    },
    {
      id: 3,
      name: "camera",
      price: 20000,
    },
  ],
  cart: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id != action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {addToCart,removeCart,clearCart} = cartSlice.actions
export default cartSlice.reducer
