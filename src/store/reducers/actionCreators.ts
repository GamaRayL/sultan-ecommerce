import { AppDispatch } from '@/store/store';
import { IProduct } from '@/types';
import axios from 'axios';
import productSlice from '@/store/reducers/productSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'product/fetchAll',
  async (_, thunkAPI) => {
    const response = await axios.get<IProduct[]>('http://localhost:3000/products');
    return response.data;
  }
);