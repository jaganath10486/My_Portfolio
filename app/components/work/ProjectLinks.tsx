import type { Project } from "@/types";

import styles from "./ProjectLinks.module.css";

export default function ProjectLinks({
  project,
  emphasis = false,
}: {
  project: Project;
  emphasis?: boolean;
}) {
  return (
    <div className={styles.row}>
      {project.webapp && (
        <a
          className={`btn ${emphasis ? "btn-primary" : "btn-ghost"}`}
          href={project.webapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the live site
          <span className="sr-only">
            {" "}
            for {project.title}
          </span>
        </a>
      )}
      <a
        className="btn btn-ghost"
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read the source
        <span className="sr-only">
          {" "}
          for {project.title} on GitHub
        </span>
      </a>
    </div>
  );
}
