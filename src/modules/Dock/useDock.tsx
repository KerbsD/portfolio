import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useWindowStore from "@/store/windows";
import { WINDOW_CONFIG } from "@/constants";

function useDock() {
  const dockRef = useRef<HTMLDivElement>(null);
  const { openWindow, closeWindow, windows } = useWindowStore();

  const toggleApp = (app: any) => {
    if (!app.canOpen) return;

    const window = windows[app.id as keyof typeof WINDOW_CONFIG];

    if (window.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }
  };

  useGSAP(() => {
    const dock = dockRef.current;

    if (!dock) return;

    const icons = dock?.querySelectorAll(".dock-icon");

    const animateIcons = (mouseX: any) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);

        const intensity = Math.exp(-(distance ** 2) / 20000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { left } = dock.getBoundingClientRect();

      animateIcons(e.clientX - left);
    };

    const resetIcons = () => {
      icons.forEach(() => {
        gsap.to(icons, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        });
      });
    };

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  return {
    dockRef,
    toggleApp,
  };
}

export default useDock;
