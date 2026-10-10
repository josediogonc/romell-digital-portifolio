import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { YouTubePreview } from "@/components/work/YouTubePreview";
import {
  cameraProjects,
  gripGalleryRows,
  surfGalleryRows,
  videoProductionProjects,
  workCategories,
  type VideoWorkProject,
} from "@/content/work";
import styles from "./Sections.module.css";

function ProjectSlots({
  count,
  featured,
  projects,
}: {
  count: number;
  featured: boolean;
  projects?: readonly VideoWorkProject[];
}) {
  return (
    <ol
      className={`${styles.workGrid} ${featured ? styles.workGridFeatured : ""}`}
      aria-label={`${count} selected project spaces`}
    >
      {Array.from({ length: count }, (_, index) => {
        const project = projects?.[index];

        return (
          <li
            className={`${styles.projectItem} ${project && project.videos.length > 1 ? styles.projectCampaign : ""}`}
            key={index}
          >
            {project ? (
              <article className={styles.videoProject}>
                {project.videos.length === 1 ? (
                  <YouTubePreview
                    title={project.videos[0].label}
                    videoId={project.videos[0].youtubeId}
                    orientation={project.videos[0].orientation}
                  />
                ) : (
                  <div className={styles.campaignVideoGrid}>
                    {project.videos.map((video) => (
                      <div className={styles.campaignVideo} key={video.youtubeId}>
                        <YouTubePreview
                          title={video.label}
                          videoId={video.youtubeId}
                          orientation={video.orientation}
                        />
                        <p className={styles.campaignVideoLabel}>{video.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                <div className={styles.videoProjectDetails}>
                  <h3 className={styles.videoProjectTitle}>{project.title}</h3>
                  <p className={styles.videoProjectRole}>{project.role}</p>
                  <p className={styles.videoProjectProduction}>{project.production}</p>
                </div>
              </article>
            ) : (
              <div className={styles.projectSlot}>
                <span>Selected project pending</span>
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}

function VideoProductionProjects() {
  return (
    <ol className={`${styles.workGrid} ${styles.videoProductionGrid}`}>
      {videoProductionProjects.map((project) => (
        <li className={styles.projectItem} key={project.youtubeId}>
          <article className={styles.videoProject}>
            <YouTubePreview
              title={project.title}
              videoId={project.youtubeId}
              orientation={project.orientation}
            />
            <div className={styles.videoProjectDetails}>
              <h3 className={styles.videoProjectTitle}>{project.title}</h3>
              <p className={styles.videoProjectRole}>{project.credit}</p>
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}

function GripGallery() {
  return (
    <div aria-label="Behind-the-scenes gallery" className={styles.gripGallery} role="group">
      {gripGalleryRows.map((row, index) => (
        <div
          className={`${styles.gripGalleryRow} ${row.length === 3 ? styles.gripGalleryRowThree : row.length === 2 ? styles.gripGalleryRowTwo : ""}`}
          key={index}
        >
          {row.map((media) => (
            <div className={styles.gripGalleryMedia} key={media.src}>
              {media.kind === "image" ? (
                <Image
                  alt={media.alt}
                  className={styles.gripGalleryImage}
                  height={media.height}
                  sizes={row.length === 3 ? "(min-width: 768px) 30vw, 100vw" : row.length === 2 ? "(min-width: 768px) 45vw, 100vw" : "(min-width: 1440px) 1280px, 100vw"}
                  src={media.src}
                  width={media.width}
                />
              ) : (
                <video
                  aria-label={media.label}
                  autoPlay
                  className={`${styles.gripGalleryVideo} ${media.orientation === "portrait" ? styles.gripGalleryVideoPortrait : ""}`}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={media.src} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function SurfGallery() {
  return (
    <div aria-label="Surf photography gallery" className={styles.surfGallery} role="group">
      {surfGalleryRows.map((row, index) => (
        <div
          className={`${styles.surfGalleryRow} ${row.length === 2 ? styles.surfGalleryPair : ""}`}
          key={index}
        >
          {row.map((photo) => (
            <Image
              alt={photo.alt}
              className={styles.surfGalleryImage}
              height={photo.height}
              key={photo.src}
              sizes={row.length === 2 ? "(min-width: 768px) 45vw, 100vw" : "(min-width: 1440px) 1280px, 100vw"}
              src={photo.src}
              width={photo.width}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function SelectedWork() {
  return (
    <section id="work" aria-label="Work" className={styles.section}>
      <Container>
        {workCategories.filter((category) => !category.hidden).map((category) => (
          <section
            aria-labelledby={`${category.id}-title`}
            className={styles.workCategory}
            id={category.id}
            key={category.id}
          >
            <SectionHeading
              id={`${category.id}-title`}
              number={category.number}
              eyebrow={category.number === "01" ? "Work" : undefined}
              title={category.title}
              description={category.introduction}
            />
            {category.kind === "projects" ? (
              category.id === "video-production" ? (
                <VideoProductionProjects />
              ) : (
                <ProjectSlots
                  count={category.slots}
                  featured={category.layout === "featured"}
                  projects={category.id === "camera" ? cameraProjects : undefined}
                />
              )
            ) : null}
            {category.kind === "bts-gallery" ? (
              <GripGallery />
            ) : null}
            {category.kind === "surf-gallery" ? (
              <SurfGallery />
            ) : null}
          </section>
        ))}
      </Container>
    </section>
  );
}
