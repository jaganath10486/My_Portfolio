import StackList from "@/components/shared/StackList";
import type { Experience } from "@/types";

import styles from "./ExperienceEntry.module.css";

/**
 * Editorial two-column entry rather than a timeline rail. The company sits in
 * the left column at display width; the outcomes get the full measure of the
 * right, one per line, so nothing has to be clamped.
 */
export default function ExperienceEntry({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <article className={styles.entry}>
      <div className={styles.aside}>
        <h3 className={styles.company}>{experience.company}</h3>
        <p className={styles.role}>{experience.role}</p>
        <p className="meta">{experience.date}</p>
        {experience.current && (
          <p className={styles.current}>
            <span className={styles.dot} aria-hidden="true" />
            Current role
          </p>
        )}
      </div>

      <div className={styles.body}>
        <ul className={styles.highlights}>
          {experience.highlights.map((highlight) => (
            <li className={styles.highlight} key={highlight}>
              {highlight}
            </li>
          ))}
        </ul>

        <StackList
          items={experience.stack}
          label={`Technologies used at ${experience.company}`}
          size="small"
        />
      </div>
    </article>
  );
}
