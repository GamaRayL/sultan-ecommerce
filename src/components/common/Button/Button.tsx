import React, { FC } from 'react';
import styles from './styles.module.scss';
import sprite from '@/assets/sprite/sprite.svg';

interface IButtonProps {
  icon?: 'search' | 'download' | 'basket' | 'catalog',
  type?: 'button' | 'submit',
  iconSize?: 'medium',
  buttonSize?: 'large' | 'medium' | 'small',
  children?: React.ReactNode,
  onClick?: () => void,
}

const SIZES = ['small', "large", "medium"];

export const Button: FC<IButtonProps> = (props) => {
  const { icon, children, type, onClick, buttonSize, iconSize } = props;

  const checkButtonSize = SIZES.includes(buttonSize!) ? buttonSize : SIZES[0];

  return (
    <button
      className={`${styles.btn} ${checkButtonSize ? styles[checkButtonSize] : ''}`}
      // ${icon ? styles[icon] : ''}
      type={type}
      onClick={onClick}
    >
      <span className={styles.btn__text}>{children}</span>
      {
        icon && <svg className={`${styles.btn__icon} ${iconSize ? styles[`btn__${iconSize}`] : ''}`}>
          <use xlinkHref={`${sprite}#${icon}`}></use>
        </svg>
        // ${icon ? styles[`btn__${icon}`] : ''}
      }
    </button >
  );
};

// ${iconSize ? styles[iconSize] : ''}