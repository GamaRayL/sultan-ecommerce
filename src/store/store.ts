import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import productReducer from '@/store/reducers/productSlice';
import { productAPI } from '@/services/ProductService';

const rootReducer = combineReducers({
  productReducer,
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