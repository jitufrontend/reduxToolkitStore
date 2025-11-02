import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    incraseby1: (state) => state + 1,
    incraseby10: (state) => state + 10,
    decreaseby1: (state) => state - 1,
    decreaseby10: (state) => state - 10,
    increaseByValue : (state,action) => state += action.payload
  },
});

export const {incraseby1,incraseby10,decreaseby1,decreaseby10,increaseByValue} = counterSlice.actions;
export default counterSlice.reducer
