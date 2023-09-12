import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "reducers/ProductSlice";
import cartsReducer from "reducers/CartSlice";
import authReducer from "reducers/UserSlice";
import RecentItemsSlice from "reducers/RecentItemsSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  carts: cartsReducer,
  auth: authReducer,
  recentItems: RecentItemsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
