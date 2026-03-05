import dynamic from "next/dynamic";

import WindowControl from "@/components/WindowControl";
import WindowWrapper from "@/components/WindowWrapper";
import { Download } from "lucide-react";

const PdfViewer = dynamic(() => import("@/components/PdfViewer"), {
  ssr: false,
  loading: () => <p>Loading PDF...</p>,
});

function Resume() {
  return (
    <>
      <div id="window-header">
        <WindowControl target="resume" />
        <h2>Resume.pdf</h2>

        <a
          href="files/Resume - RIVERA, MICHAEL KIRBY B"
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <PdfViewer fileName="files/Resume - Rivera, Michael Kirby B.pdf" />
    </>
  );
}

export default WindowWrapper(Resume, "resume");
