import React, { FC } from 'react';
import styles from "./styles.module.scss";

interface ICareCard {
  care: 'body' | 'hands';
}

export const CareCard: FC<ICareCard> = ({ care }) => {
  const careObj = {
    body: 'Уход за телом',
    hands: 'Уход за руками'
  };

  return (
    <div className={styles.card}>
      {careObj[care]}
    </div>
  );
};
