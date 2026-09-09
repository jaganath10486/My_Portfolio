import Image from "next/image";
import Link from "next/link";

import ProjectLinks from "@/components/work/ProjectLinks";
import StackList from "@/components/shared/StackList";
import { categoryLabels } from "@/data/constants";
import type { Project } from "@/types";

import styles from "./FeaturedProject.module.css";

/**
 * Reserved for the one project with a genuine product screenshot. Everything
 * else in the index is typographic — padding the rest out with stock imagery
 * would show nothing about the work.
 */
export default function FeaturedProject({
  project,
  headingLevel = 3,
}: {
  project: Project;
  /** See WorkRow: 2 on /work, 3 under a section heading. */
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <article className={styles.featured}>
      {project.image && (
        <Link className={styles.frame} href={`/work/${project.slug}`}>
          <Image
            className={styles.image}
            src={project.image}
            alt={`Screenshot of the ${project.title} home page`}
            width={1900}
            height={970}
            sizes="(max-width: 1240px) 100vw, 1100px"
            priority
          />
        </Link>
      )}

      <div className={styles.body}>
        <div className={styles.head}>
          <Heading className={styles.title}>
            <Link className={styles.titleLink} href={`/work/${project.slug}`}>
              {project.title}
            </Link>
          </Heading>
          <p className="meta">{categoryLabels[project.category]}</p>
        </div>

        <p className={`lead ${styles.summary}`}>{project.summary}</p>

        <StackList items={project.stack} label={`Stack for ${project.title}`} />

        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
