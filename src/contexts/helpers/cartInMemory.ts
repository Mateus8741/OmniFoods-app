import { ProductCartProps } from '../cartStore';

import { ProductProps } from '@/mock';

export function Add(products: ProductCartProps[], newProduct: ProductProps) {
  const existingProduct = products.find(({ id }) => newProduct.id === id);

  if (existingProduct) {
    return products.map((product) =>
      product.id === existingProduct.id
        ? {
            ...product,
            quantity: product.quantity + 1,
          }
        : product
    );
  }

  return [...products, { ...newProduct, quantity: 1 }];
}

export function Remove(products: ProductCartProps[], id: string) {
  const updatedProducts = products.map((product) =>
    product.id === id
      ? {
          ...product,
          quantity: product.quantity > 1 ? product.quantity - 1 : 0,
        }
      : product
  );

  return updatedProducts.filter((product) => product.quantity > 0);
}
