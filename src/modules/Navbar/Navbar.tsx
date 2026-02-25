import dayjs from "dayjs";
import { navLinks, navIcons } from "@/constants";
import Clock from "@/components/Clock";

function Navbar() {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="apple-logo" />
        <p className="font-bold">Kirby's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt="icon" className="icon-hover" />
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
