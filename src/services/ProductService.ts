import Sort from '@/components/Sort';
import { IProduct } from '@/types';
import { BaseQueryArg } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({

    fetchFiltredProducts: builder.query<IProduct[], { limit: number, page: number, gte: string, lte: string, vendor: string; }>({
      query: ({ limit = 15, page = 1, gte = '0', lte = '10000', vendor }) => ({
        url: '/products',
        params: {
          _limit: limit,
          _page: page,
          price_gte: gte,
          price_lte: lte,
          vendor: vendor || undefined
        }
        // (vendor: string) => {
        //   if (!vendor) return '/products';
        //   return `/products?vendor=${vendor}`;
        // }
      }),
    }),

    fetchProduct: builder.query<IProduct[], number>({
      query: (id: number) => ({
        url: '/products',
        params: {
          id: id
        }
      })
    }),

    fetchSortedProducts: builder.query<IProduct[], { sort: string, order: string; }>({
      query: ({ sort, order }) => ({
        url: '/products',
        params: {
          _sort: sort,
          _order: order
        }
      })
    }),

    fetchProductsByPrice: builder.query<IProduct[], { gte: string, lte: string; }>({
      query: ({ gte, lte }) => ({
        url: '/products',
        params: {
          price_gte: gte,
          price_lte: lte
        }
      })
    }),
  })
});