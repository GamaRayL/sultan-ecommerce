import React, { FC } from "react";
import styles from "./styles.module.scss";

export const Loader: FC = () => {
  return (
    <div className={styles.loadingspinner}>
      <div id={styles.square1}></div>
      <div id={styles.square2}></div>
      <div id={styles.square3}></div>
      <div id={styles.square4}></div>
      <div id={styles.square5}></div>
    </div>
  );
};
