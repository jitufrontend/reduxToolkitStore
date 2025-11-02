import { createAsyncThunk } from "@reduxjs/toolkit";

// "products/fetchProducts" -> unique action type name
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();
      return data; // ye payload me jayega
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
