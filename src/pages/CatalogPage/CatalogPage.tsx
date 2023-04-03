import React, { useState } from 'react';
import { productAPI } from '@/services/ProductService';
import { useAppSelector } from '@/hooks';
import Card from '@/components/Card';
import CareCard from '@/components/CareCard';
import Filter from '@/components/Filter';
import Pagination from '@/components/Pagination';
import Sort from '@/components/Sort';
import Loader from '@/components/Loader';
import styles from "./styles.module.scss";

const CatalogPage = () => {
  const [limit, setLimit] = useState();
  const [priceFrom, setPriceFrom] = useState('0');
  const [priceTo, setPriceTo] = useState('10000');
  const [vendor, setVendor] = useState('');
  const currentPage = useAppSelector(state => state.productReducer.currentPage);
  const { data: productsFiltred, isLoading, error, originalArgs } = productAPI.useFetchFiltredProductsQuery({ page: currentPage, limit: 15, gte: priceFrom, lte: priceTo });
  // Как указать массив дополнительных параметров или комбинированную строку в rtk query запросе на json server

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
        <Filter setPriceFrom={setPriceFrom} setPriceTo={setPriceTo} setVendor={setVendor} />
        <div className={styles.catalog__box}>
          {isLoading && <div className={styles.catalog__other}><Loader /></div>}
          {error && <div className={styles.catalog__other}><h2>Возникла ошибка при загрузке контента</h2></div>}
          {productsFiltred && productsFiltred.map(product =>
            <Card key={product.id} product={product} />
          )}
          <div className={styles.catalog__pagination}>
            {productsFiltred && <Pagination />}
          </div>
        </div>
      </div>

    </>
  );
};
export default CatalogPage;