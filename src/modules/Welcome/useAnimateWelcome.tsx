import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import setupTextHover from "@/utils/SetupTextHover";

function useAnimateWelcome() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    const titleCleanup = setupTextHover(titleRef.current, "title");
    const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");

    return () => {
      subtitleCleanup();
      titleCleanup();
    };
  }, []);

  return {
    titleRef,
    subtitleRef,
  };
}

export default useAnimateWelcome;
