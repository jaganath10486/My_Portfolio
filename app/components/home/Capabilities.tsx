import { capabilities } from "@/data/constants";

import styles from "./Capabilities.module.css";

/**
 * Claim, then the shipped work that proves it. Nothing in between.
 *
 * Each entry used to carry an explanatory paragraph as well, which restated
 * what the proof line already demonstrated at three times the length — the
 * evidence is more persuasive than the description of the service.
 */
export default function Capabilities() {
  return (
    <ul className={styles.list}>
      {capabilities.map((capability) => (
        <li className={styles.item} key={capability.title}>
          <div className={styles.head}>
            <p className={styles.claim}>{capability.claim}</p>
            <h3 className={styles.title}>{capability.title}</h3>
          </div>
          <p className={styles.proof}>{capability.proof}</p>
        </li>
      ))}
    </ul>
  );
}
