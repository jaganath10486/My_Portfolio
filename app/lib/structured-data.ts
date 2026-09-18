import {
  Bio,
  achievements,
  capabilities,
  education,
  experiences,
  services,
  shownExperiences,
  skills,
} from "@/data/constants";
import { site } from "@/lib/site";
import type { Project } from "@/types";

/**
 * Schema.org description of the site. Every value is taken from content that is
 * actually rendered — nothing here is inferred or invented.
 */
const personId = `${site.url}/#person`;
const websiteId = `${site.url}/#website`;

function person() {
  return {
    "@type": "Person",
    "@id": personId,
    name: Bio.name,
    alternateName: site.title,
    url: site.url,
    image: `${site.url}/jaganath_profilepic.png`,
    email: `mailto:${Bio.email}`,
    jobTitle: site.jobTitle,
    description: Bio.description,
    sameAs: [Bio.github, Bio.linkedin],
    knowsAbout: skills.flatMap((group) => group.skills),
    alumniOf: education.map((entry) => ({
      "@type": "EducationalOrganization",
      name: entry.school,
    })),
    worksFor: {
      "@type": "Organization",
      name: experiences[0]?.company ?? "",
    },
    award: achievements,
    seeks: {
      "@type": "Demand",
      name: Bio.availability,
    },
  };
}

function website() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: site.url,
    name: site.title,
    description: Bio.description,
    inLanguage: "en",
    publisher: { "@id": personId },
  };
}

/** Home: the profile page for the person. */
export function homeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      person(),
      website(),
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: `${Bio.name} — ${site.jobTitle}`,
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
      },
      /*
       * The freelance offer, described as services rather than only as an
       * employment history — this is what the site is actually for.
       */
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#service`,
        name: `${Bio.name} — freelance full stack engineering`,
        url: site.url,
        provider: { "@id": personId },
        areaServed: "Worldwide",
        availableLanguage: "en",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "What I can help with",
          /*
           * Both lists: the four specialisms with their evidence, and the
           * plain-language deliverables a client would actually search for.
           */
          itemListElement: [
            ...capabilities.map((capability) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: capability.title,
                description: capability.proof,
              },
            })),
            ...services.flatMap((group) =>
              group.items.map((item) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: item,
                  category: group.title,
                },
              })),
            ),
          ],
        },
      },
    ],
  };
}

/** Work index: an ordered list pointing at every project page. */
export function workIndexStructuredData(projects: readonly Project[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${site.url}/work#webpage`,
        url: `${site.url}/work`,
        name: `Work — ${Bio.name}`,
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
      },
      {
        "@type": "ItemList",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: projects.length,
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${site.url}/work/${project.slug}`,
          name: project.title,
        })),
      },
    ],
  };
}

/** Project detail: the repository is the primary entity. */
export function projectStructuredData(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "@id": `${site.url}/work/${project.slug}#project`,
    name: project.title,
    description: project.summary,
    url: `${site.url}/work/${project.slug}`,
    codeRepository: project.github,
    programmingLanguage: project.stack,
    author: { "@id": personId },
    ...(project.image ? { image: `${site.url}${project.image}` } : {}),
    ...(project.webapp
      ? {
          targetProduct: {
            "@type": "WebApplication",
            name: project.title,
            url: project.webapp,
            applicationCategory: "WebApplication",
            operatingSystem: "Any",
          },
        }
      : {}),
  };
}

/** About: the person plus their employment history. */
export function aboutStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${site.url}/about#webpage`,
        url: `${site.url}/about`,
        name: `About — ${Bio.name}`,
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
      },
      {
        ...person(),
        hasOccupation: shownExperiences.map((entry) => ({
          "@type": "Occupation",
          name: entry.role,
          occupationLocation: {
            "@type": "Organization",
            name: entry.company,
          },
        })),
      },
    ],
  };
}

/**
 * `<` is emitted as the JSON escape sequence `<` so the payload can never
 * terminate the surrounding <script>. The previous implementation replaced `<`
 * with the literal `"<"`, which the compiler resolves back to `<` before
 * the replace ever runs — it was a no-op. The doubled backslash is the fix.
 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
