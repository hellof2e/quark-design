import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

import '@/sites/assets/styles/reset.scss';
import '@/utils/touchEmulator';

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,

  document.getElementById('root'),
);
