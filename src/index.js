import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import RouteApp from './RouterApp';
import { Provider } from "react-redux";

import { store } from './redux/store';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

      <BrowserRouter>

        <RouteApp />
      </BrowserRouter>
    </Provider>

  </React.StrictMode>
);

