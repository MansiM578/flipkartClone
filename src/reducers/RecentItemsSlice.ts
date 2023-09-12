import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecentItem } from "types/types";

export type RecentItemsState = {
  recentlyViewed: RecentItem[];
};

const loadRecentItems = () => {
  const storedCart = sessionStorage.getItem("recentItem");
  return storedCart ? JSON.parse(storedCart) : { recentlyViewed: [] };
};

const initialState: RecentItemsState = loadRecentItems();

const recentItemsSlice = createSlice({
  name: "recentItem",
  initialState,
  reducers: {
    addRecentItem: (state, action: PayloadAction<RecentItem>) => {
      const newItem = action.payload;

      if (!state.recentlyViewed.some((item) => item.id === newItem.id)) {
        state.recentlyViewed.unshift(newItem);
      }
      sessionStorage.setItem("recentItem", JSON.stringify(state));
    },
  },
});

export const { addRecentItem } = recentItemsSlice.actions;
export default recentItemsSlice.reducer;
