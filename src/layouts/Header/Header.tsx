import React from 'react';
import HeaderTop from '@/layouts/Header/HeaderTop';
import HeaderBottom from '@/layouts/Header/HeaderBottom';
import Button from '@/components/Button';
import InputField from '@/components/InputField';
import consultant from '@/assets/images/consultant.png';
import sprite from '@/assets/sprite/sprite.svg';
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <HeaderTop />
      </div>
      <div className={styles.line}></div>
      <div className={styles.wrap}>
        <HeaderBottom />
      </div>
      <div className={styles.line}></div>
    </header >
  );
};