import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { Add, Remove } from './helpers/cartInMemory';

import { ProductProps } from '@/mock';

export type ProductCartProps = ProductProps & {
  quantity: number;
};

type StateProps = {
  products: ProductCartProps[];
  addProduct: (product: ProductProps) => void;
  removeProduct: (id: string) => void;
  clearCart: () => void;
};

export const useCarStore = create(
  persist<StateProps>(
    (set) => ({
      products: [],
      addProduct: (product) =>
        set((state) => {
          const newProducts = Add(state.products, product);
          return { products: newProducts };
        }),
      removeProduct: (id) =>
        set((state) => ({
          products: Remove(state.products, id),
        })),
      clearCart: () => set({ products: [] }),
    }),
    {
      name: 'nlw-expert:cart',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
