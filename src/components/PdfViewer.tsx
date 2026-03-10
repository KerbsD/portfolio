"use client";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfViewer({ fileName }: { fileName: string }) {
  return (
    <Document file={fileName}>
      <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
    </Document>
  );
}
