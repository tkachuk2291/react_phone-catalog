import styles from './Catalog.module.scss';
import { useLocation, useParams } from 'react-router-dom';
import { useDataContext } from '../../../shared/utils/data';
import  { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { ProductCard } from '../../../shared/ProductCard/ProductCard';
import ReactPaginate from 'react-paginate';

export const Catalog = () => {
  const { category } = useParams<{ category: keyof typeof categorizedProducts }>();
  console.log(category , 'Тест')

  const { categorizedProducts } = useDataContext()
    if (!category) {
      return <div>Category not found</div>;
    }
    const deviceList = categorizedProducts[category];
    const location = useLocation()
    const [sorting, setSorting] = useState('Sorting By');
    const [pageSize, setPageSize] = useState(1000);




  const newList = deviceList.sort((a  ,  b) => {
      if (sorting ===  'Newest') {
          return b.year - a.year
      }
      if (sorting ===  'Price') {
        return b.fullPrice - a.fullPrice
      }
      if (sorting === "name") {
        return a.name.localeCompare(b.name)
      }
      return 0
  });


  const [currentPage, setCurrentPage] = useState(0);
  const offset = (currentPage - 1) * pageSize;
  const currentItems = newList;
  const pageCount = Math.ceil(deviceList.length / pageSize);

  return (
    <div className={styles.catalog}>
      <div className={styles.catalog__locataionContaier}>
        <img
          className={styles.catalog__img}
          alt="home"
          src="./img/Catalog/Home.svg"
        />
        <img
          className={styles.catalog__img}
          alt="arrow"
          src="./img/Catalog/arrowRight.svg"
        />
        <p className={styles.catalog__textLocation}>
          {location.pathname.replace(/^\/|\/$/g, '')}
        </p>
      </div>
      <div className={styles.catalog__mainTextConatainer}>
        {category === 'phones' ? (
          <p className={styles.catalog__mainText}>Mobile {category} </p>
        ) : (
          <p className={styles.catalog__mainText}>
            {category[0].toUpperCase() + category.slice(1)}
          </p>
        )}
        <p className={styles.catalog__mainTexModels}>
          {deviceList.length} models
        </p>
      </div>
      <div className={styles.catalog__filteringContainer}>
        <div className={styles.catalog__sortContainer}>
          <p className={styles.catalog__sortText}>Sort by</p>
          <Dropdown>
            <Dropdown.Toggle
              className={styles.catalog__CustomBtn}
              variant="secondary"
              id="dropdown-basic"
            >
              <div className={styles.catalog__buttonTextContainer}>
                <p>{sorting}</p>
                <img
                  className={styles.catalog__img}
                  alt="dropDown"
                  src="./img/Catalog/ArrowDown.svg"
                />
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#" onClick={() => setSorting('Newest')}>Newest</Dropdown.Item>
              <Dropdown.Item href="#" onClick={() => setSorting('Price')}>Price</Dropdown.Item>
              <Dropdown.Item href="#" onClick={() => setSorting('name')}>Name</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className={styles.catalog__paginationContainer}>
          <p className={styles.catalog__paginationText}>Items on page</p>
          <Dropdown>
            <Dropdown.Toggle
              className={styles.catalog__CustomBtn}
              variant="secondary"
              id="dropdown-basic"
            >
              <div className={styles.catalog__buttonTextContainer}>
                <p>{pageSize}</p>
                <img
                  className={styles.catalog__img}
                  alt="dropDown"
                  src="./img/Catalog/ArrowDown.svg"
                />
              </div>
            </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setPageSize(5)}>5</Dropdown.Item>
                <Dropdown.Item onClick={() => setPageSize(10)}>10</Dropdown.Item>
                <Dropdown.Item onClick={() => setPageSize(15)}>15</Dropdown.Item>
              </Dropdown.Menu>

          </Dropdown>
        </div>
      </div>
      <div className={styles.catalog__productCard}>
        {currentItems.map((productItem) => (
          <ProductCard
            key={productItem.id}
            productCardItem={productItem}
            fullPrice={productItem.fullPrice}
          />
        ))}
      </div>
      {/*<ReactPaginate*/}
      {/*  breakLabel="..."*/}
      {/*  nextLabel="→"*/}
      {/*  previousLabel="←"*/}
      {/*  onPageChange={(e) => setCurrentPage(e.selected)} // смена страницы*/}
      {/*  pageRangeDisplayed={pageSize}*/}
      {/*  pageCount={pageCount}*/}
      {/*  containerClassName="pagination"*/}
      {/*  activeClassName="active"*/}
      {/*/>*/}
    </div>
  );
}
