import React from 'react';
import Card from '@/components/Card';
import styles from "./styles.module.scss";
import CareCard from '@/components/CareCard';
import Filter from '@/components/Filter';
import { useAppSelector } from '@/hooks';
import Pagination from '@/components/Pagination';
import Sort from '@/components/Sort';

const CatalogPage = () => {
  const products = useAppSelector((state) => state.products.products);
  const paggProducts = useAppSelector((state) => state.products.paggProducts);
  const currentPage = useAppSelector((state) => state.products.currentPage);

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.header__title}>Каталог</h1>
        <Sort />
      </div>

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
            <Pagination products={products} currentPage={currentPage} />
          </div>
        </div>
      </div>

    </>
  );
};
export default CatalogPage;