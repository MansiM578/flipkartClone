import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "reducers/Store";
import axios from "axios";

export type Item = {
  id: string;
  assured: boolean;
  breadcrumbs: string[];
  currencyType: string;
  description: string;
  discount: number;
  images: string[];
  name: string;
  offers: Offer[];
  price: number;
  ratingReviews: RatingReviews;
  seller: Seller[];
  services: Services[];
  slug: string;
  specialPrice: boolean;
  specifications: Specification[];
  stock: number;
  // cart: CartItem[];
};

export type Offer = {
  offerType: string;
  description: string;
};

export type RatingReviews = {
  avg_rating: number;
  rating: number;
  reviews: number;
};

export type Seller = {
  name: string;
  returns: boolean;
  rating: number;
};

export type Services = {
  paymentType: string;
  warranty: string;
};

export type Specification = {
  attributes: SpecificationAttribute[];
};

export type SpecificationAttribute = {
  inTheBox: InTheBox;
  general: General;
  dimensions: Dimension;
  moreDetails: MoreDetails;
};

export type InTheBox = {
  salesPackage: string;
  packOf: string;
};

export type General = {
  brand: string;
  suitableFor: string;
  appliedOn: string;
  removable: string;
  color: string;
};

export type Dimension = {
  height: string;
  width: string;
};

export type MoreDetails = {
  GenericName: string;
  CountryOfOrigin: string;
};

export type CartItem = {
  itemId: string;
  name: string;
  quantity: number;
  image: string;
};

export type ItemsState = {
  items: Item[] | null;
  loading: boolean;
  error: string | null;
  itemDetails: Item | null;
  cart: CartItem[] | null;
  // sellers: Seller[] | null;
};

const initialState: ItemsState = {
  items: [],
  loading: false,
  error: null,
  itemDetails: null,
  cart: [],
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

export const getProductDetails = createAsyncThunk<Item, string>(
  "api/getProductDetails",
  async (id) => {
    const response = await axios.get<Item>(
      `https://61e55f2e595afe00176e553b.mockapi.io/products/${id}`
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
    [getProductDetails.pending.type]: (state) => {
      state.loading = true;
    },
    [getProductDetails.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.itemDetails = action.payload;
      state.error = null;
    },
    [getProductDetails.rejected.type]: (state, action) => {
      state.loading = false;
      state.itemDetails = null;
      state.error = action.error.message || "An error occurred.";
    },
  },
});

export default itemsSlice.reducer;

export const selectItemDetails = (state: RootState) => state.items.itemDetails;
export const selectItems = (state: RootState) => state.items.items;
export const selectLoading = (state: RootState) => state.items.loading;
export const selectError = (state: RootState) => state.items.error;
export const selectItemsAdded = (state: RootState) => state.items.cart;
