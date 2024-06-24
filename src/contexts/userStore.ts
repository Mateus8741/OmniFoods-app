import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { UserScheema } from '@/schemas/UserSchema';

type UserProps = {
  user: UserScheema | null;
  setUser: (user: UserScheema) => void;
  removeUser: () => void;
};

const useUserStore = create<UserProps>()(
  persist(
    (set) => ({
      user: {
        token: '',
        email: '',
      },
      setUser: (user) => set({ user }),
      removeUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export function useUserStorage() {
  const { user, setUser, removeUser } = useUserStore();

  return { user, setUser, removeUser };
}
