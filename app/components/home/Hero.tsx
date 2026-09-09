import Image from "next/image";
import Link from "next/link";

import StackList from "@/components/shared/StackList";
import { Bio, coreStack } from "@/data/constants";
import { headlineLines, mailto, positioning } from "@/lib/site";
import profilePic from "@/public/jaganath_profilepic.jpg";

import styles from "./Hero.module.css";

/**
 * The headline is the offer, not the name — a client scanning for someone to
 * build their checkout is not searching for a person they have never heard of.
 * The name sits above it, and carries the page in <title> and the JSON-LD.
 *
 * Every figure in the ledger comes from data/constants.ts. The employer is not
 * named here; the ledger is attributed to a period instead.
 */
const ledger = [
  {
    figure: "20,000+",
    detail:
      "ticket scans validated in real time at the Ilaiyaraaja concert, with zero duplicate entries under peak load",
  },
  {
    figure: "500+",
    detail:
      "event organizers paid out automatically from payment webhooks, removing 90% of a finance team's manual work",
  },
  {
    figure: "15 → 8 min",
    detail:
      "to publish an event, after a streamed Gemini service replaced writing every description and cover by hand",
  },
  {
    figure: "60 → 90",
    detail:
      "Lighthouse, alongside a threefold cut in First Contentful Paint through SSR, caching and lazy loading",
  },
];

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className="shell">
        <div className={styles.rail}>
          <div className={styles.grid}>
            <Image
              className={styles.portrait}
              src={profilePic}
              alt={`Portrait of ${Bio.name}`}
              sizes="(max-width: 899px) 88px, 200px"
              placeholder="blur"
              priority
            />

            <p className={styles.byline}>
              <span className={styles.name}>{Bio.name}</span>
              <span className={styles.availability}>
                <span className={styles.dot} aria-hidden="true" />
                {Bio.availability}
              </span>
            </p>

            <h1 id="hero-heading" className={styles.headline}>
              {headlineLines.map((line, index) => (
                <span className={styles.line} key={line}>
                  {line}
                  {/* Keeps the accessible name a sentence, not one long word. */}
                  {index < headlineLines.length - 1 ? " " : ""}
                </span>
              ))}
            </h1>

            <p className={`lead ${styles.lead}`}>{positioning}</p>

            <div className={styles.ctas}>
              <a className="btn btn-primary" href={mailto}>
                Start a project
              </a>
              <Link className="btn btn-ghost" href="/work">
                See the work
              </Link>
            </div>
          </div>

          {/* The stack a client is scanning for, on the first screen. */}
          <div className={styles.stackStrip}>
            <StackList
              items={coreStack}
              label="Core technologies"
              size="small"
            />
          </div>

          <div className={styles.ledgerWrap}>
            <h2 className={`meta ${styles.ledgerTitle}`} id="ledger-heading">
              Shipped in production since April 2024
            </h2>
            <ul className={styles.ledger} aria-labelledby="ledger-heading">
              {ledger.map((entry) => (
                <li className={styles.ledgerRow} key={entry.figure}>
                  <span className={styles.figure}>{entry.figure}</span>
                  <span className={styles.detail}>{entry.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
