import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "@/store/reducers/basketSlice/basketSlice";
import { useAppSelector } from "@/hooks";
import { productAPI } from "@/services/productService/productService";
import Button from "@/components/Button";
import DescriptionList from "@/components/DescriptionList";
import Loader from "@/components/Loader";
import { IProduct } from "@/types";
import sprite from "@/assets/sprite/sprite.svg";
import styles from "./styles.module.scss";

const CardPage = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = productAPI.useFetchProductQuery(Number(id));
  const items = useAppSelector(state => state.basket.basketItems);
  const [quantity, setQuantity] = useState<number[]>([]);
  const dispatch = useDispatch();

  function getQuantityUpdate(id: number) {
    return items.map((item) => {
      if (item.id === id) return item.quantity;
    });
  }

  // const getQuantity = (id: number): number => {
  //   const basketItem = items.find((item) => item.id === id);
  //   const { quantity } = basketItem;

  //   return quantity;
  // };


  function onClickIncreaseHandler(product: IProduct) {
    dispatch(addProduct(product));
    console.log(product.id);
    setQuantity(getQuantityUpdate(product.id));
  }

  function onClickDecreaseHandler(id: number) {
    dispatch(removeProduct(id));
  }

  const careObj = {
    body: "Уход за телом",
    hands: "Уход за руками"
  };

  return (
    <>
      {isLoading && <div className={styles.catalog__other}><Loader /></div>}
      {error && <div className={styles.catalog__other}><h2>Возникла ошибка при загрузке контента</h2></div>}
      {product &&
        <div className={styles.card} >

          <div className={styles.card__img}>
            <img src={product[0].img} alt="Product" />
          </div>

          <div className={styles.card__description}>
            <p className={styles.card__available}>В наличии</p>
            <div className={styles.title}>
              <span className={styles.title__brand}>{product[0].brand} </span>
              <span className={styles.title__name}>{product[0].name}</span>
            </div>

            <div className={styles.container}>
              <svg className={styles.container__img}>
                <use xlinkHref={`${sprite}#${product[0].package}`}></use>
              </svg>
              <span className={styles.container__value}>{product[0].size}</span>
            </div>

            <div className={styles.payment}>
              <div className={styles.payment__price}>{product[0].price} ₸</div>
              <div className={styles.counter}>
                <button className={styles.counter__decrease} onClick={() => onClickDecreaseHandler(product[0].id)}>-</button>
                <p className={styles.counter__number}>{quantity}</p>
                <button className={styles.counter__increase} onClick={() => onClickIncreaseHandler(product[0])}>+</button>
              </div>
              <Button onClick={() => onClickIncreaseHandler(product[0])} iconSize={23} icon="basket">
                В корзину
              </Button>
            </div>

            <div className={styles.interaction}>
              <div className={styles.interaction__share}>
                <svg>
                  <use xlinkHref={`${sprite}#share`}></use>
                </svg>
              </div>
              <div className={styles.interaction__info}>
                При покупке от <span className={styles.interaction__weight}>10 000 ₸ </span>бесплатная доставка по Кокчетаву и области
              </div>
              <Button color="inherit" variant="outlined" icon="download" iconSize={17}>Прайс-лист</Button>
            </div>

            <div>
              <div className={styles.list}>
                <DescriptionList prop="Производитель" value={product[0].vendor} />
                <DescriptionList prop="Бренд" value={product[0].brand} />
                <DescriptionList prop="Артикул" value={product[0].article} />
                <DescriptionList prop="Штрихкод" value={product[0].barcode} />
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.description__title}>Описание <span>▲</span></div>
              <p className={styles.description__info}>{product[0].description}</p>
            </div>
            <div className={styles.specification}>
              <div className={styles.specification__title}>Характеристики <span>▲</span></div>
              <div className={styles.list}>
                <DescriptionList prop="Назначение" value="Уход за телом" />
                <DescriptionList prop="Тип" value="крем" />
                <DescriptionList prop="Производитель" value={product[0].vendor} />
                <DescriptionList prop="Бренд" value={product[0].brand} />
                <DescriptionList prop="Артикул" value={product[0].article} />
                <DescriptionList prop="Штрихкод" value={product[0].barcode} />
                <DescriptionList prop="Вес" value={product[0].size} />
                <DescriptionList prop="Объем" value={product[0].size} />
                <DescriptionList prop="Кол-во в коробке" value="90" />
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};
export default CardPage;