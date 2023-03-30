import React, { FC } from 'react';
import styles from './styles.module.scss';
import sprite from '@/assets/sprite/sprite.svg';
import { Button } from '@/components/common/Button';
import { Link } from 'react-router-dom';

interface IProduct {
  id: number;
  brand: string;
  name: string;
  img: string;
  description: string;
  barcode: string;
  vendor: string;
  price: number;
  size: string;
  package: string;
  article: string;
  target: string[];
  weight: string;
}

interface ICardProps {
  product: IProduct;
}

export const Card = ({ product }: ICardProps) => {

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={product.img} alt="Товар" />
      </div>

      <div className={styles.description}>
        <div className={styles.container}>
          <svg className={styles.container__img}>
            <use xlinkHref={`${sprite}#${product.package}`}></use>
          </svg>
          <span className={styles.container__value}>{product.size}</span>
        </div>

        <div className={styles.title}>
          <Link to={`${product.article}`}>
            <span className={styles.title__brand}>{product.brand} </span>
            <span className={styles.title__name}>{product.name}</span>
          </Link>

        </div>

        <div className={styles.list}>
          <dl className={styles.list__row}>
            <dt className={styles.list__prop}>Штрихкод:</dt>
            <dd className={styles.list__value}>{product.barcode}</dd>
          </dl>
          <dl className={styles.list__row}>
            <dt className={styles.list__prop}>Производитель:</dt>
            <dd className={styles.list__value}>{product.vendor}</dd>
          </dl>
          <dl className={styles.list__row}>
            <dt className={styles.list__prop}>Бренд:</dt>
            <dd className={styles.list__value}>{product.brand}</dd>
          </dl>
        </div>

        <div className={styles.payment}>
          <span className={styles.payment__value}>{product.price} ₸</span>
          <div className={styles.payment__btn}>
            <Button icon='basket' buttonSize='small' >
              В корзину
            </Button>
          </div>
        </div>
      </div>
    </div >
  );
};