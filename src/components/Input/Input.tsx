import React, { FC, useState } from 'react';
import styles from './styles.module.scss';

export const Input: FC = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value.replace(/\D/g, '');

    setValue(result);
  };

  // if (value !== '') {
  //   const num = Number(value);
  // }

  return (
    <input
      className={styles.input}
      value={value}
      onChange={handleChange}
    />
  );
};