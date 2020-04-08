import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import StoreContextProvider from './components/contexts/StoreContext';

ReactDOM.render(
  <React.StrictMode>
    <StoreContextProvider>
      <Router>
        <App />
      </Router>
    </StoreContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
