import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Arrow } from "@/components/ui/Arrow";
import { siteConfig } from "@/content/site";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header} id="top">
      <Container className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Romell Tabosa — back to home">
          ROMELL<span aria-hidden="true">®</span>
        </Link>
        <nav aria-label="Main navigation" className={styles.navigation}>
          {siteConfig.navigation.map(({ href, label }) => (
            <Link href={href} key={href}>
              {label}
              {href === "/#contact" ? <Arrow diagonal /> : null}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
