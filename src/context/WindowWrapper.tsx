import { ComponentType, useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import { useGSAP } from "@gsap/react";

import { type WindowConfig } from "@/constants";
import useWindowStore from "@/store/windows";

function WindowWrapper(
  Component: ComponentType,
  windowKey: keyof WindowConfig,
) {
  const Wrapped = (props: any) => {
    const { focusWindow, windows, closeWindow } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
      if (!isOpen) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        const isFocused =
          windows[windowKey].zIndex ===
          Math.max(...Object.values(windows).map((w) => w.zIndex));

        if (e.key === "Escape" && isFocused) {
          e.preventDefault();
          closeWindow(windowKey);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, zIndex, windows]);

    useGSAP(() => {
      const el = ref.current;

      if (!el || !isOpen) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;

      if (!el) return;

      const [instance] = Draggable.create(el, {
        cursor: "pointer",
        activeCursor: "grabbing",
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, []);

    useLayoutEffect(() => {
      const el = ref.current;

      if (!el) return;

      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section
        ref={ref}
        style={{ zIndex, display: isOpen ? "block" : "none" }}
        className="absolute"
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
}

export default WindowWrapper;
