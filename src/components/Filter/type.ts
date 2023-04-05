import { Dispatch, SetStateAction } from 'react';

export default interface IFilter {
  setPriceFrom: Dispatch<SetStateAction<number | undefined>>;
  setPriceTo: Dispatch<SetStateAction<number | undefined>>;
  setVendor: Dispatch<SetStateAction<string>>;
  getCare: (e: React.MouseEvent<HTMLElement>) => void;
}