import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Arrow } from "@/components/ui/Arrow";
import styles from "./Header.module.css";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className={styles.header} id="top">
      <Container className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Romell — back to home">ROMELL<span aria-hidden="true">®</span></Link>
        <nav aria-label="Main navigation" className={styles.navigation}>
          {links.map(({ href, label }) => <Link href={href} key={href}>{label}{href === "/#contact" && <Arrow diagonal />}</Link>)}
        </nav>
      </Container>
    </header>
  );
}
