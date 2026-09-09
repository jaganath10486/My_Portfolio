import type { ReactNode } from "react";

/**
 * A page section sitting on the signal rail. Keeps the shell/rail/heading
 * relationship in one place so every section on every route lines up on the
 * same hairline.
 */
export default function Band({
  id,
  labelledBy,
  flush = false,
  children,
}: {
  id?: string;
  labelledBy?: string;
  /** Drops the top border — for the first band under the hero. */
  flush?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`band${flush ? " band-flush" : ""}`}
    >
      <div className="shell">
        <div className="railed">{children}</div>
      </div>
    </section>
  );
}
