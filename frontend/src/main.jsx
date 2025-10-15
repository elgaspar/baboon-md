import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import initEasterEgg from '@utils/easterEgg.jsx';

initEasterEgg();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
