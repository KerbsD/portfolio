import useAnimateWelcome from "./useAnimateWelcome";
import renderText from "@/utils/RenderText";

function Welcome() {
  const { titleRef, subtitleRef } = useAnimateWelcome();

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Kirby!, Welcome to my",
          "text-3xl font-georama",
          100
        )}
      </p>
      <h1 ref={titleRef} className="mt-7">
        {renderText("portfolio", "text-9xl italic font-georama")}
      </h1>

      <div className="small-screen"></div>
    </section>
  );
}

export default Welcome;
