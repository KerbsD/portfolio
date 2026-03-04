import { useGSAP } from "@gsap/react";
import { Draggable, InertiaPlugin } from "gsap/all";
import gsap from "gsap";
import useWindowStore from "@/store/windows";
import useLocationStore, { type AnyLocation } from "@/store/location";

gsap.registerPlugin(Draggable, InertiaPlugin);

const GRID_SIZE = 80;
const STORAGE_KEY = "folder-positions";

type FolderPositions = Record<string, { x: number; y: number }>;

const getSavedPositions = (): FolderPositions => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
};

const savePosition = (id: string, x: number, y: number) => {
  const positions = getSavedPositions();
  positions[id] = { x, y };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
};

function useAnimateHome() {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const handleOpenFolder = (project: AnyLocation) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  useGSAP(() => {
    // Restore saved positions first
    const saved = getSavedPositions();
    document.querySelectorAll<HTMLElement>(".folder").forEach((el) => {
      const id = el.dataset.id;
      if (id && saved[id]) {
        gsap.set(el, { x: saved[id].x, y: saved[id].y });
      }
    });

    // Create draggables
    Draggable.create(".folder", {
      type: "x,y",
      cursor: "pointer",
      activeCursor: "grabbing",
      onDragEnd() {
        const id = (this.target as HTMLElement).dataset.id;
        if (id) savePosition(id, this.endX, this.endY);
      },
    });
  }, []);

  return { handleOpenFolder };
}

export default useAnimateHome;