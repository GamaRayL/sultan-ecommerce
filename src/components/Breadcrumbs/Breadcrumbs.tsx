import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import products from '@/store/db.json';
import styles from './styles.module.scss';

export const Breadcrumbs = () => {
  const location = useLocation();
  let currentLink = '';

  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink += `/${crumb}`;

      let product = products.filter(p => p.id == Number(crumb))[0];
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
