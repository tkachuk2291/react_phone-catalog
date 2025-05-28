import React, { useEffect, useState } from 'react';
import styles from './CardDetails.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { getData } from '../../shared/utils/fethData';
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import { useMediaQuery } from 'react-responsive';



export const CardDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id, category } = useParams();
  const [curentProuduct , setCurentProuduct] = useState()
  const isMobile = useMediaQuery({ maxWidth: 639 });

  useEffect(() => {
    getData(`${category}.json`).then(((response) =>setCurentProuduct(response.find((product) => product.id === id ))  ))
  }, []);


  if (!curentProuduct){
    return <div>loading...</div>
  }
    const galleryImages = curentProuduct.images.map((imgUrl) => ({
      original: imgUrl,
      thumbnail: imgUrl,
    }));

  const thumbnailPosition = isMobile ? 'bottom' : 'left';

  // const isTablet = useMediaQuery({ maxWidth: 640 });
  // const isDesktop = useMediaQuery({ maxWidth: 1200 });




  return (
    <div className={styles.cardDetails}>
      <button
        className={styles.cardDetails__locationContainer}
        onClick={() => navigate(-1)}
      >
        <img alt="ArrowLeft" src="./img/Location/ArrowLeft.svg" />
        <span className={styles.cardDetails__locationText}>Back</span>
      </button>
      <div className={styles.cardDetails__mainSlider}>
          <p className={styles.cardDetails__mainText}>Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</p>
          <ImageGallery
                        items={galleryImages }
                        thumbnailPosition={thumbnailPosition}
                        showPlayButton={false}
                        showFullscreenButton={false}
                        showNav={false}
                        showBullets={false}
          />

      </div>
    </div>
  );
};
