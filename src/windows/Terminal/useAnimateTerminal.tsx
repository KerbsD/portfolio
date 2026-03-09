import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useWindowStore from "@/store/windows";

function useAnimateTerminal() {
  const commandRef = useRef<HTMLParagraphElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const footnoteRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  const isOpen = useWindowStore((s) => s.windows.terminal.isOpen);

  useGSAP(() => {
    if (!isOpen) {
      gsap.set(commandRef.current, { opacity: 1 });
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.set(labelRef.current, { opacity: 0, y: -4 });
      gsap.set(itemsRef.current, { opacity: 0, x: -6 });
      gsap.set(footnoteRef.current, { opacity: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(commandRef.current, { opacity: 1 });
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.set(labelRef.current, { opacity: 0, y: -4 });
      gsap.set(itemsRef.current, { opacity: 0, x: -6 });
      gsap.set(footnoteRef.current, { opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "none" } });

      // 1. Cursor blinks while "typing" the command
      tl.set(commandRef.current, { opacity: 1 })
        .fromTo(
          cursorRef.current,
          { opacity: 1 },
          {
            opacity: 0,
            repeat: 5,
            yoyo: true,
            duration: 0.2,
            ease: "steps(1)",
          },
        )

        // 2. Label row fades + slides in (like a header being printed)
        .fromTo(
          labelRef.current,
          { opacity: 0, y: -4 },
          { opacity: 1, y: 0, duration: 0.2 },
          "+=0.1",
        )

        // 3. Each tech stack row prints one by one
        .fromTo(
          itemsRef.current,
          { opacity: 0, x: -6 },
          {
            opacity: 1,
            x: 0,
            duration: 0.15,
            stagger: 0.12,
            ease: "power1.out",
          },
          "+=0.05",
        )

        // 4. Footnote appears last, like a completion message
        .fromTo(
          footnoteRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3 },
          "+=0.2",
        );
    });

    return () => ctx.revert();
  }, [isOpen]);

  return {
    commandRef,
    labelRef,
    itemsRef,
    footnoteRef,
    cursorRef,
  };
}

export default useAnimateTerminal;
