import { create } from 'zustand';

interface StoreState {
  inputText: string;
  count: number;
  bgColor: string;
  setInputText: (text: string) => void;
  increment: () => void;
  decrement: () => void;
  changeBgColor: (color: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  inputText: '',
  count: 0,
  bgColor: '#ffffff',
  setInputText: (text) => set({ inputText: text }),
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  changeBgColor: (color) => set({ bgColor: color }),
}));