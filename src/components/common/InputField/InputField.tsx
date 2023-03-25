import React, { FC } from 'react';
import styles from "./styles.module.scss";
import sprite from '@/assets/sprite/sprite.svg';

interface IInputField {
  placeholder?: string;
  mode?: boolean;
}

export const InputField: FC<IInputField> = ({ placeholder, mode }) => {
  return (
    <div className={styles.field}>
      <form className={styles.form} /* onSubmit={onSubmitHandler} */>
        <input
          // value={value}
          // onChange={onChangeHandler}
          type="text"
          placeholder={placeholder}
          className={`${styles.input} ${mode ? styles.input_mode : ''}`}
        />
        <button className={styles.btn}>
          <svg className={styles.btn__icon}>
            <use xlinkHref={`${sprite}#search`}></use>
          </svg>
        </button>
      </form>
    </div >
  );
};
