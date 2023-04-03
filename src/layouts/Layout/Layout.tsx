import React from 'react';
import { Outlet } from 'react-router-dom';
import Breadcrumbs from '@/components/Breadcrumbs';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import styles from "./styles.module.scss";

export const Layout = () => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};