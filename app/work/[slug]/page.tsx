import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Band from "@/components/shared/Band";
import ContactBlock from "@/components/shared/ContactBlock";
import StackList from "@/components/shared/StackList";
import JsonLd from "@/components/ui/JsonLd";
import ProjectLinks from "@/components/work/ProjectLinks";
import { categoryLabels, getProject, liveProjects } from "@/data/constants";
import { ogImage } from "@/lib/site";
import { projectStructuredData } from "@/lib/structured-data";
import { toSentences } from "@/lib/text";

import styles from "./page.module.css";

type Params = { slug: string };

/** Only live projects get pages — archived coursework links to its repo. */
export function generateStaticParams(): Params[] {
  return liveProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  const url = `/work/${project.slug}`;
  // A genuine screenshot beats the generic card; most projects have neither.
  const image = project.image ?? ogImage.url;

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${project.title} — S Naga Jaganath`,
      description: project.summary,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [image],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const points = toSentences(project.description);
  const index = liveProjects.findIndex((entry) => entry.slug === slug);
  const previous = index > 0 ? liveProjects[index - 1] : undefined;
  const next =
    index < liveProjects.length - 1 ? liveProjects[index + 1] : undefined;

  return (
    <>
      <JsonLd data={projectStructuredData(project)} />

      <main id="main" tabIndex={-1}>
        <Band labelledBy="project-heading" flush>
          <nav aria-label="Breadcrumb" className={styles.crumb}>
            <Link className="link" href="/work">
              Work
            </Link>
          </nav>

          <header className={styles.head}>
            <h1 id="project-heading" className="h1">
              {project.title}
            </h1>
            <p className={`lead ${styles.summary}`}>{project.summary}</p>
            <p className={`meta ${styles.category}`}>
              {categoryLabels[project.category]}
            </p>
          </header>

          {project.image && (
            <div className={styles.frame}>
              <Image
                className={styles.image}
                src={project.image}
                alt={`Screenshot of the ${project.title} home page`}
                width={1900}
                height={970}
                sizes="(max-width: 1240px) 100vw, 1100px"
                priority
              />
            </div>
          )}

          <div className={styles.detail}>
            <div className={styles.copy}>
              <h2 className={`meta ${styles.sectionLabel}`}>What I built</h2>
              {points.length > 1 ? (
                <ul className={styles.points}>
                  {points.map((point) => (
                    <li className={styles.point} key={point}>
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="prose">{project.description}</p>
              )}

              {/*
                The section a client and a CTO both actually read. Present only
                where there is a real design decision to describe — never
                filled in for the sake of the layout.
              */}
              {project.hardPart && (
                <div className={styles.hard}>
                  <h2 className={styles.hardTitle}>The hard part</h2>
                  <p className={styles.hardBody}>{project.hardPart}</p>
                </div>
              )}

              <ProjectLinks project={project} emphasis />
            </div>

            <div className={styles.side}>
              <h2 className={`meta ${styles.sideTitle}`}>Built with</h2>
              <StackList
                items={project.stack}
                label={`Technologies used in ${project.title}`}
              />
            </div>
          </div>
        </Band>

        {(previous || next) && (
          <Band labelledBy="more-heading">
            <h2 id="more-heading" className="sr-only">
              More projects
            </h2>
            <nav className={styles.pager} aria-label="More projects">
              {previous ? (
                <Link
                  className={styles.pageLink}
                  href={`/work/${previous.slug}`}
                >
                  <span className="meta">Previous</span>
                  <span className={styles.pageTitle}>{previous.title}</span>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link
                  className={`${styles.pageLink} ${styles.pageNext}`}
                  href={`/work/${next.slug}`}
                >
                  <span className="meta">Next</span>
                  <span className={styles.pageTitle}>{next.title}</span>
                </Link>
              )}
            </nav>
          </Band>
        )}

        <ContactBlock />
      </main>
    </>
  );
}
