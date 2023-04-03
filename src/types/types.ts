import { Dispatch, SetStateAction } from 'react';

export interface IProduct {
  id: number;
  brand: string;
  name: string;
  img: string;
  barcode: string;
  vendor: string;
  price: number;
  size: string;
  article: string;
  description: string;
  package: string;
  target: string[];
}

export interface IButtonProps {
  icon?: 'search' | 'download' | 'basket' | 'catalog' | 'delete',
  type?: 'button' | 'submit',
  color?: 'primary' | 'inherit',
  variant?: 'contained' | 'outlined',
  iconSize?: number,
  uppercase?: boolean,
  buttonSize?: 'small' | 'medium' | 'large',
  children?: React.ReactNode,
  form?: string,
  onClick?: (e: React.MouseEvent) => void,
}

export interface IDescriptionList {
  prop: string;
  value: string | number | undefined;
}

export interface IInputField {
  placeholder?: string;
  mode?: boolean;
  icon?: 'search' | 'arrow';
  onChange?: ((e: string) => void) | undefined;
}

export interface IPaginationProps {
  products: IProduct[] | undefined;
}

export interface ProductState {
  products: IProduct[],
  currentPage: number,
  perPage: number,
  totalPage: number,
  paggProducts: IProduct[],
  vendors: {},
}