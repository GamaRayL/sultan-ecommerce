import Sort from "@/components/Sort";
import { IProduct } from "@/types";
import { BaseQueryArg } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productAPI = createApi({
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({

    createProduct: builder.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product
      }),
      invalidatesTags: ["Product"]
    }),

    updateProduct: builder.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: "PUT",
        body: product
      }),
      invalidatesTags: ["Product"]
    }),

    deleteProduct: builder.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: "DELETE",
        body: product
      }),
      invalidatesTags: ["Product"]
    }),

    fetchFiltredProducts: builder.query<IProduct[], { limit: number, page: number, gte: number | undefined, lte: number | undefined, vendor: string, sort: string, order: string, q: string; }>({
      query: ({ limit = 15, page = 1, gte = 0, lte = 10000, vendor = undefined, sort, order, q }) => ({
        url: `/products${vendor && `?vendor=${vendor}`}`,
        params: {
          _limit: limit,
          _page: page,
          price_gte: gte,
          price_lte: lte,
          _sort: sort,
          _order: order,
          q: q
        }
      }),
      providesTags: result => ["Product"]
    }),

    fetchProduct: builder.query<IProduct[], number>({
      query: (id: number) => ({
        url: "/products",
        params: {
          id: id
        }
      })
    }),

    fetchSortedProducts: builder.query<IProduct[], { sort: string, order: string; }>({
      query: ({ sort, order }) => ({
        url: "/products",
        params: {
          _sort: sort,
          _order: order
        }
      }),
      providesTags: result => ["Product"]
    }),

    fetchProductsByPrice: builder.query<IProduct[], { gte: string, lte: string; }>({
      query: ({ gte, lte }) => ({
        url: "/products",
        params: {
          price_gte: gte,
          price_lte: lte
        }
      })
    }),
  })
});