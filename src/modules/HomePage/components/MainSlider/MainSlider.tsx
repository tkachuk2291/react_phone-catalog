import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import styles from './MainSlider.module.scss';


export const MainSlider: React.FC = () => {

  return (
    <Swiper
      className="customSwiperMain"
      modules={[Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={'auto'}
      speed={1000}
      pagination={{ clickable: true }}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide className={styles.MainSlider}>
        <img
          className={styles.picture}
          alt="Mob"
          src="./img/Slider/photoSliderMobile.png"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.MainSlider}>
        <img
          className={styles.picture}
          alt="Mob"
          src="./img/Slider/iphonePurpleSliderMobile.png"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.MainSlider}>
        <img
          className={styles.picture}
          alt="Mob"
          src="./img/Slider/iphone15MobileSlide.png"
        />
      </SwiperSlide>
    </Swiper>
  );
};
