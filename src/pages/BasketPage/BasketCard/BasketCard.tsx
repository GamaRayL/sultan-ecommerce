import React, { FC } from "react";
import { useAppDispatch } from "@/hooks";
import { addProduct, deleteProduct, removeProduct } from '@/store/reducers/basketSlice';
import Button from "@/components/Button";
import sprite from "@/assets/sprite/sprite.svg";
import { IProduct } from "@/types";
import IBasketCard from './type';
import styles from "./styles.module.scss";

export const BasketCard: FC<IBasketCard> = ({ product }) => {
  const { pack, size, img, brand, name, description, quantity, totalprice, id } = product;
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
      <img loading="lazy" width={281} height={181} src={img} alt="item" />

      <div className={styles.description}>
        <div className={styles.container}>
          <svg className={styles.container__img}>
            <use xlinkHref={`${sprite}#${pack}`}></use>
          </svg>
          <span className={styles.container__value}>{size}</span>
        </div>
        <h2 className={styles.description__title}>{brand} {name}</h2>
        <p className={styles.description__info}>{description}</p>
      </div>

      <div className={styles.item__tools}>
        <div className={styles.line}></div>
        <div className={styles.counter}>
          <button className={styles.counter__decrease} onClick={() => onClickDecreaseHandler(id)}>-</button>
          <p className={styles.counter__number}>{quantity}</p>
          <button className={styles.counter__increase} onClick={() => onClickIncreaseHandler(product)}>+</button>
        </div>
        <div className={styles.line}></div>
        <h2 className={styles.item__price}>{totalprice} ₸</h2>
        <div className={styles.line}></div>
        <div className={styles.item__delete}>
          <Button
            icon="delete"
            buttonSize="small"
            iconSize={25}
            onClick={() => onClickDeleteHandler(id)}
          />
        </div>
      </div>
    </div>
  );
};
