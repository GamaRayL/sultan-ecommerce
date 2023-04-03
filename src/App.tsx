import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/store';
import Layout from '@/layouts/Layout';
import CardPage from '@/pages/CardPage/CardPage';
import BasketPage from '@/pages/BasketPage/BasketPage';
import CatalogPage from '@/pages/CatalogPage/CatalogPage';
import NotfoundPage from '@/pages/NotfoundPage/NotfoundPage';
import HomePage from '@/pages/HomePage/HomePage';
import '@/styles/App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='app'>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path='catalog' element={<CatalogPage />}>
                <Route path='catalog/:id' element={<CardPage />} />
              </Route>
              <Route path='basket' element={<BasketPage />} />
              <Route path='*' element={<NotfoundPage />} />
            </Route>
          </Routes>
        </div >
      </Provider>
    </BrowserRouter>
  );
};

export default App;;