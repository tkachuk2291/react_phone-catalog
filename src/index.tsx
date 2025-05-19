import { createRoot } from 'react-dom/client';
import { App } from './App';
import 'reset-css';
import './styles/index.scss';
import './styles/SwiperOverrides.scss';
createRoot(document.getElementById('root') as HTMLElement).render(<App />);
