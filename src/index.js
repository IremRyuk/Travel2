import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import MainPaige from './MainPaige';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MainPaige />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
