import { create } from 'zustand';

const useLayoutStore = create((set) => ({
  isDarkNav: false,
  setDarkNavTrue: () => set({ isDarkNav: true }),
  setDarkNavFalse: () => set({ isDarkNav: false }),
}));

export default useLayoutStore;
