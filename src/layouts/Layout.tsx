import React from 'react';
import { Header } from '@/layouts/Header';
import { Link, Outlet } from 'react-router-dom';
import { Footer } from '@/layouts/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

const Layout = () => {
  return (
    <>
      <Header />
      {/* <div>
        <Link to='/card'>Card</Link>
        <Link to='/basket'>Basket</Link>
      </div> */}
      <Breadcrumbs />
      <main style={{ maxWidth: '1332px', padding: 0, margin: '0 auto' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;