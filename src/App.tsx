import './App.scss';
import { Header } from './shared/Header/Header';
import { Footer } from './shared/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { LocationPatch } from './shared/LocationPatch/LocationPatch';


export const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      {location.pathname !== '/' && <LocationPatch />}
      <main className="App__main-content">
          <Outlet />
      </main>
        <Footer />
    </div>
);
}



