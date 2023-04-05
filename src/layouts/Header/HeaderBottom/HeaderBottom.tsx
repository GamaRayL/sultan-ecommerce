import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/hooks";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import consultant from "@/assets/images/consultant.png";
import sprite from "@/assets/sprite/sprite.svg";
import styles from "./styles.module.scss";

export const HeaderBottom: FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const totalQuantity = useAppSelector(state => state.basket.totalQuantity);
  const totalAmount = useAppSelector(state => state.basket.totalAmount);
  const navigate = useNavigate();

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);


  return (
    <div className={styles.bottom}>
      <div className={styles.logo}>
        <svg className={styles.icon}>
          <use xlinkHref={`${sprite}#logo`}></use>
        </svg>
      </div>
      <Button icon="catalog" onClick={() => navigate("home/catalog")}>Каталог</Button>
      <div className={styles.line}></div>
      <InputField placeholder="Поиск" mode />
      <div className={styles.consultant}>
        <div className={styles.consultant__box}>
          <p className={`${styles.info} ${styles.info_weight}`}>+7 (777) 490-00-91</p>
          <p className={`${styles.info} ${styles.info_light}`}>время работы: 9:00-20:00</p>
          <a href="#" className={`${styles.info} ${styles.info_call}`} target="_blank">Заказать звонок</a>
        </div>
        <div className={styles.consultant__img}>
          <img src={consultant} alt="" />
        </div>
      </div>
      {windowWidth > 1260
        ? <Button buttonSize="medium" icon="download">Прайс-лист</Button>
        : null
      }
      <div className={styles.basket} onClick={() => navigate("home/catalog/basket")}>
        <div className={styles.basket__icon}>
          <svg className={styles.icon}>
            <use xlinkHref={`${sprite}#basket`}></use>
          </svg>
          <div className={styles.basket__count}>{totalQuantity}</div>
        </div>
        <div className={styles.basket__box}>
          <p className={`${styles.info} ${styles.info_light}`}>Корзина</p>
          <p className={`${styles.info} ${styles.info_weight}`}>{totalAmount} ₸ </p>
        </div>
      </div>
    </div>
  );
};