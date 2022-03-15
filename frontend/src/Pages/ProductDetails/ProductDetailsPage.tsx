import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './ProductDetailsPage.css';
import { Product } from '../../swagger-api/products/Api';
import { ProductsApi } from '../../Services/products';

const StarRating = () => <>
    <svg
        className="w-5 h-5 text-yellow-400"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
    >
        <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>

    <svg
        className="w-5 h-5 text-yellow-400"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
    >
        <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>

    <svg
        className="w-5 h-5 text-yellow-400"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
    >
        <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>

    <svg
        className="w-5 h-5 text-yellow-400"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
    >
        <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>

    <svg
        className="w-5 h-5 text-gray-200"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
    >
        <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
</>;

const ProductDescription = (props: { text: string }) => <details className="relative mt-4 group">
    <summary className="block">
        <div>
            <div className="prose max-w-none group-open:hidden">
                <p>
                    {props.text.slice(0, 150)}...
                </p>
            </div>

            <span
                className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                Read More
              </span>
        </div>
    </summary>

    <div className="pb-6 prose max-w-none">
        {props.text}
    </div>
</details>;

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