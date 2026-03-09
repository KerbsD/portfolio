import Image from "next/image";
import WindowControl from "@/components/window-control/WindowControl";
import WindowWrapper from "@/context/WindowWrapper";
import useLocationStore, { AnyLocation, AnyChildren } from "@/store/location";
import useWindowStore from "@/store/windows";

import { locations } from "@/constants";
import { Search } from "lucide-react";

import clsx from "clsx";

import styles from "./Finder.module.scss";

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();

  const { openWindow } = useWindowStore();

  const openItem = (item: AnyChildren) => {
    if ("fileType" in item && item.fileType === "pdf")
      return openWindow("resume");
    if ("kind" in item && item.kind === "folder")
      return setActiveLocation(item);
    if (
      "fileType" in item &&
      ["fig", "url"].includes(item.fileType) &&
      "href" in item &&
      typeof item.href === "string"
    )
      return window.open(item.href, "_blank");

    openWindow(`${"fileType" in item && item.fileType}${item.kind}`, item);
  };

  const renderList = (name: string, items: AnyLocation[]) => {
    return (
      <div key={name}>
        <h3>{name}</h3>
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => setActiveLocation(item)}
              className={clsx(
                item.id === activeLocation?.id
                  ? `${styles["active"]}`
                  : `${styles["not-active"]}`,
              )}
            >
              <Image width={30} height={30} src={item.icon} alt={item.name} className="w-4" />
              <p className="text-sm font-medium truncate">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={styles["finder"]}>
      <div className="window-header">
        <WindowControl target="finder" />
        <Search className="icon"></Search>
      </div>

      <div className="bg-white flex h-full">
        <div className={styles["sidebar"]}>
          {[
            { name: "Favorites", items: Object.values(locations) },
            { name: "Projects", items: locations.work.children },
          ].map(({ name, items }) => renderList(name, items))}
        </div>

        <ul className={styles["content"]}>
          {activeLocation &&
            "children" in activeLocation &&
            activeLocation.children.map((item) => (
              <li
                key={item.id}
                className={"position" in item ? item.position : undefined}
                onClick={() => openItem(item)}
              >
                <Image width={40} height={40} src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default WindowWrapper(Finder, "finder");
