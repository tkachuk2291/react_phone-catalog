import styles from './Footer.module.scss';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.Footer}>
      <img
        className={styles.Footer__img}
        alt="Footer"
        src="img/Footer/LogoFooterMobile.svg"
      />
      <div className={styles.Footer__textContainer}>
        <a href='#' className={styles.Footer__link}>Github</a>
        <a href='#' className={styles.Footer__link}>Contacts</a>
        <a href='#'  className={styles.Footer__link}>rights</a>
      </div>

      <div className={styles.Footer__NavContainer}>
        <p className={styles.Footer__NavText}>Back to top</p>
        <button type="button" className={styles.Footer__NavButton}><a className={styles.Footer__Navlink} href="#"><img src='img/Footer/ArrowUpMobile.svg' alt="imgFooter" className={styles.Footer__Navimg}/> </a></button>
      </div>
    </footer>
  );
};
