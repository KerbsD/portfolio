import dynamic from "next/dynamic";

import WindowControl from "@/components/window-control/WindowControl";
import WindowWrapper from "@/context/WindowWrapper";
import { Download } from "lucide-react";

import styles from "./Resume.module.scss";

const PdfViewer = dynamic(() => import("@/components/PdfViewer"), {
  ssr: false,
  loading: () => <p>Loading PDF...</p>,
});

function Resume() {
  return (
    <div className={styles["resume"]}>
      <div className="window-header">
        <WindowControl target="resume" />
        <h2 className="font-bold text-sm text-center flex-1">Resume.pdf</h2>

        <a
          href="files/Resume - Rivera, Michael Kirby B.pdf"
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <PdfViewer fileName="files/Resume - Rivera, Michael Kirby B.pdf" />
    </div>
  );
}

export default WindowWrapper(Resume, "resume");
