import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/all";
import useWindowStore from "@/store/windows";
import useLocationStore, { type AnyLocation } from "@/store/location";

function useAnimateHome() {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const handleOpenFolder = (project: AnyLocation) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  return {
    handleOpenFolder,
  };
}

export default useAnimateHome;
