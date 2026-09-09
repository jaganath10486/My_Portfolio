"use client";

import { useEffect } from "react";

import styles from "./status.module.css";

/**
 * Route-level error boundary. The message is intentionally generic: the digest
 * is enough to correlate with server logs without exposing internals.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styles.container} id="main">
      <h1 className={styles.heading}>Something went wrong</h1>
      <p className={styles.body}>
        An unexpected error stopped this page from loading. Trying again usually
        helps.
      </p>
      {error.digest && <p className={styles.digest}>Reference: {error.digest}</p>}
      <button className={`btn btn-primary ${styles.action}`} type="button" onClick={reset}>
        Try again
      </button>
    </main>
  );
}
