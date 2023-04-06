import IBasketState from './type';
import { IProduct } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const items = localStorage.getItem("basketItems") !== null ? JSON.parse(localStorage.getItem("basketItems") || "{}") : [];
const totalQuantity = localStorage.getItem("totalQuantity") !== null ? JSON.parse(localStorage.getItem("totalQuantity") || "{}") : 0;
const totalAmount = localStorage.getItem("totalAmount") !== null ? JSON.parse(localStorage.getItem("totalAmount") || "{}") : 0;

const setItemFunc = (item: IProduct[], totalAmount: number, totalQuantity: number) => {
  localStorage.setItem("basketItems", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

const initialState: IBasketState = {
  basketItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // Добавление продукта в корзину
    addProduct: (state, action: PayloadAction<IProduct>) => {
      const newItem = action.payload;
      const existingItem = state.basketItems.find(
        item => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.basketItems.push(action.payload);
      } else {
        existingItem.quantity++;
        existingItem.totalprice =
          Number(existingItem.totalprice) + Number(newItem.price);
      }

      state.totalAmount = state.basketItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity), 0
      );

      setItemFunc([...state.basketItems], state.totalAmount, state.totalQuantity);
    },

    // Уменьшение продукта в корзине
    removeProduct: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem: IProduct | undefined = state.basketItems.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem!.quantity === 1) {
        state.basketItems = state.basketItems.filter(item => item.id !== action.payload);
      } else {
        existingItem!.quantity--;
        existingItem!.totalprice =
          Number(existingItem!.totalprice) - Number(existingItem!.price);
      }

      state.totalAmount = state.basketItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity), 0
      );

      setItemFunc([...state.basketItems], state.totalAmount, state.totalQuantity);
    },

    // Удаление продукта из корзины
    deleteProduct: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem: IProduct | undefined = state.basketItems.find((item) => item.id === id);

      if (existingItem) {
        state.basketItems = state.basketItems.filter(item => item.id !== action.payload);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }

      state.totalAmount = state.basketItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity), 0
      );

      setItemFunc([...state.basketItems], state.totalAmount, state.totalQuantity);
    },

    deleteAllProducts: (state) => {
      state.basketItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;

      setItemFunc([...state.basketItems], state.totalAmount, state.totalQuantity);
    }
  },

});

export const { addProduct, removeProduct, deleteProduct, deleteAllProducts } = basketSlice.actions;

export default basketSlice.reducer;