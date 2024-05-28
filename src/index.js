import { createRoot } from 'react-dom/client';

import App from './App';
import path from 'path-browserify';
import { Buffer } from 'buffer';
import process from 'process';


createRoot(document.getElementById('root')).render(<App />);
