import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from '../../App';
import { Catalog } from '../../modules/Catalog/components/Catalog';
import { HomePage } from '../../modules/HomePage/HomePage';
import { useEffect, useState } from 'react';
import { ProductItem } from '../types/ProductItem';
import { Phone } from '../types/Phone';
import { Accessorie } from '../types/Accessorie';
import { Tablet } from '../types/Tablet';
import { getData } from './fethData';
import { DataProvider } from './data';
import { CardDetails } from '../../modules/CardDetails/CardDetails';


export const Root = () => {

  const [productsCardList, setProductsCardList] = useState<ProductItem[]>([]);
  const [phones, setPhones] = useState<Phone[]>([]);
  const [accessories , setAccessories]  = useState<Accessorie[]>([]);
  const [tablets , setTablets]  = useState<Tablet[]>([]);
  useEffect(() => {
    Promise.all([
      getData<ProductItem[]>('products.json'),
      getData<Phone[]>('phones.json'),
      getData<Accessorie[]>('accessories.json'),
      getData<Tablet[]>('tablets.json'),

    ])
      .then(([products, phonesData, accessoriesData ,  tabletsData]) => {
        setProductsCardList(products);
        setPhones(phonesData);
        setAccessories(accessoriesData);
        setTablets(tabletsData)
      })
      .catch((error) => console.error('Ошибка загрузки данных:', error));
  }, []);


  return (
    <HashRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage productsCardList={productsCardList} phones={phones} tablets={tablets} accessories={accessories} />} />
            <Route path="/:category" element={<Catalog />} />
            <Route path="/:category/:id" element={<CardDetails />} />
            <Route path="*" element={<h1 className="title">Page not found</h1>} />
          </Route>
        </Routes>
      </DataProvider>
    </HashRouter>
  );
};
