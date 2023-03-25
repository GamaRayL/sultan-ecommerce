import React from 'react';
import { Header } from '@/layouts/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/layouts/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main><Outlet /></main>
      <Footer />
    </>
  );
};
export default Layout;