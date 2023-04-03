import React, { FC } from 'react';
import { productAPI } from '@/services/ProductService';
import { setCurrentPage } from '@/store/reducers/productSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';
import sprite from '@/assets/sprite/sprite.svg';
import styles from "./styles.module.scss";

export const Pagination = () => {
  const { data: products, isSuccess } = productAPI.useFetchSortedProductsQuery({ sort: 'vendor', order: "asc" });

  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(state => state.productReducer.currentPage);

  let pages = [];

  if (!isSuccess) return;

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
    dispatch(setCurrentPage(currentPage - 1));
  };

  function onClickPageNextHandler() {
    if (currentPage === pages.length) return;
    dispatch(setCurrentPage(currentPage + 1));
  };

};
