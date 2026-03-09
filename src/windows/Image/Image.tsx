import WindowControl from "@/components/window-control/WindowControl";
import WindowWrapper from "@/context/WindowWrapper";
import useWindowStore from "@/store/windows";
import styles from "./Image.module.scss";

function Image() {
  const { windows } = useWindowStore();
  const data = windows.imgfile.data;

  if (!data) return null;

  const { name, imageUrl } = data;
  return (
    <div className={styles["imgfile"]}>
      <div className="window-header">
        <WindowControl target="imgfile" />
        <h2 className="font-bold text-[#5f6266]">{name}</h2>
      </div>

      <div className="p-5 bg-white">
        {imageUrl && (
          <div className="w-full">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-auto max-h-[70vh] object-contain rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default WindowWrapper(Image, "imgfile");
