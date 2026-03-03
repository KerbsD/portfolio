import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "@/constants";

export const DEFAULT_LOCATION = locations.work;

type TopLevel = typeof locations[keyof typeof locations];
export type AnyChildren = TopLevel["children"][number];
export type AnyLocation = TopLevel | AnyChildren;

type LocationStore = {
  activeLocation: AnyLocation | null;
  setActiveLocation: (location: AnyLocation | null) => void;
  resetActiveLocation: () => void;
};

const useLocationStore = create<LocationStore>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,
    setActiveLocation: (location) =>
      set((state) => {
        state.activeLocation = location;
      }),
    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  })),
);

export default useLocationStore;
