import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import styles from './MainSlider.module.scss';
import { Swiper as SwiperClass } from 'swiper';


export const MainSlider: React.FC = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  return (
    <>
      <div className={styles.MainSlider__sliderContainer}>
        <button
          type="button"
          className={styles.MainSlider__arrowButton}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <img alt="arrowLeftMain"
            src="./img/Slider/Navigation/ArrowLeftMain.svg"
            className={styles.MainSlider__imgArrow}
          />
        </button>

        <Swiper
          onSwiper={swiper => (swiperRef.current = swiper)}
          className="customSwiperMain"
          wrapperClass={'customSwiperWrapperMain'}
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={'auto'}
          speed={1000}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className={styles.MainSlider}>
            <picture className={styles.MainSlider__picture}>
              <source
                media="(min-width: 1200px)"
                srcSet="img/Slider/MainSliderBanner.svg"
              />
              <source
                media="(min-width: 640px)"
                srcSet="img/Slider/MainSliderTablet.svg"
              />
              <img
                className={styles.MainSlider__picture}
                alt="Mob"
                src="./img/Slider/photoSliderMobile.png"
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide className={styles.MainSlider}>
            <img
              className={styles.MainSlider__picture}
              alt="Mob"
              src="./img/Slider/iphonePurpleSliderMobile.png"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.MainSlider}>
            <img
              className={styles.MainSlider__picture}
              alt="Mob"
              src="./img/Slider/iphone15MobileSlide.png"
            />
          </SwiperSlide>
        </Swiper>
        <button
          type="button"
          className={styles.MainSlider__arrowButton}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <img alt="arrowRightMain"
            src="./img/Slider/Navigation/ArrowRightMain.svg"
            className={styles.MainSlider__imgArrow}
          />
        </button>
      </div>
    </>
  );
};
