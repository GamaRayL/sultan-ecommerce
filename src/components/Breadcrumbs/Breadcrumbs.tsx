import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import productAPI from '@/services/productService';
import styles from "./styles.module.scss";

export const Breadcrumbs: FC = () => {
  const location = useLocation();
  const { data: products } = productAPI.useFetchSortedProductsQuery({ sort: "vendor", order: "asc" });
  let currentLink = "";

  const crumbs = location.pathname.split("/")
    .filter(crumb => crumb !== "")
    .map(crumb => {
      currentLink += `/${crumb}`;

      let product = products && products.filter(p => p.id == Number(crumb))[0];
      let renamedCrumb;

      if (crumb == "catalog") {
        renamedCrumb = "Каталог";
      } else if (crumb == "home") {
        renamedCrumb = "Главная";
      } else if (crumb == "basket") {
        renamedCrumb = "Корзина";
      } else renamedCrumb = `${product!.brand} ${product!.name}`;

      return (
        <div className={styles.crumb} key={crumb}>
          <Link to={currentLink}>{renamedCrumb}</Link>
        </div>
      );
    });

  return (
    <div className={styles.breadcrumbs}>
      {crumbs}
    </div>
  );
};
