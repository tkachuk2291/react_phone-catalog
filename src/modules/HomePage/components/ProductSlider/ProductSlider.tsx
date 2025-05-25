import React, { useRef } from 'react';
import styles from './ProductSlider.module.scss';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import { ProductCard } from '../../../../shared/ProductCard/ProductCard';
import { ProductItem } from '../../../../shared/types/ProductItem';



interface CustomProductSliderInterface {
  sliderName: string;
  productsCardList : ProductItem[]
  showFullPrice: boolean
}

export const ProductSlider: React.FC<CustomProductSliderInterface> = ({ sliderName , productsCardList , showFullPrice}) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
      <div className={styles.ProductSlider__sliderContainer}>
        <div className={styles.ProductSlider__navigationContainer}>
          <p className={styles.ProductSlider__navigationText}> {sliderName}</p>
          <div className={styles.ProductSlider__buttonContainer}>
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              type="button"
              className={styles.ProductSlider__arrowButton}
            >
              <p className={styles.ProductSlider__arrowText}>&lt;</p>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              type="button"
              className={styles.ProductSlider__arrowButton}
            >
              <p className={styles.ProductSlider__arrowText}>&gt;</p>
            </button>
          </div>
        </div>
        <Swiper
          className="customSwiperMain"
          modules={[Pagination, A11y]}
          spaceBetween={16}
          slidesPerView={'auto'}
          speed={1000}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
        {productsCardList.slice(0,5).map((productCardItem) => (
          <SwiperSlide className={styles.ProductSlider__productSlide}>
            <ProductCard productCardItem={productCardItem} fullPrice={showFullPrice ? productCardItem.fullPrice : undefined} />
          </SwiperSlide>
        ))}

        </Swiper>
      </div>

  );
};
