import "@/styles/globals.css";
import type { AppProps } from "next/app";

import gsap from "gsap";
import { Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
