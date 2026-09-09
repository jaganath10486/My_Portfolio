import type { Metadata } from "next";
import Link from "next/link";

import Approach from "@/components/home/Approach";
import Capabilities from "@/components/home/Capabilities";
import Services from "@/components/home/Services";
import Hero from "@/components/home/Hero";
import Band from "@/components/shared/Band";
import ContactBlock from "@/components/shared/ContactBlock";
import SectionHeading from "@/components/shared/SectionHeading";
import JsonLd from "@/components/ui/JsonLd";
import FeaturedProject from "@/components/work/FeaturedProject";
import WorkIndex from "@/components/work/WorkIndex";
import { featuredProjects } from "@/data/constants";
import { homeStructuredData } from "@/lib/structured-data";

import styles from "./page.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const [lead, ...rest] = featuredProjects;

/*
 * The journey the page is built around:
 *   what I do  →  what I can help with  →  proof it shipped
 *              →  how I work  →  start a project
 *
 * The current role is no longer a section here. Its outcomes are the ledger in
 * the hero and the proof lines under each capability, which is where a client
 * will actually read them; the full history lives on /about for anyone who
 * wants the CV view.
 */
export default function Home() {
  return (
    <>
      <JsonLd data={homeStructuredData()} />

      <main id="main" tabIndex={-1}>
        <Hero />

        <Band id="build" labelledBy="build-heading">
          <SectionHeading
            id="build-heading"
            title="Things I build"
            description="No stack names in this list on purpose. If you recognise your problem in it, I have shipped it before — and if it is not here, ask anyway."
          />
          <Services />
        </Band>

        <Band id="depth" labelledBy="depth-heading">
          <SectionHeading
            id="depth-heading"
            title="Where it gets hard"
            description="Four things that look like ordinary features until they run at volume. This is the part I get called in for."
          />
          <Capabilities />
        </Band>

        <Band id="work" labelledBy="work-heading">
          <SectionHeading
            id="work-heading"
            title="Selected work"
            description="Three builds worth reading about: a marketplace where the search is a language model, a gateway that has to be trusted with other people's data, and a chat that has to stay connected."
            aside={
              <Link className="link" href="/work">
                All work
              </Link>
            }
          />

          {lead && <FeaturedProject project={lead} />}

          {rest.length > 0 && (
            <div className={styles.more}>
              <WorkIndex projects={rest} label="More selected projects" />
            </div>
          )}
        </Band>

        <Band id="approach" labelledBy="approach-heading">
          <SectionHeading
            id="approach-heading"
            title="How I work"
            description="Three habits that decide whether a build holds. Each one is here because there is shipped work behind it, not because it sounded good."
          />
          <Approach />
        </Band>

        <ContactBlock />
      </main>
    </>
  );
}
