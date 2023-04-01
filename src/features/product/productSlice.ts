import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import arProducts from '@/store/products.json';
import { ProductState } from '@/types';

localStorage.setItem('products', JSON.stringify(arProducts));
const localProducts = JSON.parse(localStorage.getItem('products') || '{}');

const initialState: ProductState = {
  products: localProducts,
  paggProducts: localProducts.slice(0, 15),
  currentPage: 1,
  perPage: 15,
  totalPage: Math.ceil(localProducts.length / 15),
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state) => {

    },
    searchProduct: (state) => {

    },
    sortProduct: (state) => {

    },
    removeProduct: (state) => {

    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      if (action.payload < 1) return;
      if (action.payload > state.totalPage) return;
      else {
        state.currentPage = action.payload;
        state.paggProducts = state.products.slice((state.currentPage - 1) * state.perPage, state.currentPage * state.perPage);
      }
    },
    setProducts: (state) => {
    }
  }
});

export const { setCurrentPage, addProduct, searchProduct, sortProduct, removeProduct } = productSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;

export default productSlice.reducer;