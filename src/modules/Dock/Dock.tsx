import { useRef } from "react";
import { dockApps } from "@/constants";

function Dock() {
  const dockRef = useRef<HTMLDivElement>(null);

  return (
    <section id="dock">
      <div ref={dockRef}>
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => {}}
            ></button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dock;
