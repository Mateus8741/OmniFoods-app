import { useMutation } from '@tanstack/react-query';

import { createOrder } from '../apiConfig';

import { Order } from '@/models/OrderModel';

export function useCreateOrder(onSuccess: () => void) {
  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: (order: Order) => createOrder('/order', order),
    onSuccess: () => {
      onSuccess();
    },
  });

  return { mutate, isSuccess, isPending };
}
