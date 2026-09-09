import type { Metadata } from "next";

import Band from "@/components/shared/Band";
import ContactBlock from "@/components/shared/ContactBlock";
import SectionHeading from "@/components/shared/SectionHeading";
import JsonLd from "@/components/ui/JsonLd";
import ArchivedList from "@/components/work/ArchivedList";
import FeaturedProject from "@/components/work/FeaturedProject";
import WorkIndex from "@/components/work/WorkIndex";
import {
  archivedProjects,
  featuredProjects,
  liveProjects,
} from "@/data/constants";
import { ogImage } from "@/lib/site";
import { workIndexStructuredData } from "@/lib/structured-data";

import styles from "./page.module.css";

const description =
  "A rental marketplace with language-model search and an idempotent booking path, a gateway that masks PII before prompts reach OpenAI or Gemini, and real-time messaging on the MERN stack.";

export const metadata: Metadata = {
  title: "Work",
  description,
  alternates: { canonical: "/work" },
  openGraph: {
    type: "website",
    url: "/work",
    title: "Work — S Naga Jaganath",
    description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work",
    description,
    images: [ogImage.url],
  },
};

const [lead, ...rest] = featuredProjects;

/*
 * The category filter is gone. It existed to make ten entries navigable; with
 * three there is nothing to filter, and a control that reduces a list of three
 * to a list of one is friction wearing the costume of a feature.
 */
export default function WorkPage() {
  return (
    <>
      <JsonLd data={workIndexStructuredData(liveProjects)} />

      <main id="main" tabIndex={-1}>
        <Band labelledBy="work-heading" flush>
          <header className={styles.head}>
            <h1 id="work-heading" className="h1">
              Work
            </h1>
            <p className={`lead ${styles.intro}`}>{description}</p>
          </header>

          {lead && <FeaturedProject project={lead} headingLevel={2} />}

          {rest.length > 0 && (
            <div className={styles.more}>
              <WorkIndex projects={rest} label="Projects" headingLevel={2} />
            </div>
          )}
        </Band>

        {archivedProjects.length > 0 && (
          <Band id="earlier" labelledBy="earlier-heading">
            <SectionHeading
              id="earlier-heading"
              title="Earlier work"
              description="University coursework and early side projects. Kept on the record and linked to the source, but they are not what I would point a client at."
            />
            <ArchivedList />
          </Band>
        )}

        <ContactBlock />
      </main>
    </>
  );
}
