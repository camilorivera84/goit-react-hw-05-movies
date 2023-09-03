import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './App.css';

ReactDOM.render(
  <BrowserRouter basename="/goit-react-hw-05-movies">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
