import { Dispatch, SetStateAction } from 'react';

export default interface ISort {
  setSort: Dispatch<SetStateAction<string>>;
  setOrder: Dispatch<SetStateAction<string>>;
}