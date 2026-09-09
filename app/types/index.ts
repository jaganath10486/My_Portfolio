export interface Bio {
  readonly name: string;
  readonly shortName: string;
  readonly roles: readonly string[];
  readonly description: string;
  /** Hero availability line and the contact block. Freelance-first. */
  readonly availability: string;
  readonly email: string;
  readonly github: string;
  readonly resume: string;
  readonly linkedin: string;
  readonly insta: string;
}

/**
 * The offer, not the CV. Each entry pairs a memorable claim with the shipped
 * work that backs it, so nothing here is a capability he cannot evidence.
 */
export interface Capability {
  /** Short, opinionated headline. The thing a client remembers. */
  readonly claim: string;
  readonly title: string;
  /** The shipped work that makes the claim credible. */
  readonly proof: string;
}

/**
 * Plain-language menu of deliverables, written for someone who is buying an
 * outcome rather than a stack. No framework names — a founder who needs
 * WhatsApp login should recognise it without knowing what Express is.
 */
export interface ServiceGroup {
  readonly title: string;
  readonly items: readonly string[];
}

/** How he works, each point anchored to something he actually built. */
export interface Principle {
  readonly title: string;
  readonly body: string;
}

export interface SkillGroup {
  readonly title: string;
  readonly skills: readonly string[];
}

export interface Experience {
  readonly id: number;
  readonly role: string;
  readonly company: string;
  readonly date: string;
  /** Present tense for the current role; drives the marker on the entry. */
  readonly current?: boolean;
  readonly highlights: readonly string[];
  readonly stack: readonly string[];
  /**
   * Early internships kept on the record but not rendered — they match what
   * the résumé itself omits, and a one-month PHP placement from 2021 dates the
   * profile rather than adding to it. Flip to render again.
   */
  readonly archived?: boolean;
}

export interface Education {
  readonly id: number;
  readonly school: string;
  readonly date: string;
  readonly grade: string;
  readonly degree: string;
  /** Only the degree that carries weight is rendered in full. */
  readonly primary?: boolean;
}

export type ProjectCategory = "web" | "android" | "ml" | "backend";

export interface Project {
  readonly slug: string;
  readonly title: string;
  /** One-line condensation, used in indexes and metadata. */
  readonly summary: string;
  readonly description: string;
  /**
   * The engineering problem worth talking about. Present only where there is a
   * real design decision to describe — never filled in for its own sake.
   */
  readonly hardPart?: string;
  /**
   * Real product screenshot under /public. Omitted where no genuine capture
   * exists; the layout is typographic rather than padded with stock imagery.
   */
  readonly image?: string;
  readonly stack: readonly string[];
  readonly category: ProjectCategory;
  readonly github: string;
  /** Live deployment. Omitted when the project is not deployed. */
  readonly webapp?: string;
  /** Rank on the home page. Lower is higher; absent means index-only. */
  readonly featured?: number;
  /**
   * Coursework and early side projects. Listed by name with a repo link, but
   * given no page of their own — a three-sentence CRUD app costs more
   * credibility than it earns.
   */
  readonly archived?: boolean;
}

export interface NavItem {
  readonly href: string;
  readonly label: string;
}
