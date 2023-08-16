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
  id: number;
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

interface ItemsState {
  items: Item[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: ItemsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchItems = createAsyncThunk<Item[]>(
  "api/fetchItems",
  async () => {
    const response = await axios.get<Item[]>(
      `https://61e55f2e595afe00176e553b.mockapi.io/products`
    );
    return response.data;
  }
);

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchItems.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchItems.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.error = null;
    },
    [fetchItems.rejected.type]: (state, action) => {
      state.loading = false;
      state.items = null;
      state.error = action.error.message || "An error occurred.";
    },
  },
});

export default itemsSlice.reducer;

export const selectItems = (state: RootState) => state.items.items;
export const selectLoading = (state: RootState) => state.items.loading;
export const selectError = (state: RootState) => state.items.error;
