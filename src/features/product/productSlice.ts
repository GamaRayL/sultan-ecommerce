import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import arProducts from '@/store/products.json';

localStorage.setItem('products', JSON.stringify(arProducts));
const localProducts = JSON.parse(localStorage.getItem('products') || '{}');

interface IProduct {
  id: number;
  brand: string;
  name: string;
  img: string;
  description: string;
  barcode: string;
  vendor: string;
  price: number;
  size: string;
  article: string;
  package: string;
  target: string[];
}

interface ProductState {
  products: IProduct[];
}

const initialState: ProductState = {
  products: localProducts
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    add: (state) => {

    },
    search: (state) => {

    },
    sort: (state) => {

    },
    remove: (state) => {

    },
  }
});

export const { add, search, sort, remove } = productSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;

export default productSlice.reducer;