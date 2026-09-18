import { Bio } from "@/data/constants";

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  // Vercel preview/production deployments expose their own host.
  const vercel = process.env.NEXT_PUBLIC_VERCEL_URL;
  if (vercel) return `https://${vercel}`;

  return "https://my-portfolio-liart-omega-53.vercel.app";
}

export const siteUrl = resolveSiteUrl();

export const site = {
  url: siteUrl,
  name: Bio.name,
  /** Kept from the pre-migration <title> so existing search results stay stable. */
  title: "S Naga Jaganath",
  jobTitle: "AI Full Stack Engineer",
  description: Bio.description,
  locale: "en_US",
  /** Matches --ink in globals.css. */
  themeColor: "#0e1418",
  /** Ownership proof carried over from the previous index.html. */
  googleSiteVerification: "gcELsY-72bYkqWzZQMtJ3VQbrfyVCQqIy1I2T-S2qKs",
} as const;

/**
 * The hero headline. Written for the person who cannot read a stack — a
 * recruiter, a founder, whoever forwarded them the link. It names the thing
 * being bought (websites, apps) and the reason to want it (fast, reliable,
 * saves time), using no word that has to be looked up.
 *
 * The version before this one — "Fast frontends. Correct under load." —
 * described the work accurately and to the wrong audience. "Frontend" and
 * "under load" are terms you only know if you already do this job, which is
 * the one group that does not need convincing.
 *
 * Each clause is still backed by a figure in the Hero ledger below it: the
 * Lighthouse and paint numbers, the 20,000 scans with no double entries, the
 * publish flow cut from 15 minutes to 8.
 *
 * LENGTH BUDGET — the h1 column is only ~790px at its widest while the type
 * runs to 76px, so a clause over ~19 characters wraps and the three staggered
 * lines silently become four or five. Measured across 320-1920px: these three
 * render one-per-line from 1280px up. Keep replacements at or under 19
 * characters per clause, or the entrance animation stops matching the layout.
 */
export const headline = "Fast websites. Reliable apps. AI that saves time.";

export const headlineLines = [
  "Fast websites.",
  "Reliable apps.",
  "AI that saves time.",
] as const;

/**
 * The pitch, in one paragraph. Breadth first — an empty repo to production —
 * then the specifics that make it credible. Deliberately not a niche statement:
 * the narrow transactional positioning it replaced was memorable but filtered
 * out most of the work worth taking.
 */
export const positioning =
  "I am Naga, an AI full stack engineer. I take products from an empty repository to something running in production: SEO-ready Next.js frontends that load fast, APIs and queues that stay correct under load, LLMs, AI agents and RAG pipelines wired into real workflows, and the payments, authentication and booking plumbing in between. Close to three years of it, mostly on systems where being slow or being wrong costs the business money.";

/** Subject line prefilled on the primary call to action. */
const enquirySubject = "Project enquiry";

export const mailto = `mailto:${Bio.email}?subject=${encodeURIComponent(
  enquirySubject,
)}`;

/**
 * WhatsApp has no subject field, so the whole opener is the prefilled body.
 * It is written to be sendable unchanged — the contact block asks for a
 * paragraph, and an empty compose box is where that paragraph goes to die.
 *
 * wa.me wants digits only: no +, no spaces, no dashes. Bio.whatsapp is stored
 * that way rather than formatted, because a display format would have to be
 * stripped here anyway and the number is never shown as text.
 */
const whatsappOpener =
  "Hi Naga — I found you through your portfolio. I’d like to talk about a project.";

export const whatsappUrl = `https://wa.me/${Bio.whatsapp}?text=${encodeURIComponent(
  whatsappOpener,
)}`;

/**
 * The build-time card from app/opengraph-image.tsx.
 *
 * Next attaches a file-based OG image to its own segment, but a page that
 * declares its own `openGraph` replaces the inherited value wholesale — so
 * every route that sets openGraph has to name this explicitly or it ships a
 * summary_large_image card with no image.
 */
export const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${Bio.name} — ${site.jobTitle}`,
} as const;
