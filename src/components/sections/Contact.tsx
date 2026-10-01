import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./Sections.module.css";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className={`${styles.section} ${styles.contact}`}>
      <Container>
        <div className={styles.content}>
          <SectionHeading id="contact-title" number="05" title="Contact" />
          <p className={styles.closing}>Let’s make something move.</p>
          <div className={styles.contactDetails}>
            <p className={styles.availability}>Available for commercial productions, branded content and freelance crew work in San Diego and Southern California.</p>
            <p className={styles.placeholderLabel}>Contact details coming soon</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
