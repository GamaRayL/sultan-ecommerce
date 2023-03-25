import React from 'react';
import sprite from '@/assets/sprite/sprite.svg';
import styles from "./styles.module.scss";
import { InputField } from '@/components/common/InputField';
import { Button } from '@/components/common/Button';
import visa from '@/assets/images/visa.png';
import mastercard from '@/assets/images/mastercard.png';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.theme}>
        <div className={styles.wrap}>
          <div>
            <div className={styles.company}>
              <div className={styles.logo}>
                <svg className={styles.icon}>
                  <use xlinkHref={`${sprite}#logo`}></use>
                </svg>
              </div>
              <p className={styles.company__info}>Компания «Султан» — снабжаем розничные магазины товарами
                "под ключ" в Кокчетаве и Акмолинской области
              </p>
            </div>
            <div className={styles.subscribe}>
              <span className={styles.subscribe__info}>Подпишись на скидки и акции</span>
              <InputField />
            </div>
          </div>
          <ul className={styles.list}>
            <h3 className={styles.title}>Меню сайта:</h3>
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
          <ul className={styles.list}>
            <h3 className={styles.title}>Категории:</h3>
            <li className={styles.item}>
              <a href="#" className={styles.link} target="_blank">Бытовая химия</a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.link} target="_blank">Косметика и гигиена</a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.link} target="_blank">Товары для дома</a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.link} target="_blank">Товары для детей и мам</a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.link} target="_blank">Посуда</a>
            </li>
          </ul>
          <div>
            <h3 className={styles.title}>Скачать прайс-лист:</h3>
            <Button />
            <span className={styles.info}>Связь в мессенджерах:</span>
            <div className={styles.social}>
              <div className={styles.social__icon}>
                <svg className={styles.icon}>
                  <use xlinkHref={`${sprite}#whatsapp`}></use>
                </svg>
              </div>
              <div className={styles.social__icon}>
                <svg className={styles.icon}>
                  <use xlinkHref={`${sprite}#telegram`}></use>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <h3 className={styles.title}>Контакты:</h3>
            <div className={styles.consultant}>
              <p className={`${styles.info} ${styles.info_weight}`}>+7 (777) 490-00-91</p>
              <p className={`${styles.info} ${styles.info_light}`}>время работы: 9:00-20:00</p>
              <a href='#' className={`${styles.info} ${styles.info_call}`} target="_blank">Заказать звонок</a>
            </div>
            <div className={styles.contact}>
              <p className={`${styles.info} ${styles.info_weight}`}>opt.sultan@mail.ru</p>
              <p className={`${styles.info} ${styles.info_light}`}>На связи в любое время</p>
            </div>
            <div>
              <div className={styles.card}>
                <img className={styles.card__icon} src={visa} />
                <img className={styles.card__icon} src={mastercard} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};