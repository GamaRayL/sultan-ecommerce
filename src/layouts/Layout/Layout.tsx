import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import styles from "./styles.module.scss";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Breadcrumbs />
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};