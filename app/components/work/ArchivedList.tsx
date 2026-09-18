import { archivedProjects, categoryLabels } from "@/data/constants";

import styles from "./ArchivedList.module.css";

/**
 * Coursework and early side projects, listed by name and linked straight to the
 * repo. They used to each have a page and a card of equal weight to the real
 * work, which meant a three-sentence CRUD exercise sat at the same size as the
 * LLM gateway — volume mistaken for evidence. Listed like this they still show
 * the ground covered without setting the expectation.
 */
export default function ArchivedList() {
  return (
    <ul className={styles.list}>
      {archivedProjects.map((project) => (
        <li className={styles.item} key={project.slug}>
          <a
            className={styles.link}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
            <span className="sr-only"> on GitHub</span>
          </a>
          <span className={styles.stack}>{project.stack.join(", ")}</span>
          <span className={`meta ${styles.category}`}>
            {categoryLabels[project.category]}
          </span>
        </li>
      ))}
    </ul>
  );
}
