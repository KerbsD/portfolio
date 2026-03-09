import Image from "next/image";
import { dockApps } from "@/constants";
import useDock from "./useDock";
import { Tooltip } from "react-tooltip";
import styles from "./Dock.module.scss";

function Dock() {
  const { toggleApp, dockRef } = useDock();

  return (
    <section id="dock" className={styles["dock"]}>
      <div ref={dockRef} className={styles["dock-container"]}>
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button
              type="button"
              className={styles["dock-icon"]}
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <Image
                src={`/images/${icon}`}
                alt={name}
                fill
                className={canOpen ? "" : "opacity-60"}
              />
            </button>
          </div>
        ))}

        <Tooltip id="dock-tooltip" place="top" className={styles["tooltip"]} />
      </div>
    </section>
  );
}

export default Dock;
