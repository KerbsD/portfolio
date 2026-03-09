import useAnimateLoadingScreen from "./useAnimateLoadingScreen";
import styles from "./Loading.module.scss"

const LoadingScreen = () => {
  const {
    overlayRef,
    logoRef,
    progressBarRef,
    progressTrackRef,
    statusTextRef,
    versionRef,
    glowRef,
  } = useAnimateLoadingScreen();

  return (
    <section ref={overlayRef} className={styles["loading-overlay"]}>
      {/* Subtle radial background */}
      <div className={styles["radial-bg"]} />

      {/* Glow behind logo */}
      <div ref={glowRef} className={styles["glow"]} />

      {/* Apple Logo SVG */}
      <div ref={logoRef} className={styles["logo-container"]}>
        <svg
          width="64"
          height="76"
          viewBox="0 0 814 1000"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-155.5-127.4C46.7 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 70.1 0 128.4 46.2 172.5 46.2 42.8 0 109.9-49 192.7-49 31.2 0 108.2 2.6 163.2 48.9zm-166.2-192.8c31.8-36.1 54.4-86.4 54.4-136.7 0-7.1-.6-14.3-1.9-20.1-51.6 1.9-112.5 34.5-149.1 75.3-29.1 32.5-56.6 82.7-56.6 133.7 0 7.7 1.3 15.4 1.9 17.9 3.2.6 8.4 1.3 13.5 1.3 46.3 0 102.9-31.2 137.8-71.4z" />
        </svg>
      </div>

      {/* Progress bar track */}
      <div ref={progressTrackRef} className={styles["progress-track"]}>
        <div ref={progressBarRef} className={styles["progress-bar"]} />
      </div>

      {/* Status text */}
      <p ref={statusTextRef} className={styles["status-text"]}>
        Starting up...
      </p>

      {/* Version text */}
      <p ref={versionRef} className={styles["version-text"]}>
        KerbsDev Portfolio
      </p>
    </section>
  );
};

export default LoadingScreen;
