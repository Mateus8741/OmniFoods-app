import { useMutation } from '@tanstack/react-query';

import { login } from '@/api/apiConfig';
import { useUserStorage } from '@/contexts/userStore';
import { LoginScheema } from '@/schemas/LoginSchema';

export function useLogin(onSuccess: () => void) {
  const { setUser } = useUserStorage();

  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: (data: LoginScheema) => login(data.email, data.password),
    onSuccess,
    onSettled(data, error, variables, context) {
      if (error) {
        console.error(error);
      }

      setUser({
        token: data?.data.token,
        email: data?.data.email,
      });

      console.log(data?.data);
    },
  });

  return { mutate, isSuccess, isPending };
}
