import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App.js';
import { HashRouter } from 'react-router-dom';



ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);


