import { IDescriptionList } from '@/types';
import React, { FC } from 'react';
import styles from "./styles.module.scss";

export const DescriptionList: FC<IDescriptionList> = ({ prop, value }) => {
  return (
    <dl className={styles.row}>
      <dt className={styles.prop}>{prop}: </dt>
      <dd className={styles.value}>{value}</dd>
    </dl>
  );
};
