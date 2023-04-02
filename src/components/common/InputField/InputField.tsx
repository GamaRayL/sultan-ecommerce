import React, { FC, useState } from 'react';
import styles from "./styles.module.scss";
import sprite from '@/assets/sprite/sprite.svg';
import { IInputField } from '@/types';

export const InputField: FC<IInputField> = ({ onChange, placeholder, mode, icon }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setValue(value);
    onChange?.(value);
  };

  return (
    <div className={styles.field}>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        placeholder={placeholder}
        className={`${styles.input} ${mode ? styles.input_mode : ''}`}
      />
      <button className={styles.btn}>
        <svg className={styles.btn__icon}>
          <use xlinkHref={`${sprite}#${icon || 'search'}`}></use>
        </svg>
      </button>
    </div >
  );
};
