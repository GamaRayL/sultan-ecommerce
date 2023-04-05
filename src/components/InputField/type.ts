import { ChangeEvent } from 'react';

export default interface IInputField {
  placeholder?: string;
  mode?: boolean;
  icon?: "search" | "arrow";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  required?: boolean;
}