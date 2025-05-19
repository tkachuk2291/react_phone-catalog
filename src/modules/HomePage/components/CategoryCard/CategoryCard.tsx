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
        <p className={styles.CategoryCard__text}>{devices}</p>

      {phones && <p className={styles.CategoryCard__models}>{phones.length} phones</p>}
      {tablets && <p className={styles.CategoryCard__models}>{tablets.length} tablets</p>}
      {accessories && <p className={styles.CategoryCard__models}>{accessories.length} accessories</p>}
        {/*<p className={styles.CategoryCard__models}>95 models</p>*/}
    </div>

  );
}




