import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "reducers/ProductSlice";
import cartsReducer from "reducers/CartSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  carts: cartsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
