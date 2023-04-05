import React, { FC } from "react";
import HeaderTop from "@/layouts/Header/HeaderTop";
import HeaderBottom from "@/layouts/Header/HeaderBottom";
import styles from "./styles.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <HeaderTop />
      </div>
      <div className={styles.line}></div>
      <div className={styles.wrap}>
        <HeaderBottom />
      </div>
      <div className={styles.line}></div>
    </header >
  );
};