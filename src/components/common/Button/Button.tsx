import React, { FC } from 'react';
import styles from './styles.module.scss';
import sprite from '@/assets/sprite/sprite.svg';

interface IButtonProps {
  icon?: 'search' | 'download' | 'basket' | 'catalog' | 'delete',
  type?: 'button' | 'submit',
  color?: 'primary' | 'inherit',
  variant?: 'contained' | 'outlined',
  iconSize?: number,
  buttonSize?: 'small' | 'medium' | 'large',
  children?: React.ReactNode,
  onClick?: () => void,
}

export const Button: FC<IButtonProps> = (props) => {
  const { icon, children, type, onClick, buttonSize, variant, color, iconSize } = props;

  const isIcon = icon &&
    <div
      style={{
        width: `${iconSize || 15}px`,
        height: `${iconSize || 15}px`
      }}>
      <svg
        className={`
          ${styles.icon}
          ${styles[`icon_${variant || 'contained'}`]}
          ${styles[`icon_${color || 'primary'}`]}
      `}>
        <use xlinkHref={`${sprite}#${icon}`}></use>
      </svg>
    </div>
    ;

  return (
    <button
      className={`
        ${styles.btn}
        ${styles[`btn_${color || 'primary'}`]}
        ${styles[`btn_${variant || 'contained'}`]}
      `}
      type={type}
      onClick={onClick}
    >
      <span
        className={`
        ${styles.text}
        ${styles[`text_${variant || 'contained'}`]}
        ${styles[`text_${color || 'primary'}`]}
      `}>
        {children}
      </span>
      {isIcon}
    </button >
  );
};