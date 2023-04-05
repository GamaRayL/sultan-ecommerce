import React, { FC } from "react";
import { productAPI } from "@/services/productService/productService";
import { setCurrentPage } from '@/store/reducers/productSlice';
import { useAppDispatch, useAppSelector } from "@/hooks";
import sprite from "@/assets/sprite/sprite.svg";
import styles from "./styles.module.scss";

export const Pagination: FC = () => {
  const { data: products, isSuccess } = productAPI.useFetchSortedProductsQuery({ sort: "vendor", order: "asc" });

  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(state => state.productReducer.currentPage);

  let pages = [];

  if (isSuccess) {
    let perPage = Math.ceil(products.length / 15);
    for (let i = 1; i <= perPage; i++) {
      pages.push(i);
    }
  }

  const onClickPageHandler = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const onClickPagePrevHandler = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  const onClickPageNextHandler = () => {
    if (currentPage === pages.length) return;
    dispatch(setCurrentPage(currentPage + 1));
  };

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



};
