import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './ProductDetailsPage.css';
import { Product } from '../../swagger-api/products/Api';
import { ProductsApi } from '../../Services/products';
import { ProductDescription } from './components/ProductDescription';
import { StarRating } from './components/StarRatings';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [item, setItem] = useState<Product | null>(null);

  const productApi = ProductsApi();

  useEffect(() => {
    async function getProductData() {
      if (productId) {
        const response = await productApi.retrieveProduct(productId);
        if (response.data) {
          setItem({
            ...response.data,
            image_path: response.data.image_path || 'default.png',
          });
        }
      }
    }

    getProductData();
  }, []);



  return (

      <section>
          <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
              <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="grid gap-4 md:grid-cols-1">
                      <div className="aspect-w-1 aspect-h-1">
                          <img
                              alt="Mobile Phone Stand"
                              className="object-cover rounded-xl"
                                // @ts-ignore
                              src={item?.image_path}
                          />
                      </div>
                  </div>

                  <div className="sticky top-0">
                      <div className="flex justify-between mt-8">
                          <div className="max-w-[35ch]">
                              <h1 className="text-2xl font-bold">
                                  {item?.name}
                              </h1>

                              <div className="flex mt-2 -ml-0.5">
                                  <StarRating/>
                              </div>
                          </div>

                          <p className="text-lg font-bold">
                              $119.99
                          </p>
                      </div>

                      {item?.description && <ProductDescription text={item.description} />}

                      <form className="mt-8">

                          <div className="flex mt-8">
                              <div>
                                  <label htmlFor="quantity" className="sr-only">Qty</label>

                                  <input
                                      type="number"
                                      id="quantity"
                                      min="1"
                                      defaultValue="1"
                                      className="w-12 py-3 text-xs text-center border-gray-200 rounded no-spinners"
                                  />
                              </div>

                              <button
                                  type="submit"
                                  className="block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500"
                              >
                                  Add to Cart
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </section>
  );
}
;

export default ProductDetailsPage;