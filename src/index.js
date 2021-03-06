import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';
import { LocaleProvider } from './contexts/locale.context';

import './index.scss';
import i18n from './components/i18next/i18next';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <LocaleProvider>
            <UserProvider>
              <CategoriesProvider>
                <CartProvider>
                  <App />
                </CartProvider>
              </CategoriesProvider>
            </UserProvider>
        </LocaleProvider>
      </Suspense>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


