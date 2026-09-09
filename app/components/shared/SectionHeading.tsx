import type { ReactNode } from "react";

import styles from "./SectionHeading.module.css";

export default function SectionHeading({
  id,
  title,
  description,
  aside,
}: {
  id: string;
  title: string;
  description?: string;
  /** Trailing action, e.g. a link to the full index. */
  aside?: ReactNode;
}) {
  return (
    <div className={styles.wrap}>
      <div className={styles.row}>
        <h2 id={id} className="h2">
          {title}
        </h2>
        {aside && <div className={styles.aside}>{aside}</div>}
      </div>
      {description && <p className={`prose ${styles.desc}`}>{description}</p>}
    </div>
  );
}
