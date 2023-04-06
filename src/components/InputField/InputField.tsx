import React, { FC, useState } from "react";
import sprite from "@/assets/sprite/sprite.svg";
import IInputField from './type';
import styles from "./styles.module.scss";

export const InputField: FC<IInputField> = ({ onChange, placeholder, mode, icon, name, required }) => {
  const [value, setValue] = useState("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setValue(newValue);
    onChange?.(event);
  };

  return (
    <div className={styles.field}>
      <input
        required={required}
        name={name}
        value={value}
        type="text"
        placeholder={placeholder}
        className={`${styles.input} ${mode ? styles.input_mode : ""}`}
        onChange={onChangeHandler}
      />
      {icon &&
        <button className={styles.btn}>
          <svg className={styles.btn__icon}>
            <use xlinkHref={`${sprite}#${icon || "search"}`}></use>
          </svg>
        </button>
      }
    </div >
  );
};
