import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import type { PortfolioProject } from "@/content/projects";
import styles from "./ProjectPreview.module.css";

type ProjectPreviewProps = {
  className?: string;
  href?: string;
  index: string;
  project: PortfolioProject;
  variant: "portrait" | "wide";
};

export function ProjectPreview({
  className,
  href,
  index,
  project,
  variant,
}: ProjectPreviewProps) {
  const cover = project.cover;
  const coverAlt = project.coverAlt;
  const hasCredits = Boolean(project.client || project.productionCompany);
  const classes = [styles.project, styles[variant], className].filter(Boolean).join(" ");

  const content = (
    <div className={styles.preview}>
      <div className={styles.media}>
        {cover && coverAlt ? (
          <Image
            alt={coverAlt}
            className={styles.image}
            fill
            sizes={variant === "wide" ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 768px) 34vw, 100vw"}
            src={cover}
          />
        ) : (
          <div className={styles.mediaPlaceholder} aria-hidden="true">
            <span>Temporary media</span>
            <strong>Verified cover pending</strong>
          </div>
        )}
        <span className={styles.mediaIndex} aria-hidden="true">
          Frame {index}
        </span>
      </div>

      <div className={styles.details}>
        <p className={styles.metadata}>
          {project.category} <span>·</span> {project.year}
        </p>
        <div className={styles.titleRow}>
          <h3>{project.title}</h3>
          {href ? <Arrow diagonal /> : null}
        </div>
        <p className={styles.roles}>{project.roles.join(" · ")}</p>

        {hasCredits ? (
          <dl className={styles.credits}>
            {project.client ? (
              <div>
                <dt>Client</dt>
                <dd>{project.client}</dd>
              </div>
            ) : null}
            {project.productionCompany ? (
              <div>
                <dt>Production</dt>
                <dd>{project.productionCompany}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}
      </div>
    </div>
  );

  return (
    <article className={classes}>
      {href ? (
        <Link aria-label={`View ${project.title}`} className={styles.link} href={href}>
          {content}
        </Link>
      ) : (
        content
      )}
    </article>
  );
}
