import Image from "next/image";
import WindowControl from "@/components/window-control/WindowControl";
import WindowWrapper from "@/context/WindowWrapper";
import useWindowStore from "@/store/windows";
import styles from "./Text.module.scss";

function Text() {
  const { windows } = useWindowStore();

  const data = windows.txtfile.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <section className={styles["txtfile"]}>
      <div className="window-header">
        <WindowControl target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 space-y-6 bg-white">
        {image && (
          <div className="w-full">
            <Image
              width={1000}
              height={1000}
              src={image}
              alt={name}
              className="w-full h-auto rounded"
            />
          </div>
        )}

        {subtitle && (
          <h3 className="text-lg font-semibold text-gray-900">{subtitle}</h3>
        )}

        {Array.isArray(description) && description.length > 0 && (
          <div className="space-y-2">
            {description.map((item, index) => (
              <p key={index} className="text-gray-900">
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default WindowWrapper(Text, "txtfile");
