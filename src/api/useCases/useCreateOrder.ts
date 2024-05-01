import { useMutation } from '@tanstack/react-query';

import { createOrder } from '../apiConfig';

import { Order } from '@/models/OrderModel';

export function useCreateOrder() {
  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: (order: Order) => createOrder(order, '/orders'),
  });

  return { mutate, isSuccess, isPending };
}
