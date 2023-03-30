import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '@/store/products.json';
import styles from "./styles.module.scss";
import sprite from '@/assets/sprite/sprite.svg';
import { Button } from '@/components/common/Button';
import DescriptionList from '@/components/common/DescriptionList';

interface IProduct {
  id: number;
  brand: string;
  name: string;
  img: string;
  barcode: string;
  vendor: string;
  price: number;
  size: string;
  package: string;
  article: string;
  description: string;
  target: string[];
  weight: string;
}

interface ICareCard {
  care: 'body' | 'hands';
}

const CardPage = () => {
  const { article } = useParams();
  const [card, setCard] = useState<IProduct>();
  const careObj = {
    body: 'Уход за телом',
    hands: 'Уход за руками'
  };

  useEffect(() => {
    const product = products.filter(item => item.article === article);
    setCard(product[0]);
    window.scrollTo(0, 0);
  }, [article]);


  return (
    <div className={styles.card}>

      <div className={styles.card__img}>
        <img src={card?.img} alt="Product" />
      </div>

      <div className={styles.card__description}>
        <p className={styles.card__available}>В наличии</p>
        <div className={styles.title}>
          <span className={styles.title__brand}>{card?.brand} </span>
          <span className={styles.title__name}>{card?.name}</span>
        </div>

        <div className={styles.container}>
          <svg className={styles.container__img}>
            <use xlinkHref={`${sprite}#${card?.package}`}></use>
          </svg>
          <span className={styles.container__value}>{card?.size}</span>
        </div>

        <div className={styles.payment}>
          <div className={styles.payment__price}>{card?.price} ₸</div>
          <div className={styles.counter}>
            <button className={styles.counter__decrease}>-</button>
            <p className={styles.counter__number}>1</p>
            <button className={styles.counter__increase}>+</button>
          </div>
          <Button iconSize={23} icon='basket'>
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
          <Button color='inherit' variant='outlined' icon='download' iconSize={17}>Прайс-лист</Button>
        </div>

        <div>
          <div className={styles.list}>
            <DescriptionList prop='Производитель' value={card?.vendor} />
            <DescriptionList prop='Бренд' value={card?.brand} />
            <DescriptionList prop='Артикул' value={card?.article} />
            <DescriptionList prop='Штрихкод' value={card?.barcode} />
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.description__title}>Описание <span>▲</span></div>
          <p className={styles.description__info}>{card?.description}</p>
        </div>
        <div className={styles.specification}>
          <div className={styles.specification__title}>Характеристики <span>▲</span></div>
          <div className={styles.list}>
            <DescriptionList prop='Назначение' value="Уход за телом" />
            <DescriptionList prop='Тип' value="крем" />
            <DescriptionList prop='Производитель' value={card?.vendor} />
            <DescriptionList prop='Бренд' value={card?.brand} />
            <DescriptionList prop='Артикул' value={card?.article} />
            <DescriptionList prop='Штрихкод' value={card?.barcode} />
            <DescriptionList prop='Вес' value={card?.weight} />
            <DescriptionList prop='Объем' value={card?.weight} />
            <DescriptionList prop='Кол-во в коробке' value="90" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardPage;