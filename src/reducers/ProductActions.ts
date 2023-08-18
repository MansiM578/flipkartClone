import React from "react";
import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { RootState } from "reducers/Store";
import thunkMiddleware from "redux-thunk";
import axios from "axios";
import { ThunkDispatch } from "redux-thunk";

interface Item {
  name: string;
  images: Array<string>;
  offers: Array<string>;
  price: number;
  ratingReview: {
    average_Rating?: number | null; // 0 - 5 stars
    rating: number | null;
    reviews?: number | null;
  };
  seller: {
    name?: string | null;
    rating?: number | null;
    returns?: boolean | null;
  };
  // ... other item properties
}

interface getProductsState {
  items: Item[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: getProductsState = {
  items: [],
  loading: false,
  error: null,
};

export const getProductDetails = createAsyncThunk<Item[]>(
  "api/getProductDetails",
  async (id) => {
    const response = await axios.get<Item[]>(
      `https://61e55f2e595afe00176e553b.mockapi.io/products/${id}`
    );
    return response.data;
  }
);

const getProductSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductDetails.pending.type]: (state) => {
      state.loading = true;
    },
    [getProductDetails.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.error = null;
    },
    [getProductDetails.rejected.type]: (state, action) => {
      state.loading = false;
      state.items = null;
      state.error = action.error.message || "An error occurred.";
    },
  },
});
export default getProductSlice.reducer;
