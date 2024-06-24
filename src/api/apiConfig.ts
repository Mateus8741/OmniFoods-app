import axios, { AxiosResponse } from 'axios';

import { Order } from '@/models/OrderModel';
import { Product } from '@/models/ProductModel';

export const api = axios.create({
  baseURL: 'https://omnifoods-back.onrender.com',
});

type ProductListResponse = AxiosResponse<Product[]>;

export function getProductList(path: string): Promise<ProductListResponse> {
  return api.get(path);
}

export function createOrder(path: string, order: Order) {
  return api.post(path, order);
}

export function getOrders() {
  return api.get<Order[]>('/list-all-orders');
}

export function login(email: string, password: string) {
  return api.post('/auth/login', { email, password });
}

export function refreshToken(token: string) {
  return api.post('/auth/refresh-token', { token });
}
