import { principles } from "@/data/constants";

import styles from "./Approach.module.css";

/**
 * A client's first fear is rarely that the engineer cannot code — it is being
 * left mid-build, or having to specify everything themselves. This answers
 * that, and each point is anchored to work that exists rather than to process
 * language, so it stays checkable in conversation.
 *
 * Not numbered: three habits are not a sequence, and 01/02/03 markers on
 * content that is not ordered is decoration pretending to be structure.
 */
export default function Approach() {
  return (
    <ul className={styles.list}>
      {principles.map((principle) => (
        <li className={styles.item} key={principle.title}>
          <h3 className={styles.title}>{principle.title}</h3>
          <p className={styles.copy}>{principle.body}</p>
        </li>
      ))}
    </ul>
  );
}
