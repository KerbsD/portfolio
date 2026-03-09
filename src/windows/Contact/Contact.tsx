import WindowControl from "@/components/window-control/WindowControl";
import WindowWrapper from "@/context/WindowWrapper";
import { socials } from "@/constants";
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <div className={styles["contact"]}>
      <div className="window-header">
        <WindowControl target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="/images/kirby.jpg"
          alt="Adrian"
          className="w-20 rounded-full"
        />

        <h3>Let's Connect</h3>
        <p>
          I'm always looking for new opportunities and collaborations. Feel free
          to contact me via email or social media.image.png
        </p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WindowWrapper(Contact, "contact");
