import React, { useState, FormEvent, ChangeEvent, MouseEvent } from 'react';
import { productAPI } from "@/services/productService/productService";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { IProduct } from "@/types";
import styles from "./styles.module.scss";

export const AdminPage = () => {
  const obj = {
    brand: "Бренд",
    name: "Имя",
    img: "URL изображения",
    article: "Артикул",
    barcode: "Штрихкод",
    description: "Описание",
    vendor: "Вендор",
    size: "Размер",
    price: "Цена",
  };
  const initialValues = {
    id: new Date().valueOf(),
    brand: "",
    name: "",
    img: "",
    description: "",
    target: [],
    article: "",
    barcode: "",
    vendor: "",
    package: "",
    size: "",
    price: 1,
    totalprice: 1,
    quantity: 1
  };

  const [values, setValues] = useState(initialValues);
  const [updates, setUpdates] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [createProduct, { }] = productAPI.useCreateProductMutation();
  const [updateProduct, { }] = productAPI.useUpdateProductMutation();
  const [deleteProduct, { }] = productAPI.useDeleteProductMutation();
  const { data: products } = productAPI.useFetchSortedProductsQuery({ sort: "price", order: "asc" });

  // Обновление значений формы добавления товара
  const onChangeHandler = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    console.log(name, value);

    // setValues({
    //   ...values,
    //   [name]: +value ? Number(value) : value,
    // });
  };

  // Добавление товара
  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();

    await createProduct(values);
  };

  // Обновление товара по клику
  const onUpdateHandler = (product: IProduct) => {
    updateProduct({ ...product, ...updates });
    setIsEdit(false);
  };

  // Удаление товара
  const onDeleteHandler = (e: MouseEvent, product: IProduct) => {
    e.stopPropagation();
    deleteProduct(product);
  };

  // Обновление значений текущего товара
  const onChangeProduct = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;

    setUpdates({
      ...updates,
      [name]: +value ? Number(value) : value,
    });
  };
  return (
    <>
      <div className={styles.container}>
        <form className={styles.create} onChange={onChangeHandler} onSubmit={onSubmitHandler}>
          {Object.entries(obj).map(([prop, value]) =>
            <div className={styles.create__item} key={prop}>
              <label>
                <p className={styles.create__title}>{value}</p>
                <InputField name={prop} />
              </label>
            </div>
          )}

          <div className={styles.create__item}>
            <fieldset id="pack">
              <p className={styles.create__title}>
                Упаковка
              </p>
              <div className={styles.create__box}>
                <label htmlFor="bottle">Бутыль</label>
                <input id="bottle" type="radio" name="package" value="bottle" />
                <label htmlFor="box">Коробка</label>
                <input id="box" type="radio" name="package" value="box" />
              </div>
            </fieldset>
          </div>

          <div className={styles.create__item}>
            <p className={styles.create__title}>Тип ухода</p>
            <div className={styles.create__care}>
              <label htmlFor="body">Тело</label>
              <input id="body" type="checkbox" name="target" value="body" />
              <label htmlFor="body">Руки</label>
              <input id="hands" type="checkbox" name="target" value="hands" />
              {/* <fieldset id="target" onChange={onChangeHandler}>
                <label htmlFor="body">Тело</label>
                <input onChange={onChangeHandler} id="body" type="radio" name="target" value="body" />
                <label htmlFor="body">Руки</label>
                <input onChange={onChangeHandler} id="hands" type="radio" name="target" value="hands" />
              </fieldset> */}
            </div>
          </div>

          <Button>Добавить продукт</Button>
        </form>

        <div className={styles.list}>
          <h2 className={styles.list__title}>Список товара</h2>
          {products && products.map((product: IProduct) =>
            <div className={styles.list__item} key={product.id}>
              <form id="form-update">
                <p className={styles.item}>{product.id}</p>
                {isEdit
                  ? <input className={styles.list__input} name="article" onChange={onChangeProduct} defaultValue={product.article} />
                  : <p className={styles.item}>{product.article}</p>}
                {isEdit
                  ? <input className={styles.list__input} name="barcode" onChange={onChangeProduct} defaultValue={product.barcode} />
                  : <p className={styles.item}>{product.barcode}</p>}
                {isEdit
                  ? <input className={styles.list__input} name="brand" onChange={onChangeProduct} defaultValue={product.brand} />
                  : <p className={styles.item}>{product.brand}</p>}
                {isEdit
                  ? <input className={styles.list__input} name="vendor" onChange={onChangeProduct} defaultValue={product.vendor} />
                  : <p className={styles.item}>{product.vendor}</p>}
                {isEdit
                  ? <input className={styles.list__input} name="img" onChange={onChangeProduct} defaultValue={product.img} />
                  : <p className={styles.item}>{product.img}</p>}
                {isEdit
                  ? <input className={styles.list__input} name="name" onChange={onChangeProduct} defaultValue={product.name} />
                  : <p className={styles.item}>{product.name}</p>}
                {isEdit
                  ? <input className={styles.list__input} name="description" onChange={onChangeProduct} defaultValue={product.description} />
                  : <p className={styles.item}>{product.description}</p>}
                {isEdit
                  ? <input className={styles.list__input} name="price" onChange={onChangeProduct} defaultValue={product.price} />
                  : <p className={styles.item}>{product.price}</p>}
                {isEdit
                  ? <input className={styles.list__input} name="package" onChange={onChangeProduct} defaultValue={product.package} />
                  : <p className={styles.item}>{product.package}</p>}
                {isEdit
                  ? <input className={styles.list__input} name="size" onChange={onChangeProduct} defaultValue={product.size} />
                  : <p className={styles.item}>{product.size}</p>}
                {isEdit
                  ? <input className={styles.list__input} name="target" onChange={onChangeProduct} defaultValue={product.target} />
                  : <p className={styles.item}>{product.target}</p>}
              </form>
              <div className={styles.list__tools}>
                {isEdit
                  ? <Button onClick={() => onUpdateHandler(product)}>Сохранить</Button>
                  : <Button onClick={() => setIsEdit(true)}>Изменить</Button>
                }
                <Button onClick={(e) => onDeleteHandler(e, product)}>Удалить</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
