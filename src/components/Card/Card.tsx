import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@/hooks";
import { addProduct } from '@/store/reducers/basketSlice';
import Button from "@/components/Button";
import ICard from './type';
import sprite from "@/assets/sprite/sprite.svg";
import styles from "./styles.module.scss";

export const Card: FC<ICard> = ({ product }) => {
  const dispatch = useAppDispatch();

  function onClickAddProductHandler() {
    dispatch(addProduct(product));
  }

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
          <Link to={`${product.id}`}>
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
            <Button onClick={onClickAddProductHandler} icon="basket" buttonSize="small" iconSize={27} uppercase>
              В корзину
            </Button>
          </div>
        </div>
      </div>
    </div >
  );
};