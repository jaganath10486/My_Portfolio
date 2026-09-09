"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { navItems } from "@/data/navigation";

import styles from "./NavBar.module.css";

function isActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * The only client boundary in the chrome. It exists because active-route state
 * needs the pathname, which a Server Component cannot read.
 *
 * The mobile panel is a native <dialog> opened with showModal(), so the
 * platform supplies the focus trap and the inert background rather than those
 * being hand-rolled.
 */
export default function NavBar({
  enquiry,
  email,
}: {
  /** mailto with a prefilled subject — one tap from intent to a draft. */
  enquiry: string;
  email: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const openMenu = useCallback(() => {
    dialogRef.current?.showModal();
    // showModal() blocks interaction with the page but not scrolling.
    document.documentElement.style.overflow = "hidden";
    setOpen(true);
  }, []);

  /*
   * Every dismissal routes through here and does its own cleanup.
   *
   * The obvious implementation is to listen for the dialog's `close` event and
   * tidy up there, but that event proved unreliable in testing — it did not
   * fire even for a listener bound directly to the element — which left
   * `overflow: hidden` pinned on the document and aria-expanded stuck on true.
   * Owning the teardown here removes the dependency. It is idempotent, so the
   * safety-net listener below can also call it without consequence.
   */
  const closeMenu = useCallback(() => {
    dialogRef.current?.close();
    document.documentElement.style.overflow = "";
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Safety net for any dismissal path not covered above, plus an unmount guard
  // so a scroll lock can never outlive the component.
  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.addEventListener("close", closeMenu);
    return () => {
      dialog?.removeEventListener("close", closeMenu);
      document.documentElement.style.overflow = "";
    };
  }, [closeMenu]);

  return (
    <>
      <nav className={styles.desktop} aria-label="Primary">
        <ul className={styles.list}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={styles.navLink}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <a className={`btn btn-primary ${styles.cta}`} href={enquiry}>
          Start a project
        </a>
      </nav>

      <button
        type="button"
        ref={toggleRef}
        className={styles.toggle}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label="Open navigation menu"
        onClick={openMenu}
      >
        <MenuIcon />
      </button>

      <dialog
        ref={dialogRef}
        className={styles.panel}
        aria-label="Navigation"
        // Escape is intercepted rather than left to the platform, so the panel
        // is never dismissed without this component being told.
        onCancel={(event) => {
          event.preventDefault();
          closeMenu();
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            closeMenu();
          }
        }}
        onClick={(event) => {
          // Clicks land on the dialog element itself only when they hit the
          // backdrop; anything inside is caught by a child.
          if (event.target === dialogRef.current) closeMenu();
        }}
      >
        <div className={styles.panelInner}>
          <div className={styles.panelHead}>
            <button
              type="button"
              className={styles.close}
              onClick={closeMenu}
              aria-label="Close navigation menu"
            >
              <CloseIcon />
            </button>
          </div>

          <nav aria-label="Mobile">
            <ul className={styles.panelList}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={styles.panelLink}
                    // Dismiss on navigation. Done here rather than in an effect
                    // watching the pathname, which would cascade a render.
                    onClick={closeMenu}
                    aria-current={
                      isActive(pathname, item.href) ? "page" : undefined
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.panelFoot}>
            <a className={`btn btn-primary ${styles.panelCta}`} href={enquiry}>
              Start a project
            </a>
            <a className={`link ${styles.panelEmail}`} href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
