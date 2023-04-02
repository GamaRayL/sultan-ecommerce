import { createSlice, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import arProducts from '@/store/db.json';
import { ProductState } from '@/types';

// localStorage.setItem('products', JSON.stringify(arProducts));
// let localProducts = JSON.parse(localStorage.getItem('products') || '{}');
// localProducts = localProducts.sort((a: { price: number; }, b: { price: number; }) => b.price - a.price);
// console.log(localProducts.sort((a: { price: number; }, b: { price: number; }) => b.price - a.price));

const initialState: ProductState = {
  products: arProducts,
  paggProducts: arProducts.slice(0, 15),
  currentPage: 1,
  perPage: 15,
  totalPage: Math.ceil(arProducts.length / 15),
  vendors: {},
};

interface ISearchProduct {
  priceFrom?: string;
  priceTo?: string;
  vendor?: string;
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state) => {

    },

    searchVendor: (state, action: PayloadAction<string>) => {
      const value = action.payload.toLowerCase();
      let obj: any = {};

      state.products.map((product: any) => {
        if (obj[product.vendor]) {
          obj[product.vendor] += 1;
        } else obj[product.vendor] = 1;
      });

      state.vendors = Object.keys(obj).filter((vendor) => {
        if (vendor.toLowerCase().includes(value)) return vendor;
      });
    },

    searchProduct: (state, action: PayloadAction<ISearchProduct>) => {
      const priceFrom = Number(action.payload.priceFrom);
      const priceTo = Number(action.payload.priceTo);
      const vendor = action.payload.vendor;

      console.log(priceFrom, priceTo, vendor);

      state.paggProducts = state.products
        .filter((item: any) => {
          if (item.price >= priceFrom && item.price <= priceTo) return item;
        })
        .slice((state.currentPage - 1) * state.perPage, state.currentPage * state.perPage);

      if (vendor?.trim() == '') return;
      state.paggProducts = state.products
        .filter((item: any) => {
          if (item.vendor.toLowerCase() == vendor?.toLowerCase()) return item;
        })
        .slice((state.currentPage - 1) * state.perPage, state.currentPage * state.perPage);
    },

    sortProducts: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case 'Название':
          state.paggProducts = state.products
            .sort((a, b) => a.brand.toLowerCase() > b.brand.toLowerCase() ? 1 : -1)
            .slice((state.currentPage - 1) * state.perPage, state.currentPage * state.perPage);
          break;
        case 'Цена (по возрастанию)':
          state.paggProducts = state.products
            .sort((a: { price: number; }, b: { price: number; }) => a.price - b.price)
            .slice((state.currentPage - 1) * state.perPage, state.currentPage * state.perPage);
          break;
        case 'Цена (по убыванию)':
          state.paggProducts = state.products
            .sort((a: { price: number; }, b: { price: number; }) => b.price - a.price)
            .slice((state.currentPage - 1) * state.perPage, state.currentPage * state.perPage);
          break;
        default:
          break;
      }
    },
    removeProduct: (state) => {

    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
      if (action.payload < 1) return;
      if (state.paggProducts.length < 15 && state.products.slice((state.currentPage - 2) * state.perPage, state.currentPage * state.perPage).length < 15) return;
      // if (action.payload > state.totalPage) return;
      else {
        state.currentPage = action.payload;
        state.paggProducts = state.products.slice((state.currentPage - 1) * state.perPage, state.currentPage * state.perPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    setProducts: (state) => {
    }
  }
});

export const { searchVendor, setCurrentPage, addProduct, searchProduct, sortProducts, removeProduct } = productSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;

export default productSlice.reducer;