import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './CounterApp';
import "./index.css"
import { CounterProvider } from './Context/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <CounterProvider>
            <App />
        </CounterProvider>
  </React.StrictMode>
);

