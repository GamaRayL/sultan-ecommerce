import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import products from '@/store/db.json';

export const Breadcrumbs = () => {
  const location = useLocation();
  let currentLink = '';

  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink += `/${crumb}`;

      let product = products.filter(p => p.article == crumb)[0];
      let renamedCrumb;

      if (crumb == 'catalog') {
        renamedCrumb = 'Каталог';
      } else if (crumb == 'home') {
        renamedCrumb = 'Главная';
      } else renamedCrumb = `${product.brand} ${product.name}`;

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
