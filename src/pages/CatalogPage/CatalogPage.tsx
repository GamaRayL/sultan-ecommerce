import React, { FC, useState } from "react";
import { productAPI } from "@/services/productService/productService";
import { useAppSelector } from "@/hooks";
import Card from "@/components/Card";
import Filter from "@/components/Filter";
import Pagination from "@/components/Pagination";
import Sort from "@/components/Sort";
import Loader from "@/components/Loader";
import styles from "./styles.module.scss";

const CatalogPage: FC = () => {
  const [priceFrom, setPriceFrom] = useState<number | undefined>(0);
  const [priceTo, setPriceTo] = useState<number | undefined>(10000);
  const [vendor, setVendor] = useState("");
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");
  const [care, setCare] = useState("");
  const [isCare, setIsCare] = useState(true);
  const currentPage = useAppSelector(state => state.productReducer.currentPage);
  const { data: productsFiltred, isLoading, isSuccess, error } = productAPI.useFetchFiltredProductsQuery({
    page: currentPage, limit: 15, gte: priceFrom, lte: priceTo, vendor: vendor, sort: sort, order: order, q: care
  });

  function getCare(e: React.MouseEvent<HTMLElement>) {
    const value = e.currentTarget.id;
    setIsCare(!isCare);
    if (isCare) setCare(value);
    else setCare("");
  }

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.header__title}>Каталог</h1>
        <Sort setSort={setSort} setOrder={setOrder} />
      </div>

      <div className={styles.slider}>
        <div className={styles.care} id="body" onClick={getCare}>
          Уход за телом
        </div>
        <div className={styles.care} id="hands" onClick={getCare}>
          Уход за руками
        </div>
      </div>

      <div className={styles.catalog}>
        <div className={styles.catalog__filter}>
          <Filter setPriceFrom={setPriceFrom} setPriceTo={setPriceTo} setVendor={setVendor} getCare={getCare} />
        </div>
        <div className={styles.catalog__box}>
          {isLoading && <div className={styles.catalog__other}><Loader /></div>}
          {error && <div className={styles.catalog__other}><h2>Возникла ошибка при загрузке контента</h2></div>}
          {productsFiltred && productsFiltred.map(product =>
            <Card key={product.id} product={product} />
          )}
          <div className={styles.catalog__pagination}>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};
export default CatalogPage;