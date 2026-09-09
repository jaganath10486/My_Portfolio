import { services } from "@/data/constants";

import styles from "./Services.module.css";

/**
 * The plain-language menu, for the visitor who is buying an outcome rather
 * than a stack. Deliberately free of framework names: someone who needs
 * WhatsApp login should recognise their problem without knowing what Express
 * is, and the technology answer is one click away on /about.
 *
 * A definition list rather than a badge grid — these are readable phrases, not
 * logos, and there are enough of them that chips would become visual noise.
 */
export default function Services() {
  return (
    <dl className={styles.grid}>
      {services.map((group) => (
        <div className={styles.group} key={group.title}>
          <dt className={styles.title}>{group.title}</dt>
          <dd>
            <ul className={styles.items}>
              {group.items.map((item) => (
                <li className={styles.item} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}
