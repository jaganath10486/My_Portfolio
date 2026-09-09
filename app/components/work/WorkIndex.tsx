import WorkRow from "@/components/work/WorkRow";
import type { Project } from "@/types";

import styles from "./WorkIndex.module.css";

/** Typographic index of projects, used on the home page and /work. */
export default function WorkIndex({
  projects,
  label,
  headingLevel = 3,
}: {
  projects: readonly Project[];
  label: string;
  headingLevel?: 2 | 3;
}) {
  return (
    <ul className={styles.index} aria-label={label}>
      {projects.map((project) => (
        <WorkRow
          project={project}
          headingLevel={headingLevel}
          key={project.slug}
        />
      ))}
    </ul>
  );
}
