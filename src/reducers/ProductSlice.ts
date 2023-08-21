import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "reducers/Store";
import axios from "axios";

export interface Item {
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
  ratingReview: RatingReviews;
  seller: Seller[];
  services: Services;
  slug: string;
  specialPrice: boolean;
  specifications: Specification;
  stock: number;
  // cart: CartItem[];
}

export interface Offer {
  offerType: string;
  description: string;
}

export interface RatingReviews {
  avg_rating: number;
  rating: number;
  reviews: number;
}

export interface Seller {
  name: string;
  returns: boolean;
  rating: number;
}

export interface Services {
  paymentType: string;
  warranty: string;
}

export interface Specification {
  attributes: SpecificationAttribute[];
}

export interface SpecificationAttribute {
  inTheBox: InTheBox;
  general: General;
  dimensions: Dimension;
  moreDetails: MoreDetails;
}

export interface InTheBox {
  salesPackage: string;
  packOf: string;
}

export interface General {
  brand: string;
  suitableFor: string;
  appliedOn: string;
  removable: string;
  color: string;
}

export interface Dimension {
  height: string;
  width: string;
}

export interface MoreDetails {
  GenericName: string;
  CountryOfOrigin: string;
}

export interface CartItem {
  itemId: string;
  name: string;
  quantity: number;
  image: string;
}

export interface ItemsState {
  items: Item[] | null;
  loading: boolean;
  error: string | null;
  itemDetails: Item | null;
  cart: CartItem[] | null;
  // sellers: Seller[] | null;
}

const initialState: ItemsState = {
  items: [],
  loading: false,
  error: null,
  itemDetails: null,
  cart: [],
  // sellers: [],
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
export const addToCartItems = createAsyncThunk<Item, string>(
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

    // [addToCartItems.pending.type]: (state) => {
    //   state.loading = true;
    // },
    // [addToCartItems.fulfilled.type]: (state, action) => {
    //   state.loading = false;
    //   state.cart = action.payload;
    //   state.error = null;
    // },
    // [addToCartItems.rejected.type]: (state, action) => {
    //   state.loading = false;
    //   state.cart = null;
    //   state.error = action.error.message || "An error occurred.";
    // },
  },
});

export default itemsSlice.reducer;

export const selectItemDetails = (state: RootState) => state.items.itemDetails;
export const selectItems = (state: RootState) => state.items.items;
export const selectLoading = (state: RootState) => state.items.loading;
export const selectError = (state: RootState) => state.items.error;
export const selectItemsAdded = (state: RootState) => state.items.cart;
