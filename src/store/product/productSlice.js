import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POSTFIX } from "../../const.js";

const initialState = {
  products: [],
  error: "",
};

export const productRqquestAsync = createAsyncThunk(
  "product/fetch",
  (category) =>
    fetch(`${API_URI}${POSTFIX}?category=${category}`)
      .then((req) => req.json())
      .catch((error) => ({ error }))
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(productRqquestAsync.pending, (state) => {
        state.error = "";
      })
      .addCase(productRqquestAsync.fulfilled, (state, action) => {
        state.error = "";
        state.products = action.payload;
      })
      .addCase(productRqquestAsync.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export default productSlice.reducer;
