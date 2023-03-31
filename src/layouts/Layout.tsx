import React from 'react';
import { Header } from '@/layouts/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/layouts/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

const Layout = () => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <main style={{ maxWidth: '1370px', padding: 0, margin: '0 auto', marginBottom: '80px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;