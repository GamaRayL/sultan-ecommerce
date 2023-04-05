import React, { FC } from "react";
import { useAppDispatch } from "@/hooks";
import { addProduct, deleteProduct, removeProduct } from '@/store/reducers/basketSlice';
import Button from "@/components/Button";
import sprite from "@/assets/sprite/sprite.svg";
import { IProduct } from "@/types";
import IBasketCard from './type';
import styles from "./styles.module.scss";

export const BasketCard: FC<IBasketCard> = ({ product }) => {
  const dispatch = useAppDispatch();

  function onClickDecreaseHandler(id: number) {
    dispatch(removeProduct(id));
  }

  function onClickIncreaseHandler(product: IProduct) {
    dispatch(addProduct(product));
  }

  function onClickDeleteHandler(id: number) {
    dispatch(deleteProduct(id));
  }

  return (
    <div className={styles.item}>
      <div className={styles.item__img}>
        <img src={product.img} alt="item" />
      </div>

      <div className={styles.description}>

        <div className={styles.container}>
          <svg className={styles.container__img}>
            <use xlinkHref={`${sprite}#${product.package}`}></use>
          </svg>
          <span className={styles.container__value}>{product.size}</span>
        </div>

        <h2 className={styles.description__title}>{product.brand} {product.name}</h2>

        <p className={styles.description__info}>{product.description}</p>

      </div>

      <div className={styles.item__tools}>
        <div className={styles.line}></div>
        <div className={styles.counter}>
          <button className={styles.counter__decrease} onClick={() => onClickDecreaseHandler(product.id)}>-</button>
          <p className={styles.counter__number}>{product.quantity}</p>
          <button className={styles.counter__increase} onClick={() => onClickIncreaseHandler(product)}>+</button>
        </div>

        <div className={styles.line}></div>
        <h2 className={styles.item__price}>{product.totalprice} ₸</h2>

        <div className={styles.line}></div>
        <div className={styles.item__delete}>
          <Button onClick={() => onClickDeleteHandler(product.id)} icon="delete" buttonSize="small" iconSize={25} />
        </div>
      </div>
    </div>
  );
};
