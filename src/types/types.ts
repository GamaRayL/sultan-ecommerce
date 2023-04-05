import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IProduct {
  id: number;
  brand: string;
  name: string;
  img: string;
  barcode: string;
  vendor: string;
  price: number;
  totalprice: number;
  size: string;
  article: string;
  description: string;
  package: string;
  target: string[];
  quantity: number;
}





export interface IPaginations {
  products: IProduct[] | undefined;
}

export interface IProductState {
  products: IProduct[],
  currentPage: number,
  perPage: number,
  totalPage: number,
  paggProducts: IProduct[],
  vendors: {},
}
