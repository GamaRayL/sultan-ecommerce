import React, { FC, useState } from "react";
import sprite from "@/assets/sprite/sprite.svg";
import styles from "./styles.module.scss";

export const HeaderTop: FC = () => {

  return (
    <div className={styles.top}>
      <div className={styles.box}>
        <div className={styles.contact}>
          <div className={styles.top__icon}>
            <svg className={styles.icon}>
              <use xlinkHref={`${sprite}#location`}></use>
            </svg>
          </div>
          <div>
            <p className={`${styles.info} ${styles.info_weight}`}>г. Кокчетав, ул. Ж. Ташенова 129Б</p>
            <p className={`${styles.info} ${styles.info_light}`}>(Рынок Восточный)</p>
          </div>
        </div>
        <div className={styles.contact}>
          <div>
            <svg width={20} height={20} className={styles.icon}>
              <use xlinkHref={`${sprite}#message`}></use>
            </svg>
          </div>
          <div>
            <p className={`${styles.info} ${styles.info_weight}`}>opt.sultan@mail.ru</p>
            <p className={`${styles.info} ${styles.info_light}`}>На связи в любое время</p>
          </div>
        </div>
      </div>

      <div className={styles.menu}>
        <input id={styles.menu__toggle} type="checkbox" />
        <label className={styles.menu__btn} htmlFor={styles.menu__toggle}>
          <span></span>
        </label>
        {true && <nav className={styles.menu__nav}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <a href="#" className={styles.menu__link} target="_blank">О компании</a>
            </li>
            <li className={styles.menu__item}>
              <a href="#" className={styles.menu__link} target="_blank">Доставка и оплата</a>
            </li>
            <li className={styles.menu__item}>
              <a href="#" className={styles.menu__link} target="_blank">Возврат</a>
            </li>
            <li className={styles.menu__item}>
              <a href="#" className={styles.menu__link} target="_blank">Контакты</a>
            </li>
          </ul>
        </nav>}

      </div>
      <div className={styles.logo}>
        <svg className={styles.icon}>
          <use xlinkHref={`${sprite}#logo`}></use>
        </svg>
      </div>
      <div className={styles.basket}>
        <div className={styles.basket__icon}>
          <svg className={styles.icon}>
            <use xlinkHref={`${sprite}#basket`}></use>
          </svg>
          <div className={styles.basket__count}>3</div>
        </div>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="#" className={styles.link} target="_blank">О компании</a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link} target="_blank">Доставка и оплата</a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link} target="_blank">Возврат</a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link} target="_blank">Контакты</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};