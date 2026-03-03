import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "@/constants";

const DEFAULT_LOCATIONS = locations.work;

type LocationStore = {
  activeLocation: typeof DEFAULT_LOCATIONS;
  setActiveLocation: (location: typeof DEFAULT_LOCATIONS) => void;
  resetActiveLocation: () => void;
};

const useLocationStore = create<LocationStore>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATIONS,
    setActiveLocation: (location) =>
      set((state) => {
        state.activeLocation = location;
      }),
    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATIONS;
      }),
  })),
);

export default useLocationStore;
