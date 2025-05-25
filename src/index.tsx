import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import 'reset-css';
import './styles/index.scss';
import './styles/SwiperOverrides.scss';
import { Root } from './shared/utils/Root';


createRoot(document.getElementById('root') as HTMLDivElement).render(
  <Root />
);

// createRoot(document.getElementById('root') as HTMLElement).render(<App />);
