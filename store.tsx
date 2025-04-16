import { create } from 'zustand';

interface GlobalState {
  inputValue: string;
  counter: number;
  backgroundColor: string;
  setInputValue: (value: string) => void;
  incrementCounter: () => void;
  decrementCounter: () => void;
  changeBackgroundColor: (color: string) => void;
}

const useGlobalState = create<GlobalState>((set) => ({
  inputValue: '',
  counter: 0,
  backgroundColor: 'grey',
  setInputValue: (value) => set({ inputValue: value }),
  incrementCounter: () => set((state) => ({ counter: state.counter + 1 })),
  decrementCounter: () => set((state) => ({ counter: state.counter - 1 })),
  changeBackgroundColor: (color) => set({ backgroundColor: color }),
}));

export default useGlobalState;