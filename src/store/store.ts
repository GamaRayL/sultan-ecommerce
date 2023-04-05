import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "@/store/reducers/productSlice/productSlice";
import basketReducer from "@/store/reducers/basketSlice/basketSlice";
import { productAPI } from "@/services/productService/productService";

const rootReducer = combineReducers({
  productReducer,
  basket: basketReducer,
  [productAPI.reducerPath]: productAPI.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productAPI.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;