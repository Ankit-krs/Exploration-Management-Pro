import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Disable mouse wheel value modification on all input type="number" globally
if (typeof document !== 'undefined') {
  document.addEventListener('wheel', function (e) {
    const activeEl = document.activeElement;
    if (activeEl instanceof HTMLInputElement && activeEl.type === 'number') {
      activeEl.blur();
    }
  }, { passive: true });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

