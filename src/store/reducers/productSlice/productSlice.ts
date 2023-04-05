import { IProduct } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  currentPage: number;
}

const initialState: ProductState = {
  currentPage: 1,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
});

export const { setCurrentPage } = productSlice.actions;

export default productSlice.reducer;