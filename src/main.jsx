import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import { ToggleProvider } from './context/Context.jsx';
import './18n.js';
import { Suspense } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToggleProvider>
      <Suspense fallback={<div>Загрузка...</div>}>
        <App />
      </Suspense>
    </ToggleProvider>
  </React.StrictMode>,
);
