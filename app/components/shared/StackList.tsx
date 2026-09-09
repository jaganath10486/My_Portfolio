import styles from "./StackList.module.css";

/**
 * Hairline tags rather than filled chips: the stack is reference data, so it
 * gets an index treatment instead of competing with the headline. The list
 * wraps rather than truncating, so no technology is ever hidden behind a "+n".
 */
export default function StackList({
  items,
  label,
  size = "default",
}: {
  items: readonly string[];
  /** Accessible name for the list, e.g. "Stack for SentinelAI Gateway". */
  label: string;
  size?: "default" | "small";
}) {
  if (items.length === 0) return null;

  return (
    <ul
      className={`${styles.list} ${size === "small" ? styles.small : ""}`}
      aria-label={label}
    >
      {items.map((item) => (
        <li className={styles.item} key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
