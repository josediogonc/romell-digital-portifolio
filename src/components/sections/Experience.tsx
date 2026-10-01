import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./Sections.module.css";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className={styles.section}>
      <Container>
        <div className={styles.content}>
          <SectionHeading id="experience-title" number="04" title="Experience" />
          <div className={styles.reserved}><p className={styles.placeholderCopy}>Production experience and selected credits. Coming soon.</p></div>
        </div>
      </Container>
    </section>
  );
}
