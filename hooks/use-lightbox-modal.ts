import { create } from "zustand";

interface LightBoxModalStore {
  isOpen: boolean;
  data?: string[];
  currentIndex: number;
  onOpen: (data: string[], index: number) => void;
  onClose: () => void;
  nextSlide: () => void;
  prevSlide: () => void;
}

const useLightBoxModal = create<LightBoxModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  currentIndex: 0,
  onOpen: (data: string[], index: number) =>
    set({ data, currentIndex: index, isOpen: true }),
  onClose: () => set({ isOpen: false }),
  nextSlide: () =>
    set((state) => ({
      currentIndex: (state.currentIndex + 1) % (state.data?.length || 1),
    })),
  prevSlide: () =>
    set((state) => ({
      currentIndex:
        (state.currentIndex - 1 + (state.data?.length || 1)) %
        (state.data?.length || 1),
    })),
}));

export default useLightBoxModal;
