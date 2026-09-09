"use client";

import { useEffect, useRef, useState } from "react";

import { CheckIcon, ContentCopyIcon } from "@/components/ui/Icons";

import styles from "./CopyEmailButton.module.css";

/**
 * Client boundary for the clipboard call only — the address beside it is
 * server rendered and remains a working mailto link if this never hydrates.
 */
export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Clipboard access can be denied or unavailable outside a secure
      // context. The address is displayed in full alongside, so there is
      // nothing to recover from.
      return;
    }
    setCopied(true);
    if (timeout.current) clearTimeout(timeout.current);
    // Replacing the pending timeout means rapid clicks settle on one final
    // state rather than racing each other back to "not copied".
    timeout.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span className={styles.wrap}>
      <button
        type="button"
        className={styles.button}
        onClick={handleCopy}
        aria-label={`Copy email address ${email}`}
      >
        {copied ? <CheckIcon /> : <ContentCopyIcon />}
        <span className={styles.label}>{copied ? "Copied" : "Copy"}</span>
      </button>
      {/* Announced politely without moving focus. */}
      <span className="sr-only" role="status">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </span>
  );
}
