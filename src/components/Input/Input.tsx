import React, { FC, useState } from 'react';
import styles from './styles.module.scss';

interface IInputProps {
  onChange?: ((e: string) => void) | undefined;
}

export const Input: FC<IInputProps> = ({ onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value.replace(/\D/g, '');

    setValue(result);
    onChange?.(event.target.value);
  };

  // if (value !== '') {
  //   const num = Number(value);
  // }

  return (
    <input
      className={styles.input}
      value={value}
      onChange={handleChange}
      placeholder='0'
    />
  );
};