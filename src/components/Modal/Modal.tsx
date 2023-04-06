import React, { FC } from 'react';
import IModal from './type';
import styles from './styles.module.scss';

export const Modal: FC<IModal> = ({ active, setActive, children }) => {
  return (
    <div className={active ? `${styles.modal} ${styles.modal_active}` : styles.modal} onClick={() => setActive(false)}>
      <div className={active ? `${styles.content} ${styles.content_active}` : styles.content} onClick={(e) => e.stopPropagation()}>{children}</div>
    </div >
  );
};
