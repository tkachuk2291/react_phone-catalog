import React from 'react';
import styles from './AsideMenu.module.scss';

interface AsideMenuInterface {
  setIsOpen: (open: boolean) => void;
}

export const AsideMenu: React.FC<AsideMenuInterface> = ({ setIsOpen }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__imgContainer}>
        <img
          className={styles.sidebar__logo}
          alt="asideIcon"
          src="img/aside/sidebar/asideLogoMobile.svg"
        />
        <button
          className={styles.sidebar__closeButton}
          onClick={() => setIsOpen(false)}
        >
          <img
            className={styles.sidebar__icon}
            alt="asideLogo"
            src="img/aside/sidebar/asideCloseMobile.svg"
          />
        </button>
      </div>
      <div className={`${styles.sidebar__container}`}>
        <div className={styles.content}>
          <p className={styles.content__text}>home</p>
          <p className={styles.content__text}>Phones</p>
          <p className={styles.content__text}>tablets</p>
          <p className={styles.content__text}>accessories</p>
        </div>
      </div>
      <div className={styles.footer}>
        <button className={styles.footer__favouritesButton}>
          <img
            className={styles.footer__favouritesImg}
            alt="footerBasketLogo"
            src="img/aside/footer/favouritesMobile.png"
          />
        </button>
        <button className={styles.footer__basketButton}>
          <img
            className={styles.footer__basketImg}
            alt="footerBasketLogo"
            src="img/aside/footer/basketMobile.png"
          />
        </button>
      </div>
    </aside>
  );
};
