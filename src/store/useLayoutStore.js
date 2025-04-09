import { create } from 'zustand';

const useLayoutStore = create((set) => ({
  isDarkNav: false,
  setDarkNavTrue: () => set({ isDarkNav: true }),
  setDarkNavFalse: () => set({ isDarkNav: false }),
  isBoxedLayout: false,
  setBoxedLayoutTrue: () => set({ isBoxedLayout: true }),
  setBoxedLayoutFalse: () => set({ isBoxedLayout: false }),
}));

export default useLayoutStore;
