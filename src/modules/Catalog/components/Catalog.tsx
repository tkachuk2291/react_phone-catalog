import styles from './Catalog.module.scss';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useDataContext } from '../../../shared/utils/data';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { ProductCard } from '../../../shared/ProductCard/ProductCard';
import ReactPaginate from 'react-paginate';


export const Catalog = () => {
  const { category } = useParams<{ category: keyof typeof categorizedProducts }>();

  const { categorizedProducts } = useDataContext()
    if (!category) {
      return <div>Category not found</div>;
    }
    const deviceList = categorizedProducts[category];
    const location = useLocation()

  type OptionType = {
    value: string;
    label: string;
  };


  const [selectedSortingOption, setSelectedSortingOption] = useState<OptionType | null>(null);
  const [selectedPaginationOption, setSelectedPaginationOption] = useState<OptionType | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort')


  const optionsSorting = [
    { value: 'none', label: 'Sort By' },
    { value: 'newest', label: 'Newest' },
    { value: 'name', label: 'Name' },
    { value: 'price', label: 'Price' },
  ];

  const optionsPagination = [
    { value: 'none', label: 'Split By'},
    { value: '5', label: '5' },
    { value: '10', label: '10' },
    { value: '15', label: '15' },
    { value: '20', label: '20' },
  ];


  const newList = (() => {
    const copiedList = [...deviceList];

    if (!sort || sort === 'none') {
      return copiedList;
    }

    if (sort === 'name') {
      return copiedList.sort((a, b) => b.year - a.year);
    }

    if (sort === 'price') {
      return copiedList.sort((a, b) => b.fullPrice - a.fullPrice);
    }

    if (sort === 'newest') {
      return copiedList.sort((a, b) => a.name.localeCompare(b.name));
    }

    return copiedList;
  })();

  const [pageSize, setPageSize] = useState(5);

  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(deviceList.length / pageSize);
  const offset = currentPage * pageSize;
  const currentItems = newList.slice(offset, offset + pageSize);




  useEffect(() => {
    const sortParam = searchParams.get('sort');
    const paginationParam = searchParams.get('pagination');

    const foundSortingOption = optionsSorting.find(opt => opt.value === sortParam);
    const foundPaginationOption = optionsPagination.find(opt => opt.value === paginationParam);

    if (foundSortingOption) {
      setSelectedSortingOption(foundSortingOption);
    } else {
      setSelectedSortingOption(optionsSorting[0]);
    }

    if (foundPaginationOption) {
      setSelectedPaginationOption(foundPaginationOption);
      const parsed = parseInt(foundPaginationOption.value, 10);
      if (!isNaN(parsed)) {
        setPageSize(parsed);
      }
    } else {
      setSelectedPaginationOption(optionsPagination[0]);
      setPageSize(5);
    }
    setCurrentPage(0);
  }, [searchParams]);


  console.log(searchParams.get('sort') , 'ЧТО ПРИШЛО СЮДА?')

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
          <Select
            value={selectedSortingOption}
            options={optionsSorting}
            onChange={(option) => {
              const newParams = new URLSearchParams(searchParams);

              if (option?.value === 'none') {
                newParams.delete('sort');
              } else {
                newParams.set('sort', option.value);
              }
              setSearchParams(newParams); // <-- достаточно только этого
            }}
            placeholder="Sort By"
            styles={{
              control: (base) => ({
                ...base,
                border: 'none',
                background:'#323542',
                color: '#F1F2F9',
                borderRadius: 0,
              }),
              singleValue: (base) => ({
                ...base,
                color: '#F1F2F9',
              }),
              indicatorSeparator: () => ({
                display: 'none',
              }),
            }}
          />


        </div>
        <div className={styles.catalog__paginationContainer}>
          <p className={styles.catalog__paginationText}>Items on page</p>
          <Select
            value={selectedPaginationOption}
            onChange={(option) => {
              const newParams = new URLSearchParams(searchParams);

              if (option?.value === 'none') {
                newParams.delete('pagination');
              } else {
                newParams.set('pagination', option.value);
              }

              setSearchParams(newParams);
            }}
            // classNamePrefix="custom"
            options={optionsPagination}
            placeholder="Split By"
            styles={{
              control: (base) => ({
                ...base,
                border: 'none',
                background:'#323542',
                color: '#white',
                borderRadius: 0,
              }),
              singleValue: (base) => ({
                ...base,
                color: '#F1F2F9',
              }),
              indicatorSeparator: () => ({
                display: 'none',
              }),
            }}
          />

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
      <ReactPaginate
        breakLabel="..."
        nextLabel="→"
        previousLabel="←"
        onPageChange={(e) => setCurrentPage(e.selected)}
        pageRangeDisplayed={pageSize}
        pageCount={pageCount}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
}
