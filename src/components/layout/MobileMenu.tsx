"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { SiteNavigationItem } from "@/content/site";
import styles from "./Header.module.css";

export function MobileMenu({ items }: { items: readonly SiteNavigationItem[] }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        aria-controls="mobile-navigation"
        aria-expanded={open}
        className={styles.menuToggle}
        onClick={() => setOpen((current) => !current)}
        ref={toggleRef}
        type="button"
      >
        {open ? "CLOSE" : "MENU"}
      </button>
      <nav
        aria-label="Mobile navigation"
        className={styles.mobileNavigation}
        hidden={!open}
        id="mobile-navigation"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpen(false);
            toggleRef.current?.focus();
          }
        }}
      >
        {items.map(({ href, label }) => (
          <Link href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>
    </>
  );
}
