import React, { FC } from 'react';
import styles from "./styles.module.scss";
import sprite from '@/assets/sprite/sprite.svg';
import { useAppDispatch } from '@/hooks';
import { setCurrentPage } from '@/features/product/productSlice';

interface IProduct {
  id: number;
  brand: string;
  name: string;
  img: string;
  description: string;
  barcode: string;
  vendor: string;
  price: number;
  size: string;
  article: string;
  package: string;
  target: string[];
}

interface IPaginationProps {
  array: IProduct[];
  currentPage: number;
}

export const Pagination: FC<IPaginationProps> = ({ array, currentPage }) => {
  const dispatch = useAppDispatch();

  let pages = [];

  for (let i = 1; i <= Math.ceil(array.length / 15); i++) {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function onClickPagePrevHandler() {
    if (currentPage === 1) return;
    dispatch(setCurrentPage(currentPage - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function onClickPageNextHandler() {
    if (currentPage === pages.length) return;
    dispatch(setCurrentPage(currentPage + 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

};
