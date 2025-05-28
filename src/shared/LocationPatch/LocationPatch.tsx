import styles from '../../shared/LocationPatch/LocationPatch.module.scss';
import { useLocation } from 'react-router-dom';


export const LocationPatch = () => {
  const location = useLocation()

  return (
    <div className={styles.locationPatch__locataionContaier}>
      <img
        className={styles.locationPatch__img}
        alt="home"
        src="./img/Catalog/Home.svg"
      />
      <img
        className={styles.locationPatch__img}
        alt="arrow"
        src="./img/Catalog/arrowRight.svg"
      />
      <p className={styles.locationPatch__textLocation}>
        {location.pathname.replace(/^\/|\/$/g, '')}
      </p>
    </div>
  );
}
