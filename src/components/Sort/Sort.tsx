import React, { FormEvent, FormEventHandler, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import sprite from '@/assets/sprite/sprite.svg';
import styles from "./styles.module.scss";
// import { sortProducts } from '@/features/product/productSlice';

export const Sort = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('Название');
  const [isShow, setIsShow] = useState(false);
  const array = ['Название', 'Цена (по возрастанию)', 'Цена (по убыванию)'];

  useEffect(() => {
    // dispatch(sortProducts(value));

    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const current = document.querySelector('div[class*="sort__container"]');
      if (current !== target.parentNode) setIsShow(false);
    });
  }, [value]);

  return (
    <div className={styles.sort}>
      <div className={styles.sort__box}>
        <span className={styles.sort__name}>Сортировка:</span>
        <div className={styles.sort__container} onClick={() => setIsShow(!isShow)}>
          <span className={styles.sort__current}>
            {value}
          </span>
          <span className={`${styles.sort__icon} ${isShow ? styles.sort__icon_active : ""}`}>▼</span>

          {isShow &&
            <ul className={styles.list}>
              {array.map(i => <li className={styles.item} key={i} onClick={() => setValue(i)}>{i}</li>)}
            </ul>
          }

        </div>
      </div>

      <div className={styles.tools}>
        <div className={`${styles.tools__icon} ${styles.tools__dash}`}>
          <svg>
            <use xlinkHref={`${sprite}#menu-dash`}></use>
          </svg>
        </div>
        <div className={`${styles.tools__icon} ${styles.tools__catalog}`}>
          <svg>
            <use xlinkHref={`${sprite}#category`}></use>
          </svg>
        </div>
      </div>
    </div>
  );
};
