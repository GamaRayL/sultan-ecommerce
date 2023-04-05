import React, { FC } from "react";
import { useAppSelector } from "@/hooks";
import BasketCard from "@/pages/BasketPage/BasketCard";
import Button from "@/components/Button";
import styles from "./styles.module.scss";
import sprite from "@/assets/sprite/sprite.svg";

const BasketPage: FC = () => {
  const items = useAppSelector(state => state.basket.basketItems);
  const totalAmount = useAppSelector(state => state.basket.totalAmount);
  console.log(items);
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.header__title}>Корзина</h1>
      </div>

      <div className={styles.items}>
        {items && items.map(item =>
          <BasketCard key={item.id} product={item} />
        )}
      </div>

      <div className={styles.bottom}>
        <Button>Оформить заказ</Button>
        <h2 className={styles.bottom__totalprice}>{totalAmount} ₸</h2>
      </div>
    </>
  );
};
export default BasketPage;