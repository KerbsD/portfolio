import { navLinks, navIcons } from "@/constants";
import Clock from "@/components/Clock";
import useWindowStore from "@/store/windows";
import styles from "./Navbar.module.scss";

function Navbar() {
  const { openWindow } = useWindowStore();

  return (
    <nav className={styles["navbar"]}>
      <div>
        <img src="/images/logo.svg" alt="apple-logo" />
        <p className="font-bold">Kirby's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt="icon" className={styles["nav-icon"]} />
            </li>
          ))}
        </ul>

        <time>
          <Clock />
        </time>
      </div>
    </nav>
  );
}

export default Navbar;
