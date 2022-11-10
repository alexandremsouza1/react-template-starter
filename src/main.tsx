import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import Router from './routes';
import { store } from './app/store';
import './i18n';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.Fragment>
      <Provider store={store}>
        <App />
      </Provider>
  </React.Fragment>
);
