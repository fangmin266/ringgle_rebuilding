import { Action, combineReducers, Store } from "redux";
import { configureStore, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import commonSlice from "./common/commonReducer";
import ssrSlice from "./ssr/ssr";
import productSlice from "./common/productReducer";

const rootReducer = combineReducers({
  common: commonSlice,
  ssr: ssrSlice,
  product: productSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["admincommon", "adminloginAndsignup"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// RootState 타입 정의
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export type AppDispatch = ThunkDispatch<RootState, unknown, Action<string>>;

const store: Store<RootState, Action<string>> = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
