import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/styles.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import NotasProvider from './context/NotasContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotasProvider>
      <RouterProvider router={router}/>
    </NotasProvider>
  </React.StrictMode>
);
