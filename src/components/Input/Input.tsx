import React, { FC } from "react";
import IInput from './type';
import styles from "./styles.module.scss";

export const Input: FC<IInput> = ({ onChange, priceValue }) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value.replace(/\D/g, "");

    onChange?.(result);
  };

  return (
    <input
      className={styles.input}
      value={priceValue}
      onChange={handleChange}
    />
  );
};