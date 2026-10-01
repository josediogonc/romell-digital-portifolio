import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./Sections.module.css";

type Capability = {
  title: string;
  description: string;
};

const capabilities: Capability[] = [
  {
    title: "Camera",
    description:
      "Camera operation, camera builds, lens changes, media handling and camera department support.",
  },
  {
    title: "Focus Pulling",
    description:
      "Camera support and focus pulling for productions that need a compact, adaptable camera team.",
  },
  {
    title: "Grip",
    description:
      "Lighting support, stands, modifiers, cable management, equipment handling and general grip responsibilities.",
  },
  {
    title: "Production Sound",
    description:
      "On-set audio recording, microphone setup, monitoring and production audio support.",
  },
  {
    title: "Swing / Production Support",
    description:
      "Flexible support across departments, helping crews move efficiently through setups, production changes and wrap.",
  },
];

export function Roles() {
  return (
    <section id="roles" aria-labelledby="roles-title" className={styles.section}>
      <Container>
        <div className={styles.content}>
          <SectionHeading
            id="roles-title"
            number="02"
            eyebrow="On Set"
            title="Versatile across the crew."
            description="I work across multiple departments depending on the needs of the production, supporting crews from setup through wrap."
          />
          <ol className={styles.capabilities}>
            {capabilities.map((capability, index) => (
              <li className={styles.capability} key={capability.title}>
                <span className={styles.capabilityNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.capabilityTitle}>{capability.title}</h3>
                <p className={styles.capabilityDescription}>{capability.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
