import React, { FC } from 'react';
import styles from "./styles.module.scss";
import sprite from '@/assets/sprite/sprite.svg';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setCurrentPage } from '@/features/product/productSlice';
import { IPaginationProps } from '@/types';

export const Pagination: FC<IPaginationProps> = ({ products, currentPage }) => {
  const dispatch = useAppDispatch();
  
  let pages = [];

  let perPage = Math.ceil(products.length / 15);
  for (let i = 1; i <= perPage; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pages}>
      <div className={`
          ${styles.icon}
          ${styles.icon_prev}
          ${currentPage == 1 ? styles.icon_disable : styles.icon_active}
        `}
        onClick={onClickPagePrevHandler}>
        <svg>
          <use xlinkHref={`${sprite}#arrow`}></use>
        </svg>
      </div>
      <div>
        {pages.map((page, index) =>
          <span
            key={index}
            className={currentPage == page ? styles.page_current : styles.page}
            onClick={() => onClickPageHandler(page)}>
            {page}
          </span>
        )}
      </div>
      <div className={`
          ${styles.icon}
          ${currentPage == pages.length ? styles.icon_disable : styles.icon_active}
        `}
        onClick={onClickPageNextHandler}>
        <svg>
          <use xlinkHref={`${sprite}#arrow`}></use>
        </svg>
      </div>
    </div>
  );

  function onClickPageHandler(page: any) {
    dispatch(setCurrentPage(page));
  };

  function onClickPagePrevHandler() {
    // if (currentPage === 1) return;
    dispatch(setCurrentPage(currentPage - 1));
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function onClickPageNextHandler() {
    // if (currentPage === pages.length) return;
    dispatch(setCurrentPage(currentPage + 1));
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };

};
