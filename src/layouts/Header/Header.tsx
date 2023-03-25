import React from 'react';
import sprite from '@/assets/sprite/sprite.svg';
import { Button } from '@/components/common/Button';
import { InputField } from '@/components/common/InputField';
import consultant from '@/assets/images/consultant.png';
import styles from "./styles.module.scss";
import { HeaderTop } from '@/layouts/Header/HeaderTop';
import { HeaderBottom } from '@/layouts/Header/HeaderBottom';

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