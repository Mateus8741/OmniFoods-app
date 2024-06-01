import { useQuery } from '@tanstack/react-query';

import { getProductList } from '../apiConfig';

export function useGetAllProducts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['productList'],
    queryFn: async () => getProductList('/product'),
  });

  return { data, error, isLoading };
}
