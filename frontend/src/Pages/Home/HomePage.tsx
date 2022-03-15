import React, { useEffect, useState } from 'react';
import { ProductListItem } from './components/ProductListItem';
import { WelcomeBanner } from './components/WelcomeBanner';
import { InputSearch } from './components/InputSearch';
import { Product } from '../../swagger-api/products/Api';
import { ProductsApi } from '../../Services/products';

function HomePage() {
  const [items, setItems] = useState<Product[] | null>(null);


  const productApi = ProductsApi();

  useEffect(() => {
    async function getProductData() {
      const response = await productApi.listProducts();
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
