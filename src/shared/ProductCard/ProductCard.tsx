import React from 'react';
import styles from './ProductCard.module.scss';
import { ProductItem } from '../types/ProductItem';


interface ProductCardProps{
  productCardItem : ProductItem
  fullPrice?: number
}

export const ProductCard: React.FC<ProductCardProps> = ({productCardItem , fullPrice}) => {

  return (
    <div className={styles.ProductCard}>
      <div className={styles.ProductCard__content}>
        <img
          className={styles.ProductCard__picture}
          alt="Mob"
          src={productCardItem.image}
        />
        <p className={styles.ProductCard__title}>{productCardItem.name}</p>

          <div className={styles.ProductCard__priceContainer}>
            <p className={styles.ProductCard__price}>${productCardItem.price}</p>
            {fullPrice && (
            <p className={styles.ProductCard__fullPrice}>${productCardItem.fullPrice}</p>
            )}
          </div>


        <div className={styles.ProductCard__fullWidthLine}></div>

        <div className={styles.ProductCard__infoContainer}>
          <p className={styles.ProductCard__textLeftSide}>Screen</p>
          <p className={styles.ProductCard__textRightSide}>
            {productCardItem.screen}
          </p>
        </div>
        <div className={styles.ProductCard__infoContainer}>
          <p className={styles.ProductCard__textLeftSide}>Capacity</p>
          <p className={styles.ProductCard__textRightSide}>
            {productCardItem.capacity}
          </p>
        </div>
        <div className={styles.ProductCard__infoContainer}>
          <p className={styles.ProductCard__textLeftSide}>RAM</p>
          <p className={styles.ProductCard__textRightSide}>
            {productCardItem.ram}
          </p>
        </div>
        <div className={styles.ProductCard__ButtonsContainer}>
          <p className={styles.ProductCard__button}>Add to cart</p>
          <img
            src="./img/ProductCard/IconFavoriteMobile.png"
            alt="favorites"
            className={styles.ProductCard__icon}
          />
        </div>
      </div>
    </div>
  );
};
