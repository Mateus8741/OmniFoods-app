import axios, { AxiosResponse } from 'axios';

import { Order } from '@/models/OrderModel';
import { Product } from '@/models/ProductModel';

const api = axios.create({
  baseURL: 'https://omnifoods-back.onrender.com',
});

type ProductListResponse = AxiosResponse<Product[]>;

export function getProductList(path: string): Promise<ProductListResponse> {
  return api.get(path);
}

export function createOrder(path: string, order: Order) {
  return api.post(path, order);
}
