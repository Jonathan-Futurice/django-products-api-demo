import React, { useEffect, useState } from 'react';
import { ProductListItem } from './components/ProductListItem';
import { WelcomeBanner } from './components/WelcomeBanner';
import { InputSearch } from './components/InputSearch';
import { Api, Product } from '../../swagger-api/products/Api';

function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [items, setItems] = useState<Product[] | null>(null);


  const api = new Api({
    baseUrl: 'http://localhost:8000',
  }).api;

  useEffect(() => {
    async function getProductData() {
      const response = await api.listProducts();
      if (response.data.results) {
        setItems(response.data.results);
      }
    }

    getProductData();
  }, []);

  return (
        <main>
            <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
                    <WelcomeBanner/>
                    <InputSearch/>
                    <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12">
                        {items?.map(item => {
                          return <ProductListItem key={item.barcode}  product={item} />;
                        })}
                    </div>
                </div>
            </div>
        </main>
  );
}

export default HomePage;
