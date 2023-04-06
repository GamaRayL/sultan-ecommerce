import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@/hooks";
import { addProduct } from "@/store/reducers/basketSlice";
import Button from "@/components/Button";
import ICard from "./type";
import sprite from "@/assets/sprite/sprite.svg";
import styles from "./styles.module.scss";

export const Card: FC<ICard> = ({ product }) => {
  const { price, size, pack, img, id, name, brand, barcode, vendor } = product;
  const dispatch = useAppDispatch();

  function onClickAddProductHandler() {
    dispatch(addProduct(product));
  }

  return (
    <div className={styles.card}>
      <img src={img} height={194} loading="lazy" alt="Товар" />

      <div className={styles.description}>
        <div className={styles.container}>
          <svg className={styles.container__img}>
            <use xlinkHref={`${sprite}#${pack}`}></use>
          </svg>
          <span className={styles.container__value}>{size}</span>
        </div>

        <div className={styles.title}>
          <Link to={`${id}`}>
            <span className={styles.title__brand}>{brand} </span>
            <span className={styles.title__name}>{name}</span>
          </Link>

        </div>

        <div className={styles.list}>
          <dl className={styles.list__row}>
            <dt className={styles.list__prop}>Штрихкод:</dt>
            <dd className={styles.list__value}>{barcode}</dd>
          </dl>
          <dl className={styles.list__row}>
            <dt className={styles.list__prop}>Производитель:</dt>
            <dd className={styles.list__value}>{vendor}</dd>
          </dl>
          <dl className={styles.list__row}>
            <dt className={styles.list__prop}>Бренд:</dt>
            <dd className={styles.list__value}>{brand}</dd>
          </dl>
        </div>

        <div className={styles.payment}>
          <span className={styles.payment__value}>{price} ₸</span>
          <div className={styles.payment__btn}>
            <Button
              icon="basket"
              buttonSize="small"
              iconSize={27}
              isUpperCase
              onClick={onClickAddProductHandler}
            >
              В корзину
            </Button>
          </div>
        </div>
      </div>
    </div >
  );
};