import { useQuery } from '@tanstack/react-query';

import { getOrders } from '../apiConfig';

export function useNotify() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['list-all-orders'],
    queryFn: async () => getOrders(),
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
  });

  return {
    data,
    isLoading,
    error,
  };
}
