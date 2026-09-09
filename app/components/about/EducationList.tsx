import { education } from "@/data/constants";

import styles from "./EducationList.module.css";

/**
 * The degree carries the weight; everything before it stays on the record as a
 * single quiet line each rather than being given equal billing.
 */
export default function EducationList() {
  const primary = education.filter((entry) => entry.primary);
  const rest = education.filter((entry) => !entry.primary);

  return (
    <div className={styles.wrap}>
      {primary.map((entry) => (
        <article className={styles.primary} key={entry.id}>
          <h3 className={styles.degree}>{entry.degree}</h3>
          <p className={styles.school}>{entry.school}</p>
          <p className={styles.facts}>
            <span className="meta">{entry.date}</span>
            <span className={styles.grade}>{entry.grade}</span>
          </p>
        </article>
      ))}

      {rest.length > 0 && (
        <ul className={styles.rest}>
          {rest.map((entry) => (
            <li className={styles.restItem} key={entry.id}>
              <span className={styles.restDegree}>{entry.degree}</span>
              <span className={styles.restSchool}>{entry.school}</span>
              <span className={`meta ${styles.restMeta}`}>
                {entry.date}, {entry.grade}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
