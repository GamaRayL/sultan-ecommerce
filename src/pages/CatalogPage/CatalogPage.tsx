import React from 'react';
import Card from '@/components/Card';
import styles from "./styles.module.scss";
import products from '@/store/products.json';
import CareCard from '@/components/CareCard';
import Filter from '@/components/Filter';

const CatalogPage = () => {
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
          {products.map(item =>
            <Card key={item.id} product={item} />
          )}
        </div>
      </div>
    </>
  );
};
export default CatalogPage;