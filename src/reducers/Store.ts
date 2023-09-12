import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { useDispatch } from "react-redux";
import itemsReducer from "reducers/ProductSlice";
import cartReducer from "reducers/CartSlice";
import authReducer from "reducers/UserSlice";
import recentItemsReducer from "reducers/RecentItemsSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    cart: cartReducer,
    auth: authReducer,
    recentItems: recentItemsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
