import React, { useEffect, useState, FC, Dispatch, SetStateAction } from 'react';
import { productAPI } from '@/services/ProductService';
import Button from '@/components/Button';
import InputField from '@/components/InputField';
import Input from '@/components/Input';
import Loader from '@/components/Loader';
import styles from './styles.module.scss';

interface FilterProps {
  setPriceFrom: Dispatch<SetStateAction<string>>;
  setPriceTo: Dispatch<SetStateAction<string>>;
  setVendor: Dispatch<SetStateAction<string>>;
}

export const Filter: FC<FilterProps> = (props) => {
  const { setPriceFrom, setPriceTo, setVendor } = props;
  const [valuePriceFrom, setValuePriceFrom] = useState('0');
  const [valuePriceTo, setValuePriceTo] = useState('385'); // Здесь заглушка. Как изменить на динамические данные с maxPrice
  const [vendorsObject, setVendorsObject] = useState({});
  const currentVendorArr: string[] = [];

  const { data: productsPriceHighToLow, isLoading, error } = productAPI.useFetchSortedProductsQuery({ sort: 'price', order: "desc" });
  const { data: productsVendorHightToLow } = productAPI.useFetchSortedProductsQuery({ sort: 'vendor', order: "asc" });
  // Проблема с checkbox после отправки формы. Нужно uncheck`нуть

  const maxPrice = String(productsPriceHighToLow?.[0].price);

  function onSubmitHandler(e: any) {
    e.preventDefault();

    if (+valuePriceFrom > +valuePriceTo) return;
    setPriceFrom(valuePriceFrom);
    setPriceTo(valuePriceTo);
    setVendor(currentVendorArr);
    e.target.reset();
    console.log(e.target)
    console.log(currentVendorArr);
  }

  function onClickResetHandler(e: any) {
    e.preventDefault();

    setPriceFrom(valuePriceFrom);
    setPriceTo(maxPrice);
    setValuePriceFrom('0');
    setValuePriceTo(maxPrice);
  }

  function onChangePriceFrom(price: any) {
    setValuePriceFrom(price);
  }

  function onChangePriceTo(price: any) {
    setValuePriceTo(price);
  }

  useEffect(() => {
    let obj: any = {};

    productsVendorHightToLow && productsVendorHightToLow.map((product: any) => {
      if (obj[product.vendor]) {
        obj[product.vendor] += 1;
      } else obj[product.vendor] = 1;
    });

    setVendorsObject(obj);
  }, [productsVendorHightToLow]);


  function onSearchVendor(value: string) {
    const lowerValue = value.toLowerCase();

    let obj: any = {};

    productsVendorHightToLow && productsVendorHightToLow.filter(product => product.vendor.toLowerCase()
      .includes(lowerValue))
      .map((product: any) => {
        if (obj[product.vendor]) {
          obj[product.vendor] += 1;
        } else obj[product.vendor] = 1;
      });

    setVendorsObject(obj);
  }


  function onChangeChooseVendor(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const checked = e.target.checked;

    if (!currentVendorArr.includes(value)) {
      currentVendorArr.push(value);
    } else {
      currentVendorArr.splice(currentVendorArr.indexOf(value), 1);
    }
    console.log(currentVendorArr);
  }



  return (
    <div className={styles.filter}>
      {isLoading && <Loader />}
      {productsPriceHighToLow && <>
        <h3 className={`${styles.filter__title} ${styles.title}`}>Подбор по параметрам</h3>
        <form className={styles.form} id="filter-form" onSubmit={(e) => onSubmitHandler(e)}>
          <div className={styles.price}>
            <p className={styles.price__title}>Цена
              <span className={styles.price__currency}> ₸</span>
            </p>

            <div className={styles.price__block}>
              <Input onChange={onChangePriceFrom} priceValue={valuePriceFrom} />
              <span className={styles.price__dash}>-</span>

              <Input priceValue={valuePriceTo} onChange={onChangePriceTo} />
            </div>
          </div>

          <div className={styles.vendor}>
            <p className={styles.title}>Производитель</p>
            <div className={styles.vendor__input}>
              <InputField onChange={onSearchVendor} icon='search' placeholder='Поиск...' />
            </div>

            <div className={styles.vendor__list}>
              {vendorsObject &&
                Object.keys(vendorsObject).map((vendor) => {
                  return (
                    <label key={vendor} className={styles.vendor__label} >
                      <input className={styles.vendor__checkbox} type="checkbox" value={vendor} onChange={(e) => onChangeChooseVendor(e)} />
                      <span className={styles.vendor__name}>{vendor}</span>
                      <span className={styles.vendor__sum}>({vendorsObject[vendor]})</span>
                    </label>
                  );
                })
              }
            </div>

            <p className={styles.vendor__show}>Показать все
              <span className={styles.vendor__icon}>▼</span>
            </p>
          </div>
        </form >

        <div className={styles.filter__tools}>
          <Button form='filter-form' type='submit'>Показать</Button>
          <Button onClick={onClickResetHandler} icon='delete' iconSize={25} buttonSize='small' />
        </div>

        <h3 className={`${styles.filter__title} ${styles.title}`}>Уход за руками</h3>
        <h3 className={`${styles.filter__title} ${styles.title}`}>Уход за телом</h3>
      </>}

    </div >
  );
};
