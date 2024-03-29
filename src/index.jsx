import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/main.scss';
import reportWebVitals from './reportWebVitals';
import sendToVercelAnalytics from './vitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals(sendToVercelAnalytics);
