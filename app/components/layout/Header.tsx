import Link from "next/link";

import NavBar from "@/components/layout/NavBar";
import { Bio } from "@/data/constants";
import { mailto } from "@/lib/site";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`shell ${styles.inner}`}>
        <Link href="/" className={styles.mark}>
          {/* The rail junction, reused as the wordmark so the mark belongs to
              the same system as the page structure. */}
          <span className={styles.diamond} aria-hidden="true" />
          <span className={styles.markText}>{Bio.name}</span>
        </Link>

        <NavBar enquiry={mailto} email={Bio.email} />
      </div>
    </header>
  );
}
