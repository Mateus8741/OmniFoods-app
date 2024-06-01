export interface Order {
  id?: string;
  productOrders: ProductOrder[];
  tableNumber: number;
  changeToOrder: string;
  status: 'PENDING' | 'PREPARING' | 'COMPLETED';
  updatedAt?: string;
}

export interface ProductOrder {
  id?: string;
  productName: string;
  productPrice: number;
  quantity: number;
  orderId?: string;
}
