// Entry file for React
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root') as HTMLElement; // Get the root element of our HTML page
const root = ReactDOM.createRoot(rootElement); // Create the root component using createRoot() method provided by react-dom/client
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
