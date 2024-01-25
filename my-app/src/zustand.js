import create from "zustand";

const useStore = create((set) => ({
  images: ["/dami.jpeg", "/jona.png"],
  addImage: (image) => set((state) => ({ images: [...state.images, image] })),
}));

export default useStore;
