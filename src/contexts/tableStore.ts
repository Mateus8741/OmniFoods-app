import { create } from 'zustand';

import { TableMockProps } from '@/mock';

type TableProps = {
  table: TableMockProps | undefined;
  setTable: (table: TableMockProps) => void;
  clearTable: () => void;
};

const useTableStore = create<TableProps>((set) => ({
  table: undefined,
  setTable: (table) => set({ table }),
  clearTable: () => set({ table: undefined }),
}));

export function useTableStorage() {
  const { table, setTable, clearTable } = useTableStore();

  return { table, setTable, clearTable };
}
