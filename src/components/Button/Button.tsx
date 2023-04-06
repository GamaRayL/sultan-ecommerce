import React, { FC, CSSProperties } from "react";
import sprite from "@/assets/sprite/sprite.svg";
import IButton from "./type";
import styles from "./styles.module.scss";

export const Button: FC<IButton> = (props) => {
  const { icon, children, form, type, onClick, buttonSize, variant, color, iconSize, isUpperCase } = props;

  return (
    <button
      className={`
        ${styles.btn}
        ${styles[`btn_${color || "primary"}`]}
        ${styles[`btn_${buttonSize || "medium"}`]}
        ${styles[`btn_${variant || "contained"}`]}
      `}
      type={type}
      form={form}
      onClick={onClick}
    >
      {
        children && <span
          style={{ textTransform: isUpperCase ? "uppercase" : "none" }}
          className={`
            ${styles.text}
            ${styles[`text_${variant || "contained"}`]}
            ${styles[`text_${color || "primary"}`]}
            ${styles[`text_${variant || "contained"}`]}
            `}>
          {children}
        </span>
      }
      {
        icon && <div className={styles.icon} style={{ "--size": `${iconSize || 15}px` } as CSSProperties}>
          <svg className={`
          ${styles.svg}
          ${styles[`svg_${variant || "contained"}`]}
          ${styles[`svg_${color || "primary"}`]}
      `}>
            <use xlinkHref={`${sprite}#${icon}`}></use>
          </svg>
        </div>}
    </button >
  );
};