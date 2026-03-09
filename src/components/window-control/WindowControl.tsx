import useWindowStore from "@/store/windows";
import styles from "./Window.module.scss";

interface Props {
  target: string;
}

function WindowControl({ target }: Props) {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls" className={styles["window-controls"]}>
      <div className={styles["close"]} onClick={() => closeWindow(target)} />
      <div className={styles["minimize"]} />
      <div className={styles["maximize"]} />
    </div>
  );
}

export default WindowControl;
