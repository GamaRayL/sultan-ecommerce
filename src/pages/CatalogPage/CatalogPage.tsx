import React from 'react';
import Card from '@/components/Card';
import styles from "./styles.module.scss";
import CareCard from '@/components/CareCard';
import Filter from '@/components/Filter';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setCurrentPage } from '@/features/product/productSlice';
import sprite from '@/assets/sprite/sprite.svg';
import Pagination from '@/components/Pagination';

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const paggProducts = useAppSelector((state) => state.products.paggProducts);
  const currentPage = useAppSelector((state) => state.products.currentPage);

  return (
    <>
      <h1 className={styles.title}>Каталог</h1>
      <div className={styles.slider}>
        <CareCard care='body' />
        <CareCard care='hands' />
      </div>

      <div className={styles.catalog}>
        <Filter />
        <div className={styles.catalog__box}>
          {paggProducts.map(item =>
            <Card key={item.id} product={item} />
          )}
          <div className={styles.catalog__pagination}>
            <Pagination array={products} currentPage={currentPage} />
          </div>
        </div>
      </div>

    </>
  );
};
export default CatalogPage;