import { skills } from "@/data/constants";

import styles from "./SkillMatrix.module.css";

/**
 * A ruled matrix grouped by the job each set does on a project. The previous
 * version listed fifty technologies across eight groups, down to the editor —
 * a list that long reads as a keyword dump and invites the assumption that
 * none of it runs deep.
 */
export default function SkillMatrix() {
  return (
    <dl className={styles.matrix}>
      {skills.map((group) => (
        <div className={styles.row} key={group.title}>
          <dt className={styles.group}>{group.title}</dt>
          <dd className={styles.items}>
            {group.skills.map((skill) => (
              <span className={styles.item} key={skill}>
                {skill}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
