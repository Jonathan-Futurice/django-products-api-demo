import { Api } from '../swagger-api/products/Api';

export const ProductsApi = () => {
  const api = new Api({
    baseUrl: 'http://localhost:8000',
  }).api;

  return api;
};