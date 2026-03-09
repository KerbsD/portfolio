import Image from "next/image";
import { locations } from "@/constants";
import clsx from "clsx";
import useAnimateHome from "./useAnimateHome";
import styles from "./Home.module.scss";

const projects = locations.work?.children ?? [];

const Home = () => {
  const { handleOpenFolder } = useAnimateHome();

  return (
    <section className={styles["home"]}>
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            data-id={project.id}
            className={clsx(
              `${styles["group"]} folder invisible`,
              "windowPosition" in project ? project.windowPosition : "",
            )}
            onClick={() => handleOpenFolder(project)}
          >
            <Image src="/images/folder.png" width={75} height={75} alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
