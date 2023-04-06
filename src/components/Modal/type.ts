import { Dispatch, SetStateAction } from 'react';

export default interface IModal {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
}