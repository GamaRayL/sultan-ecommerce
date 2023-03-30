import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '@/styles/App.scss';
import Layout from '@/layouts/Layout';
import CardPage from '@/pages/CardPage/CardPage';
import BasketPage from '@/pages/BasketPage';
import CatalogPage from '@/pages/CatalogPage/CatalogPage';
import NotfoundPage from '@/pages/NotfoundPage';
import HomePage from '@/pages/HomePage';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='catalog' element={<CatalogPage />} />
          <Route path='catalog/:article' element={<CardPage />} />
          <Route path='basket' element={<BasketPage />} />
          <Route path='*' element={<NotfoundPage />} />
        </Route>
      </Routes>
    </div >
  );
};

export default App;