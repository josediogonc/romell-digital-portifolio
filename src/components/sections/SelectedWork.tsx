import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./Sections.module.css";

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-title" className={styles.section}>
      <Container>
        <div className={styles.content}>
          <SectionHeading id="work-title" number="01" title="Selected Work" description="Commercial productions, branded content, surf photography and independent visual projects." />
          <div className={styles.workPlaceholder}>
            <span className={styles.placeholderLabel}>Selected projects</span>
            <p className={styles.placeholderCopy}>A selection of work is coming soon.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
