import { useMutation } from '@tanstack/react-query';

import { login } from '@/api/apiConfig';
import { LoginScheema } from '@/schemas/LoginSchema';

export function useLogin(onSuccess: () => void) {
  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: (data: LoginScheema) => login(data.email, data.password),
    onSuccess,
  });

  return { mutate, isSuccess, isPending };
}
