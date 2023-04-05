import { IProduct } from '@/types';

export default interface IBasketState {
  basketItems: IProduct[];
  totalQuantity: number;
  totalAmount: number;
}