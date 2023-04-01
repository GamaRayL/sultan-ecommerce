import React, { FC } from 'react';
import styles from "./styles.module.scss";
import sprite from '@/assets/sprite/sprite.svg';
import { IInputField } from '@/types';

export const InputField: FC<IInputField> = ({ placeholder, mode, icon }) => {
  return (
    <div className={styles.field}>
      <input
        // value={value}
        // onChange={onChangeHandler}
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
