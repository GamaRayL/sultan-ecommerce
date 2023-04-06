import React, { useEffect, useState, FC, FormEvent, MouseEvent, ChangeEvent } from "react";
import { productAPI } from "@/services/productService/productService";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Input from "@/components/Input";
import Loader from "@/components/Loader";
import { IProduct } from '@/types';
import IFilter from './type';
import styles from "./styles.module.scss";

export const Filter: FC<IFilter> = (props) => {
  const { setPriceFrom, setPriceTo, setVendor, getCare } = props;

  const { data: productsPriceHighToLow, isLoading } = productAPI.useFetchSortedProductsQuery({ sort: "price", order: "desc" });
  const { data: productsVendorHightToLow } = productAPI.useFetchSortedProductsQuery({ sort: "vendor", order: "asc" });
  const maxPrice = productsPriceHighToLow?.[0].price;

  const [valuePriceFrom, setValuePriceFrom] = useState(0);
  const [valuePriceTo, setValuePriceTo] = useState<number | undefined>(maxPrice ?? 10000);
  const [vendorsObject, setVendorsObject] = useState({});

  let currentVendorArr: string[] = [];

  useEffect(() => {
    let obj: Record<string, number> = {};

    productsVendorHightToLow && productsVendorHightToLow.forEach((product: IProduct) => {
      const { vendor } = product;
      const oldValue = obj[vendor];

      obj[vendor] = oldValue ? oldValue + 1 : 1;
    });

    setVendorsObject(obj);
  }, [productsVendorHightToLow]);

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const formNode = e.target as HTMLFormElement;
    console.log(formNode);


    if (+valuePriceFrom > +valuePriceTo!) return;
    setPriceFrom(valuePriceFrom);
    setPriceTo(valuePriceTo);
    setVendor(currentVendorArr.join("&vendor[]="));
    setValuePriceFrom(0);
    setValuePriceTo(maxPrice);
    formNode.reset();
  };

  const onClickResetHandler = (e: MouseEvent) => {
    e.preventDefault();

    const formNode = e.currentTarget as HTMLFormElement;

    setPriceFrom(valuePriceFrom);
    setPriceTo(maxPrice);
    setValuePriceFrom(0);
    setVendor("");
    setValuePriceTo(maxPrice);

    formNode.reset();
  };

  const onChangePriceFrom = (value: string) => {
    const price = Number(value);
    setValuePriceFrom(price);
  };

  const onChangePriceTo = (value: string) => {
    const price = Number(value);
    setValuePriceTo(price);
  };

  const onSearchVendor = (event: ChangeEvent<HTMLInputElement>) => {
    const lowerValue = event.target.value.toLowerCase();

    let obj: Record<string, number> = {};

    productsVendorHightToLow && productsVendorHightToLow.filter(product => product.vendor.toLowerCase()
      .includes(lowerValue))
      .forEach((product: IProduct) => {
        const { vendor } = product;
        const oldValue = obj[vendor];

        obj[vendor] = oldValue ? oldValue + 1 : 1;
      });

    setVendorsObject(obj);
  };


  const onClickChooseVendor = (e: MouseEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (!currentVendorArr.includes(value)) {
      currentVendorArr.push(value);
    } else {
      currentVendorArr.splice(currentVendorArr.indexOf(value), 1);
    }
  };

  return (
    <div className={styles.filter}>
      {isLoading && <Loader />}
      {productsPriceHighToLow && <>
        <h3 className={`${styles.filter__title} ${styles.title}`}>Подбор по параметрам</h3>
        <form id="my-form" className={styles.form} onSubmit={onSubmitHandler}>
          <div className={styles.price}>
            <p className={styles.price__title}>Цена
              <span className={styles.price__currency}> ₸</span>
            </p>

            <div className={styles.price__block}>
              <Input priceValue={valuePriceFrom} onChange={onChangePriceFrom} />
              <span className={styles.price__dash}>-</span>

              <Input priceValue={valuePriceTo} onChange={onChangePriceTo} />
            </div>
          </div>

          <div className={styles.vendor}>
            <p className={styles.title}>Производитель</p>
            <div className={styles.vendor__input}>
              <InputField
                name="input-filter"
                icon="search"
                placeholder="Поиск..."
                onChange={onSearchVendor}
              />
            </div>

            <div className={styles.vendor__list}>
              {vendorsObject &&
                Object.entries(vendorsObject).map(([name, value]) => {
                  return (
                    <label key={name} className={styles.vendor__label} >
                      <input className={styles.vendor__checkbox} type="checkbox" value={name} onClick={onClickChooseVendor} />
                      <span className={styles.vendor__name}>{name}</span>
                      <span className={styles.vendor__name}>({String(value)})</span>
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
          <Button form="my-form" type="submit">Показать</Button>
          <Button
            form="my-form"
            icon="delete"
            iconSize={25}
            buttonSize="small"
            onClick={onClickResetHandler}
          />
        </div>

        <h3 className={`${styles.filter__title} ${styles.title}`} id="hands" onClick={getCare}>Уход за руками</h3>
        <h3 className={`${styles.filter__title} ${styles.title}`} id="hands" onClick={getCare}>Уход за телом</h3>
      </>}

    </div >
  );
};
