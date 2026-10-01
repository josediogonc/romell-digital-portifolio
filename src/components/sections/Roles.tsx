import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./Sections.module.css";

export function Roles() {
  return (
    <section id="roles" aria-labelledby="roles-title" className={styles.section}>
      <Container>
        <div className={styles.content}>
          <SectionHeading id="roles-title" number="02" title="On Set" description="I work across multiple departments depending on the needs of the production, supporting crews from setup through wrap." />
          <ul className={styles.roles}>{["Camera", "Grip", "Audio", "Focus Pulling", "On-Set Support"].map((role) => <li key={role}>{role}</li>)}</ul>
        </div>
      </Container>
    </section>
  );
}
