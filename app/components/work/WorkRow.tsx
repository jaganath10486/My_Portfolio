import Link from "next/link";

import StackList from "@/components/shared/StackList";
import { categoryLabels } from "@/data/constants";
import type { Project } from "@/types";

import styles from "./WorkRow.module.css";

/**
 * One entry in the typographic work index. The whole row is clickable via an
 * overlay on the title link, so the accessible name stays the project title
 * rather than swallowing the stack tags and status alongside it.
 */
export default function WorkRow({
  project,
  headingLevel = 3,
}: {
  project: Project;
  /**
   * 3 under a section heading (the home page), 2 on /work where the rows sit
   * directly beneath the page h1 — otherwise the document skips a level.
   */
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    // data-category drives the filter on /work: the toggle is a Client
    // Component but the rows stay on the server and are matched in CSS.
    <li className={styles.row} data-category={project.category}>
      <div className={styles.main}>
        <Heading className={styles.title}>
          <Link className={styles.link} href={`/work/${project.slug}`}>
            {project.title}
          </Link>
        </Heading>
        <p className={styles.summary}>{project.summary}</p>
      </div>

      <div className={styles.meta}>
        <p className={styles.status}>
          <span className="meta">{categoryLabels[project.category]}</span>
          {project.webapp && (
            <span className={styles.live}>
              <span className={styles.dot} aria-hidden="true" />
              Live
            </span>
          )}
        </p>
        <StackList
          items={project.stack}
          label={`Stack for ${project.title}`}
          size="small"
        />
      </div>
    </li>
  );
}
