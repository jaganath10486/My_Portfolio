import type { NavItem } from "@/types";

/**
 * Real routes rather than section anchors. Contact stays a closing block on
 * every page — the offer converts better inside the narrative than behind a
 * click, and it is one email address.
 */
export const navItems: readonly NavItem[] = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];
