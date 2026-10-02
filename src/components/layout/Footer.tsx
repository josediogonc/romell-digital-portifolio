import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Arrow } from "@/components/ui/Arrow";
import { siteConfig } from "@/content/site";
import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = siteConfig.socials.filter((social) => social.url.trim());

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.primary}>
          <div className={styles.identity}>
            <Link className={styles.brand} href="/">{siteConfig.name}</Link>
            <p className={styles.role}>{siteConfig.role}</p>
            <p className={styles.location}>{siteConfig.location}</p>
          </div>
          <nav aria-label="Footer navigation" className={styles.navigation}>
            {siteConfig.navigation.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
          </nav>
          {socialLinks.length ? (
            <nav className={styles.socials} aria-label="Social links">
              {socialLinks.map((social) => (
                <a href={social.url} key={social.label} rel="noreferrer" target="_blank">
                  {social.label}
                </a>
              ))}
            </nav>
          ) : null}
        </div>
        <div className={styles.secondary}>
          <p>© {currentYear} {siteConfig.name}</p>
          <a className={styles.backToTop} href="#top">
            Back to top <Arrow diagonal />
          </a>
        </div>
      </Container>
    </footer>
  );
}
