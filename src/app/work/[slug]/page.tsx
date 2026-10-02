import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Arrow } from "@/components/ui/Arrow";
import { Container } from "@/components/ui/Container";
import { ProjectMedia } from "@/components/work/ProjectMedia";
import {
  getNextPublishedProject,
  getPublishedProject,
  publishedProjects,
} from "@/content/projects";
import styles from "./ProjectPage.module.css";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publishedProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPublishedProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} — Romell Tabosa`,
    description: project.summary ?? project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPublishedProject(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextPublishedProject(project.slug);
  const hasOverview = Boolean(project.summary || project.description);

  return (
    <>
      <Header />
      <main id="main" className={styles.main}>
        <Container>
          <header className={styles.projectHeader}>
            <p className={styles.eyebrow}>
              {project.category} <span>·</span> {project.year}
            </p>
            <h1>{project.title}</h1>
            <p className={styles.roles}>{project.roles.join(" · ")}</p>

            {project.client || project.productionCompany ? (
              <dl className={styles.productionDetails}>
                {project.client ? (
                  <div><dt>Client</dt><dd>{project.client}</dd></div>
                ) : null}
                {project.productionCompany ? (
                  <div><dt>Production</dt><dd>{project.productionCompany}</dd></div>
                ) : null}
              </dl>
            ) : null}

            {project.externalUrl ? (
              <a className={styles.externalLink} href={project.externalUrl} rel="noreferrer" target="_blank">
                View project <Arrow diagonal />
              </a>
            ) : null}
          </header>

          {project.heroMedia ? (
            <div className={styles.heroMedia}>
              <ProjectMedia
                fallbackTitle={`${project.title} featured media`}
                media={project.heroMedia}
                priority
                sizes="(min-width: 1440px) 1280px, (min-width: 480px) calc(100vw - 2.5rem), calc(100vw - 2rem)"
              />
            </div>
          ) : null}

          {hasOverview ? (
            <section className={styles.editorialSection} aria-labelledby="project-overview-title">
              <h2 className={styles.sectionLabel} id="project-overview-title">About the project</h2>
              <div className={styles.copy}>
                {project.summary ? <p className={styles.summary}>{project.summary}</p> : null}
                {project.description ? <p>{project.description}</p> : null}
              </div>
            </section>
          ) : null}

          {project.responsibilities?.length ? (
            <section className={styles.editorialSection} aria-labelledby="project-role-title">
              <h2 className={styles.sectionLabel} id="project-role-title">On this production</h2>
              <ul className={styles.responsibilities}>
                {project.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.gallery?.length ? (
            <section className={styles.gallerySection} aria-labelledby="project-gallery-title">
              <h2 className={styles.sectionLabel} id="project-gallery-title">Project media</h2>
              <div className={styles.gallery}>
                {project.gallery.map((media, index) => (
                  <div className={styles.galleryItem} key={`${media.src}-${index}`}>
                    <ProjectMedia
                      fallbackTitle={`${project.title} media ${index + 1}`}
                      media={media}
                      sizes="(min-width: 1024px) 60vw, (min-width: 480px) calc(100vw - 2.5rem), calc(100vw - 2rem)"
                    />
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {project.credits?.length ? (
            <section className={styles.creditsSection} aria-labelledby="project-credits-title">
              <h2 className={styles.sectionLabel} id="project-credits-title">Credits</h2>
              <dl className={styles.credits}>
                {project.credits.map((credit) => (
                  <div key={`${credit.label}-${credit.value}`}>
                    <dt>{credit.label}</dt>
                    <dd>{credit.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          <nav aria-label="Project navigation" className={styles.projectNavigation}>
            <Link href="/#work">← Back to work</Link>
            {nextProject ? (
              <Link href={`/work/${nextProject.slug}`}>Next project <Arrow /></Link>
            ) : null}
          </nav>
        </Container>
      </main>
      <Footer />
    </>
  );
}
