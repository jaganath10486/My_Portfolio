import Link from "next/link";

import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { Bio } from "@/data/constants";
import { navItems } from "@/data/navigation";
import { mailto } from "@/lib/site";

import styles from "./Footer.module.css";

/*
 * LinkedIn and GitHub only. A personal Instagram is a fine thing to have and a
 * neutral-to-negative signal on a page whose job is winning client work — it
 * invites a stranger evaluating you professionally to go and browse your
 * weekend. `Bio.insta` is still in the data if it should come back.
 */
const socials = [
  { href: Bio.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: Bio.github, label: "GitHub", Icon: GitHubIcon },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        <div className={styles.brand}>
          <p className={styles.handle}>snjnr@10486</p>
          <p className="meta">{Bio.name}</p>
        </div>

        <nav className={styles.nav} aria-label="Footer">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="link" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a className="link" href={mailto}>
                Email
              </a>
            </li>
          </ul>
        </nav>

        <ul className={styles.socials}>
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                className={styles.social}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${Bio.name} on ${label} (opens in a new tab)`}
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>

        <p className={`meta ${styles.colophon}`}>
          © {new Date().getFullYear()} {Bio.name}. Built with Next.js, no UI
          framework.
        </p>
      </div>
    </footer>
  );
}
