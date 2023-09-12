import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, OrderItem } from "types/types";

export type CartState = {
  items: CartItem[];
  orderItems: OrderItem[];
  loading: boolean;
  success: boolean;
};

const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart
    ? JSON.parse(storedCart)
    : { items: [], loading: false, success: false, orderItems: [] };
};

const initialState: CartState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },
    deleteFromCart: (state, action: PayloadAction<string>) => {
      const itemIdToDelete = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToDelete);

      localStorage.setItem("cart", JSON.stringify(state));
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity += 1;
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },

    fetchDataStart: (state) => {
      state.loading = true;
      state.success = false;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    fetchDataSuccess: (state) => {
      state.loading = false;
      state.success = true;
      localStorage.setItem("ordercart", JSON.stringify(state));
    },
    fetchDataClear: (state) => {
      state.loading = false;
      state.success = true;
      state.items = [];

      localStorage.setItem("cart", JSON.stringify(state));
    },
    fetchDataFailure: (state) => {
      state.loading = false;
      state.success = false;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const {
  addItemToCart,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  fetchDataClear,
} = cartSlice.actions;

export default cartSlice.reducer;
