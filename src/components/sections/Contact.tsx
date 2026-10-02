import { Container } from "@/components/ui/Container";
import { Arrow } from "@/components/ui/Arrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site";
import styles from "./Sections.module.css";

export function Contact() {
  const contactEmail = siteConfig.email.trim();

  return (
    <section id="contact" aria-labelledby="contact-title" className={`${styles.section} ${styles.contact}`}>
      <Container>
        <div className={styles.content}>
          <SectionHeading
            eyebrow="Contact"
            id="contact-title"
            number="05"
            title="Let's work together."
          />
          <div className={styles.contactBlock}>
            <p className={styles.availability}>
              Available for commercial productions, branded content and freelance crew work in San Diego and Southern California.
            </p>
            {contactEmail ? (
              <a className={styles.contactAction} href={`mailto:${contactEmail}`}>
                <span>Email Romell</span>
                <span className={styles.contactAddress}>{contactEmail}</span>
                <Arrow diagonal />
              </a>
            ) : (
              <div className={styles.contactPending} role="note">
                <span>Email Romell</span>
                <strong>Email address pending confirmation</strong>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
