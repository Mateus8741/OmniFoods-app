import axios, { AxiosResponse } from 'axios';

import { Product } from '@/models/ProductModel';

const api = axios.create({
  baseURL: 'https://omnifoods-back.onrender.com',
});

type ProductListResponse = AxiosResponse<Product[]>;

export function getProductList(): Promise<ProductListResponse> {
  return api.get('/product');
}
