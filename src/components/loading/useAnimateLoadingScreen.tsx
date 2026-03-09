import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface LoadingScreenProps {
  onComplete?: () => void;
}

function useAnimateLoadingScreen({ onComplete }: LoadingScreenProps = {}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressTrackRef = useRef<HTMLDivElement>(null);
  const statusTextRef = useRef<HTMLParagraphElement>(null);
  const versionRef = useRef<HTMLParagraphElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const statusMessages = [
    "Starting up...",
    "Loading system preferences...",
    "Initializing applications...",
    "Almost ready...",
  ];

  useGSAP(() => {
    const overlay = overlayRef.current;
    const logo = logoRef.current;
    const progressBar = progressBarRef.current;
    const progressTrack = progressTrackRef.current;
    const statusText = statusTextRef.current;
    const version = versionRef.current;
    const glow = glowRef.current;

    if (
      !overlay ||
      !logo ||
      !progressBar ||
      !progressTrack ||
      !statusText ||
      !version ||
      !glow
    )
      return;

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            overlay.style.display = "none";
            onComplete?.();
          },
        });
      },
    });

    // Initial state
    gsap.set([logo, progressTrack, statusText, version], { opacity: 0 });
    gsap.set(progressBar, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(glow, { opacity: 0, scale: 0.5 });

    // Apple logo fade in with glow
    tl.to(
      glow,
      { opacity: 1, scale: 1.2, duration: 1.2, ease: "power2.out" },
      0.3,
    )
      .to(logo, { opacity: 1, duration: 0.8, ease: "power2.out" }, 0.5)

      // Pulse the logo gently
      .to(
        glow,
        { scale: 1, opacity: 0.6, duration: 0.8, ease: "sine.inOut" },
        1.2,
      )

      // Progress track appears
      .to(progressTrack, { opacity: 1, duration: 4, ease: "power2.out" }, 1.6)
      .to(version, { opacity: 1, duration: 3, ease: "power2.out" }, 1.7)
      .to(statusText, { opacity: 1, duration: 3, ease: "power2.out" }, 1.8)

      // Progress bar fills with status message changes
      .to(
        progressBar,
        {
          scaleX: 0.25,
          duration: 1,
          ease: "power1.out",
          onStart: () => {
            statusText.textContent = statusMessages[0];
          },
        },
        2.0,
      )
      .to(
        progressBar,
        {
          scaleX: 0.5,
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            statusText.textContent = statusMessages[1];
          },
        },
        2.8,
      )
      .to(
        progressBar,
        {
          scaleX: 0.78,
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            statusText.textContent = statusMessages[2];
          },
        },
        3.7,
      )
      .to(
        progressBar,
        {
          scaleX: 1,
          duration: 1,
          ease: "power2.out",
          onStart: () => {
            statusText.textContent = statusMessages[3];
          },
        },
        4.7,
      )

      // Fade out elements before screen dismiss
      .to(
        [progressTrack, statusText, version],
        {
          opacity: 0,
          duration: 1,
          ease: "power2.in",
        },
        5.4,
      )
      .to(
        [logo, glow],
        {
          opacity: 0,
          scale: 1.05,
          duration: 2,
          ease: "power2.in",
        },
        5.6,
      );

    return () => {
      tl.kill();
    };
  }, []);

  return {
    overlayRef,
    logoRef,
    progressBarRef,
    progressTrackRef,
    statusTextRef,
    versionRef,
    glowRef,
  };
}

export default useAnimateLoadingScreen;
