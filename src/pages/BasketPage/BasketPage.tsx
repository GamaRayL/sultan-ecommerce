import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { deleteAllProducts } from '@/store/reducers/basketSlice';
import BasketCard from "@/pages/BasketPage/BasketCard";
import Button from "@/components/Button";
import Modal from '@/components/Modal';
import styles from "./styles.module.scss";

const BasketPage: FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.basket.basketItems);
  const totalAmount = useAppSelector(state => state.basket.totalAmount);

  const onClickHandler = () => {
    if (items.length > 0) {
      dispatch(deleteAllProducts());
      setModalActive(true);
    }
  };

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
        <Button onClick={onClickHandler}>Оформить заказ</Button>
        <Modal active={modalActive} setActive={setModalActive}>
          <div className={styles.order}>
            <div className={styles.order__box}>
              <h2 className={styles.order__title}>Спасибо за заказ</h2>
              <p className={styles.order__info}>Наш менеджер свяжется с вами в ближайшее время</p>
            </div>
          </div>
        </Modal>
        <h2 className={styles.bottom__totalprice}>{totalAmount} ₸</h2>
      </div>
    </>
  );
};
export default BasketPage;