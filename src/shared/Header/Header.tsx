import React, { useState } from 'react';
import styles from './Header.module.scss';
import { AsideMenu } from '../AsideMenu/AsideMenu';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.appHeader}>
      <div className={styles.appHeader__container}>
        <div className={styles.appHeader__contentContainer}>
          <picture className={styles.appHeader__picture}>
            <source
              media="(min-width: 1200px)"
              srcSet="img/Header/Desktop/headerLogoDesktop.svg"
            />
            <source
              media="(min-width: 640px)"
              srcSet="img/Header/Tablet/headerLogoTablet.svg"
            />
            <img
              className={styles.appHeader__logo}
              alt="headerLogo"
              src="img/Header/Mobile/headerLogoMobile.svg"
            />
          </picture>
          <div className={styles.appHeader__textContainer}>
            <p className={styles.appHeader__headerText}>home</p>
            <p className={styles.appHeader__headerText}>phones</p>
            <p className={styles.appHeader__headerText}>tablets</p>
            <p className={styles.appHeader__headerText}>accessories</p>
          </div>
        </div>
        <div className={styles.appHeader__imgContainer}>
          <button className={styles.appHeader__HeartLikeButton}>
            <picture className={styles.appHeader__picture}>
              <source
                media="(min-width: 1200px)"
                srcSet="img/Header/Desktop/heartLikeDesktop.svg"
              />
              <source
                media="(min-width: 640px)"
                srcSet="img/Header/Tablet/heartLikeTablet.svg"
              />
              <img
                className={styles.appHeader__iconHeart}
                src="img/Header/Tablet/heartLikeTablet.svg"
                alt="HeartLike"
              />
            </picture>
          </button>
          <button
            className={styles.appHeader__burgerButton}
            onClick={() => setIsOpen(true)}
          >
            <picture className={styles.appHeader__picture}>
              <source
                media="(min-width: 1200px)"
                srcSet="img/Header/Desktop/shoppingBagDesktop.svg"
              />
              <source
                media="(min-width: 640px)"
                srcSet="img/Header/Tablet/shoppingBagTablet.svg"
              />
              <img
                className={styles.appHeader__iconMobile}
                src="img/Header/Mobile/burgerIconMobile.svg"
                alt="BurgerIconMobile"
              />
            </picture>
          </button>
        </div>
      </div>
      {isOpen && <AsideMenu setIsOpen={setIsOpen} />}
    </header>
  );
};
