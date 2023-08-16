import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { useDispatch } from "react-redux";
import itemsReducer from "reducers/ProductSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import rootReducer from "components/listItems/RootReducer";
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// const store = configureStore({
//   reducer: rootReducer,

//   middleware: [thunk, logger],
// });

// export default store;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
