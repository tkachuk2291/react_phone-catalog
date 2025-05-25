import React from 'react';
import styles from './CategoryCard.module.scss';
import { Phone } from '../../../../shared/types/Phone';
import { Tablet } from '../../../../shared/types/Tablet';
import { Accessorie } from '../../../../shared/types/Accessorie';

 interface CategoryCard {
   devices : string
   img : string
   phones? : Phone[]
   tablets? :  Tablet[]
   accessories? : Accessorie[]
}


export const CategoryCard: React.FC<CategoryCard> = ({devices , img   ,  phones , tablets , accessories}) => {


  return (
    <div className={styles.CategoryCard}>
      <img src={img} alt={devices} className={styles.CategoryCard__img} />

      {phones && (
        <div className={styles.CategoryCard__textContainer}>
          <p className={styles.CategoryCard__text}>{devices}</p>
          <p className={styles.CategoryCard__models}>{phones.length} models</p>{' '}
        </div>
      )}
      {tablets && (
        <div className={styles.CategoryCard__textContainer}>
          <p className={styles.CategoryCard__text}>{devices}</p>
          <p className={styles.CategoryCard__models}>
            {tablets.length} models
          </p>{' '}
        </div>
      )}
      {accessories && (
        <div className={styles.CategoryCard__textContainer}>
          <p className={styles.CategoryCard__text}>{devices}</p>
          <p className={styles.CategoryCard__models}>
            {accessories.length} models
          </p>
        </div>
      )}
    </div>
  );
}




