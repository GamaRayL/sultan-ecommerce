import React from 'react';
import sprite from '@/assets/sprite/sprite.svg';
import styles from "./styles.module.scss";
import { InputField } from '@/components/common/InputField';
import { Button } from '@/components/common/Button';
import visa from '@/assets/images/visa.png';
import mastercard from '@/assets/images/mastercard.png';

export const Footer = () => {
  return (
    <footer>
      <div className={styles.theme}>
        <div className={styles.wrap}>
          <div className={styles.footer}>
            <div>
              <div className={styles.company}>
                <div className={styles.logo}>
                  <svg className={styles.icon}>
                    <use xlinkHref={`${sprite}#logo`}></use>
                  </svg>
                </div>
                <p className={styles.company__info}>
                  Компания «Султан» — снабжаем <br /> розничные магазины товарами <br />
                  "под ключ" в Кокчетаве и Акмолинской <br /> области
                </p>
              </div>
              <div className={styles.subscribe}>
                <p className={styles.subscribe__info}>Подпишись на скидки и акции</p>
                <InputField placeholder='Введите ваш E-mail' icon='arrow' />
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
              <Button icon='download' buttonSize='large'>Прайс-лист</Button>
              <p className={styles.info}>Связь в мессенджерах:</p>
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
                <div className={styles.cards}>
                  <div className={styles.cards__icon}>
                    <svg className={styles.icon}>
                      <use xlinkHref={`${sprite}#visa`}></use>
                    </svg>
                  </div>
                  <div className={styles.cards__icon}>
                    <svg className={styles.icon}>
                      <use xlinkHref={`${sprite}#mastercard`}></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};