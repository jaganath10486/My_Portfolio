import type { Metadata } from "next";
import Link from "next/link";

import styles from "./status.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className={styles.container} id="main">
      <p className={styles.code}>404</p>
      <h1 className={styles.heading}>This page doesn&apos;t exist</h1>
      <p className={styles.body}>
        The page you were looking for may have been moved or removed.
      </p>
      <Link className={`btn btn-primary ${styles.action}`} href="/">
        Back to the portfolio
      </Link>
    </main>
  );
}
