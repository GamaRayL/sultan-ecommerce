import { Button } from '@/components/common/Button';
import { InputField } from '@/components/common/InputField';
import Input from '@/components/Input';
import React from 'react';
import styles from './styles.module.scss';

export const Filter = () => {
  return (
    <div className={styles.filter}>
      <h3 className={`${styles.filter__title} ${styles.title}`}>Подбор по параметрам</h3>
      <form className={styles.form}>

        <div className={styles.price}>
          <p className={styles.price__title}>Цена
            <span className={styles.price__currency}> ₸</span>
          </p>

          <div className={styles.price__block}>
            <Input />
            <span className={styles.price__dash}>-</span>
            <Input />
          </div>
        </div>

        <div className={styles.vendor}>
          <p className={styles.title}>Производитель</p>
          <div className={styles.vendor__input}>
            <InputField icon='search' placeholder='Поиск...' />
          </div>
          <label className={styles.vendor__label}>
            <input className={styles.vendor__checkbox} type="checkbox" />
            <span className={styles.vendor__name}>Grifon</span>
            <span className={styles.vendor__sum}>(56)</span>
          </label>
          <p className={styles.vendor__show}>Показать все
            <span className={styles.vendor__icon}>▼</span>
          </p>
        </div>

        <div className={styles.filter__tools}>
          <Button>Показать</Button>
          <Button icon='delete' iconSize={25} buttonSize='small' />
        </div>

        <h3 className={`${styles.filter__title} ${styles.title}`}>Уход за телом</h3>
        <h3 className={`${styles.filter__title} ${styles.title}`}>Уход за руками</h3>
      </form >
    </div >
  );
};
