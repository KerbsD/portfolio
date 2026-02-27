import useWindowStore from "@/store/windows";

interface Props {
  target: string;
}

function WindowControl({ target }: Props) {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize" />
      <div className="maximize" />
    </div>
  );
}

export default WindowControl;
