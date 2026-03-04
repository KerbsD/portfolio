import "@/styles/globals.css";
import type { AppProps } from "next/app";

import gsap from "gsap";
import { Draggable, InertiaPlugin } from "gsap/all";

gsap.registerPlugin(Draggable, InertiaPlugin);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
