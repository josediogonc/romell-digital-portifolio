import { Container } from "@/components/ui/Container";
import { Arrow } from "@/components/ui/Arrow";
import styles from "./Header.module.css";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className={styles.header} id="top">
      <Container className={styles.inner}>
        <a href="#top" className={styles.brand} aria-label="Romell — back to top">ROMELL<span aria-hidden="true">®</span></a>
        <nav aria-label="Main navigation" className={styles.navigation}>
          {links.map(({ href, label }) => <a href={href} key={href}>{label}{href === "#contact" && <Arrow diagonal />}</a>)}
        </nav>
      </Container>
    </header>
  );
}
