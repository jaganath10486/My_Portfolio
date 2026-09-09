import CopyEmailButton from "@/components/client/CopyEmailButton";
import Band from "@/components/shared/Band";
import { Bio } from "@/data/constants";
import { mailto } from "@/lib/site";

import styles from "./ContactBlock.module.css";

/**
 * The closing band on every route, and the one place the site asks for
 * something. It tells a visitor what to send rather than only where to send it
 * — "get in touch" with a bare address puts the work of starting on them, which
 * is the easiest way to lose an enquiry that was already half-written.
 *
 * The résumé sits here as a quiet text link. It used to be a primary button in
 * the header, the hero and this block, which read as looking for a job.
 */
export default function ContactBlock() {
  return (
    <Band id="contact" labelledBy="contact-heading">
      <h2 id="contact-heading" className="h2">
        Start a project
      </h2>
      <p className={`prose ${styles.intro}`}>
        {Bio.availability}. Tell me what you are building and where it currently
        hurts — a paragraph is plenty. Rough ideas are fine; so is an existing
        codebase somebody else started.
      </p>

      <div className={styles.emailRow}>
        <a className={styles.email} href={mailto}>
          {Bio.email}
        </a>
        <CopyEmailButton email={Bio.email} />
      </div>

      <div className={styles.actions}>
        <a className="btn btn-primary" href={mailto}>
          Email me
        </a>
        <a
          className="btn btn-ghost"
          href={Bio.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn<span className="sr-only"> profile (opens in a new tab)</span>
        </a>
        <a
          className="btn btn-ghost"
          href={Bio.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub<span className="sr-only"> profile (opens in a new tab)</span>
        </a>
      </div>

      <p className={styles.aside}>
        Hiring for a full-time role instead?{" "}
        <a
          className="link link-inline"
          href={Bio.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          My résumé
        </a>
        <span className="sr-only"> (opens in a new tab)</span>.
      </p>
    </Band>
  );
}
