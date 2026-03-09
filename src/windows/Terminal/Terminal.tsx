import WindowWrapper from "@/context/WindowWrapper";
import { techStack } from "@/constants";
import WindowControl from "@/components/window-control/WindowControl";
import styles from "./Terminal.module.scss";

function Terminal() {
  return (
    <div className={styles["terminal"]}>
      <div className="window-header">
        <WindowControl target="terminal" />
        <h1>Tech Stack</h1>
      </div>

      <div className={styles["techstack"]}>
        <p>
          <span className="font-bold">@kirby % </span>
          show tech stack
        </p>

        <div className={styles["label"]}>
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>

        <ul className={styles["content"]}>
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-center">
              <h3>{category}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>
                    {item} {i < items.length - 1 ? "/" : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className={styles["footnote"]}>
          <p>6 out of 6 stacks loaded successfully (100%)</p>
          <p className="text-black">Render time: 3ms</p>
        </div>
      </div>
    </div>
  );
}

export default WindowWrapper(Terminal, "terminal");
