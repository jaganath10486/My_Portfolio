import type { Metadata } from "next";

import AchievementList from "@/components/about/AchievementList";
import EducationList from "@/components/about/EducationList";
import SkillMatrix from "@/components/about/SkillMatrix";
import Band from "@/components/shared/Band";
import ContactBlock from "@/components/shared/ContactBlock";
import ExperienceEntry from "@/components/shared/ExperienceEntry";
import SectionHeading from "@/components/shared/SectionHeading";
import JsonLd from "@/components/ui/JsonLd";
import { Bio, shownExperiences } from "@/data/constants";
import { ogImage } from "@/lib/site";
import { aboutStructuredData } from "@/lib/structured-data";

import styles from "./page.module.css";

const description = `${Bio.name} — ${Bio.description}`;

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: "/about",
    title: "About — S Naga Jaganath",
    description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "About",
    description,
    images: [ogImage.url],
  },
};

/*
 * Written for the page rather than sliced out of `Bio.description`.
 *
 * The bio has to double as a meta description — one dense paragraph of claims —
 * which is the wrong shape for the page someone reads while deciding whether to
 * trust a stranger with their product. Same facts, different length, and this
 * version has a voice. Every specific in it maps to an entry in `experiences`
 * or `projects`.
 */
const narrative = [
  "I build software that businesses run on, not software that only has to look right in a demo. Close to three years of that now: frontends that load fast and rank, APIs and queues that stay correct when traffic arrives all at once, and increasingly AI wired into the middle of real workflows rather than bolted onto the side.",
  "Working on a live events platform is what sharpened it. The software holds money and decides who gets through a physical gate, so the interesting problems stopped being features and became questions: what happens when this payment webhook is delivered twice, when a scanner drops signal halfway down the queue, when two people claim the same slot in the same second, when the model provider you depend on returns a 503 mid-launch.",
  "Answering those is the work I have got good at — payments and payouts, ticketing and entry, booking and renewals, and model calls that degrade instead of taking the feature down with them. It is also why the performance work matters to me: a threefold cut in First Contentful Paint came out of the same habit of treating the slow, wrong and unlucky paths as part of the build rather than a cleanup task.",
  "I still build the screens on top, and I would rather own a feature end to end than hand a spec across a boundary and hope.",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutStructuredData()} />

      <main id="main" tabIndex={-1}>
        <Band labelledBy="about-heading" flush>
          <h1 id="about-heading" className="h1">
            {Bio.name}
          </h1>
          <div className={styles.narrative}>
            {narrative.map((paragraph, index) => (
              <p
                className={index === 0 ? "lead" : "prose"}
                key={paragraph.slice(0, 40)}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Band>

        <Band id="experience" labelledBy="experience-heading">
          <SectionHeading
            id="experience-heading"
            title="Experience"
            description="Most recent first."
          />
          <div className={styles.experience}>
            {shownExperiences.map((experience) => (
              <ExperienceEntry experience={experience} key={experience.id} />
            ))}
          </div>
        </Band>

        <Band id="stack" labelledBy="stack-heading">
          <SectionHeading
            id="stack-heading"
            title="What I work with"
            description="Grouped by the job it does on a project. Everything here has been used on something that shipped."
          />
          <SkillMatrix />
        </Band>

        <Band id="education" labelledBy="education-heading">
          <SectionHeading id="education-heading" title="Education" />
          <EducationList />
          <div className={styles.achievements}>
            <AchievementList />
          </div>
        </Band>

        <ContactBlock />
      </main>
    </>
  );
}
