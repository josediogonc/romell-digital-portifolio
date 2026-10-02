import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectPreview } from "@/components/work/ProjectPreview";
import { portfolioProjects } from "@/content/projects";
import styles from "./Sections.module.css";

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-title" className={styles.section}>
      <Container>
        <div className={styles.content}>
          <SectionHeading
            id="work-title"
            number="01"
            eyebrow="Selected Work"
            title="Work behind the camera — and around the set."
            description="Commercial productions, branded content, surf photography and independent visual projects."
          />
          <div className={styles.workGrid}>
            {portfolioProjects.map((project, index) => (
              <ProjectPreview
                className={styles.projectItem}
                href={project.status === "published" ? `/work/${project.slug}` : undefined}
                index={String(index + 1).padStart(2, "0")}
                key={project.slug}
                project={project}
                variant={project.featured || index === 3 ? "wide" : "portrait"}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
