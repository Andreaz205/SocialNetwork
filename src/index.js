import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";
import store from "./redux/store";
import AppWrapper from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <AppWrapper />
      </Provider>
    </BrowserRouter>
  </>
);


