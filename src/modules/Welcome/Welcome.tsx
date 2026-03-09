import styles from "./Welcome.module.scss";

function Welcome() {
  return (
    <section id="welcome" className={styles["welcome"]}>
      <div className={styles["sticky-note"]}>
        <h4>KerbsDev Portfolio</h4>
        <p>
          This portfolio simulates <b>macOS</b> experience. You can —{" "}
          <b>drag</b> each application windows, focus on it, and <b>close</b>{" "}
          with (
          <i>
            <b>&apos;Escape&apos;</b> or the red traffic light
          </i>
          ).
        </p>
      </div>

      <div className={styles["small-screen"]}>
        <p>
          To experience the beauty of my portfolio, consider switching to
          desktop. (But you can make your phone&apos;s browser into Desktop mode! To
          still experience my portfolio)
        </p>
        <p>
          I can create responsive websites, but this portfolio mimics a MacOS so
          I solely focus on desktop
        </p>
      </div>
    </section>
  );
}

export default Welcome;
