import React  from 'react';
import styles from './HomePage.module.scss';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { ProductSlider } from './components/ProductSlider/ProductSlider';
import { MainSlider } from './components/MainSlider/MainSlider';
import { CategoryCard } from './components/CategoryCard/CategoryCard';
import { ProductItem } from '../../shared/types/ProductItem';
import { Phone } from '../../shared/types/Phone';
import { Tablet } from '../../shared/types/Tablet';
import { Accessorie } from '../../shared/types/Accessorie';
import { useMediaQuery } from 'react-responsive';



interface HomePageProps{
  productsCardList :  ProductItem[]
  phones : Phone[]
  tablets :  Tablet[]
  accessories : Accessorie[]
}

export const HomePage: React.FC<HomePageProps> = ({ productsCardList  ,  phones , tablets , accessories }) => {

  const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 640px) and (max-width: 1199px)' });

  const imgPhones =  isDesktop ? './img/Category/Phones/phonesDesktop.png' : isTablet ? './img/Category/Phones/phonesTablet.png' : './img/Category/Phones/phonesMobile.webp';
  const imgTablet =  isDesktop ? './img/Category/Tablet/tabletDesktop.png' : isTablet ? './img/Category/Tablet/tabletTablet.png' : './img/Category/Tablet/tabletMobile.png';
  const imgAccessories =  isDesktop ? './img/Category/Accessories/accessoriesDesktop.png' : isTablet ? './img/Category/Accessories/accessoriesTablet.png' : './img/Category/Accessories/accessoriesMobile.png';



  return (
    <div className={styles.homePage}>
      <section className={styles.homePage__sectionMain}>
        <p className={styles.homePage__mainText}>
          Welcome to Nice Gadgets store!
        </p>
        <MainSlider />
      </section>
      <div className={styles.homePage__productSlider}>
        <ProductSlider
          sliderName={'Brand new models'}
          productsCardList={productsCardList}
          showFullPrice={false}
        />
      </div>
      <div className={styles.homePage__categoryContainer}>
          <p className={styles.homePage__categoryText}> Shop by category </p>
        <div className={styles.homePage__category}>
          <CategoryCard
            phones={phones}
            devices="Mobile phones"
            img={imgPhones}
          ></CategoryCard>
          <CategoryCard
            tablets={tablets}
            devices="Tablet"
            img={imgTablet}
          ></CategoryCard>
          <CategoryCard
            accessories={accessories}
            devices="Accessorie"
            img={imgAccessories}
          ></CategoryCard>
        </div>
      </div>
      <div className={styles.homePage__productSlider}>
        <ProductSlider
          sliderName={'Hot prices'}
          productsCardList={productsCardList}
          showFullPrice={true}
        />
      </div>
    </div>
  );
      };
