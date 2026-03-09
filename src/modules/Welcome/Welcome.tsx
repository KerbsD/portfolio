import useAnimateWelcome from "./useAnimateWelcome";
// import renderText from "@/utils/RenderText";
import styles from "./Welcome.module.scss";

function Welcome() {
  const { titleRef, subtitleRef } = useAnimateWelcome();

  return (
    <section id="welcome" className={styles["welcome"]}>
      {/* <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Kirby!, Welcome to my",
          "text-3xl font-georama",
          100
        )}
      </p>
      <h1 ref={titleRef} className="mt-7">
        {renderText("portfolio", "text-9xl italic font-georama")}
      </h1> */}

      <div className={styles["small-screen"]}>
        <p>
          To experience the beauty of my portfolio, consider switching to
          desktop. (But you can make your phone's browser into Desktop mode! To
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
