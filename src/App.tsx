import './App.scss';
import { Header } from './shared/Header/Header';
import { Footer } from './shared/Footer/Footer';
// import { HomePage } from './modules/HomePage/HomePage';
// import { useEffect, useState } from 'react';
// import { getData } from './shared/utils/fethData';
// import { ProductItem } from './shared/types/ProductItem';
// import { Phone } from './shared/types/Phone';
// import { Accessorie } from './shared/types/Accessorie';
// import { Tablet } from './shared/types/Tablet';
import { Outlet } from 'react-router-dom';

export const App = () => {
  // const [productsCardList, setProductsCardList] = useState<ProductItem[]>([]);
  // const [phones, setPhones] = useState<Phone[]>([]);
  // const [accessories , setAccessories]  = useState<Accessorie[]>([]);
  // const [tablets , setTablets]  = useState<Tablet[]>([]);

  // useEffect(() => {
  //   Promise.all([
  //     getData<ProductItem[]>('products.json'),
  //     getData<Phone[]>('phones.json'),
  //     getData<Accessorie[]>('accessories.json'),
  //     getData<Tablet[]>('tablets.json'),
  //
  //
  //   ])
  //     .then(([products, phonesData, accessoriesData ,  tabletsData]) => {
  //       setProductsCardList(products);
  //       setPhones(phonesData);
  //       setAccessories(accessoriesData);
  //       setTablets(tabletsData)
  //     })
  //     .catch((error) => console.error('Ошибка загрузки данных:', error));
  // }, []);


  return (
    <div className="App">
      <Header />
      <main className="App__main-content">
          <Outlet />
      </main>
        <Footer />
    </div>
);
}



