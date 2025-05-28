import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { ProductItem } from '../types/ProductItem';
import { Phone } from '../types/Phone';
import { Accessorie } from '../types/Accessorie';
import { Tablet } from '../types/Tablet';
import { getData } from './fethData';
import { useMediaQuery } from 'react-responsive';



interface DataContextType {
  categorizedProducts: {
    phones: ProductItem[];
    tablets: ProductItem[];
    accessories: ProductItem[];
  };
}

export const DataContext = createContext<DataContextType | null>(null);
  export const useDataContext = () => {
    const ctx = useContext(DataContext);
    if (!ctx) {
      throw new Error('useDataContext must be used inside DataProvider');
    }
    return ctx;
  };
export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [productsCardList, setProductsCardList] = useState<ProductItem[]>([]);


  useEffect(() => {
    Promise.all([
      getData<ProductItem[]>('products.json'),
      getData<Phone[]>('phones.json'),
      getData<Accessorie[]>('accessories.json'),
      getData<Tablet[]>('tablets.json'),
    ])
      .then(([products]) => {
        setProductsCardList(products);
      })
      .catch(console.error);
  }, []);


  const filteredProducts = productsCardList.filter((product) => {
    return product.category === 'phones' || product.category === 'tablets' || product.category === 'accessories';
  });



  const categorizedProducts = {
    phones: filteredProducts.filter((product) => product.category === 'phones'),
    tablets: filteredProducts.filter((product) => product.category === 'tablets'),
    accessories: filteredProducts.filter((product) => product.category === 'accessories'),
  };



    return (
      <DataContext.Provider value={{ categorizedProducts  } } >
          {children}
      </DataContext.Provider>
  )
}
