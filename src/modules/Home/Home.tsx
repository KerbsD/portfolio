import { locations } from "@/constants";
import clsx from "clsx";
import useAnimateHome from "./useAnimateHome";

const projects = locations.work?.children ?? [];

const Home = () => {
  const { handleOpenFolder } = useAnimateHome();

  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("groupd folder", project.windowPosition)}
            onClick={() => handleOpenFolder(project)}
          >
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
