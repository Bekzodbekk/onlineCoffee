import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app/App';
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
