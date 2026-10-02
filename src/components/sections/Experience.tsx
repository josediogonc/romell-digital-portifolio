import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experienceItems } from "@/content/profile";
import styles from "./Sections.module.css";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className={styles.section}>
      <Container>
        <div className={styles.content}>
          <SectionHeading
            eyebrow="Experience"
            id="experience-title"
            number="04"
            title="Commercial production and independent visual work."
          />
          <ol className={styles.experienceList}>
            {experienceItems.map((item) => (
              <li className={styles.experienceItem} key={`${item.company}-${item.role}`}>
                <p className={styles.experienceDates}>
                  <time>{item.start}</time>
                  <span aria-hidden="true">—</span>
                  <time>{item.end}</time>
                </p>
                <article className={styles.experienceBody}>
                  <h3 className={styles.experienceRole}>{item.role}</h3>
                  <p className={styles.experienceCompany}>{item.company}</p>
                  {item.employmentType || item.location ? (
                    <p className={styles.experienceMeta}>
                      {item.employmentType ? <span>{item.employmentType}</span> : null}
                      {item.employmentType && item.location ? <span aria-hidden="true">·</span> : null}
                      {item.location ? <span>{item.location}</span> : null}
                    </p>
                  ) : null}
                  <div className={styles.experienceDescription}>
                    {item.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
