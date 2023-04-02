import { Button } from '@/components/common/Button';
import { InputField } from '@/components/common/InputField';
import Input from '@/components/Input';
import { searchProduct, searchVendor } from '@/features/product/productSlice';
import { useAppSelector } from '@/hooks';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';

export const Filter = () => {
  const products = useAppSelector((state) => state.products.products);
  const vendors = useAppSelector((state) => state.products.vendors);
  const dispatch = useDispatch();
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [vendor, setVendor] = useState('');

  useEffect(() => {
    dispatch(searchVendor(vendor));
  }, [vendor]);

  function onSubmitHandler(e: any) {
    e.preventDefault();

    dispatch(searchProduct({ priceFrom, priceTo, vendor }));
  }

  console.log(vendors)

  function onChangePriceFrom(price: any) {
    setPriceFrom(price);
  }

  function onChangePriceTo(price: any) {
    setPriceTo(price);
  }

  function onChangeBrand(vendor: string) {
    setVendor(vendor);
    dispatch(searchVendor(vendor));
  }

  function getUniqueVendor(products: any) {
    let obj: any = {};

    products.map((product: any) => {
      if (obj[product.vendor]) {
        obj[product.vendor] += 1;
      } else obj[product.vendor] = 1;
    });

    return obj;
  }

  return (
    <div className={styles.filter}>
      <h3 className={`${styles.filter__title} ${styles.title}`}>Подбор по параметрам</h3>
      <form className={styles.form} onSubmit={(e) => onSubmitHandler(e)}>
        <div className={styles.price}>
          <p className={styles.price__title}>Цена
            <span className={styles.price__currency}> ₸</span>
          </p>

          <div className={styles.price__block}>
            <Input onChange={onChangePriceFrom} />
            <span className={styles.price__dash}>-</span>
            <Input defaultValue='10000' onChange={onChangePriceTo} />
          </div>
        </div>

        <div className={styles.vendor}>
          <p className={styles.title}>Производитель</p>
          <div className={styles.vendor__input}>
            <InputField onChange={onChangeBrand} icon='search' placeholder='Поиск...' />
          </div>

          <div className={styles.vendor__list}>
            {
              Object.keys(getUniqueVendor(products)).map((vendor) => {
                return (
                  <label key={vendor} className={styles.vendor__label}>
                    <input className={styles.vendor__checkbox} type="checkbox" />
                    <span className={styles.vendor__name}>{vendor}</span>
                    <span className={styles.vendor__sum}>({getUniqueVendor(products)[vendor]})</span>
                  </label>
                );
              })
            }
          </div>
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
