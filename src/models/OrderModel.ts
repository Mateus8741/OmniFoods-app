export interface Order {
  productOrders: ProductOrder[];
  tableNumber: number;
  changeToOrder: string;
}

export interface ProductOrder {
  productName: string;
  productPrice: number;
  quantity: number;
}
