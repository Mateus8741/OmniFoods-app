// import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand';
// import { createJSONStorage, persist } from 'zustand/middleware'

type SegmentStore = {
  segment: string;
  setSegment: (segment: string) => void;
  clearSegment: () => void;
};

const useSegmentStore = create<SegmentStore>((set) => ({
  segment: '',
  setSegment: (segment) => set({ segment }),
  clearSegment: () => set({ segment: '' }),
}));

export function useSegmentStorage() {
  const { segment, setSegment, clearSegment } = useSegmentStore();

  return { segment, setSegment, clearSegment };
}
