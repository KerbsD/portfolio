import WindowWrapper from "@/components/WindowWrapper";
import { techStack } from "@/constants";
import WindowControl from "@/components/WindowControl";

function Terminal() {
  return (
    <>
      <div id="window-header">
        <WindowControl target="terminal"/>
        <h1>Tech Stack</h1>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@kirby % </span>
          show tech stack
        </p>

        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>

        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li className="flex items-center">
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

        <div className="footnote">
          <p>5 out of 5 stacks loaded successfully (100%)</p>
          <p className="text-black">Render time: 3ms</p>
        </div>
      </div>
    </>
  );
}

export default WindowWrapper(Terminal, "terminal");
