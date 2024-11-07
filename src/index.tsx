import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import HomePage from './pages/home/home';


const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<HomePage />);
