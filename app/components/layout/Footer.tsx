import Link from "next/link";

import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { Bio } from "@/data/constants";
import { navItems } from "@/data/navigation";
import { mailto, whatsappUrl } from "@/lib/site";

import styles from "./Footer.module.css";

/*
 * WhatsApp, LinkedIn and GitHub. A personal Instagram is a fine thing to have
 * and a neutral-to-negative signal on a page whose job is winning client work
 * — it invites a stranger evaluating you professionally to go and browse your
 * weekend. `Bio.insta` is still in the data if it should come back.
 *
 * WhatsApp leads because it is the only one of the three that starts a
 * conversation instead of opening a profile.
 */
const socials = [
  { href: whatsappUrl, label: "WhatsApp", Icon: WhatsAppIcon },
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
                aria-label={`${Bio.name} on ${label}`}
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>

        <p className={`meta ${styles.colophon}`}>
          © {new Date().getFullYear()} {Bio.name}.
        </p>
      </div>
    </footer>
  );
}
