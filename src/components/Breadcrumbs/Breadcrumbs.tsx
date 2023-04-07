import React, { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import productAPI from '@/services/productService';
import styles from "./styles.module.scss";

export const Breadcrumbs: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data: products } = productAPI.useFetchSortedProductsQuery({ sort: "vendor", order: "asc" });
  let currentLink = "";
  const crumbs = location.pathname.split("/")
    .filter(Boolean)
    .map(crumb => {
      currentLink += `/${crumb}`;

      let product = products && products.filter(p => p.id == Number(crumb))[0];
      let renamedCrumb;

      if (products) {
        if (crumb == "catalog") {
          renamedCrumb = "Каталог";
        } else if (crumb == "home") {
          renamedCrumb = "Главная";
        } else if (crumb == "basket") {
          renamedCrumb = "Корзина";
        } else if (crumb == "admin") {
          renamedCrumb = "Админ панель";
        } else renamedCrumb = `${product!.brand} ${product!.name}`;

        return (
          <div className={styles.crumb} key={crumb}>
            <Link to={currentLink}>{renamedCrumb}</Link>
          </div>
        );
      }
    });

  return (
    <div className={styles.breadcrumbs}>
      <div onClick={() => navigate('/')} className={styles.crumb}>Главная</div>
      {crumbs}
    </div>
  );
};
