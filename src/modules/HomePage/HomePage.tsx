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


interface HomePageProps{
  productsCardList :  ProductItem[]
  phones : Phone[]
  tablets :  Tablet[]
  accessories : Accessorie[]
}

export const HomePage: React.FC<HomePageProps> = ({ productsCardList  ,  phones , tablets , accessories }) => {
  return (
    <div className={styles.homePage}>
      <p className={styles.homePage__mainText}>
        Welcome to Nice Gadgets store!
      </p>
      <MainSlider />
      <ProductSlider sliderName={'Brand new models'} productsCardList={productsCardList} showFullPrice={false} />
      <div className={styles.homePage__category}>
        <p className={styles.homePage__categoryText}> Shop by category </p>
        <CategoryCard
          phones={phones}
          devices="Mobile phones"
          img="./img/Category/MobilePhones.webp"
        ></CategoryCard>
        <CategoryCard
          tablets={tablets}
          devices="Tablet"
          img="./img/Category/Ipads.png"
        ></CategoryCard>
        <CategoryCard
          accessories={accessories}
          devices="Accessorie"
          img="./img/Category/Accessories.png"
        ></CategoryCard>
      </div>
      <ProductSlider sliderName={'Hot prices'} productsCardList={productsCardList} showFullPrice={true} />
    </div>
  );
};
