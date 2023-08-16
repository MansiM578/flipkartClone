import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "reducers/ProductSlice";

const rootReducer = combineReducers({
  products: productsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
