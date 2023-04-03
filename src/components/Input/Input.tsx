import React, { FC } from 'react';
import styles from './styles.module.scss';

interface IInputProps {
  onChange?: ((e: string) => void) | undefined;
  priceValue?: string;
}

export const Input: FC<IInputProps> = ({ onChange, priceValue }) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value.replace(/\D/g, '');

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