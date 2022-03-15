import React, { useEffect, useState } from 'react';
import { ProductListItem } from './components/ProductListItem';
import { WelcomeBanner } from './components/WelcomeBanner';
import { InputSearch } from './components/InputSearch';
import { Product } from '../../swagger-api/products/Api';
import { ProductsApi } from '../../Services/products';

function HomePage() {
  const [items, setItems] = useState<Product[] | null>(null);

  const [searchInput, setSearchInput] = useState<string>('');

  const [filteredItems, setFilteredItems] = useState<Product[] | null>(null);

  const productApi = ProductsApi();

  useEffect(() => {
    async function getProductData() {
      const response = await productApi.listProducts();
      if (response.data.results) {
        setItems(response.data.results.map(i => {
          return { ...i, show: true };
        }));
      }
    }

    getProductData();
  }, []);


  useEffect(() => {
    if (items && searchInput !== '') {
      const filtered = items.filter(item => item.name?.toLocaleLowerCase().search(searchInput.toLocaleLowerCase()) !== -1);
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);
    }

  }, [searchInput, items]);

  return (
        <main>
            <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-flow-row gap-y-4 auto-rows-max">
                    <div className="grid grid-flow-row gap-y-4 auto-rows-max">
                        <WelcomeBanner/>
                        <InputSearch onChange={setSearchInput}/>
                    </div>
                    <div className="grid lg:items-stretch">
                        <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12">
                            {filteredItems?.map(item => {
                              return <ProductListItem key={item.barcode} product={item}/>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </main>
  );
}

export default HomePage;
