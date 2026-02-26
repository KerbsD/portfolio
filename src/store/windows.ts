import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { WINDOW_CONFIG, INITIAL_Z_INDEX } from "@/constants";

type WindowState = {
  windows: typeof WINDOW_CONFIG;
  nextZindex: number;
};

type WindowStore = WindowState & {
  openWindow: (windowKey: string, data?: unknown) => void;
  closeWindow: (windowKey: string) => void;
  focusWindow: (windowKey: string) => void;
};

const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZindex: INITIAL_Z_INDEX,

    openWindow: (windowKey: string, data = null) =>
      set((state) => {
        const win = state.windows[windowKey as keyof typeof state.windows];
        win.isOpen = true;
        win.zIndex = state.nextZindex;
        win.data = (data ?? win.data) as typeof win.data;
        state.nextZindex++;
      }),
    closeWindow: (windowKey: string) =>
      set((state) => {
        const win = state.windows[windowKey as keyof typeof state.windows];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),
    focusWindow: (windowKey: string) =>
      set((state) => {
        const win = state.windows[windowKey as keyof typeof state.windows];
        win.zIndex = state.nextZindex++;
      }),
  }))
);

export default useWindowStore;
