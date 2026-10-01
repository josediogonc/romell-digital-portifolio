import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./Sections.module.css";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className={styles.section}>
      <Container>
        <div className={styles.content}>
          <SectionHeading id="about-title" number="03" title="About Me" />
          <div className={styles.reserved}><p className={styles.placeholderCopy}>More about the person behind the camera. Coming soon.</p></div>
        </div>
      </Container>
    </section>
  );
}
